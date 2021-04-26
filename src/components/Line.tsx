import React from 'react'
import { Padding, Vector } from '../lib/types'
import Motion from '../react-motion2/Motion'
import { spring } from '../react-motion2/spring'
import SmoothCubicBezier from './SmoothCubicBezier'

interface Props {
    stiffness: number;
    damping: number;
    canvas: Vector;
    padding: Padding;
    scale: Vector;
}

const Line: React.FC<Props> = (p) => {

    const [state, setState] = React.useState<number[]>([0])

    return (
        <Motion
            defaultStyle={{x: 0}}
            style={{x: spring(100, {damping: p.damping, stiffness: p.stiffness})}}
            onChange={x => setState([...state, x.x])}
        >
            {_ => {
                return (
                    <SmoothCubicBezier 
                        data={state.map((x, i) => ({x: i * p.scale.x + p.padding.left, y: p.canvas.y - p.padding.buttom - x * p.scale.y}))}
                        smoothingRatio={0.2}
                    />
                )
            }}
        </Motion>
    )
}

export default Line