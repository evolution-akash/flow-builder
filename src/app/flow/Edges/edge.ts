import type { Edge, EdgeTypes } from "reactflow";
import { Condition } from "./edges";

export const initialEdges: Edge[] = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    type: "condition",
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    type: "condition",
  },
  {
    id: "e3-4",
    source: "3",
    target: "4",
    type: "condition",
  },
  {
    id: "e3-5",
    source: "3",
    target: "5",
    type: "condition",
  },
  {
    id: "e3-9",
    source: "3",
    target: "9",
    type: "condition",
  },
  {
    id: "e4-6",
    source: "4",
    target: "6",
    type: "condition",
  },
  {
    id: "e5-6",
    source: "5",
    target: "6",
    type: "condition",
  },
  {
    id: "e9-6",
    source: "9",
    target: "6",
    type: "condition",
  },
  {
    id: "e6-7",
    source: "6",
    target: "7",
    type: "condition",
  },
]

export const edgeTypes = {
  condition: Condition,
} satisfies EdgeTypes;