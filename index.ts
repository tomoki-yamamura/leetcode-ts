// 1か2か3が入る
type hoge = 1 | 2 | 3;

type A = {
  foo: number;
  bar: string;
};
type B = { piyo: string };
type C = { baz: boolean };
type AorB = A | B; // { foo: number | string; bar?: string }
type AorC = A | C; // { foo: number; bar?: string } or { baz: boolean }
const typeB: AorB = { foo: 1, bar: "a" };
