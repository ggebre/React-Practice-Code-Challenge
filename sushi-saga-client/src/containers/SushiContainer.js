import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushis.map((sushi,index )=> <Sushi plateEaten={props.platesEaten[index]} updateMyWalet={props.updateMyWalet} index={index} key={index} sushi = {sushi}/>)
        }
        <MoreButton updateIndex={props.updateIndex}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer