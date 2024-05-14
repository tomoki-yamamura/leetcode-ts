import { mergeTwoLists, ListNode } from "./linkedList/MergeTwo";

const list1 = new ListNode(1, new ListNode(2, new ListNode(4, null)))
const list2 = new ListNode(1, new ListNode(3, new ListNode(4, null)))

const resu = mergeTwoLists(list1, list2)
console.log(resu);
