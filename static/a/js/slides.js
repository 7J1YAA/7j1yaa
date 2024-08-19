$(function() {
  var photos = [
    ["/7j1yaa/tiara/1992/Yokota-1992.jpg", "1992 Breakfast at Yokota AFB"],
    [
      "/7j1yaa/tiara/1996/TIARA-Christmas-Party-1996-thumb.jpg",
      "1996 Christmas Party"
    ],
    [
      "/7j1yaa/tiara/1996/TIARA-Christmas-Party-with-Santa-1996-thumb.jpg",
      "1996 Christmas Party"
    ],
    ["/7j1yaa/tiara/1998x/jarljps.jpg", "1998 Christmas Party"],
    ["/7j1yaa/tiara/1998x/photo1s.jpg", "1998 Christmas Party"],
    ["/7j1yaa/tiara/1998x/photo2s.jpg", "1998 Christmas Party"],
    ["/7j1yaa/tiara/1998x/photo3s.jpg", "1998 Christmas Party"],
    ["/7j1yaa/tiara/1998x/photo4s.jpg", "1998 Christmas Party"],
    ["/7j1yaa/tiara/1998x/photo8s.jpg", "1998 Christmas Party"],
    ["/7j1yaa/tiara/1998x/photo9s.jpg", "1998 Christmas Party"],
    ["/7j1yaa/tiara/1998x/tiara1s.jpg", "1998 Christmas Party"],
    ["/7j1yaa/tiara/1998x/tiara10s.jpg", "1998 Christmas Party"],
    ["/7j1yaa/tiara/1999x/tiara-christmas-1999s.jpg", "1999 Christmas Party"],
    ["/7j1yaa/tiara/1999x/tiara-kanpai-1999s.jpg", "1999 Christmas Party"],
    ["/7j1yaa/tiara/2000x/thm_0019.jpg", "2000 Christmas Party"],
    ["/7j1yaa/tiara/2000x/thm_0020.jpg", "2000 Christmas Party"],
    ["/7j1yaa/tiara/2000x/thm_0021.jpg", "2000 Christmas Party"],
    ["/7j1yaa/tiara/2000x/thm_0022.jpg", "2000 Christmas Party"],
    ["/7j1yaa/tiara/2000x/thm_1209.jpg", "2000 Christmas Party"],
    ["/7j1yaa/tiara/2000x/thm_1237.jpg", "2000 Christmas Party"],
    ["/7j1yaa/tiara/2002/30th_02.jpg", "2002"],
    ["/7j1yaa/tiara/2002/30th_05.jpg", "2002"],
    ["/7j1yaa/tiara/2002/30th_06.jpg", "2002"],
    ["/7j1yaa/tiara/2002/30th_All.jpg", "2002"],
    ["/7j1yaa/tiara/2002/30th_Bingo_01.jpg", "2002"],
    ["/7j1yaa/tiara/2002/30th_Bingo_02.jpg", "2002"],
    ["/7j1yaa/tiara/2002/30th_Bingo_03.jpg", "2002"],
    ["/7j1yaa/tiara/2002/Tiara0211-00.jpg", "2002"],
    ["/7j1yaa/tiara/2002/Tiara0211-01.jpg", "2002"],
    ["/7j1yaa/tiara/2002/Tiara0211-02.jpg", "2002"],
    ["/7j1yaa/tiara/2002/Tiara0211-03.jpg", "2002"],
    ["/7j1yaa/tiara/2002/fd200201.jpg", "2002 Field Day"],
    ["/7j1yaa/tiara/2002/fd200203.jpg", "2002 Field Day"],
    ["/7j1yaa/tiara/2002/fd200204.jpg", "2002 Field Day"],
    ["/7j1yaa/tiara/2002/fd200205.jpg", "2002 Field Day"],
    ["/7j1yaa/tiara/2002/t30th_02.jpg", "TIARA 30th Anniversary"],
    ["/7j1yaa/tiara/2002/t30th_05.jpg", "TIARA 30th Anniversary"],
    ["/7j1yaa/tiara/2002/t30th_06.jpg", "TIARA 30th Anniversary"],
    ["/7j1yaa/tiara/2002/t30th_All.jpg", "TIARA 30th Anniversary"],
    ["/7j1yaa/tiara/2002/t30th_Bin.jpg", "TIARA 30th Anniversary"],
    ["/7j1yaa/tiara/2002/t30th_Bingo_01.jpg", "TIARA 30th Anniversary"],
    ["/7j1yaa/tiara/2002/t30th_Bingo_02.jpg", "TIARA 30th Anniversary"],
    ["/7j1yaa/tiara/2002/t30th_Bingo_03.jpg", "TIARA 30th Anniversary"],
    ["/7j1yaa/tiara/2002/td200201.jpg", "2002"],
    ["/7j1yaa/tiara/2002/td200203.jpg", "2002"],
    ["/7j1yaa/tiara/2002/td200204.jpg", "2002"],
    ["/7j1yaa/tiara/2002/td200205.jpg", "2002"],
    ["/7j1yaa/tiara/2002/tiara0211-00.jpg", "November, 2002 Meeting"],
    ["/7j1yaa/tiara/2002/tiara0211-01.jpg", "November, 2002 Meeting"],
    ["/7j1yaa/tiara/2002/tiara0211-02.jpg", "November, 2002 Meeting"],
    ["/7j1yaa/tiara/2002/tiara0211-03.jpg", "November, 2002 Meeting"],
    ["/7j1yaa/tiara/2002x/tTIARAXMAS-1.jpg", "2002 Christmas Party"],
    ["/7j1yaa/tiara/2002x/tTIARAXMAS-2.jpg", "2002 Christmas Party"],
    ["/7j1yaa/tiara/2002x/tTIARAXMAS-4.jpg", "2002 Christmas Party"],
    ["/7j1yaa/tiara/2002x/tTIARAXMAS-6.jpg", "2002 Christmas Party"],
    ["/7j1yaa/tiara/2002x/tTIARAXMAS-8.jpg", "2002 Christmas Party"],
    ["/7j1yaa/tiara/2002x/tTIARAXMAS-9.jpg", "2002 Christmas Party"],
    ["/7j1yaa/tiara/2002x/tmg0001.jpg", "2002 Christmas Party"],
    ["/7j1yaa/tiara/2002x/tmg0002.jpg", "2002 Christmas Party"],
    ["/7j1yaa/tiara/2002x/tmg0003.jpg", "2002 Christmas Party"],
    ["/7j1yaa/tiara/2002x/tmg0004.jpg", "2002 Christmas Party"],
    ["/7j1yaa/tiara/2002x/tmg0005.jpg", "2002 Christmas Party"],
    ["/7j1yaa/tiara/2002x/tmg0006.jpg", "2002 Christmas Party"],
    ["/7j1yaa/tiara/2002x/tmg0007.jpg", "2002 Christmas Party"],
    ["/7j1yaa/tiara/2002x/tmg0008.jpg", "2002 Christmas Party"],
    ["/7j1yaa/tiara/2002x/tmg0009.jpg", "2002 Christmas Party"],
    ["/7j1yaa/tiara/2002x/txmas2002.jpg", "2002 Christmas Party"],
    ["/7j1yaa/tiara/2007/PC010042.JPG", "2007 Christmas Party"],
    ["/7j1yaa/tiara/2007/PC010043.JPG", "2007 Christmas Party"],
    ["/7j1yaa/tiara/2007/PC010045.JPG", "2007 Christmas Party"],
    ["/7j1yaa/tiara/2007/PC010046.JPG", "2007 Christmas Party"],
    ["/7j1yaa/tiara/2010/tiara_ham_fair_2010_dk7pe.jpg", "2010 Ham Fair"],
    ["/7j1yaa/tiara/2012/2012-04-TIARA_s.jpg", "April, 2012 Meeting"],
    ["/7j1yaa/tiara/2012/TIARA_HamFair_2012_480x360.jpg", "2012 Ham Fair"],
    [
      "/7j1yaa/tiara/2012/TIARA_Christmas_Party_2012_480x360.jpg",
      "2012 Christmas Party"
    ],
    ["/7j1yaa/tiara/2013/2013-01-TIARA_meeting_s.jpg", "January, 2013 Meeting"],
    [
      "/7j1yaa/tiara/2013/2013-01-TIARA_after_meeting_social_hour_s.jpg",
      "January, 2013 After Meeting Social Hour"
    ],
    ["/7j1yaa/tiara/2013/2013-08-TIARA-HamFair.jpg", "2013 Ham Fair"],
    ["/7j1yaa/tiara/2014/2014-TIARA-HamFair.jpg", "2014 Ham Fair"],
    ["/7j1yaa/tiara/QSL/1993_TIARA_Field_Day_QSL_card.jpg", "1993 QSL"],
    ["/7j1yaa/tiara/QSL/1994_TIARA_Field_Day_QSL_card.jpg", "1994 QSL"],
    ["/7j1yaa/tiara/QSL/1996_TIARA_Field_Day_QSL_card.jpg", "1996 QSL"],
    [
      "/7j1yaa/tiara/QSL/1997_TIARA_Field_Day_QSL_CQ_WW_Contest.jpg",
      "1997 QSL"
    ],
    ["/7j1yaa/tiara/QSL/2001_TIARA_Field_Day_QSL_card.jpg", "2001 QSL"],
    ["/7j1yaa/tiara/bbs.jpg", "7J1YAA BBS circa 1998"],
    [
      "/7j1yaa/tiara/2015/TIARA-2015-09.jpg",
      "September, 2015 Meeting (JG1MBR photo)"
    ],
    [
      "/7j1yaa/tiara/2015/TIARA-2015-09-Rick-JI1HSV.jpg",
      "Rick JI1HSV describes his balanced line tester (2015-09) (JG1MBR photo)"
    ],
    [
      "/7j1yaa/tiara/2015/TIARA-Christmas-Party-2015-12-06.jpg",
      "2015 Christmas Party"
    ],
    [
      "/7j1yaa/tiara/2015/8J1JAUS-operation-JI1HSV-B.jpg",
      "8J1JAUS operation by Rick JI1HSV"
    ],
    ["/7j1yaa/tiara/2015/JI1HSV-Ant.jpg", "8J1JAUS operation by Rick JI1HSV"],
    [
      "/7j1yaa/tiara/2016/2016-05-5_thumb.jpg",
      "2016-05 Meeting (JO7XVL photo)"
    ],
    [
      "/7j1yaa/tiara/2016/2016-05-6_thumb.jpg",
      "2016-05 Meeting (JO7XVL photo)"
    ],
    [
      "/7j1yaa/tiara/2016/2016-05-7_thumb.jpg",
      "2016-05 Meeting (JO7XVL photo)"
    ],
    [
      "/7j1yaa/tiara/2016/2016-05-8_thumb.jpg",
      "2016-05 Meeting (JO7XVL photo)"
    ],
    [
      "/7j1yaa/tiara/2016/2016-05-after-meeting-get-together_thumb.jpg",
      "2016-05 After Meeting Gathering (7J1ABD photo)"
    ],
    [
      "/7j1yaa/tiara/2016/Ham-Fair-Tokyo-2016-TIARA-booth-1-photo-7J1ABD-t.jpg",
      "Ham Fair 2016 (7J1ABD photo)"
    ],
    [
      "/7j1yaa/tiara/2016/Ham-Fair-Tokyo-2016-TIARA-booth-2-photo-7J1ABD-t.jpg",
      "Ham Fair 2016 (7J1ABD photo)"
    ],
    [
      "/7j1yaa/tiara/2016/Ham-Fair-Tokyo-2016-TIARA-booth-3-photo-7J1ABD-t.jpg",
      "Ham Fair 2016 (7J1ABD photo)"
    ],
    [
      "/7j1yaa/tiara/2016/Ham-Fair-Tokyo-2016-TIARA-booth-4-photo-7J1ABD-t.jpg",
      "Ham Fair 2016 (7J1ABD photo)"
    ],
    [
      "/7j1yaa/tiara/2016/TIARA-Christmas-Party-2016-12-04-1-7J1ABD-t.jpg",
      "Christmas Party 2016 (7J1ABD photo)"
    ],
    [
      "/7j1yaa/tiara/2016/TIARA-Christmas-Party-2016-12-04-3-7J1ABD-t.jpg",
      "Christmas Party 2016 (7J1ABD photo)"
    ],
    [
      "/7j1yaa/tiara/2017/12/t/JARL-Eyeball-JE1RYS-JG1KTC-7J1ABD.640.jpg",
      "JARL Eyeball 2017 JE1RYS JG1KTC 7J1ABD"
    ],
    [
      "/7j1yaa/tiara/2017/12/t/Christmas-Party-20171210.640.jpg",
      "Christmas Party 2017"
    ],
    [
      "/7j1yaa/tiara/1973/t/First-TIARA-Field-Day-197308-1.640.jpg",
      "First TIARA Field Day 1973 (7J1ABD photo)"
    ],
    [
      "/7j1yaa/tiara/1973/t/First-TIARA-Field-Day-197308-2.640.jpg",
      "First TIARA Field Day 1973 (7J1ABD photo)"
    ],
    [
      "/7j1yaa/tiara/1973/t/First-TIARA-Field-Day-197308-3.640.jpg",
      "First TIARA Field Day 1973 (7J1ABD photo)"
    ],
    [
      "/7j1yaa/tiara/1973/t/First-TIARA-Field-Day-197308-4.640.jpg",
      "First TIARA Field Day 1973 (7J1ABD photo)"
    ],
    [
      "/7j1yaa/tiara/1974/t/TIARA-Field-Day-197408-1.640.jpg",
      "TIARA Field Day 1974 (7J1ABD photo)"
    ],
    [
      "/7j1yaa/tiara/1974/t/TIARA-Field-Day-197408-2.640.jpg",
      "TIARA Field Day 1974 (7J1ABD photo)"
    ],
    [
      "/7j1yaa/tiara/1974/t/TIARA-Field-Day-197408-3.640.jpg",
      "TIARA Field Day 1974 (7J1ABD photo)"
    ],
    [
      "/7j1yaa/tiara/1974/t/TIARA-Field-Day-197408-4.640.jpg",
      "TIARA Field Day 1974 (7J1ABD photo)"
    ],
    [
      "/7j1yaa/tiara/2017/12/t/TIARA-Bonenkai-2017-01.640.jpg",
      "TIARA Christmas Party 2017 (7J1AAB photo)"
    ],
    [
      "/7j1yaa/tiara/2017/12/t/TIARA-Bonenkai-2017-03.640.jpg",
      "TIARA Christmas Party 2017 (7J1AAB photo)"
    ],
    [
      "/7j1yaa/tiara/2017/12/t/TIARA-Bonenkai-2017-06.640.jpg",
      "TIARA Christmas Party 2017 (7J1AAB photo)"
    ],
    [
      "/7j1yaa/tiara/2017/12/t/TIARA-Bonenkai-2017-08.640.jpg",
      "TIARA Christmas Party 2017 (7J1AAB photo)"
    ],
    [
      "/7j1yaa/tiara/2017/12/t/TIARA-Bonenkai-2017-09.640.jpg",
      "TIARA Christmas Party 2017 (7J1AAB photo)"
    ],
    [
      "/7j1yaa/tiara/2017/12/t/TIARA-Bonenkai-2017-10.640.jpg",
      "TIARA Christmas Party 2017 (7J1AAB photo)"
    ],
    [
      "/7j1yaa/tiara/2017/12/t/TIARA-Bonenkai-2017-11.640.jpg",
      "TIARA Christmas Party 2017 (7J1AAB photo)"
    ],
    [
      "/7j1yaa/tiara/2017/12/t/TIARA-Bonenkai-2017-12.640.jpg",
      "TIARA Christmas Party 2017 (7J1AAB photo)"
    ],
    [
      "/7j1yaa/tiara/2017/12/t/TIARA-Bonenkai-2017-13.640.jpg",
      "TIARA Christmas Party 2017 (7J1AAB photo)"
    ],
    [
      "/7j1yaa/tiara/2017/12/t/TIARA-Bonenkai-2017-16.640.jpg",
      "TIARA Christmas Party 2017 (7J1AAB photo)"
    ],
    [
      "/7j1yaa/tiara/2017/12/t/TIARA-Bonenkai-2017-17.640.jpg",
      "TIARA Christmas Party 2017 (7J1AAB photo)"
    ],
    [
      "/7j1yaa/tiara/2017/12/t/TIARA-Bonenkai-2017-18.640.jpg",
      "TIARA Christmas Party 2017 (7J1AAB photo)"
    ],
    [
      "/7j1yaa/tiara/2017/12/t/TIARA-Bonenkai-2017-19.640.jpg",
      "TIARA Christmas Party 2017 (7J1AAB photo)"
    ],
    [
      "/7j1yaa/tiara/2017/12/t/TIARA-Bonenkai-2017-21.640.jpg",
      "TIARA Christmas Party 2017 (7J1AAB photo)"
    ],
    [
      "/7j1yaa/tiara/2017/12/t/TIARA-Bonenkai-2017-22.640.jpg",
      "TIARA Christmas Party 2017 (7J1AAB photo)"
    ],
    [
      "/7j1yaa/tiara/1997/t/TIARA-Field-Day-1997.640.jpg",
      "TIARA Field Day 1997 (7J1ABD photo)"
    ],
    [
      "/7j1yaa/tiara/1997/t/TIARA-Field-Day-1997-2.640.jpg",
      "TIARA Field Day 1997 (7J1ABD photo)"
    ],
    [
      "/7j1yaa/tiara/1997/t/TIARA-Christmas-Party-and-25th-Anniversary-Celebration-1997-1.640.jpg",
      "TIARA Christmas Party and 25th Anniversary Celebration 1997 (7J1ABD photo)"
    ],
    [
      "/7j1yaa/tiara/1997/t/TIARA-Christmas-Party-and-25th-Anniversary-Celebration-1997-2.640.jpg",
      "TIARA Christmas Party and 25th Anniversary Celebration 1997 (7J1ABD photo)"
    ],
    [
      "/7j1yaa/tiara/1997/t/TIARA-Christmas-Party-and-25th-Anniversary-Celebration-1997-3.640.jpg",
      "TIARA Christmas Party and 25th Anniversary Celebration 1997 (7J1ABD photo)"
    ],
    [
      "/7j1yaa/tiara/1997/t/TIARA-Christmas-Party-and-25th-Anniversary-Celebration-1997-4.640.jpg",
      "TIARA Christmas Party and 25th Anniversary Celebration 1997 (7J1ABD photo)"
    ],
    [
      "/7j1yaa/tiara/1994/t/TIARA-Booth-at-Ham-Fair-old-exhibition-center-Harumi-1994.640.jpg",
      "TIARA Booth at 1994 Ham Fair (old Harumi exhibition center) (7J1ABD photo)"
    ],
    [
      "/7j1yaa/tiara/1994/t/TIARA-Christmas-Party-1994.640.jpg",
      "TIARA Christmas Party 1994 (7J1ABD photo)"
    ],
    [
      "/7j1yaa/tiara/1994/t/TIARA-Meeting-at-St-Alban's-Church-Minato-ku-Tokyo-1994-1995-1.640.jpg",
      "TIARA Meeting at St. Alban's Church, Minato-ku, Tokyo 1994~1995 (7J1ABD photo)"
    ],
    [
      "/7j1yaa/tiara/1994/t/TIARA-Meeting-at-St-Alban's-Church-Minato-ku-Tokyo-1994-1995-2.640.jpg",
      "TIARA Meeting at St. Alban's Church, Minato-ku, Tokyo 1994~1995 (7J1ABD photo)"
    ],
    [
      "/7j1yaa/tiara/1994/t/TIARA-Meeting-at-St-Alban's-Church-Minato-ku-Tokyo-1994-1995-3.640.jpg",
      "TIARA Meeting at St. Alban's Church, Minato-ku, Tokyo 1994~1995 (7J1ABD photo)"
    ],
    [
      "/7j1yaa/tiara/1994/t/TIARA-Meeting-at-St-Alban's-Church-Minato-ku-Tokyo-1994-1995-4.480.jpg",
      "TIARA Meeting at St. Alban's Church, Minato-ku, Tokyo 1994~1995 (7J1ABD photo)"
    ],
    [
      "/7j1yaa/tiara/1994/t/TIARA-Meeting-at-St-Alban's-Church-Minato-ku-Tokyo-1994-1995-5.640.jpg",
      "TIARA Meeting at St. Alban's Church, Minato-ku, Tokyo 1994~1995 (7J1ABD photo)"
    ],
    [
      "/7j1yaa/tiara/2001/t/TIARA-Christmas-Party-2001.640.jpg",
      "TIARA Christmas Party 2001 (7J1ABD photo)"
    ],
    [
      "/7j1yaa/tiara/1986/t/TIARA-Field-Day-at-Yomiuriland-1986-1.640.jpg",
      "TIARA Field Day 1986 Yomiuriland (7J1ABD photo)"
    ],
    [
      "/7j1yaa/tiara/1986/t/TIARA-Field-Day-at-Yomiuriland-1986-2.640.jpg",
      "TIARA Field Day 1986 Yomiuriland (7J1ABD photo)"
    ],
    [
      "/7j1yaa/tiara/1986/t/TIARA-Field-Day-at-Yomiuriland-1986-3.640.jpg",
      "TIARA Field Day 1986 Yomiuriland (7J1ABD photo)"
    ],
    [
      "/7j1yaa/tiara/1986/t/TIARA-Field-Day-at-Yomiuriland-1986-4.640.jpg",
      "TIARA Field Day 1986 Yomiuriland (7J1ABD photo)"
    ],
    [
      "/7j1yaa/tiara/1986/t/TIARA-Field-Day-at-Yomiuriland-1986-5.640.jpg",
      "TIARA Field Day 1986 Yomiuriland (7J1ABD photo)"
    ],
    [
      "/7j1yaa/tiara/1986/t/TIARA-Field-Day-at-Yomiuriland-1986-6.640.jpg",
      "TIARA Field Day 1986 Yomiuriland (7J1ABD photo)"
    ],
    [
      "/7j1yaa/tiara/1998/t/TIARA-members-operate-the-Special-Event-station-at-the-Winter-Olympics-in-Nagano-February-1998.640.jpg",
      "Nagano Winter Olympics, February, 1998 (7J1ABD photo)"
    ],
    [
      "/7j1yaa/tiara/1998/t/TIARA-members-with-the-local-hams-and-Hara-san-JA1AN-at-the-Winter-Olympics-in-Nagano-February-1998.640.jpg",
      "Nagano Winter Olympics, February, 1998 (7J1ABD photo)"
    ],
    [
      "/7j1yaa/tiara/2003/t/TIARA-Field-Day-2003-at-Mt-Amariyama-Yamanashi.640.jpg",
      "Field Day 2003 Mt. Amariyama, Yamanashi (7J1ABD photo)"
    ],
    [
      "/7j1yaa/tiara/2004/t/TIARA-Field-Day-2004-at-Mt-Amariyama-Yamanashi.640.jpg",
      "Field Day 2004 Mt. Amariyama, Yamanashi (7J1ABD photo)"
    ],
    [
      "/7j1yaa/tiara/2005/t/TIARA-Field-Day-2005-at-Futtsu-shi-Chiba.640.jpg",
      "Field Day 2005 Futtsu-shi, Chiba (7J1ABD photo)"
    ],
    [
      "/7j1yaa/tiara/2017/09/t/2017-TIARA-at-Hamfair-617.640.jpg",
      "2017 Ham Fair (JO7XVL photo)"
    ],
    [
      "/7j1yaa/tiara/2017/09/t/2017-TIARA-at-Hamfair-618.640.jpg",
      "2017 Ham Fair (JO7XVL photo)"
    ],
    [
      "/7j1yaa/tiara/2018/02/t/2018-02-16-TIARA-after-meeting-social-hour.640.jpg",
      "2018-02-16 After Meeting Social Hour (7J1ABD photo)"
    ],
    [
      "/7j1yaa/tiara/2018/12/t/TIARA-Bonenkai-20181208.640.jpg",
      "Christmas Party 2018 (7J1ABD)"
    ],
    [
      "/7j1yaa/tiara/2019/06/t/20190621-Social-Hour-7J1ABD.640.jpg",
      "2019-06 after meeting social hour (7J1ABD)"
    ],
  ];

  var idx = 0;
  var imgcnt = photos.length;
  var tmSec = 10000;
  var timeout = 15000;
  var loadingTimeout;

  function shuffle(o) {
    for (
      var j, x, i = o.length;
      i;
      j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
    );
    return o;
  }

  function aspect(s) {
    if (s.naturalWidth / s.naturalHeight > s.maxWidth / s.maxHeight) {
      s.width = s.maxWidth;
      s.height = Math.floor(s.naturalHeight * s.maxWidth / s.naturalWidth);
    } else {
      s.height = s.maxHeight;
      s.width = Math.floor(s.naturalWidth * s.maxHeight / s.naturalHeight);
    }
    s.top = s.maxHeight - s.height;
    return s;
  }

  // set slideshow size based on window width and page URL
  if ($(window).width() >= 1160 && window.location.href.indexOf("tiara") > -1) {
    cWidth = 640;
    cHeight = 480;
    $("#slides").css({ width: cWidth + "px", height: cHeight + "px" });
  } else {
    cWidth = 320;
    cHeight = 240;
  }

  $container = $("#slides");
  $container.html(
    '<img id="slideimg" width=' +
      cWidth +
      " height=" +
      cHeight +
      ' style="border:0;"><p id="caption"></p><img id="loadimg" style="display:none;">'
  );
  var $loadimg = $("#loadimg");
  var $img = $("#slideimg");
  var $caption = $("#caption");
  $loadimg.load(function() {
    clearTimeout(loadingTimeout);

    var size = {
      maxWidth: cWidth,
      maxHeight: cHeight,
      naturalWidth: $loadimg.get(0).naturalWidth,
      naturalHeight: $loadimg.get(0).naturalHeight
    };
    //console.log('  ' + size.naturalWidth + 'x' + size.naturalHeight);
    size = aspect(size);
    $container.fadeTo("fast", 0, function() {
      $img.attr({
        src: photos[idx][0],
        width: size.width,
        height: size.height
      });
      $img.css("marginTop", size.top);
      $caption.html(photos[idx][1]);
      $container.fadeTo("fast", 1, function() {
        setTimeout(change, tmSec);
      });
    });
  });

  photos = shuffle(photos);

  function loadFailed() {
    console.log("Unable to load: " + photos[idx][0]);
    change();
  }

  function change() {
    idx = (idx + 1) % imgcnt;
    $loadimg.attr("src", photos[idx][0]);
    //console.log(photos[idx][0]);
    loadingTimeout = setTimeout(loadFailed, timeout);
  }

  change();
});
