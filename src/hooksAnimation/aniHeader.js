import React from 'react'
import {useSpring, animated} from 'react-spring'

const AnimatedHeader = (props) => {
    const props1 = useSpring({opacity: 1, from: {opacity: 0}, delay: 100, fontFamily: 'Helvetica', fontWeight: 'lighter'})
    return <animated.h2 style={props1}>Hey {props.name} welcome to your Comedy App</animated.h2>
}

export default AnimatedHeader