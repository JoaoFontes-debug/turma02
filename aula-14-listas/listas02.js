class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.previous =null;

    }
}

class DoubleLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    add(data){
        let newNode = new Node(data);

        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
            
        }else{
            this.tail.next = newNode;
            newNode.previous =  this.tail;
            this.tail = newNode; 
        }

        this.size++;

    }


    insertAt(data, index){
        

    }



}


let list = new DoubleLinkedList(); 
list.add("OI");
list.add("25");
list.add("MAÇÃ");
