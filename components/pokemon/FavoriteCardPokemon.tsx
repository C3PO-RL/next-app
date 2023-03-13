import { Card } from "@nextui-org/react";
import { FC } from "react";

interface FavoritePokemonCard {
  id: number;
}
export const FavoriteCardPokemon: FC<FavoritePokemonCard> = ({ id }) => {
  return (
    <Card isHoverable css={{ padding: 10 }}>
      <Card.Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
        width={"100%"}
        height={140}
      ></Card.Image>
    </Card>
  );
};
