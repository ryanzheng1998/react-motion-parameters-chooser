import type { PlainStyle, Style, Velocity } from './types'

// usage assumption: currentStyle values have already been rendered but it says
// nothing of whether currentStyle is stale (see unreadPropStyle)
export default function shouldStopAnimation(
    currentStyle: PlainStyle,
    style: Style,
    currentVelocity: Velocity,
  ): boolean {
    for (let key in style) {
      if (!Object.prototype.hasOwnProperty.call(style, key)) {
        continue;
      }
  
      if (currentVelocity[key] !== 0) {
        return false;
      }
      const temp = style[key]
  
      const styleValue =
        typeof temp === 'number' ? style[key] : temp.val;
      // stepper will have already taken care of rounding precision errors, so
      // won't have such thing as 0.9999 !=== 1
      if (currentStyle[key] !== styleValue) {
        return false;
      }
    }
  
    return true;
  }