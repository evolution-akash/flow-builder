"use client"

import { useCallback, useEffect, useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
} from "reactflow";

import { flowElements, initialNodes, nodeTypes } from "./Nodes/node";
import { initialEdges, edgeTypes } from "./Edges/edge";
import 'reactflow/dist/style.css';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { blockTypes, blockIcons } from "./types";
import { getLayoutedElements } from "./WorkflowUtils";
import { v4 as uuidv4 } from 'uuid';

function Flow() {
  const [nodes, setNodes , onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [elements, setElements] = useState<any[]>([...flowElements]);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [edgeId, setEdgeId] = useState('');

  useEffect(() => { 
    const layoutData = getLayoutedElements([...elements]);
    setNodes([...layoutData.filter((x: any) => x.position)]);
    setEdges([...layoutData.filter((x: any) => !x.position).map((x: any) => ({ ...x, data: { ...x.data, onAddNodeCallback } }))]);
  }, [elements]);

  const onAddNodeCallback = (id: string) => {
    const edgeIndex = elements.findIndex((edge: any) => edge.id === id);
    if(edgeIndex > -1) {
      setEdgeId(id);
    }
    setSheetOpen(true);
    return;
  }

  const onAddNode = (type: string) => {
    const edgeIndex = elements.findIndex((edge: any) => edge.id === edgeId);
    if(edgeIndex > -1) {
      const newNodeId = uuidv4();
      const newNode = {
        id: newNodeId,
        type: "position-logger",
        data: {
          title: "Source 1",
          description: "Automations Database contacts",
          icon: blockIcons[type]
        },
        style: {
          width: 250,
        },
        position: {x:0, y: 0},
      };
      const target = elements[edgeIndex].target;
      elements[edgeIndex].target = newNodeId;
      elements.push(newNode);

      const newEdge = {
        id: uuidv4(),
        source: newNodeId,
        target: target,
        type: "condition",
        data: { onAddNodeCallback },
      };

      elements.push(newEdge);
      setElements([...elements]);
    }
  }

  const sheetChange = (event: any) => {
    setSheetOpen(event);
    setEdgeId('');
  }

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

     <Sheet open={sheetOpen} onOpenChange={($event) => {sheetChange($event)}}>
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
                  <Card onClick={() => onAddNode(block.type)}>
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
