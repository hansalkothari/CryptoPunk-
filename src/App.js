import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import CollectionCard from './components/CollectionCard';

function App() {
  return (
    <div className='app'>
      <Header/>
      <CollectionCard id={0} name = {"spike punk"} traits={[{'value':70}]} image=''/>
    </div>

    
  );
}

export default App;
