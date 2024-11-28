// 5. Find Middle Element
//    Write a function to find the middle element of a singly linked list.
//    Input: Linked list with values [1 -> 2 -> 3 -> 4 -> 5]
//    Output: 3

function middle(head)
{
    let fast=head;
    let slow=head;

    while(fast!=null && fast.next!=null)
    {
        slow=slow.next;
        fast=fast.next.next;
    }
    return slow;

   }

   console.log(middle(head));
   



