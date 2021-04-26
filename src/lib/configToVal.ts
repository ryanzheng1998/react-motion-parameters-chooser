import { stepper } from '../react-motion2/stepper'



export const configToVal = (stiffness: number, damping: number, precision: number, target: number) => {

    let currentStyle = 0
    let currentVelocity = 0
    let answer: number[] = [0]

    while((currentStyle !== target || currentVelocity !== 0) && answer.length < 10000) {
        const [newStyle, newVelocity] = stepper(
            10 / 1000,
            currentStyle,
            currentVelocity,
            target,
            stiffness,
            damping,
            precision,
        )

        answer.push(newStyle)
        currentStyle = newStyle
        currentVelocity = newVelocity
    }

    return answer
}