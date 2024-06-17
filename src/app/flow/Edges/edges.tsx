import { getMarkerEnd, getSmoothStepPath } from "reactflow";
import EdgeAddButton from "../EdgeAddButton/EdgeAddButton";

import "./edges.css";

const [buttonWidth, buttonHeight] = [30, 30];

export const Condition = (props: any) => {
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

  console.log(targetX, sourceX)
  const customEdgePath = `
  M ${sourceX} ${sourceY}
  L ${sourceX} ${sourceY + 35}
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
          <foreignObject
            width={buttonWidth}
            height={buttonHeight}
            x={targetX - buttonWidth / 2}
            y={Math.floor(targetX) === Math.floor(sourceX) ? (targetY - (targetY - sourceY) / 2) : targetY - ((targetY - sourceY) / 2)}
            requiredExtensions="http://www.w3.org/1999/xhtml"
          >
            <EdgeAddButton
              {...props}
              onClick={() => { }}
              style={{ width: buttonWidth, height: buttonHeight }}
            />
          </foreignObject>
        </>
      )}
    </>
  );
};
