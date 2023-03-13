import { Grid } from "@nextui-org/react";
import { FC } from "react";
import { FavoriteCardPokemon } from "../pokemon";

interface Favorites {
  favoritePokemons: number[];
}

export const FavoritePokemons: FC<Favorites> = ({ favoritePokemons }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {favoritePokemons?.map((id) => (
        <Grid xs={6} sm={3} md={2} xl={1} key={id}>
          <FavoriteCardPokemon id={id} />
        </Grid>
      ))}
    </Grid.Container>
  );
};
