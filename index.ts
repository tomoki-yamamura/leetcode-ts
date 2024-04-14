type hoge = {
  foo: string,
  bar: number
}

type newHoge = Partial<hoge>

type primaryColors = "red" | "green" | "blue"
type RGB = [red: number, green: number, blue: number]

type newC = Record<primaryColors, RGB>