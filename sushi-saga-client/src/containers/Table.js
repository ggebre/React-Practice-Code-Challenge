import React, { Fragment } from 'react'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => <div className="empty-plate" key={index}  style={{ top: -7 * index }}/>)
  }
  
  return (
    
    <Fragment>
      <h1 className="remaining">
        You have: ${ props.myWalet } remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            /* 
               renderPlates takes an array 
               and renders an empty plate
               for every element in the array
            */
           renderPlates(props.emptyPlates)
            
            // renderPlates([])
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table