// const detectCycle = (course: number, classesNeeded: number[][], visited: boolean[]): boolean => {
//   const reqs = classesNeeded[course]
//   if (visited[course]) return true;
//   if (reqs.length === 0) return false;

//   visited[course] = true;

//   while(reqs.length > 0) {
//     if (detectCycle(reqs[reqs.length-1], classesNeeded, visited)) return true;
//     reqs.pop();
//   }
//   visited[course] = false
//   return false
// }

// function canFinish(numCourses: number, prerequisites: number[][]): boolean {
//   if (prerequisites.length === 0) return true
//   const classesNeeded: number[][] = Array.from({length: numCourses}, () => []);
//   prerequisites.forEach(([course, prereq]) => {
//     classesNeeded[course].push(prereq);
//   })
//   const visited = Array.from({length: numCourses}, () => false);
//   for (const [course, _] of prerequisites) {
//     if(detectCycle(course, classesNeeded, visited)) return false
//   }
//   return true
// }

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const preMap: Map<number, number[]> = new Map();
  const visited: Map<number, boolean> = new Map();

  for (let i = 0; i < prerequisites.length; i++) {
    const [course, prerequisite] = prerequisites[i]
    if (!preMap.get(course)) {
      preMap.set(course, [prerequisite]);
    } else {
      const prereqs = preMap.get(course)!
      prereqs.push(prerequisite)
      preMap.set(course, prereqs)
    }
  }

  const dfs = (node: number) => {
    if (visited.get(node)) {
      return false;
    }
    if (preMap.get(node) !== undefined) {
      if (preMap.get(node)!.length === 0) {
        return true;
      }

      visited.set(node, true);
      for (let val of preMap.get(node)!) {
        if (!dfs(val)) {
          return false;
        }
      }
      visited.set(node, false);

      preMap.set(node, []);
    }
    return true;
  };

  for (let key of preMap.keys()) {
    if (!dfs(key)) {
      return false;
    }
  }
  return true;
}

const n = 5;
const prerequisites = [
  [0, 1],
  [0, 2],
  [1, 3],
  [1, 4],
  [3, 4],
];

canFinish(5, prerequisites);

export { canFinish };
