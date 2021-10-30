function solution(dartResult) {
  let first = 0;
  let second = 0;
  let third = 0;
  let count = 0;
  dartResult = [...dartResult];
  while (dartResult.length > 0) {
    if (dartResult[0] === "#") {
      dartResult.shift();
      switch (count - 1) {
        case 0:
          first = first * -1;
          break;
        case 1:
          second = second * -1;
          break;
        case 2:
          third = third * -1;
          break;
      }
    } else if (dartResult[0] === "*") {
      dartResult.shift();
      switch (count - 1) {
        case 0:
          first = first * 2;
          break;
        case 1:
          first = first * 2;
          second = second * 2;
          break;
        case 2:
          second = second * 2;
          third = third * 2;
          break;
      }
    } else {
      let num = Number(dartResult.shift());
      if (num === 1 && dartResult[0] === "0") {
        dartResult.shift();
        num = 10;
      }
      let type = dartResult.shift();
      let current = 0;
      if (type === "S") {
        current = num;
      } else if (type === "D") {
        current = num * num;
      } else if (type === "T") {
        current = num * num * num;
      }
      switch (count) {
        case 0:
          first = current;
          break;
        case 1:
          second = current;
          break;
        case 2:
          third = current;
          break;
      }
      count++;
    }
  }

  return first + second + third;
}

console.log(solution("1S2D*3T"));
console.log(solution("1D2S#10S"));
console.log(solution("1D2S0T"));
console.log(solution("1S*2T*3S"));
console.log(solution("1D#2S*3S"));
console.log(solution("1T2D3D#"));
console.log(solution("1D2S3T*"));
