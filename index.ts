import { ListNode } from "./linkedList/MergeTwo";
import removeNthFromEnd from "./linkedList/RemoveNthNode";

const list1 = new ListNode(1, new ListNode(2, new ListNode(4, null)))
// const list2 = new ListNode(1, new ListNode(3, new ListNode(4, null)))

const resu = removeNthFromEnd(list1, 1)
console.log(resu);
