export function customSortString(order: string, s: string): string {
  const map = getSortMap(s)

  let result = ""
  for(const o of order) {
    const id = o.charCodeAt(0) - 'a'.charCodeAt(0)
    if (map.has(id)) {
      const stringFromMap = String.fromCharCode(id + 'a'.charCodeAt(0))
      result = result + stringFromMap.repeat(map.get(id))
      map.delete(id)
    }
  }
  map.forEach((_, id) => {
    const stringFromMap = String.fromCharCode(id + 'a'.charCodeAt(0))
    result = result + stringFromMap.repeat(map.get(id))
  })
  return result
};

function getSortMap(s: string) {
  const map = new Map()
  for(const string of s) {
    const charCode = string.charCodeAt(0) - 'a'.charCodeAt(0)
    if(!map.has(charCode)) {
      map.set(charCode, 1)
    } else {
      map.set(charCode, (map.get(charCode)+1))
    }
  }

  return map
}
 