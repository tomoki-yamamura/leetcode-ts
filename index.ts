import { ListNode } from "./linkedList/MergeTwo";
import { mergeTwoLists } from "./linkedList/MergeTwoSorted";

const list1 = new ListNode(1, new ListNode(2, new ListNode(4)))
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)))
const resu = mergeTwoLists(list1, list2)
console.log(resu);
