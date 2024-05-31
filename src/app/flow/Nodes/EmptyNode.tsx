import { Handle, Position } from "reactflow";

export const Empty = (props: any) => (
  <div className="NodeWrapper">
    <Handle
      type="target"
      position={Position.Top}
      className="NodePort"
      style={{ border: '0px solid #b1b1b7',
        borderRadius: 0,
        width: 1,
        minWidth: 1,
        background: '#b1b1b7',
      }}
    />
    <div className="EmptyNodeInnerWrapper"></div>
    <Handle
      type="source"
      position={Position.Bottom}
      className="NodePort"
      style={{ border: '0px solid #b1b1b7',
        borderRadius: 0,
        width: 1,
        minWidth: 1,
        background: '#b1b1b7',
      }}
    />
  </div>
);