import React, { useEffect } from 'react';
import './Button.css';

// export default ({caption = "Shared Button"}) => <div className="shared-wrap"><button className='shared-btn'>{caption}</button><br/><h1>这是remote</h1></div>;
function Button(props) {
  // console.log('props=========shared=======');
  // console.log(props);
  useEffect(() => {
    console.log('props=========shared====1===');
    console.log(props);
  }, []);
  const caption = 'Shared Button';
  return (
    <div className="shared-wrap">
      <button className="shared-btn">{caption}</button>
      <br />
      <h1>这是remote</h1>
    </div>
  );
}

export default Button;
