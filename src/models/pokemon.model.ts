interface Ability {
  name: string;
}
interface Pokemon {
  name: string;
  id: number;
  base_experience: number;
  height: number;
  weight: number;
  pokemon_v2_pokemonabilities: { pokemon_v2_ability: Ability }[];
}
