import axios from 'axios';
import { useEffect, useState } from 'react';
import StyledPokemonCard from './StyledPokemonCard';

function PokemonCard({ data }) {
    const [uniquePokemon, setUniquePokemon] = useState({});

    console.log('uniq', uniquePokemon);

    async function getPokenInfo(url) {
        const { data } = await axios.get(url);

        setUniquePokemon(data);
    }
    useEffect(() => {
        if (data.url) {
            getPokenInfo(data.url);
        }
    }, [data]);
    const imgUrl = uniquePokemon?.sprites?.front_default;
    const ability1 = uniquePokemon?.abilities[0]?.ability.name;
    const ability2 = uniquePokemon?.abilities[1]?.ability.name;
    const experience = uniquePokemon?.base_experience;

    return (
        <StyledPokemonCard>
            <div className="card">
                <div className="namePokemon">
                    <span>{data.name}</span>
                </div>
                <div className="imgPokemon">
                    <img src={imgUrl} alt="pokemon" />
                </div>
                <div className="infoPokemon">
                    <span>
                        Exp:
                        {experience}
                    </span>
                </div>
                <div className="infoPokemon">
                    <span>
                        {ability1}, {ability2}
                    </span>
                </div>
            </div>
        </StyledPokemonCard>
    );
}
export default PokemonCard;
