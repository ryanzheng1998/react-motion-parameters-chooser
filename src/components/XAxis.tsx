import React from 'react'
import { Padding, Vector } from '../lib/types'

interface Props {
    canvas: Vector;
    padding: Padding;
    scale: number;
    maxValue: number;
    fontSize: number;
}

const XAxis: React.FC<Props> = (p) => {
    const xLables = new Array(Math.floor(p.maxValue / p.scale) + 1).fill(0).map((_, i) => (
        <g key={i}>
            <line 
                x1={p.padding.left + (p.canvas.x - p.padding.left - p.padding.right) * i * p.scale / p.maxValue}
                y1={p.canvas.y - p.padding.buttom}
                x2={p.padding.left + (p.canvas.x - p.padding.left - p.padding.right) * i * p.scale / p.maxValue}
                y2={p.canvas.y - p.padding.buttom + 8}
                stroke="black"
                strokeWidth="0.5px"
            />
            <text 
                x={p.padding.left + (p.canvas.x - p.padding.left - p.padding.right) * i * p.scale / p.maxValue}
                y={p.canvas.y - p.padding.buttom + 10}
                textAnchor="middle"
                alignmentBaseline="hanging"
                fontSize={p.fontSize}
            >{i * p.scale}</text>
        </g>
    ))

    return (
        <>
            <line 
                x1={p.padding.left}
                y1={p.canvas.y - p.padding.buttom}
                x2={p.canvas.x - p.padding.right}
                y2={p.canvas.y - p.padding.buttom}
                stroke="black"
                strokeWidth="0.5px"
            />
            {xLables}
        </>
    )
}

export default XAxis