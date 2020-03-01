import React from 'react'

class Page extends React.Component{
    render(){
        return(
            <div>
                <tr>Your host: {this.props.openMic.author}</tr>
                <tr>Where: {this.props.openMic.location}</tr>
                <tr>Phone: {this.props.openMic.phone}</tr>
                <tr>About: {this.props.openMic.description}</tr>
            </div>
        )
    }
}

export default Page