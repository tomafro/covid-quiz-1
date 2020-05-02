import Head from 'next/head'

const Home = () => (
  <div className="container">
    <Head>
      <link href="https://fonts.googleapis.com/css?family=Rubik:500,700%7CMerriweather%7CFira+Mono&amp;display=swap" rel="stylesheet"></link>
    </Head>
    <ul>
      <li>
        <h2>8.</h2>
        <img width="800" className="quiz-image" src="/images/g/8.png"></img>
      </li>
      <li>
        <h2>9.</h2>
        <img width="800" className="quiz-image" src="/images/g/9.png"></img>
      </li>
      <li>
        <h2>10.</h2>
        <img width="800" className="quiz-image" src="/images/g/10.png"></img>
      </li>
    </ul>
  </div>
)

export default Home
