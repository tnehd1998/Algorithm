function addTo80(n) {
  return n + 80;
}

function memoizedAddTo80() {
  let cache = {};
  return function (n) {
    if (n in cache) {
      console.log("Existing value : " + cache[n]);
    } else {
      cache[n] = n + 80;
      console.log("New value added : " + cache[n]);
    }
  };
}

const memoized = memoizedAddTo80();
memoized(5);
memoized(5);
