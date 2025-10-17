import { range } from 'd3';
import Face from './FaceComponents/Face';

const width = 160;
const height = 160;
const strokeWidth = 6;
const centerX = width / 2;
const centerY = height / 2;
const eyeOffsetX =25;
const eyeOffsetY = 20;
const eyeRadius = 5;
const mouthRadius =30;
const mouthWidth = 7;

const array = range(6*5)

const ManyFaces = () =>array.map(()=>(
  <Face
    centerX={centerX}
    centerY={centerY}
    width={width}
    height={height}
    strokeWidth={strokeWidth+Math.random()*3}
    eyeOffsetX={eyeOffsetX+Math.random()*3}
    eyeOffsetY={eyeOffsetY+Math.random()*15}
    eyeRadius={eyeRadius+Math.random()*10}
    mouthRadius={mouthRadius+Math.random()*10}
    mouthWidth={mouthWidth+Math.random()*9}
  />
));
export default ManyFaces;
