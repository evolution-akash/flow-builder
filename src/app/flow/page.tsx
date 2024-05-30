"use client"

import { useCallback, useEffect, useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  addEdge,
  useNodesState,
  useEdgesState,
  OnConnect,
  ReactFlowProvider
} from "reactflow";

import { initialNodes, nodeTypes } from "./node";
import { initialEdges, edgeTypes } from "./edge";
import 'reactflow/dist/style.css';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { blockTypes } from "./types";
import { getLayoutedElements } from "./WorkflowUtils";

function Flow() {
  // const [nodes, setNodes , onNodesChange] = useNodesState(initialNodes);
  // const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [layoutElements, setLayoutElements] = useState([]);
  // const onConnect: OnConnect = useCallback(
  //   (connection: any) => setEdges((edges: any) => addEdge(connection, edges)),
  //   [setEdges]
  // );

  useEffect(() => {
    setLayoutElements(getLayoutedElements([...initialNodes, ...initialEdges]));

    // setNodes(layoutElements.filter((x: any) => x.position));
    // setEdges(layoutElements.filter((x: any) => !x.position));
  }, []);

  const layoutNodes = layoutElements.filter((x: any) => x.position);
  const layoutEdges = layoutElements.filter((x: any) => !x.position);

  // blockTypes: any[] = blockTypes;

  const addNode = () => {
      const id = (new Date().getTime()).toString();
      // nodes.push({
      //     id: id,
      //     type: "output",
      //     position: { x: 0, y: 200 },
      //     data: { label: "with React Flow" },
      //   })
      //   edges.push({ id: `d->${id}`, source: "d", target: `${id}`},)
      //   console.log(nodes, edges);
      //   setNodes(nodes);
      //   setEdges(edges);
  }

  const onDragOver = useCallback((event: any) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'move'
  }, [])

  return (
    <div style={{ height: '100%' }}>
      <ReactFlowProvider>
        <ReactFlow
          nodes={layoutNodes}
          nodeTypes={nodeTypes}
          edges={layoutEdges}
          edgeTypes={edgeTypes}
          onDragOver={onDragOver}
          // onNodesChange={onNodesChange}
          // onEdgesChange={onEdgesChange}
          // onConnect={onConnect}
          panOnScroll
          panOnDrag
          fitView
        >
          <Background />
          <MiniMap zoomable
                  pannable/>
          <Controls />
        </ReactFlow>
      </ReactFlowProvider>

     <Sheet>
        <SheetTrigger className="absolute top-3 right-3" asChild>
          <Button variant="outline">Open</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <div className="grid grid-cols-2 gap-4 py-4 items-center">
            {
              blockTypes.map((block, BI) => {
                return <div key={BI} onClick={() => addNode()}>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-center gap-4">
                      <div>
                        <CardTitle className="text-md">
                          <div className="flex justify-center" dangerouslySetInnerHTML={{__html: block.icon}}></div>
                        </CardTitle>
                        <CardDescription>
                          {block.title}
                        </CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                </div>
              })
            }
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default Flow;
