"use client"

import type { NodeProps } from "reactflow";

import React from "react";
import { Handle, Position } from "reactflow";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import clsx from "clsx";
import Image from "next/image";

export type PositionLoggerNodeData = {
  label?: string;
};

export function PositionLoggerNode({
  xPos,
  yPos,
  data,
}: NodeProps<any>) {
  const x = `${Math.round(xPos)}px`;
  const y = `${Math.round(yPos)}px`;

  return (
    <div className="flex justify-center w-72 h-20">
      <Handle type="target" position={Position.Top} isConnectable={false} style={{
        border: '0px solid #b1b1b7',
        borderRadius: 0,
        width: 2,
        minWidth: 2,
        background: '#b1b1b7',
      }} />
      <Card
        className="relative dark:border-muted-foreground/70 shadow-md"
      >
        <div className="overlay"></div>
        <CardHeader className="flex flex-row items-center gap-4 p-4">
          <div>
            {
              data.icon ? <div dangerouslySetInnerHTML={{ __html: data.icon }}></div> :
                <Image
                  src="/discord.svg"
                  alt="Discord Logo"
                  className="dark:invert"
                  width={28}
                  height={2}
                  priority
                />
            }
          </div>
          <div>
            <CardTitle className="text-md">{data.title}</CardTitle>
            <CardDescription>
              {data.description}
            </CardDescription>
          </div>
        </CardHeader>
        <Badge
          variant="secondary"
          className="absolute right-2 top-2"
        >
          {'data.type'}
        </Badge>
        {/* <div
          className={clsx('absolute left-3 top-4 h-2 w-2 rounded-full bg-green-500', {})}
        ></div> */}
      </Card>
      <Handle type="source" position={Position.Bottom} isConnectable={false} style={{
        border: '0px solid #b1b1b7',
        borderRadius: 0,
        width: 2,
        minWidth: 2,
        background: '#b1b1b7',
      }} />
    </div>
  );
}
