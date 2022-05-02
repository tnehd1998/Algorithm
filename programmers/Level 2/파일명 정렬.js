// 생각한 풀이 방법
// 1. 숫자가 나오기 직전인 HEAD를 정규표현식으로 구한다.
// 2. HEAD를 기준으로 정렬을 한다.
// 3. HEAD가 같을 경우, NUMBER부분을 정규표현식으로 구한다.
// 4. NUMBER의 크기에 따라 정렬을 한다.

// function solution(files) {
//   return files.sort((a, b) => {
//     // 숫자가 나오기 직전인 HEAD를 정규표현식으로 구한다.
//     let wordA = a.match(/^\D+/)[0].toLowerCase();
//     let wordB = b.match(/^\D+/)[0].toLowerCase();

//     // HEAD를 기준으로 정렬을 한다.
//     if (wordA < wordB) {
//       return -1;
//     }
//     if (wordA > wordB) {
//       return 1;
//     }

//     // HEAD가 같을 경우, NUMBER부분을 정규표현식으로 구한다.
//     let numberA = Number(a.match(/\d+/)[0]);
//     let numberB = Number(b.match(/\d+/)[0]);

//     // NUMBER의 크기에 따라 정렬을 한다.
//     return numberA - numberB;
//   });
// }

function solution(files) {
  return files.sort((a, b) => {
    let headA = a.match(/\D+/)[0].toLowerCase();
    let headB = b.match(/\D+/)[0].toLowerCase();

    if (headA < headB) {
      return -1;
    }
    if (headA > headB) {
      return 1;
    }

    let numberA = Number(a.match(/\d+/)[0]);
    let numberB = Number(b.match(/\d+/)[0]);

    return numberA - numberB;
  });
}

console.log(
  solution([
    "img12.png",
    "img10.png",
    "img02.png",
    "img1.png",
    "IMG01.GIF",
    "img2.JPG",
  ])
);
console.log(
  solution([
    "F-5 Freedom Fighter",
    "B-50 Superfortress",
    "A-10 Thunderbolt II",
    "F-14 Tomcat",
  ])
);
