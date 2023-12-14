import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonCardSubtitle,
} from "@ionic/react";

const PokeCard: React.FC<Pokemon> = ({
  name,
  base_experience,
  height,
  weight,
  pokemon_v2_pokemonabilities,
  id,
}) => {
  function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>
          {id}
          {". "}
          <span style={{ color: "white", fontWeight: "600" }}>
            {capitalizeFirstLetter(name)}
          </span>
        </IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <p>
          Altura:{" "}
          <span style={{ color: "white", fontWeight: "700" }}>{height}</span>
        </p>
        <p>
          Peso:{" "}
          <span style={{ color: "white", fontWeight: "700" }}>{weight}</span>
        </p>
        <p>
          Experiencia:{" "}
          <span style={{ color: "white", fontWeight: "700" }}>
            {base_experience}
          </span>
        </p>
        <p>
          Habilidades:{" "}
          {pokemon_v2_pokemonabilities?.map((item, index) => (
            <span key={index} style={{ color: "white", fontWeight: "700" }}>
              {item.pokemon_v2_ability.name}
              {index < pokemon_v2_pokemonabilities.length - 1 && index === 0
                ? " / "
                : index < pokemon_v2_pokemonabilities.length - 1
                ? " / "
                : ""}
            </span>
          ))}
        </p>
      </IonCardContent>
    </IonCard>
  );
};

export default PokeCard;
