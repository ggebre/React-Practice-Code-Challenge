import React, { Fragment } from 'react'

const Sushi = (props) => {
  const handleClick = () => {
    props.updateMyWalet(props.sushi.price, props.index)
  }
  
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => handleClick()}>
        { 
          /* Tell me if this sushi has been eaten! */ 
         props.plateEaten ?
            null
          :
            <img src={props.sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi