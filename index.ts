import { addTwoNumbers } from "./linkedList/AddtoNumber";
import { ListNode } from "./linkedList/MergeTwo";
import { mergeTwoLists } from "./linkedList/MergeTwoSorted";

const list1 = new ListNode(2, new ListNode(4, new ListNode(3)))
const list2 = new ListNode(5, new ListNode(6, new ListNode(4)))
const resu = addTwoNumbers(list1, list2)
console.log(resu);
