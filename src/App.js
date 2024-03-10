import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import Footer from './component/Footer';
import Add from './component/Add';

function App() {
  return (
    <div className="App">
    <Header />
    <Add />
    <Home />
    <Footer />
    </div>
  );
}

export default App;
 