import React from 'react'
import {useSpring, animated} from 'react-spring'

const AnimatedHeader = (props) => {
    const props1 = useSpring({opacity: 1, from: {opacity: 0}, fontFamily: 'sans-serif', fontWeight: 'lighter'})
    return (
            <animated.div style={props1} className="background">
                <animated.h2 style={props1} className="my-header">Welcome to The Comedy Store, {props.name}!</animated.h2>
            </animated.div>
    )
}

export default AnimatedHeader