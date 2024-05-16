import { ListNode } from "./MergeTwo";
export default function reorderList(head: ListNode | null): void {
  let slow = findMiddle(head) // 
  let head2 = reverse(slow!.next) // 
  slow!.next = null// to prevent cycle after reversing
  
      
  merge(head, head2) // 
};

function findMiddle(head:ListNode|null):ListNode|null{
  let slow=head; //
  let fast=head; //
  
  while(fast && fast.next){
      slow=slow!.next;
      fast= fast?.next?.next
  }
  return slow
}
function reverse(head: ListNode | null): ListNode | null{
  let previous=null
  let current=head;
      
  while(current){
      let next=current.next;
      current.next=previous;
      previous=current;
      current=next;
  }
  return previous
}
      
function merge(headA: ListNode | null,headB: ListNode | null){
  while(headB){
      let next=headA!.next;
      headA!.next=headB;
      headA=headB;
      headB=next;
  }
}