import { useRouter } from 'next/router'

export const Head = () => {
  const { asPath } = useRouter()
  const description = `GobletQa Docs`

  return (
    <>
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="icon" type="image/svg+xml" href="/favicon/goblet.ico" />

      <meta charSet='utf-8' />
      <meta property="og:description" content={description} />
      <meta property="og:title" content="GobletQA" />
      <meta name="description" content={description} />
      <meta httpEquiv="Content-Language" content="en" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </>
  )
}