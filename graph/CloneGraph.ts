
// Definition for Node.
class Node {
    val: number
    neighbors: Node[]
    constructor(val?: number, neighbors?: Node[]) {
        this.val = (val===undefined ? 0 : val)
        this.neighbors = (neighbors===undefined ? [] : neighbors)
    }
}
 

const cloned = new Map<Node, Node>();

function cloneGraph(node: Node | null): Node | null {
	if (!node) {
		return null;
	}

	if (cloned.has(node)) {
		return cloned.get(node)!;
	}

	const newNode = new Node(node.val);
	cloned.set(node, newNode);
	newNode.neighbors = node.neighbors.map((neighbor) => cloneGraph(neighbor)!);
                                           
	return newNode;
}
const nodes: Node[] = [];
for (let i = 0; i < 4; i++) {
    nodes.push(new Node(i + 1));
}
nodes[0].neighbors.push(nodes[1], nodes[3]);
nodes[1].neighbors.push(nodes[0], nodes[2]);
nodes[2].neighbors.push(nodes[1], nodes[3]);
nodes[3].neighbors.push(nodes[0], nodes[2]);

cloneGraph(nodes[0])

export default cloneGraph;