function simplifyPath(path: string): string {
  const splitted = path.split("/").filter(i => i !== "")
  const result: string[] = []

  splitted.forEach((v, i) => {
    if (v === "..") {
      result.pop()
    }
    if (v !== ".." && v !== ".") {
      result.push(v)
    }
  })
  return "/" + result.join('/')
};

// const resu = 
// simplifyPath("/home/")

// console.log(resu);
