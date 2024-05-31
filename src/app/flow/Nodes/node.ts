import type { Node, NodeTypes } from "reactflow";
import { PositionLoggerNode } from "./PositionLoggerNode";
import { Empty } from "./EmptyNode";

const position = { x: 0, y: 0 };

export const initialNodes: Node[] = [
  {
    id: "1",
    type: "position-logger",
    data: {
      title: "Source",
      description: "Automations Database contacts",
    },
    style: {
      width: 250,
    },
    position,
  },
  {
    id: "2",
    type: "position-logger",
    data: {
      title: "Email",
      description: "Send message to contacts.",
    },
    style: {
      width: 250,
    },
    position,
  },
  {
    id: "3",
    type: "position-logger",
    data: {
      title: "Wait then Check",
      description: "Check behaviour of the contacts.",
    },
    style: {
      width: 250,
    },
    position,
  },
  {
    id: "4",
    type: "position-logger",
    data: {
      title: "Email",
      description: "Send message to contacts.",
    },
    style: {
      width: 250,
    },
    position,
  },
  {
    id: "5",
    type: "position-logger",
    data: {
      title: "SMS",
      description: "Send SMS to contacts.",
    },
    style: {
      width: 250,
    },
    position,
  },
  {
    id: "6",
    type: "empty",
    data: {},
    position,
    style: {
      width: 250,
    },
  },
  {
    id: "7",
    type: "position-logger",
    data: {
      title: "End",
      description: "Automation ends.",
    },
    style: {
      width: 250,
    },
    position,
  },
];
  
export const nodeTypes = {
  "position-logger": PositionLoggerNode,
  "empty": Empty
  // Add any of your custom nodes here!
} satisfies NodeTypes;
