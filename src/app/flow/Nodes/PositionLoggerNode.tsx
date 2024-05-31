"use client"

import type {NodeProps} from "reactflow";

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
    <>
      <Handle type="target" position={Position.Top} />
      <Card
        className="relative max-w-[400px] dark:border-muted-foreground/70 nodrag"
      >
        <CardHeader className="flex flex-row items-center gap-4 p-6">
          <div>
            <Image
              src="/discord.svg"
              alt="Discord Logo"
              className="dark:invert"
              width={28}
              height={2}
              priority
            />
          </div>
          <div>
            <CardTitle className="text-md">{data.title}</CardTitle>
            <CardDescription>
              <p className="text-xs text-muted-foreground/50">
                <b className="text-muted-foreground/80">ID: </b>
              </p>
              <p>{data.description}</p>
            </CardDescription>
          </div>
        </CardHeader>
        <Badge
          variant="secondary"
          className="absolute right-2 top-2"
        >
          {'data.type'}
        </Badge>
        <div
          className={clsx('absolute left-3 top-4 h-2 w-2 rounded-full bg-green-500', {})}
        ></div>
      </Card>
       <Handle type="source" position={Position.Bottom} />
    </>
  );
}
