import React from 'react'
import { Link } from 'react-router-dom'
import mic from '../mic.svg'

class OpenMicIcon extends React.Component{
    render(){
        return(
        <Link to={"/open-mic/" + this.props.mic.id} style={{textDecoration: 'none', outline: 'none'}}>
            <div id="open-icon" style={{backgroundImage: `url(${mic})`, marginBottom: '10pt'}}>
                <span key={this.props.mic.id} style={{display: 'table-row', color: 'white'}}>{this.props.mic.author}</span>
                <span style={{display: 'table-row', color: 'white'}}>{this.props.mic.location}</span>
                <span style={{display: 'table-row', color: 'white'}}>{this.props.mic.phone}</span>
                <div style={{position: 'relative', top: '120px'}}>
                <span style={{display: 'table-row', color: 'white'}}>About:</span>
                <span style={{display: 'table-row', color: 'white'}}>{this.props.mic.description}</span>
               </div>
            </div>
        </Link>
        )
    }
}

export default OpenMicIcon