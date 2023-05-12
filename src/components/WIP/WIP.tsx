import type { ReactNode } from 'react'

import { GrayText } from '../Text'
import { WarnIcon } from '../Icons/WarnIcon'
import { colors } from '../../theme/colors'

export type TWIP = {
  text?:ReactNode
}

export const WIP = (props:TWIP) => {
  return (
    <div className='gb-wip gb-message' >
      <WarnIcon color={colors.yellow10} />
      <GrayText>
        Work in progress ...
      </GrayText> 
    </div>
  )
}