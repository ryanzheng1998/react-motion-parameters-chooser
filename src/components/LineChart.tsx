import React from 'react'
import { Padding, Vector } from '../lib/types'
import Line from './Line'
import XAxis from './XAxis'
import YAxis from './YAxis'

interface Props {
    canvas: Vector;
    padding: Padding;
    maxValue: Vector;
    damping: number;
    stiffness: number;
}

const LineChart: React.FC<Props> = (p) => {

    const scale = {
        x: (p.canvas.x - p.padding.left - p.padding.right) / p.maxValue.x,
        y: (p.canvas.y - p.padding.top - p.padding.buttom) / p.maxValue.y,
    }

    return (
        <svg
            width={p.canvas.x}
            height={p.canvas.y}
        >
            <Line 
                stiffness={p.stiffness}
                damping={p.damping}
                canvas={p.canvas}
                padding={p.padding}
                scale={scale}
            />
            <XAxis 
                canvas={p.canvas}
                padding={p.padding}
                scale={30}
                maxValue={p.maxValue.x}
                fontSize={15}
            />
            <YAxis 
                canvas={p.canvas}
                padding={p.padding}
                scale={50}
                maxValue={p.maxValue.y}
                fontSize={15}
            />
        </svg>
    )
}

export default LineChart