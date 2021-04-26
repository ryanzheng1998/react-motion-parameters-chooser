import React from 'react'
import { Padding, Vector } from '../lib/types'

interface Props {
    canvas: Vector;
    padding: Padding;
    scale: number;
    maxValue: number;
    fontSize: number;
}

const YAxis: React.FC<Props> = (p) => {
    const YLables = new Array(Math.floor(p.maxValue / p.scale) + 1).fill(0).map((_, i) => (
        <g key={i}>
            <line 
                x1={p.padding.left}
                y1={p.canvas.y - p.padding.buttom - (p.canvas.y - p.padding.top - p.padding.buttom) / p.maxValue * p.scale * i}
                x2={p.padding.left - 8}
                y2={p.canvas.y - p.padding.buttom - (p.canvas.y - p.padding.top - p.padding.buttom) / p.maxValue * p.scale * i}
                stroke="black"
                strokeWidth="0.5px"
            />
            <text 
                x={p.padding.left - 10}
                y={p.canvas.y - p.padding.buttom - (p.canvas.y - p.padding.top - p.padding.buttom) / p.maxValue * p.scale * i}
                textAnchor="end"
                alignmentBaseline="central"
                fontSize={p.fontSize}
            >{i * p.scale}</text>
        </g>
    ))

    return (
        <>
            <line 
                x1={p.padding.left}
                y1={p.canvas.y - p.padding.buttom}
                x2={p.padding.left}
                y2={p.padding.top}
                stroke="black"
                strokeWidth="0.5px"
            />
            {YLables}
        </>
    )
}

export default YAxis