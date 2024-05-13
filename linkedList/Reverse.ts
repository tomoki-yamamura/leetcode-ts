
export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
 

function reverseList(
  head: ListNode | null,
  parent: ListNode | null = null,
): ListNode | null {
  if (!head) return parent;

  const next = head.next;
  head.next = parent;

  return reverseList(next, head);
};
const arr = [1, 2, 3, 4, 5];

// 配列から ListNode のインスタンスを生成
// let head: ListNode | null = null;
// let current: ListNode | null = null;
// for (let i = 0; i < arr.length; i++) {
//     const node = new ListNode(arr[i]);
//     if (head === null) {
//         head = node;
//         current = node;
//     } else {
//         current!.next = node;
//         current = node;
//     }
// }

// 生成された ListNode を確認する
// console.log(head);

export default reverseList;