// create linked list

class node{
    constructor (data)
    {
        this.data=data;         //create node 
        this.next=null;
    }
}

class SingleLinkedList{

    append(a)
    {
        let newNode = new node(a)
        if(this.head==null)
        {
            this.head = newNode
        }
        else {
            let current = this.head;
            while (current.next != null)
            {
                current=current.next
            }
            current.next=newNode
        }
    }

}

let data=new SingleLinkedList();

data.append(10)
data.append(20)
data.append(30)

console.log(data);


