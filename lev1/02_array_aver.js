function solution(arr) {
  let answer = 0;
  const add = arr.reduce(function add(sum, currValue) {
    return sum + currValue;
  });
  answer = add / arr.length;
  return answer;
}
