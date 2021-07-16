import SideBar from './components/sideBar/sideBar';
import MainContent from './components/mainContent';
import { ARTICLES } from './data/data';

function App() {
  return (
    <div>
      <SideBar />
      <MainContent articles={ARTICLES} />
    </div>
  );
}

export default App;
