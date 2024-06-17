import { getMarkerEnd, getSmoothStepPath } from "reactflow";
import EdgeAddButton from "../EdgeAddButton/EdgeAddButton";

import "./edges.css";
import { initialNodes } from "../Nodes/node";

const [buttonWidth, buttonHeight] = [30, 30];

export const EdgePath = (props: any) => {
  const {
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    arrowHeadType,
    markerEndId,
    data,
  } = props;
  const markerEnd = getMarkerEnd(arrowHeadType, markerEndId);
  const targetNodeType = initialNodes.find(node => node.id === props.target)?.type;

  //   const [edgeCenterX, edgeCenterY] = getEdgeCenter({
  //     sourceX,
  //     sourceY,
  //     targetX,
  //     targetY,
  //   });

  const [edgePath, edgeCenterX, edgeCenterY] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  console.log(targetX, sourceX), targetNodeType
  const customEdgePath = `
  M ${sourceX} ${sourceY - 60}
  L ${sourceX} ${sourceY + 60}
  H ${targetX}  
  L ${targetX} ${targetY}
`;
  const isAddButtonHidden = false;

  return (
    <>
      <path
        id={id}
        d={customEdgePath}
        className="react-flow__edge-path"
        style={{ strokeLinecap: 'round', strokeWidth: 2 }}
      />
      {isAddButtonHidden ? null : (
        <>
          {targetNodeType !== 'condition' ?
            <foreignObject
              width={buttonWidth}
              height={buttonHeight}
              x={sourceX - buttonWidth / 2}
              y={targetNodeType !== 'empty' ? targetY - (targetY - sourceY + buttonHeight) / 2 : sourceY + 10}
              requiredExtensions="http://www.w3.org/1999/xhtml"
            >
              <EdgeAddButton
                {...props}
                onClick={() => { }}
                style={{ width: buttonWidth, height: buttonHeight }}
              />
            </foreignObject>
            : ''}
        </>
      )}
    </>
  );
};
