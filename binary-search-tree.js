class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (val < current.val) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }

  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    const insertHelper = (node) => {
      if (val < node.val) {
        if (!node.left) {
          node.left = newNode;
          return this;
        }
        return insertHelper(node.left);
      } else {
        if (!node.right) {
          node.right = newNode;
          return this;
        }
        return insertHelper(node.right);
      }
    };

    insertHelper(this.root);
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (!this.root) return undefined;
    let current = this.root;
    while (current) {
      if (val === current.val) return current;
      if (val < current.val) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if (!this.root) return undefined;

    const findHelper = (node) => {
      if (val === node.val) return node;
      if (val < node.val) {
        if (!node.left) return undefined;
        return findHelper(node.left);
      } else {
        if (!node.right) return undefined;
        return findHelper(node.right);
      }
    };

    return findHelper(this.root);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let visited = [];
    const traverse = (node) => {
      visited.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return visited;

  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let visited = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      visited.push(node.val);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return visited;

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let visited = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.val);
    };
    traverse(this.root);
    return visited;

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let visited = [];
    let queue = [this.root];
    while (queue.length) {
      let current = queue.shift();
      visited.push(current.val);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return visited;

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {
    if (!this.root) return undefined;
    let current = this.root;
    let parent = null;
    let direction = null;
    while (current) {
      if (val === current.val) {
        if (!current.left && !current.right) {
          if (!parent) {
            this.root = null;
          } else {
            parent[direction] = null;
          }
          return current;
        }
        if (!current.left) {
          if (!parent) {
            this.root = current.right;
          } else {
            parent[direction] = current.right;
          }
          return current;
        }
        if (!current.right) {
          if (!parent) {
            this.root = current.left;
          } else {
            parent[direction] = current.left;
          }
          return current;
        }
        let successor = current.right;
        while (successor.left) {
          successor = successor.left;
        }
        let temp = current.val;
        current.val = successor.val;
        successor.val = temp;
        val = successor.val;
        parent = current;
        direction = 'right';
        current = current.right;
      } else if (val < current.val) {
        parent = current;
        direction = 'left';
        current = current.left;
      } else {
        parent = current;
        direction = 'right';
        current = current.right;
      }
    }
    return undefined;

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
