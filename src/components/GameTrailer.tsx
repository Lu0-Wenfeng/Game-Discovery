import { Heading, Text } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return null;
  if (error) throw error;

  const first = data?.results[0];
  return (
    <>
      <Heading as="h3" size="lg" marginBottom={3}>
        Trailer
      </Heading>
      {first ? (
        <video src={first.data[480]} poster={first.preview} controls />
      ) : (
        <Text>
          From developer: due to I'm using the free API, only GTA V has trailer,
          sorry.
        </Text>
      )}
    </>
  );
};

export default GameTrailer;
