import React from 'react'
import Form from '../components/Form'

const FormContainer = (props) => {
 return (
    <div>
    {
      true 
      ?
      <Form onWaletChange={props.onWaletChange}/>
      :
      <button>AddBalance</button>
    }
    </div>
 )
}

export default FormContainer