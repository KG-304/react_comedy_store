import React from 'react'
import {useSpring, animated} from 'react-spring'
import Typing from 'react-typing-animation'

const AnimatedHeader = (props) => {
    const props1 = useSpring({opacity: 1, from: {opacity: 0}, fontFamily: 'sans-serif', fontWeight: 'lighter'})
    return (
            <animated.div style={props1} className="background">
                <animated.h2 style={props1} className="my-header">Welcome to The Comedy Store, {props.name}!</animated.h2>
                <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)',fontFamily: 'Helvetica', fontWeight: 'lighter'}}>
                    <Typing>
                        <span style={{fontSize: '20px'}}>Welcome to the best comedy managing tool around! You can find open mics, local comedians, and tell all experiences. Keep laughing!</span>
                    </Typing>
                </div>
            </animated.div>
    )
}

export default AnimatedHeader