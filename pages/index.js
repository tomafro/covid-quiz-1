import Head from 'next/head'

const Home = () => (
  <div className="container">
    <Head>
      <link href="https://fonts.googleapis.com/css?family=Rubik:500,700%7CMerriweather%7CFira+Mono&amp;display=swap" rel="stylesheet"></link>
    </Head>
    <ul>
      <li>
        <h2>1. Name the show based on a bestselling series of books? What city is it set around?</h2>
        <img width="800" className="quiz-image" src="/images/4.jpg"></img>
      </li>
      <li>
        <h2>2. This is the best show on TV right now. What's it called, and for an extra point, what game are they playing?</h2>
        <img width="800" className="quiz-image" src="/images/1.jpg"></img>
      </li>
      <li>
        <h2>3. Name this show about a 1980s sitcom star, or as Danie calls it, the "self-indulgent depressed horse" show</h2>
        <img width="800" className="quiz-image" src="/images/2.jpg"></img>
      </li>
      <li>
        <h2>4. Known for its heartstring-tugging storylines, this is one of the biggest shows in America. What is it called?</h2>
        <img width="800" className="quiz-image" src="/images/6.jpg"></img>
      </li>
      <li>
        <h2>5. This show is somehow more irritating than PAW Patrol yet Frances loves it. Name it.</h2>
        <img width="800" className="quiz-image" src="/images/5.jpg"></img>
      </li>
      <li>
        <h2>6. The show is Tiger King, but what are these characters called? 1/2 point for each</h2>
        <img width="800" className="quiz-image" src="/images/7.jpg"></img>
      </li>
      <li>
        <h2>7. What's the BBC TV show that ended in 2019, and who is the actor playing the lead character?</h2>
        <img width="800" className="quiz-image" src="/images/8.jpg"></img>
      </li>
      <li>
        <h2>8. Name this TV show Fred insists on watching? 1 point if you're near, an extra point for the full title</h2>
        <img width="800" className="quiz-image" src="/images/9.jpg"></img>
      </li>
      <li>
        <h2>9. Name the TV show from last year based on a 2014 film, a vampire mockumentary?</h2>
        <img width="800" className="quiz-image" src="/images/10.jpg"></img>
      </li>
      <li>
        <h2>10. It's PAW Patrol! Half a point for each character pictured; extra half point if you get them all</h2>
        <img width="800" className="quiz-image" src="/images/3.jpg"></img>
      </li>
    </ul>
  </div>
)

export default Home
