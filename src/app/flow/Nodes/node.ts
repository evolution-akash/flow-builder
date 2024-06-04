import type { Node, NodeTypes } from "reactflow";
import { PositionLoggerNode } from "./PositionLoggerNode";
import { Empty } from "./EmptyNode";
import { initialEdges } from "../Edges/edge";

const position = { x: 0, y: 0 };

export const initialNodes: Node[] = [
  {
    id: "1",
    type: "position-logger",
    data: {
      title: "Source",
      description: "Automations Database contacts",
      stats: {
        started: 0,
      },
    },
    position,
  },
  {
    id: "2",
    type: "position-logger",
    data: {
      title: "Email",
      description: "Send message to contacts.",
      stats: {
        running: 18,
        error: 1,
      },
    },
    position,
  },
  {
    id: "3",
    type: "position-logger",
    data: {
      title: "Wait then Check",
      description: "Check behaviour of the contacts.",
      stats: {
        running: 17,
      },
    },
    position,
  },
  {
    id: "4",
    type: "position-logger",
    data: {
      title: "Email",
      description: "Send message to contacts.",
      stats: {
        running: 3,
      },
    },
    position,
  },
  {
    id: "5",
    type: "position-logger",
    data: {
      title: "SMS",
      description: "Send SMS to contacts.",
      stats: {
        running: 14,
      },
    },
    position,
  },
  {
    id: "6",
    type: "empty",
    data: {},
    position,
    height: 6,
  },
  {
    id: "7",
    type: "position-logger",
    data: {
      title: "End",
      description: "Automation ends.",
      stats: {
        completed: 14,
      },
    },
    position,
  },
];

export const flowElements = [...initialNodes, ...initialEdges];
  
export const nodeTypes = {
  "position-logger": PositionLoggerNode,
  "empty": Empty
  // Add any of your custom nodes here!
} satisfies NodeTypes;
