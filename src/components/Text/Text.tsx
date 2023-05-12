import type { CSSProperties, ReactNode } from 'react'

import { useMemo } from 'react'
import { colors } from '../../theme/colors'

export type TText = {
  size?: number
  color?: string
  className?:string
  children:ReactNode
  style?:CSSProperties
}

const defStyle = {
  font: `inherit`,
  fontSize: `inherit`,
  fontWeight: `inherit`,
  fontFamily: `inherit`,
  lineHeight: `inherit`,
  letterSpacing: `inherit`,
}

const useStyle = (props:TText) => {
  const {
    size,
    color,
    style
  } = props
  return useMemo(() => {
    const styles = {...defStyle, ...style}
    size && (styles.fontSize = `${size}px`)
    color && (styles.color = color)

    return styles
  }, [
    size,
    color,
    style
  ])
}

export const Text = (props:TText) => {
  const { className,  children } = props
  const style = useStyle(props)

  return (
    <span
      style={style}
      className={[className, `gb-text`].filter(Boolean).join(` `)}
    >
      {children}
    </span>
  )
}

export const RedText = (props:TText) => (<Text {...props} color={colors.red10} />)
export const GreenText = (props:TText) => (<Text {...props} color={colors.green10} />)
export const YellowText = (props:TText) => (<Text {...props} color={colors.yellow10} />)
export const PurpleText = (props:TText) => (<Text {...props} color={colors.purple10} />)
export const GrayText = (props:TText) => (<Text {...props} color={colors.gray10} />)
export const BlueText = (props:TText) => (<Text {...props} color={colors.bluePoly} />)
export const PinkText = (props:TText) => (<Text {...props} color={colors.pinkSteel} />)
