import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonText,
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
        <IonText>
          Altura:{" "}
          <IonText style={{ color: "white", fontWeight: "700" }}>
            {height}
          </IonText>
        </IonText>
        <br />
        <IonText>
          Peso:{" "}
          <IonText style={{ color: "white", fontWeight: "700" }}>
            {weight}
          </IonText>
        </IonText>
        <br />
        <IonText>
          Experiencia:{" "}
          <IonText style={{ color: "white", fontWeight: "700" }}>
            {base_experience}
          </IonText>
        </IonText>
        <br />
        <IonText>
          Habilidades:{" "}
          {pokemon_v2_pokemonabilities?.map((item, index) => (
            <IonText key={index} style={{ color: "white", fontWeight: "700" }}>
              {item.pokemon_v2_ability.name}
              {index < pokemon_v2_pokemonabilities.length - 1 && index === 0
                ? " / "
                : index < pokemon_v2_pokemonabilities.length - 1
                ? " / "
                : ""}
            </IonText>
          ))}
        </IonText>
      </IonCardContent>
    </IonCard>
  );
};

export default PokeCard;
