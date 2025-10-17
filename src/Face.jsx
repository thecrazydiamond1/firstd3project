import BackgroundCircle from './Background';
import Eyes from './Eyes';
import Mouth from './mouth';
import FaceContainer from './FaceContainer';
const Face =({
    centerX,
    centerY,
    width,
    height,
    strokeWidth,
    eyeOffsetX,
    eyeOffsetY,
    eyeRadius
})=>{
    return(
    <FaceContainer
      centerX={centerX}
      centerY={centerY}
      width={width}
      height={height}
    >
      <BackgroundCircle
        radius={centerY - strokeWidth / 2}
        strokeWidth={strokeWidth}
      />
      <Eyes
        eyeOffsetX={eyeOffsetX}
        eyeOffsetY={eyeOffsetY}
        eyeRadius={eyeRadius}
      />
      <Mouth />

    </FaceContainer>)
}
export default Face;