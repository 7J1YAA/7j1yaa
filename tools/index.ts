const path = require("node:path");
import { readdir } from "node:fs/promises";

var links = {};
var images = {};

// render the metadata as frontmatter
function frontmatter(metadata: any): string {
  let result = "---\n";
  for (const key in metadata) {
    result += `${key}: ${metadata[key]}\n`;
  }
  result += "---\n";
  return result;
}

// use HTMLrewriter to remove header and footer from an HTML string
// remove any header, footer or nav elements
// remove any divs with class header, footer or nav
// return the resulting string
function getModifiedBody(html: string): string {
  const metadata = {title: ""};
  let containerCount = 0;
  let inA = false;
  let thumbs = [];
  const rewriter = new HTMLRewriter()
    .on("*", {
      element(element) {
        if (element.tagName !== "a") {
          inA = false;
        }
      }
    })
    .on("a", {
      element(element) {
        console.log("processing a", element.getAttribute('href'));
        // if it is a local link:
        //   if it ends with index.html, strip it off
        //   else replace the ".html" with "/"
        let href = element.getAttribute("href");
        if (href && !href.startsWith("http")) {
          if (href.endsWith("index.html")) {
            href = href.replace(/index.html$/, "");
            element.setAttribute("href", href);
          } else {
            href = href.replace(/\.html$/, "/");
            element.setAttribute("href", href);
          }
        }
        if (href && (href.endsWith(".jpg") || href.endsWith(".JPG"))) {
          element.setAttribute("data-thumb", thumbs.length-1);
          thumbs.push({});
        }
        links[href] = true;
        inA = true;
      }
    })
    .on("img", {
      element(element) {
        const src = element.getAttribute("src");
        if (src) {
          images[src] = true;
        }
        // if there is a width or height attribute, save it in the thumbs array
        if (inA) {
          const thumb = thumbs[thumbs.length-1];
          const width = element.getAttribute("width");
          const height = element.getAttribute("height");
          if (width) {
            thumb.width = width;
          }
          if (height) {
            thumb.height = height;
          }
        }
      }
    })
    .on("title", {
      text(text) {
        metadata.title += text.text;
      }
    })
    .on('meta[name="description"]', {
      element(element) {
        metadata.description = element.getAttribute("content").replace(/\n/g, " ");
      }
    })
    .on('meta[name="keywords"]', {
      element(element) {
        metadata.keywords = element.getAttribute("content");
      }
    })
    .on("header, footer, nav, div.navbar", {
      element(element) {
        element.remove();
      }
    })
    .on("div.container", {
      element(element) {
        containerCount++;
        if (containerCount === 2) {
          element.removeAndKeepContent();
        }
      }
    })
    .on("head", {
      element(element) {
        element.remove();
      }
    })
    .on("body, html", {
      element(element) {
        element.removeAndKeepContent();
      }
    });

  let result = rewriter.transform(html)
  // check if the "Last modified: (.*)" appears anywhere in
  // the result string, and if so, extract that mached group
  const m = result.match(/Last modified: (.*)/i);
  if (m && m[1]) {
    metadata.date = m[1].trim();
  }
  console.dir(links);
  console.dir(images);
  console.log("----thumbs----");
  console.dir(thumbs);
  result = frontmatter(metadata) + result.replace(/<!DOCTYPE[^>]*>\s*/, "");
  return result;
}

/*
const file = Bun.file(path);
const html = await file.text();

let metadata, modifiedBodyContent = await getModifiedBody(html);
console.log(modifiedBodyContent);
console.dir(metadata);
*/

const inputDir = "/home/jim/src/qsl.net/7j1yaa";
const outputDir = "/home/jim/src/hugo/7j1yaa/content";
// for all files in the input directory (recursively)
// if the file is html, read the file, modify the body content
//   if the file was named index.html then
//     write the metadata as frontmatter and then modified content to index.html
//   otherwise, create a directory with the same name as the file (without the extension)
//     and write metadata as frontmatter and then the modified content to index.html in that directory
// otherwise, copy the file to the output directory
const entries = await readdir(inputDir, {recursive: true, withFileTypes: true});
console.dir(entries);
for await (const entry of entries) {
  const inputPath = path.join(entry.path, entry.name);
  const outputPath = path.join(outputDir, entry.path.replace(inputDir, ""), entry.name);
  console.log(`in:  ${inputPath}\nout: ${outputPath}`);
  if (entry.isFile()) {
    if (entry.name.endsWith(".html")) {
      let html = await Bun.file(inputPath).text();
      html = await getModifiedBody(html);
      if (entry.name === "index.html") {
        await Bun.write(outputPath, html);
      } else {
        // create a directory with the same name as the file (without the extension)
        const outputDir = outputPath.replace(/\.html$/, "");
        await Bun.write(path.join(outputDir, "index.html"), html);
      }
    } else {
      console.log(`copying ${inputPath} to ${outputPath}`);
      const inFile = Bun.file(inputPath);
      const outFile = Bun.file(outputPath);
      await Bun.write(outFile, inFile);
    }
  }
}
