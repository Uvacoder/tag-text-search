import SideBar from './components/sideBar/sideBar';
import Context from './store';
import MainContent from './components/mainContent';
import { ARTICLES } from './data/data';

function App() {
  return (
    <Context>
      <SideBar />
      <MainContent articles={ARTICLES} />
    </Context>
  );
}

export default App;
