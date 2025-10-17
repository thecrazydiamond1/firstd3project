import Face from './Face';

const width = 960;
const height = 500;
const strokeWidth = 10;
const centerX = width / 2;
const centerY = height / 2;
const eyeOffsetX = 100;
const eyeOffsetY = 100;
const eyeRadius = 40;
const mouthRadius = 140;
const mouthWidth = 20;


const SingleFace = () => (
  <Face
    centerX={centerX}
    centerY={centerY}
    width={width}
    height={height}
    strokeWidth={strokeWidth}
    eyeOffsetX={eyeOffsetX}
    eyeOffsetY={eyeOffsetY}
    eyeRadius={eyeRadius}
    mouthRadius={mouthRadius}
    mouthWidth={mouthWidth}
  />
);
export default SingleFace;
