import { removeElements } from "./linkedList/RemoveLinkedListElements";
import { ListNode } from "./linkedList/MergeTwo";

const list = new ListNode(1, new ListNode(2, new ListNode(6, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6, null)))))))
const resu = removeElements(list, 6)
console.log(resu);
