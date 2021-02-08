import React from 'react'

export default class Form extends React.Component{
    
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.onWaletChange(event.target.children[0].value)
        
    }
    render() {
        return (
            <div id="form">
                <form onSubmit={event => this.handleSubmit(event)}>
                    <input type="number" placeholder="0"/>
                    <input type="submit"/>
                </form>
            </div>
            )
    }
    
}

