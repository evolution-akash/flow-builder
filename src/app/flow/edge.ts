import type { Edge, EdgeTypes } from "reactflow";
import { Condition } from "./Edges/edges";

// export const initialEdges = [
//   { id: "a->c", type: "condition", source: "a", target: "c"},
//   { id: "b->d",type: "condition", source: "b", target: "d"},
//   { id: "c->d",type: "condition", source: "c", target: "d"},
// ] satisfies Edge[];

export const initialEdges = [
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
    data: {
      title: "Default condition",
      disabled: true,
    },
  },
  {
    id: "e3-5",
    source: "3",
    target: "5",
    type: "condition",
    data: {
      title: "Editable branch",
    },
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
    id: "e6-7",
    source: "6",
    target: "7",
    type: "condition",
  },
] satisfies Edge[];

// export const edgeTypes = {
//   // Add your custom edge types here!
//   custom: CustomEdge
// } satisfies EdgeTypes;

export const edgeTypes = {
  condition: Condition,
} satisfies EdgeTypes;