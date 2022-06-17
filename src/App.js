import {useEffect} from 'react';
import './App.css';
import SearchICon from './search.svg';
//2e73ca0d

const API_URL = "https://www.omdbapi.com?apikey=2e73ca0d";

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('Spiderman');
    }, []);

    return (
        <h1>Movie App</h1>
    );
}

export default App;