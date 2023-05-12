import type { TMIcon } from './Icon'

import { Icon } from './Icon'
import { mdiInformation } from '@mdi/js'

export const InfoIcon = (props:TMIcon) => {
  return (
    <Icon
      size={0.8}
      {...props}
      path={mdiInformation}
    />
  )
}

// import { mdiAlert } from '@mdi/js';
