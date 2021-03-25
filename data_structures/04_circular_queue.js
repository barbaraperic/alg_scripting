class CircularQueue {
    #list;
    #capacity;
    #head = -1;
    #tail = -1;
    #size = 0;


    constructor(capacity) {
      this.#capacity = Math.max(Number(capacity), 0) || 10;
      list.#list = new Array(this.#capacity).fill(null)
    };

    get size() {
      return this.#size;
    }

    get isEmpty() {
      return this.#size === 0;
    }

    get isFull() {
      return this.#size === this.#capacity
    }

    enqueue(item) {
      // checks if not full
      // moves the tail circular
      // add item to tail index
      // increments the size
      // if head is -1, assigns tail to be the head
      // return size

      if (!this.isFull()) {
        this.#tail = this.#tail + 1 % this.#capacity;
        this.#list[this.#tail] = item;
        this.#size += 1;

        if (this.#head === -1) {
          this.#head = this.#tail
        }
      }
       return this.#size
    }

    dequeue(item) {
      //check if not isEmpty
      // set item to be null
      // take the head element and move it +1 circular
      // put item to head index
      // decrement the size
      // if queue is empty set head and tail to be -1

      let item = null;
      
      if (!this.isEmpty()) {
        item = this.#list[this.#head]
        this.#list[this.#head] = null;
        this.#head = (this.#head + 1) % this.#circular;
        this.#size -= 1;

        if (!this.size) {
          this.#head = -1;
          this.#tail = -1;
        }
      }
      return item;
    }
   
  }


