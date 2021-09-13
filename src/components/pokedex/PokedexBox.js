import PokemonCard from '../pokemonCard/PokemonCard';
import StyledPokedexBox from './StyledPokedexBox';
import axios from 'axios';
import { useEffect, useState } from 'react';

function PokedexBox() {
    const [pokemons, setPokemons] = useState();
    console.log(pokemons);
    useEffect(() => {
        async function getAllPokemons() {
            const { data } = await axios.get(
                'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'
            );

            setPokemons(data.results);
        }
        getAllPokemons();
    }, []);
    return (
        <StyledPokedexBox>
            <div className="table">
                {pokemons &&
                    pokemons?.map((data) => (
                        <PokemonCard key={data.url} data={data} />
                    ))}
            </div>
        </StyledPokedexBox>
    );
}
export default PokedexBox;
