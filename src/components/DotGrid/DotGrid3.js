import React from 'react';
import './DotGrid.css';

export default  ({
  width = 3,
  height = 5,
  space = 50,
  radius = 3,
  fill = '#EF4358',
}) => {
  const viewWidth = width * radius * 2 + (width - 1) * (space - radius * 2);
  const viewHeight = height * radius * 2 + (height - 1) * (space - radius * 2);
  let dots = [];

  for (let indexWidth = 0; indexWidth < width; indexWidth++) {
    for (let indexHeight = 0; indexHeight < height; indexHeight++) {
      dots.push(
        <circle
          key={`${indexWidth}-${indexHeight}`}
          cx={radius + indexWidth * space}
          cy={radius + indexHeight * space}
          r={radius}
        />
      );
    }
  }

  return (
    <svg
      width={viewWidth}
      height={viewHeight}
      viewBox={`0 0 ${viewWidth} ${viewHeight}`}
      version="1.1"
      className="DotGrid"
    >
      <g fill={fill}>{dots}</g>
    </svg>
  );
};