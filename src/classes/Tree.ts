import { CustomNode } from "./Node";

export class CustomTree {
  root: CustomNode;

  constructor() {
    this.root = new CustomNode();
  }

  insert(text: string){
    const stack = text.split('').reverse();
    
    let ptr: CustomNode = this.root;
    let newNode: CustomNode = new CustomNode();
    let char: string;
    while(stack.length > 0){
      char = stack.pop()!;
      ptr.children[char] = ptr.children[char] || newNode;
      ptr = ptr.children[char];
      newNode = new CustomNode();
    }
  }

  toString(){
    return this.root.toString();
  }

  search(text: string) {
    const stack = text.split('').reverse();

    let ptr: CustomNode = this.root;
    let char: string;
    let found: string = '';
    while(stack.length > 0 && ptr !== undefined) {
      char = stack.pop()!;
      ptr = ptr.children[char];
      if(ptr) found+=char;
    }
    return found;
  }
}