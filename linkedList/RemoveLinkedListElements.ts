import { ListNode } from "./MergeTwo";

export function removeElements(head: ListNode | null, val: number): ListNode | null {
  let dummy = new ListNode(0, head)
  let current: ListNode | null = dummy;
  while(current.next) {
    if (current.next.val === val) {
      current.next = current.next.next
    } else {
      current = current.next
    }
  }
  return dummy.next
};

// function removeElements(head: ListNode | null, val: number): ListNode | null {
//   // 先頭のノードが削除対象の場合の処理
//   while (head && head.val === val) {
//     head = head.next; // 先頭を進める
//   }

//   let current: ListNode | null = head;

//   // リストを走査し、削除対象のノードを見つけた場合の処理
//   while (current && current.next) {
//     if (current.next.val === val) {
//       current.next = current.next.next; // ノードを削除
//     } else {
//       current = current.next; // ポインタを進める
//     }
//   }

//   return head; // 更新されたリストの先頭を返す
// }
