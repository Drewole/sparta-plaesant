import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import Layout from './components/Layout';
import Slider from './components/Slider';
import getData, { postData } from './utils/api'

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const newData = async () => {
      const result = await getData();

      setData(result);
      setTimeout(() => {
        setIsLoading(false)
      }, 500);

    };
    newData();

  }, [])
  console.log(data, "The Data")
  // Data for the slider
  const slides = data.hero_slides
  const heroText = data.hero_text
  // Data for the posts
  const posts = data.cards;
  const sorted = posts.sort((a, b) => (a.date > b.date) ? -1 : 1)
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
        <section className="hero">
          <Slider slides={slides} />
          <div className="hero-text">
            <h1>{heroText.title}</h1>
            <h3>{heroText.date}</h3>
            <p>{heroText.text}</p>
          </div>
        </section>
        <section className="posts">
          {isLoading ? <h1>Loading...</h1> :
            listPosts
          }
        </section>
      </Layout>
    </div>
  );
}

export default App;
