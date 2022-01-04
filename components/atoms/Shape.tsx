import React from 'react';

type ShapeProps = {
  direction?: 'left' | 'right';
  color?: string;
};

/**
 * 
 * @returns 
 * {
  // position = 'top',
  // direction = 'left',
  // color = 'default',
}: ShapeProps
 */

const Shape = ({
  color = 'orange-100',
  direction = 'left',
}: ShapeProps): JSX.Element => {
  // const colorMap = {
  //   light: '#F8F0E8',
  //   dark: '#31334D',
  //   alt: '#D0D3CA',
  // };

  // const fill = colorMap[color];

  return (
    <svg
      width="1440"
      height="154"
      viewBox="0 0 1440 154"
      fill="none"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`relative left-0 w-full right-0 fill-current text-${color}`}
      style={{ zIndex: 1 }}
    >
      {direction === 'right' ? (
        <path d="M0 0H1440L0 154V0Z" />
      ) : (
        <path d="M1440 154L0 154L1440 0L1440 154Z" />
      )}
    </svg>
  );
};

export default Shape;
