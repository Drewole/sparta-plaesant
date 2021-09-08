import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import Layout from './components/Layout';
import getData, { postData } from './utils/api'

function App() {
  const [data, setData] = useState(JSON.parse(localStorage.getItem('data')) || {});
  const [isLoading, setIsLoading] = useState(true);

  const newData = async () => {
    const result = await getData();
    setData(result);
    setTimeout(() => {
      setIsLoading(false)
    }, 500);
    console.log(data, "The Data")

  };
  useEffect(() => {
    newData();
  }, []);
  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

  // // Data for the slider
  // const slides = data.hero_slides
  // const heroText = data.hero_text
  // Data for the posts

  const sorted = data.cards.sort((a, b) => (a.date > b.date) ? -1 : 1)
  const listPosts = sorted.map((post, index) => {
    return (
      <Card
        key={post.title}
        src={post.image}
        date={post.date}
        title={post.title}
        author={post.author}
      />
    )
  })
  return (
    <div className="App">
      <Layout>
        {/* <section className="hero">
          <Slider slides={slides} />
          <div className="hero-text">
            <h1>{heroText.title}</h1>
            <h3>{heroText.date}</h3>
            <p>{heroText.text}</p>
          </div>
        </section> */}
        <section className="posts">
          {isLoading ? <h1>Loading</h1> :
            listPosts.length === 0 ? " " :
              listPosts
          }
        </section>
      </Layout>
    </div>
  );
}

export default App;
