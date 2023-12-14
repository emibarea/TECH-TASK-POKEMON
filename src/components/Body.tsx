import { useState, useEffect } from "react";
import {
  IonCol,
  IonTitle,
  IonRow,
  IonContent,
  IonRefresher,
  IonRefresherContent,
  RefresherEventDetail,
} from "@ionic/react";
import PokeCard from "./PokeCard";
import usePokemonData from "../api/usePokemonData";

interface BodyProps {
  currentPage: number;
  ITEMS_PER_PAGE: number;
}

const Body: React.FC<BodyProps> = ({ currentPage, ITEMS_PER_PAGE }) => {
  const [shuffledPokemon, setShuffledPokemon] = useState<Pokemon[]>([]); //estado para mesclar pokemons ya que vienen ordenados en data
  const [currentPokemonPage, setCurrentPokemonPage] = useState<Pokemon[]>([]); //estado para asignar los pokemons que deben ir por cada pagina
  const [refreshCount, setRefreshCount] = useState(0); //estado para que se ejecute el useEffect y poder hacer el refetch de data

  const { loading, error, data, refetch } = usePokemonData();

  if (error) {
    //si la peticion retorna error, lo mostramos en pantalla
    return (
      <IonTitle style={{ textAlign: "center" }}>
        Error al cargar Pokemons...
      </IonTitle>
    );
  }

  const shuffleArray = (array: any[]) => {
    //función para mezclar aleatoriamente un array
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    if (data) {
      const allPokemon = data.pokemon_v2_pokemon;
      const shuffled = shuffleArray(allPokemon);
      setShuffledPokemon(shuffled); //mesclamos el array de pokemons
    }
  }, [data, refreshCount]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedPokemon = shuffledPokemon.slice(startIndex, endIndex);
    setCurrentPokemonPage(paginatedPokemon); //asignamos los pokemons de cada pagina
  }, [currentPage, shuffledPokemon, ITEMS_PER_PAGE]);

  function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
    refetch().then(() => {
      setRefreshCount(refreshCount + 1); //incrementa refreshCount después de cada refetch
      event.detail.complete();
    });
  }

  return (
    <IonContent className="ion-padding">
      <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
        <IonRefresherContent></IonRefresherContent>
      </IonRefresher>
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
          {currentPokemonPage.map(
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
    </IonContent>
  );
};

export default Body;
