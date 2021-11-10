
import React from 'react';


type ShapeProps = {
  position?: 'top' | 'bottom'
  direction?: 'left' | 'right',
  color?: 'default' | 'dark' | 'alt'
}

const Shape = ({ position = 'top', direction = 'left', color = 'default'} : ShapeProps) => 
  <svg width="1440" height="154" viewBox="0 0 1440 154" fill="none"  preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-0 w-full right-0" style={{zIndex: -1}}>
    <path d="M0 0H1440L0 154V0Z" fill="#F8F0E8"/>
  </svg>

export default Shape;