import { useDispatch } from 'react-redux';
import './App.css';
import Landing from './Pages/Home/Landing/Landing';
import Header from './components/Header/Header';
import { fetchEnglish } from './RTK/Slices/Languages';
function App() {
  const dispatch = useDispatch();
  dispatch(fetchEnglish(0));
  return (
    <div className="App">
      <Header />
      <Landing />
    </div>
  );
}

export default App;
