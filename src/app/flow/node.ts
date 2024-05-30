import type { Node, NodeTypes } from "reactflow";
import { PositionLoggerNode } from "./Nodes/PositionLoggerNode";
import { Empty } from "./Nodes/EmptyNode";

// export const initialNodes = [
//   { id: "a", type: "position-logger", position: { x: 0, y: 0 }, data: { label: "wire" }, dragging: false },
//   {
//     id: "b",
//     type: "position-logger",
//     position: { x: 0, y: 0 },
//     data: { label: "drag me!" },
//     dragging: false
//   },
//   { id: "c", type: "position-logger", position: { x: 0, y: 0 }, data: { label: "your ideas" }, dragging: false },
//   {
//     id: "d",
//     type: "position-logger",
//     position: { x: 0, y: 0 },
//     data: { label: "with React Flow" },
//     dragging: false
//   },
// ] satisfies Node[];

const position = { x: 0, y: 0 };
export const initialNodes = [
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
    mergeNodeOfParentId: "3",
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
  
export const nodeTypes = {
  "position-logger": PositionLoggerNode,
  "empty": Empty
  // Add any of your custom nodes here!
} satisfies NodeTypes;
