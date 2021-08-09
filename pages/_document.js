import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    const meta = {
      title: 'owen.works',
      description: "I'm a 15 year old student, freelance programmer and an aspiring developer."
    }

    return (
      <Html lang="en">
        <Head>
          <meta name="robots" content="follow, index" />
          <meta name="description" content={meta.description} />
          <meta property="og:description" content={meta.description} />
          <meta property="og:title" content={meta.title} />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={meta.title} />
          <meta name="twitter:description" content={meta.description} />
          <meta name="theme-color" content="#6342f5" />
          <script async src="https://arc.io/widget.min.js#jQXtqgvi"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
