var middleNode = function(head) {
    let head=0;
    let subhead=0;

    while(head!=null && subhead!=null)
    {     
    head=head.next;
    subhead=subhead.next.next;
    }
    return head;
};