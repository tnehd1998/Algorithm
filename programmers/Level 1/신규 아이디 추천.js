function solution(new_id) {
  new_id = new_id.toLowerCase();

  let correct = /[^a-z0-9-_.]/g;
  new_id = new_id.replace(correct, "");

  let checkDot = /[.]+/g;
  new_id = new_id.replace(checkDot, ".");

  if (new_id[0] === ".") {
    new_id = new_id.substring(1, new_id.length);
  }

  if (new_id.length === 0) {
    new_id += "a";
  }

  new_id = new_id.substring(0, 15);
  if (new_id[new_id.length - 1] === ".") {
    new_id = new_id.substring(0, new_id.length - 1);
  }

  while (new_id.length < 3) {
    new_id += new_id[new_id.length - 1];
  }

  return new_id;
}

console.log(solution("...!@BaT#*..y.abcdefghijklm"));
console.log(solution("z-+.^."));
console.log(solution("=.="));
console.log(solution("123_.def"));
console.log(solution("abcdefghijklmn.p"));
