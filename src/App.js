import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import HeroText from './components/HeroText';
import ImageSlider from './components/ImageSlider';
import Layout from './components/Layout';
import getData from './utils/api'
import Masonry from 'react-masonry-css'

function App() {
  const [data, setData] = useState(JSON.parse(localStorage.getItem('data')) || {});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const newData = async () => {
      const result = await getData();
      await setData(result || localStorage.setItem('data', JSON.stringify(result)));
      setTimeout(() => {
        setIsLoading(false)
      }, 500);
      console.log(data, "The Data")

    };
    newData();

  }, []);
  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

  // Masonry settings
  const breakpoints = {
    default: 4,
    1144: 3,
    768: 2,
    500: 1
  };
  // Data for the slider
  const slides = !data.hero_slides ? [] : data.hero_slides
  const heroText = !data.hero_text ? [] : data.hero_text
  // Data for the posts

  const sorted = !data.cards ? {} : data.cards.sort((a, b) => (a.date > b.date) ? -1 : 1)

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
        <section className="hero container">
          <ImageSlider slides={slides} />
          <HeroText title={heroText.title} date={heroText.date} subtitle={heroText.subtitle} />
        </section>
        <section className="posts container">
          <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid posts container"
            columnClassName="my-masonry-grid_column"
          >
            {listPosts}
          </Masonry>
        </section>

      </Layout>
    </div>
  );
}

export default App;
