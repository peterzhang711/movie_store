import './App.css';
import Row from './Row'
import requests from './requests'

function App() {
  return (
    <div className="App">
      <h1>$movie store$</h1>
      <Row title="Netflix Originals" fetchUrl={requests.fetchTrending}/>
      <Row title="trending Now" fetchUrl={requests.fetchTopRated}/>
    </div>
  );
}

export default App;
