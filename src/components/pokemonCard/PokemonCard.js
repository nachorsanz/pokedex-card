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
                        {uniquePokemon?.abilities.map((data) => (
                            <span>{data.ability.name}</span>
                        ))}
                    </span>
                </div>
            </div>
        </StyledPokemonCard>
    );
}
export default PokemonCard;
