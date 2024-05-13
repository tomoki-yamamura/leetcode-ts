import reverseList, { ListNode } from "./linkedList/Reverse";

const arr = [1, 2, 3, 4, 5];

let head: ListNode | null = null;
let current: ListNode | null = null;
for (let i = 0; i < arr.length; i++) {
    const node = new ListNode(arr[i]);
    if (head === null) {
        head = node;
        current = node;
    } else {
        current!.next = node;
        current = node;
    }
}

const result = reverseList(head, null);
console.log(result);
