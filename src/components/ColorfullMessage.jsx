import React from 'react';

const ColorfullMessage = (props) => {
    const { color, children } = props;
    const contentStyle = {
        color,
        fontSize: '17px',
    }
    return (
      <>
        <p style={contentStyle}>{children}</p>
          alskfj
      </>
    );
}
  
export default ColorfullMessage;
  