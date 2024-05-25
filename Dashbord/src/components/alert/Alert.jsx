import React from 'react'

function Alert({title}) {

  return (

        <div
          className={`fixed bottom-8 left-8 bg-Primary p-2 rounded text-white`}
        >
          {title}
        </div>
      
  );
}

export default Alert
