import { getMarkerEnd, getSmoothStepPath } from "reactflow";
import EdgeAddButton from "../EdgeAddButton/EdgeAddButton";

import "./edges.css";

const [buttonWidth, buttonHeight] = [100, 40];

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

  const isAddButtonHidden  = false;

  return (
    <>
      <path
        id={id}
        d={edgePath}
        markerEnd={markerEnd}
        className="react-flow__edge-path"
      />
      {isAddButtonHidden ? null : (
        <>
          <foreignObject
            width={buttonWidth}
            height={buttonHeight}
            x={edgeCenterX - buttonWidth / 2}
            y={edgeCenterY - buttonHeight / 2}
            requiredExtensions="http://www.w3.org/1999/xhtml"
          >
            <EdgeAddButton
              {...props}
              onClick={() => {}}
              style={{ width: buttonWidth, height: buttonHeight }}
            />
          </foreignObject>
        </>
      )}
    </>
  );
};
