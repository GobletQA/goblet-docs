import type { TMIcon } from './Icon'

import { Icon } from './Icon'
import { mdiClockTimeEightOutline } from '@mdi/js'


export const ClockIcon = (props:TMIcon) => {
  return (
    <Icon
      size={0.8}
      {...props}
      path={mdiClockTimeEightOutline}
    />
  )
}


