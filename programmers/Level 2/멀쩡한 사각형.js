function solution(w, h) {
  let num = 0;
  let max = w > h ? h : w;
  for (let i = 1; i <= max; i++) {
    if (w % i === 0 && h % i === 0) {
      num = i;
    }
  }

  return w * h - (w + h - num);
}

console.log(solution(8, 12));
