import BackgroundCircle from './Background';
import Eyes from './Eyes';
import FaceContainer from './FaceContainer';
import Mouth from './mouth';

const Face =({
    centerX,
    centerY,
    width,
    height,
    strokeWidth,
    eyeOffsetX,
    eyeOffsetY,
    eyeRadius,
    mouthRadius,
    mouthWidth
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
      <Mouth
        mouthRadius={mouthRadius}
        mouthWidth={mouthWidth}
      />

    </FaceContainer>)
}
export default Face;