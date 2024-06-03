import dagre from "dagre";
// import _ from "lodash";
import { Connection, Edge, Node, isNode, Position } from 'reactflow';

const nodeWidth = 250;
const nodeHeight = 80;

const getLayoutedElements = (_elements: any) => {
//   const elements = _.cloneDeep(_elements);
  const elements = [..._elements];
  const dagreGraph = new dagre.graphlib.Graph({directed: true, compound: true, multigraph: true});

  dagreGraph.setDefaultEdgeLabel(() => ({}));
  dagreGraph.setGraph({ rankdir: "TB", ranksep: 100});

  elements.forEach((el: any) => {
    if (isNode(el)) {
      dagreGraph.setNode(el.id, {
        width: el.width || nodeWidth,
        height: el.height || nodeHeight,
      });
    } else {
      dagreGraph.setEdge(el.source, el.target);
    }
  });

  dagre.layout(dagreGraph);

  return elements.map((el: Node | Edge | Connection) => {
    if (isNode(el)) {
      const nodeWithPosition = dagreGraph.node(el.id);
      el.targetPosition = Position.Top;
      el.sourcePosition = Position.Bottom;
      el.position = {
        x:
          nodeWithPosition.x -
          (el.width || nodeWidth) / 2 +
          Math.random() / 1000,
        y: nodeWithPosition.y - (el.height || nodeHeight) / 2,
      };
    }
    return el;
  });
};

export { getLayoutedElements };
