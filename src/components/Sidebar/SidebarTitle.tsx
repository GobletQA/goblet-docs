import { GobletIcon } from '../GobletIcon'

export const SidebarTitle = ({ title, type }) => {
  return type !== 'separator'
    ? (<>{title}</>)
    : (
        <div className="gb-sidebar-header-title">
          <GobletIcon className="gb-logo-sidebar" />
          {title}
        </div>
      )
}