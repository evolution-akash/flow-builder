"use client"

import { useCallback, useEffect } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
} from "reactflow";

import { initialNodes, nodeTypes } from "./Nodes/node";
import { initialEdges, edgeTypes } from "./Edges/edge";
import 'reactflow/dist/style.css';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { blockTypes } from "./types";
import { getLayoutedElements } from "./WorkflowUtils";

function Flow() {
  const [nodes, setNodes , onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => { 
    const layoutData = getLayoutedElements([...initialNodes, ...initialEdges]);
    setNodes([...layoutData.filter((x: any) => x.position)]);
    setEdges([...layoutData.filter((x: any) => !x.position)]);
  }, []);

  const addNode = () => {
      const id = (new Date().getTime()).toString();
  }

  const onDragOver = useCallback((event: any) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'move'
  }, [])

  return (
    <div style={{ height: '100%' }}>
      <ReactFlow
        nodes={nodes}
        nodeTypes={nodeTypes}
        edges={edges}
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
