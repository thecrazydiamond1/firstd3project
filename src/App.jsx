import React from 'react';
import ReactDOM from 'react-dom';

import BackgroundCircle from './Background';
import Eyes from './Eyes';
import Mouth from './mouth';

const width = 960;
const height = 500;
const strokeWidth = 10;
const centerX = width / 2;
const centerY = height / 2;
const eyeOffsetX = 100;
const eyeOffsetY = 100;
const eyeRadius = 40;


const App = () => (
  <svg width={width} height={height}>
    <g transform={`translate(${centerX}, ${centerY})`}>
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
    </g>
  </svg>
);
export default App;
