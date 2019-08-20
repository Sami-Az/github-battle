import React from 'react';

export default function Hover ({ children }) {
  const [hovering, setHovering] = React.useState(false);
 
  const onMouseOver = () => { setHovering(true) }
  const onMouseOut = () => { setHovering(false) }
  
  return (
    <div 
      onMouseOver={onMouseOver} 
      onMouseOut={onMouseOut}
    >
      {children(hovering)}
    </div>
  )
}
