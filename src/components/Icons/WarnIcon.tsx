import type { TMIcon } from './Icon'

import { Icon } from './Icon'
import { mdiAlert } from '@mdi/js'

export const WarnIcon = (props:TMIcon) => {
  return (
    <Icon
      size={0.8}
      {...props}
      path={mdiAlert}
    />
  )
}


