import nextra from 'nextra'

const withNextra = nextra({
  staticImage: true,
  defaultShowCopyCode: true,
  theme: `nextra-theme-docs`,
  themeConfig: `./src/theme/theme.config.tsx`,
  flexsearch: {
    codeblocks: true
  },
})

/**
 * @type {import('next').NextConfig}
 */
export default withNextra({
  distDir: './.next',
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
})
