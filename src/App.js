import logo from './logo.svg';
import './App.css';
import Page from './components/page/Page';
import StatsPage from './components/stats/statspage';
function App() {


  const header = <>
    <div>
      HEAEDER
    </div>
  </>

  return (
    <Page>
      <StatsPage/>
    </Page>
  );
}

export default App;
