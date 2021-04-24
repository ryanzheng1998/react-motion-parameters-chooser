import React from 'react'
import { Vector } from '../lib/type'
import Motion from '../react-motion2/Motion'
import { spring } from '../react-motion2/spring'
import SmoothCubicBezier from './SmoothCubicBezier'

interface Props {
    stiffness: number;
    damping: number;
    canvas: Vector;
    padding: number;
}

const Line: React.FC<Props> = (p) => {

    const [state, setState] = React.useState<number[]>([])

    return (
        <Motion
            defaultStyle={{x: 0}}
            style={{x: spring(100)}}
            onChange={x => setState([...state, x.x])}
        >
            {_ => {
                return (
                    <SmoothCubicBezier 
                        data={state.map((x, i) => ({x: i, y: x}))}
                        smoothingRatio={0.2}
                    />
                )
            }}
        </Motion>
    )
}

export default Line