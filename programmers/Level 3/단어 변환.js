// 생각한 풀이 방법
// 1. BFS를 활용해 모든 경우를 탐색한다.
// 2. 검사한 단어는 visited에 push한다.
// 3. 전환 가능한 모든 단어를 queue에 push한다.
// 4. 2~3과정을 queue에 단어가 존재할 때까지 반복한다.

function solution(begin, target, words) {
  if (!words.includes(target)) return 0;

  function bfs(word, count) {
    let visited = [];
    let queue = [];

    queue.push([word, count]);

    while (queue.length) {
      // queue에 단어가 존재할 때까지 반복한다
      let [currentWord, count] = queue.shift();

      if (currentWord === target) {
        return count;
      }

      words.forEach((word) => {
        let changeable = 0;

        if (visited.includes(word)) return; // 검사한 단어는 다시 검사하지 않음

        for (let i = 0; i < word.length; i++) {
          // 전환 가능한 단어인지 확인
          if (word[i] !== currentWord[i]) changeable++;
        }

        if (changeable === 1) {
          // 전환 가능한 단어인 경우
          queue.push([word, ++count]); // 전환 가능한 모든 단어를 queue에 push한다.
          visited.push(word); // 검사한 단어는 visited에 push한다.
        }
      });
    }
  }

  return bfs(begin, 0);
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"]));
