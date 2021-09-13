import './App.css';
import Header from './components/header/Header';
import PokedexBox from './components/pokedex/PokedexBox';

function App() {
    return (
        <div className="App">
            <Header />
            <PokedexBox></PokedexBox>
        </div>
    );
}

export default App;
