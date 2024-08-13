export function minOperations(logs: string[]): number {
  const back = "../"
  const remain = "./"

  let steps = 0
  let currentFolder = ''
  for(let log of logs) {
    if (log !== back && log !== remain) {
      steps++
      currentFolder = log
    }
    if (log == back) {
      if(steps === 0) continue
      steps--
    }
    if (log === remain) {
      continue
    }
  }
  return steps
};
