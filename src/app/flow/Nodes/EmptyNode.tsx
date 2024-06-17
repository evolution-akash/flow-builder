import { Handle, Position } from "reactflow";

export const Empty = (props: any) => (
  <div className="flex justify-center w-72">
    <Handle
      type="target"
      position={Position.Top}
      className="NodePort"
      isConnectable={false}
      style={{
        border: '0px solid #b1b1b7',
        borderRadius: 0,
        width: 2,
        minWidth: 2,
        background: '#b1b1b7',
      }}
    />
    <div className="EmptyNodeInnerWrapper"></div>
    <Handle
      type="source"
      position={Position.Bottom}
      className="NodePort"
      isConnectable={false}
      style={{
        border: '0px solid #b1b1b7',
        borderRadius: 0,
        width: 2,
        minWidth: 2,
        background: '#b1b1b7',
      }}
    />
  </div>
);