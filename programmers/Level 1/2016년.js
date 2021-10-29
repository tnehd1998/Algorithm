function solution(a, b) {
  let current = 1;
  let total = 0;
  let date = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  while (current !== a) {
    switch (current) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        total += 31;
        current++;
        break;
      case 2:
        total += 29;
        current++;
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        total += 30;
        current++;
        break;
    }
  }
  total += b;
  total += 4;
  total = total % 7;

  return date[total];
}

console.log(solution(5, 24));
