class Noded {
  public val: number;
  public next: Noded | null | any;

  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

class Link {
  public head: Noded | null | any;
  public tail: Noded | null | any;
  public length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addTail(val: number) {
    let node = new Noded(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
    return this;
  }

  addHead(val: number) {
    let node = new Noded(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length++;
    return this;
  }

  removeTail() {
    if (!this.head) {
      return undefined;
    } else {
      let current = this.head;
      let newTail = current;

      while (current.next) {
        newTail = current;
        current = current.next;
      }

      this.tail = newTail;
      this.tail.next = null;

      this.length--;
      return this;
    }
  }

  removeHead() {
    if (!this.head) {
      return undefined;
    } else {
      let current = this.head;
      this.head = current.next;

      this.length--;
      return this;
    }
  }

  get(index: number) {
    if (index < 0 || index > this.length) {
      return undefined;
    } else {
      let count: number = 0;
      let current = this.head;

      while (index !== count) {
        current = current.next;
        count++;
      }

      return current;
    }
  }

  set(index: number, val: number) {
    let node = this.get(index);

    if (node) {
      node.val = val;
      return true;
    } else {
      return false;
    }
  }

  insert(index: number, val: number) {
    let node = new Noded(val);

    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return !!this.addHead(val);
    if (index === this.length) return !!this.addTail(val);

    let prev = this.get(index - 1);
    let temp = prev.next;

    prev.next = node;
    node.next = temp;

    this.length++;
    return true;
  }

  remove(index: number) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return !!this.removeHead();
    if (index === this.length) return !!this.removeTail();

    let prev = this.get(index - 1);
    let temp = prev.next;

    prev.next = temp.next;

    this.length--;
    return true;
  }
}

let link = new Link();
link.addTail(3);
link.addTail(5);
link.addTail(7);
link.addHead(9);
link.addTail(10);

console.clear();
console.log();
// console.log("remove: ", link.removeHead());
console.log(link.get(0));
console.log(link.insert(0, 22));
console.log(link.get(0));
console.log(link.remove(0));
console.log(link);
