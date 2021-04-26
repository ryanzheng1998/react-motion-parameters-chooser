import React from 'react'
import { Padding, Vector } from '../lib/types'
import SmoothCubicBezier from './SmoothCubicBezier'
import { configToVal } from '../lib/configToVal'

interface Props {
    stiffness: number;
    damping: number;
    canvas: Vector;
    padding: Padding;
    scale: Vector;
}

const Line: React.FC<Props> = (p) => {

    const data = configToVal(p.stiffness, p.damping, 0.01, 100)

    return (
        <SmoothCubicBezier 
            data={data.map((x, i) => ({x: i * p.scale.x + p.padding.left, y: p.canvas.y - p.padding.buttom - x * p.scale.y}))}
            smoothingRatio={0.2}
        />
    )
}

export default Line