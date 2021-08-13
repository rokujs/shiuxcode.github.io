/* eslint-disable react/no-unknown-property */
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render () {
    return (
      <Html lang='es'>
        <Head>
          <meta
            name='description'
            content='Portafolio de Jairo Sebastian Gil Madrid tambien me puedes encontrar como roku_js o rokujs, aqui muestro varios de mis projectos, desde el desarrollo de videojuegos hasta el desarrollo de paginas web'
          />
          <meta name='author' content='Jairo Sebastian' />
          <link rel='icon' href='/img/logo.svg' type='image/svg+xml' />

          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
          <link
            href='https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,300&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body className='my-body-class'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
