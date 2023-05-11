import type { DocsThemeConfig } from 'nextra-theme-docs'

import { Logo } from '../components/Logo'
import { Head } from '../components/Head'
import { FooterText } from '../components/Footer'
import { SidebarTitle } from '../components/Sidebar'
import { GobletIcon } from '../components/GobletIcon'

const config:DocsThemeConfig = {
  darkMode: true,
  // primaryHue: `#785B9C`,
  docsRepositoryBase: `https://github.com/GobletQA/goblet-docs`,
  project: {
    icon: GobletIcon,
    link: `https://gobletqa.com/`,
  },
   feedback: {
    labels: `issue`,
    content: `Question or issue?`,
    useLink: () => `https://github.com/GobletQA/goblet-docs/issues/new`
  },
  footer: {
    text: FooterText,
  },
  logo: Logo,
  logoLink: `https://dev.gobletqa.app/docs`,
  head: Head,
  sidebar: {
    toggleButton: true,
    defaultMenuCollapseLevel: 1,
    titleComponent: SidebarTitle,
  },
  toc: {
    float: true,
    headingComponent: ({ children }) => {
      return (
        <>
          {children}
        </>
      )
    }
  },
}

export default config