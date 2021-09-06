import './App.css';
import Card from './components/Card';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <p>This is the body content</p>
        <section className="posts">
          <Card src="" date="" title="" author="" />
        </section>
      </Layout>
    </div>
  );
}

export default App;
