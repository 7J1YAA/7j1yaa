import { HTMLRewriter } from "https://deno.land/x/html_rewriter@v0.1.0/html_rewriter.ts";

// Function to extract and modify body content
async function getModifiedBody(html) {
  let bodyContent = "";

  const rewriter = new HTMLRewriter()
    .on("nav", { element: (element) => element.remove() })
    .on("footer", { element: (element) => element.remove() })
    .on("*", {
      element(element) {
        if (element.classList.contains("footer")) {
          element.remove();
        }
      },
    })
    .on("body", {
      text(text) {
        bodyContent += text.text;
      },
      element(element) {
        bodyContent += element.outerHTML; // Include the element itself
      },
    });

  await rewriter.write(new TextEncoder().encode(html));
  return bodyContent;
}

// Example usage
const html = `
<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
</head>
<body>
  <nav>...</nav>
  <div class="footer">...</div>
  <h1>Hello, world!</h1>
  <p>This is some content.</p>
  <footer>...</footer>
</body>
</html>
`;

const modifiedBodyContent = await getModifiedBody(html);
console.log(modifiedBodyContent);
