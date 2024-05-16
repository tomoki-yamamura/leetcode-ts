import { ListNode } from "./linkedList/MergeTwo";
import reorderList from "./linkedList/ReorderList";

const list1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))
// const list2 = new ListNode(1, new ListNode(3, new ListNode(4, null)))

const resu = reorderList(list1)
console.log(resu);
