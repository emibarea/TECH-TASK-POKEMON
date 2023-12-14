import { useQuery, gql } from "@apollo/client";
interface PokemonData {
  pokemon_v2_pokemon: Pokemon[];
}
const usePokemonData = () => {
  const MY_QUERY = gql`
    query AllPokemons {
      pokemon_v2_pokemon(
        where: {
          id: { _lte: 400 }
          pokemon_v2_pokemonabilities: { pokemon_v2_ability: {} }
        }
      ) {
        name
        base_experience
        height
        weight
        id
        pokemon_v2_pokemonabilities {
          pokemon_v2_ability {
            name
          }
        }
      }
    }
  `;

  const { loading, error, data, refetch } = useQuery<PokemonData>(MY_QUERY);

  return { loading, error, data, refetch };
};

export default usePokemonData;
