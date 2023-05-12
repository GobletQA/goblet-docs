import type { ReactNode } from 'react'

import { GrayText } from '../Text'
import { colors } from '../../theme/colors'
import { ClockIcon } from '../Icons/ClockIcon'

export type TComingSoon = {
  text?:ReactNode
}

export const ComingSoon = (props:TComingSoon) => {
  return (
    <div className='gb-coming-soon gb-message' >
      <ClockIcon color={colors.red10} />
      <GrayText>
        Coming soon ...
      </GrayText> 
    </div>
  )
}