import React from 'react';

const ChartLine = ({ trend, height = 30 }) => {
  // Generate random points for the chart line
  const generatePoints = () => {
    const points = [];
    const numPoints = 10;
    let prevY = 50;
    
    for (let i = 0; i < numPoints; i++) {
      const x = (i / (numPoints - 1)) * 100;
      // Generate a random y value that's not too far from the previous one
      const randomChange = Math.random() * 20 - 10;
      let y = prevY + randomChange;
      // Keep y within bounds
      y = Math.max(10, Math.min(90, y));
      prevY = y;
      points.push(`${x},${y}`);
    }
    
    // For uptrend, make sure the last point is higher than the first
    if (trend === 'up' && prevY < 50) {
      points[points.length - 1] = `100,${30}`;
    } else if (trend === 'down' && prevY > 50) {
      points[points.length - 1] = `100,${70}`;
    }
    
    return points.join(' ');
  };

  const color = trend === 'up' ? '#4ade80' : '#ef4444';
  
  return (
    <svg width="100%" height={height} viewBox="0 0 100 100" preserveAspectRatio="none">
      <polyline
        points={generatePoints()}
        fill="none"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  );
};

export default ChartLine;