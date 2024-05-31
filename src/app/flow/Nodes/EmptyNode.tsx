import { Handle, Position } from "reactflow";

export const Empty = (props: any) => (
  <div className="NodeWrapper">
    <Handle
      type="target"
      position={Position.Top}
      className="NodePort"
      isConnectable={false}
      // style={{ opacity: 0 }}
    />
    <div className="EmptyNodeInnerWrapper"></div>
    <Handle
      type="source"
      position={Position.Bottom}
      className="NodePort"
      isConnectable={false}
      style={{ opacity: 0 }}
    />
  </div>
);