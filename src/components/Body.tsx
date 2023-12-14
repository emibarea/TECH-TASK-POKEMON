import { useQuery, gql } from "@apollo/client";
import { IonCol, IonTitle, IonRow } from "@ionic/react";
import PokeCard from "./PokeCard";

interface PokemonData {
  pokemon_v2_pokemon: Pokemon[];
}
interface BodyProps {
  currentPage: number; // Definir currentPage como un número
}

const ITEMS_PER_PAGE = 16;

const Body: React.FC<BodyProps> = ({ currentPage }) => {
  const MY_QUERY = gql`
    query Pokemons($limit: Int!, $offset: Int!) {
      pokemon_v2_pokemon(
        limit: $limit
        offset: $offset
        where: {
          id: { _lte: 200 }
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

  const { loading, error, data } = useQuery<PokemonData>(MY_QUERY, {
    variables: {
      limit: ITEMS_PER_PAGE,
      offset: (currentPage - 1) * ITEMS_PER_PAGE,
    },
  });
  if (error) {
    return (
      <IonTitle style={{ textAlign: "center" }}>
        Error al cargar Pokemons...
      </IonTitle>
    );
  }

  // Suponiendo que data?.pokemon_v2_pokemon contiene todos los Pokémon
  const allPokemon = data?.pokemon_v2_pokemon || [];

  // Función para mezclar aleatoriamente un array
  const shuffleArray = (array: any[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Mezclar aleatoriamente los Pokémon
  const shuffledPokemon = shuffleArray(allPokemon);

  return (
    <>
      {loading ? (
        <IonTitle
          style={{
            textAlign: "center",
            fontWeight: "700",
            fontSize: "22px",
            marginTop: "24px",
          }}
        >
          Cargando Pokemons...
        </IonTitle>
      ) : (
        <IonRow>
          {shuffledPokemon?.map(
            ({
              name,
              weight,
              height,
              base_experience,
              pokemon_v2_pokemonabilities,
              id,
            }: Pokemon) => (
              <IonCol
                key={id}
                size="12"
                size-md="6"
                size-lg="4"
                size-xl="3"
                size-xxl="2"
              >
                <PokeCard
                  key={id}
                  name={name}
                  weight={weight}
                  height={height}
                  base_experience={base_experience}
                  pokemon_v2_pokemonabilities={pokemon_v2_pokemonabilities}
                  id={id}
                />
              </IonCol>
            )
          )}
        </IonRow>
      )}
    </>
  );
};

export default Body;
