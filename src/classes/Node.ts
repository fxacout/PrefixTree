export class CustomNode {
  children: Record<string, CustomNode>;

  constructor() {
    this.children = {};
  }

  toString(){
    let out = '';
    for( let [key, children] of Object.entries(this.children)) {
      out += `${key}:${children.toString()}`;
    }
    return out;
  }
}