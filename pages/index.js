import Head from 'next/head'

const siteTitle = "Deliton Junior"

export default function Home() {
  return (
    <div className="container">
      <Head>
      <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Deliton Junior's personal website"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main>
      <>
            <img
              src="/images/profile.png"
              className='headerHomeImage borderCircle'
              alt="Deliton Junior"
            />
            <h1 className='heading2Xl'>Deliton Junior</h1>
          </>

        <p className="description">
        I'm a WEB and Mobile developer and I like to build cool stuff
        </p>

        <div className="grid">
          <a href="https://github.com/deliton" className="card">
            <h3>GitHub</h3>
            <p>Find out what projects I'm working on</p>
          </a>

          <a
            href="https://medium.com/@delitonjr"
            className="card"
          >
            <h3>Medium</h3>
            <p>Follow my profile on Medium to read cool tech articles</p>
          </a>

          <a
            href="https://www.instagram.com/delitonjunior"
            className="card"
          >
            <h3>Instagram</h3>
            <p>
              Here's my Instagram account, feel free to send me DMs 
            </p>
          </a>

          <a href="mailto:deliton.m@hotmail.com" className="card">
            <h3>Email</h3>
            <p>Feel free to contact me through my personal email.</p>
          </a>

        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.7rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }

        .headerImage {
          width: 12rem;
          height: 12rem;
        }
        
        .headerHomeImage {
          width: 12rem;
          height: 12rem;
        }

        .borderCircle {
          border-radius: 9999px;
        }

        .heading2Xl {
          font-size: 4rem;
          line-height: 1.2;
          font-weight: 800;
          letter-spacing: -0.05rem;
          margin: 1rem 0;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
