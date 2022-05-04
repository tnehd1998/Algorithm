// 해결풀이 접근방법
// 1. orders를 기준으로 나올수 있는 모든 경우를 찾아냄
// 2. 해당 값들중 2번 이상 나온것들만 filter하여 정렬
// 3. 해당 course에 따라 문자열 길이 중 최대값을 res에 push
// 4. res을 정렬 후 반환

// function solution(orders, course) {
//   let menu = new Map();

//   // 모든 조합을 확인해주는 함수
//   function combination(order, idx, len, prev) {
//     if (prev.length === len) {
//       let cur_key = prev.sort().join("");
//       if (menu.has(cur_key)) {
//         menu.set(cur_key, menu.get(cur_key) + 1);
//       } else menu.set(cur_key, 1);
//       return;
//     }

//     for (let i = idx; i < order.length; i++) {
//       combination(order, i + 1, len, [...prev, order[i]]);
//     }
//   }

//   // 나올수 있는 모든 경우를 menu에 추가, 존재 시 해당 값 증가
//   orders.map((order) => {
//     course.map((num) => combination(order, 0, num, []));
//   });

//   // 해당 값들중 2번 이상 나온것들만 filter하여 정렬
//   menu = [...menu.entries()]
//     .filter((item) => item[1] > 1)
//     .sort((a, b) => b[0].length - a[0].length);

//   let res = [];
//   course.map((num) => {
//     // 각 course에 따라 최대 값을 res에 push
//     let max = 0;
//     const tmp = menu.filter(([k, v]) => {
//       if (max < v && k.length === num) max = v;
//       return k.length === num;
//     });
//     tmp.filter((x) => x[1] === max).map((x) => res.push(x[0]));
//   });

//   return res.sort();
// }

function solution(orders, course) {
  let allMenus = {};
  let answer = [];

  function combination(order, idx, len, prev) {
    if (prev.length === len) {
      let currentMenu = prev.sort().join("");
      if (allMenus[currentMenu]) {
        allMenus[currentMenu] += 1;
      } else {
        allMenus[currentMenu] = 1;
      }
      return;
    }

    for (let i = idx; i < order.length; i++) {
      combination(order, i + 1, len, [...prev, order[i]]);
    }
  }

  for (let i = 0; i < orders.length; i++) {
    for (let j = 0; j < course.length; j++) {
      combination(orders[i], 0, course[j], []);
    }
  }

  for (let i = 0; i < course.length; i++) {
    let maxValue = -1;
    for (let menu in allMenus) {
      if (menu.length === course[i]) {
        if (allMenus[menu] > 1 && maxValue < allMenus[menu]) {
          maxValue = allMenus[menu];
        }
      }
    }

    for (let menu in allMenus) {
      if (menu.length === course[i]) {
        if (maxValue === allMenus[menu]) {
          answer.push(menu);
        }
      }
    }
  }

  return answer.sort();
}

console.log(
  solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4])
);
console.log(
  solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5])
);
console.log(solution(["XYZ", "XWY", "WXA"], [2, 3, 4]));

// 시도한 방법
// 1. 사용하는 알파벳 조합을 먼저 찾아서 usingAlphabet이라는 배열에 저장
// 2. DFS로 course에 따라 usingAlphabet을 사용해 모든 조합을 찾음
// 3. 현재 경우인 currentStr이 존재하는 경우 값++, 아니면 새로 추가
// 4. 현재 경우에서 max값을 가지고 있는 경우들을 answer에 추가
// 5. 각 course에서 나온 max값들인 answer을 정렬하여 반환

// 2번경우에서 DFS를 활용해 모든 경우를 찾는 과정에서 해결 X

// function solution2(orders, course) {
//   let answer = [];
//   let orderedItem = Array(26).fill(false);
//   let usingAlphabet = [];
//   for (let i = 0; i < orders.length; i++) {
//     let current = orders[i].split("");
//     for (let j = 0; j < current.length; j++) {
//       orderedItem[current[j].charCodeAt(0) - 65] = true;
//     }
//   }

//   for (let i = 0; i < orderedItem.length; i++) {
//     if (orderedItem[i]) {
//       usingAlphabet.push(String.fromCharCode(i + 65));
//     }
//   }

//   function addItem(size, orders, menus) {
//     let addingItem = {};
//     let max = 0;
//     let maxStr = [];
//     for (let i = 0; i < menus.length - size + 1; i++) {
//       for (let j = i + 1; j < menus.length; j++) {
//         function combination(order, idx, len, prev) {
//           if (prev.length === len) {
//             let cur_key = prev.sort().join("");
//             if (addingItem[cur_key]) {
//               addingItem[cur_key]++;
//             } else addingItem[cur_key] = 1;
//             return;
//           }

//           for (let i = idx; i < order.length; i++) {
//             combination(order, i + 1, len, [...prev, order[i]]);
//           }
//         }

//         let currentStr = orders.map((order) => {
//           menus.map((num) => console.log(combination(order, 0, num, [])));
//         });

//         // currentStr포함하는지 확인 후 addingItem에 추가
//         for (let k = 0; k < orders.length; k++) {
//           let splitStr = currentStr.split("");
//           let existing = true;
//           splitStr.map((item) => {
//             if (!orders[k].includes(item)) {
//               existing = false;
//             }
//           });
//           if (existing) {
//             if (addingItem[currentStr]) {
//               addingItem[currentStr]++;
//             } else {
//               addingItem[currentStr] = 1;
//             }
//           }
//         }
//       }

//       // 최대값 Answer에 추가
//       for (const item in addingItem) {
//         if (addingItem[item] > max) {
//           maxStr = [item];
//           max = addingItem[item];
//         } else if (addingItem[item] === max) {
//           maxStr.push(item);
//         }
//       }
//     }

//     let pushingAnswer = [...new Set(maxStr)];
//     answer = [...answer, ...pushingAnswer];
//   }

//   for (let i = 0; i < course.length; i++) {
//     addItem(course[i], orders, usingAlphabet);
//   }

//   return answer.sort();
// }

// console.log(
//   solution2(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4])
// );
