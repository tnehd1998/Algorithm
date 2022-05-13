// 생각한 풀이 방법 (1차 시도 -> 실패)
// 1. 특정 페이지에 맞는 점수를 currentPoint에 저장한다.
// 2. 추가적으로 연결된 link를 확인한 후, 추가 점수를 extraPoint에 저장한다.
// 3. 가장 큰 값을 가진 웹페이지의 index값을 반환한다.

// function solution(word, pages) {
//   let currentPoint = {};
//   let extraPoint = {};
//   let externalLinks = {};

//   for (let i = 0; i < pages.length; i++) {
//     let pageArr = pages[i]
//       .toLowerCase()
//       .split("\n")
//       .map((words) => words.trim());
//     let currentUrl = pageArr.find((word) => word.includes("https"));
//     let urlName = currentUrl.match(/"https:\S*"/gi)[0];
//     let wordCount = pages[i]
//       .toLowerCase()
//       .split(/[\d|\W]/)
//       .filter((curr) => curr === word.toLowerCase()).length;
//     let links = [];
//     while (pageArr.find((word) => word.includes("a href"))) {
//       let link = pageArr.find((word) => word.includes("a href"));
//       let linkIndex = pageArr.findIndex((word) => word.includes("a href"));
//       let url = link.match(/"https:\S*"/gi)[0];
//       links.push(url);
//       pageArr[linkIndex] = "";
//     }
//     currentPoint[urlName] = [i, wordCount];
//     extraPoint[urlName] = 0;
//     externalLinks[urlName] = links;
//   }

//   let maxValue = Number.MIN_SAFE_INTEGER;
//   let answer = Number.MAX_SAFE_INTEGER;

//   for (let page in externalLinks) {
//     let exLinks = externalLinks[page];

//     for (let i = 0; i < exLinks.length; i++) {
//       let currentLink = exLinks[i];
//       let exPoint = currentPoint[page][1];
//       let divide = externalLinks[page].length;
//       extraPoint[currentLink] += exPoint / divide;
//     }
//   }

//   for (let page in currentPoint) {
//     let totalPoint = currentPoint[page][1] + extraPoint[page];
//     if (totalPoint > maxValue) {
//       maxValue = totalPoint;
//       answer = currentPoint[page][0];
//     } else if (totalPoint === maxValue && answer > currentPoint[page][0]) {
//       maxValue = totalPoint;
//       answer = currentPoint[page][0];
//     }
//   }

//   return answer;
// }

// 생각한 풀이 방법 (2차 시도 -> 성공)
// 1. 다른 사람의 구현 풀이를 참고했다.
// 2. 과정은 시도한 방법과 동일하다.

function solution(word, pages) {
  const REGEX_WORD = /[\d|\W}]/;
  const REGEX_URL = /<a href="https:\S*"/gi;
  const META_URL = "meta property";
  const pageInfo = new Map();

  pages.forEach((page, index) => {
    const pageArr = page.split("\n");
    const urlIndex = pageArr.findIndex((el) => el.includes(META_URL));
    const pageURL = pageArr[urlIndex].match(/"https:\S*"/gi)[0];
    const bodyStart = pageArr.findIndex((el) => el.includes("<body>"));
    const bodyEnd = pageArr.findIndex((el) => el.includes("</body>"));
    const body = pageArr.slice(bodyStart + 1, bodyEnd);
    const point = body
      .flatMap((str) => str.toLowerCase().split(REGEX_WORD))
      .filter((e) => e === word.toLowerCase()).length;
    const outLinks = body
      .flatMap((str) => str.match(REGEX_URL))
      .filter((e) => e)
      .map((e) => e.substr(8, e.length));

    pageInfo.set(pageURL, { point, outLinks, index, matchPoint: 0 });
  });

  for (const [key, value] of pageInfo) {
    const linkPoint = value.point / value.outLinks.length;

    for (const link of value.outLinks) {
      if (pageInfo.has(link)) {
        const origin = pageInfo.get(link);
        const calculatedPoint = origin.matchPoint
          ? origin.matchPoint + linkPoint
          : origin.point + linkPoint;
        pageInfo.set(link, { ...origin, matchPoint: calculatedPoint });
      }
    }
  }

  const answer = [];

  for (const [key, value] of pageInfo) {
    const { point, index, matchPoint } = value;
    const finalPoint = matchPoint ? matchPoint : point;
    answer.push([index, finalPoint]);
  }

  answer.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : b[1] - a[1]));

  return answer[0][0];
}

solution("blind", [
  '<html lang="ko" xml:lang="ko" xmlns="http://www.w3.org/1999/xhtml">\n<head>\n  <meta charset="utf-8">\n  <meta property="og:url" content="https://a.com"/>\n</head>  \n<body>\nBlind Lorem Blind ipsum dolor Blind test sit amet, consectetur adipiscing elit. \n<a href="https://b.com"> Link to b </a>\n</body>\n</html>',
  '<html lang="ko" xml:lang="ko" xmlns="http://www.w3.org/1999/xhtml">\n<head>\n  <meta charset="utf-8">\n  <meta property="og:url" content="https://b.com"/>\n</head>  \n<body>\nSuspendisse potenti. Vivamus venenatis tellus non turpis bibendum, \n<a href="https://a.com"> Link to a </a>\nblind sed congue urna varius. Suspendisse feugiat nisl ligula, quis malesuada felis hendrerit ut.\n<a href="https://c.com"> Link to c </a>\n</body>\n</html>',
  '<html lang="ko" xml:lang="ko" xmlns="http://www.w3.org/1999/xhtml">\n<head>\n  <meta charset="utf-8">\n  <meta property="og:url" content="https://c.com"/>\n</head>  \n<body>\nUt condimentum urna at felis sodales rutrum. Sed dapibus cursus diam, non interdum nulla tempor nec. Phasellus rutrum enim at orci consectetu blind\n<a href="https://a.com"> Link to a </a>\n</body>\n</html>',
]);
solution("Muzi", [
  '<html lang="ko" xml:lang="ko" xmlns="http://www.w3.org/1999/xhtml">\n<head>\n  <meta charset="utf-8">\n  <meta property="og:url" content="https://careers.kakao.com/interview/list"/>\n</head>  \n<body>\n<a href="https://programmers.co.kr/learn/courses/4673"></a>#!MuziMuzi!)jayg07con&&\n\n</body>\n</html>',
  '<html lang="ko" xml:lang="ko" xmlns="http://www.w3.org/1999/xhtml">\n<head>\n  <meta charset="utf-8">\n  <meta property="og:url" content="https://www.kakaocorp.com"/>\n</head>  \n<body>\ncon%\tmuzI92apeach&2<a href="https://hashcode.co.kr/tos"></a>\n\n\t^\n</body>\n</html>',
]);
