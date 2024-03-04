import React from 'react'

export default function Alert(props) {
const Capitalize=(word)=>{
    const low=word.toLowerCase();
    return low.charAt(0).toUpperCase()+low.slice(1);
}
  return (
    <div className='container' style={{height:'50px'}}>{props.alert &&  <>
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
              <strong>{Capitalize(props.alert.type)} : </strong>{props.alert.msg}
        
              </div>
              </>}
          </div>
  )
}
