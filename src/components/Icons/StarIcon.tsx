import type { TMIcon } from './Icon'

import { mdiStarFourPointsOutline } from '@mdi/js'
import { Icon } from './Icon'

export const StarIcon = (props:TMIcon) => {
  return (
    <Icon
      size={0.8}
      {...props}
      path={mdiStarFourPointsOutline}
    />
  )
}