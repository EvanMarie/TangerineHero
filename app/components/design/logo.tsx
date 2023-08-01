import { Box, useTheme } from "@chakra-ui/react";
import { Link } from "@remix-run/react";

export default function Logo() {
  const theme = useTheme();

  return (
    <Link to="/" style={{ cursor: "pointer" }}>
      <Box
        fontFamily="'Staatliches', cursive"
        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
        color="TangerineHero.300"
        bgGradient={`linear(to-b, ${theme.colors.TangerineHero[100]}, ${theme.colors.TangerineHero[300]}, ${theme.colors.TangerineHero[400]})`}
        bgClip="text"
      >
        Tangerine Hero
      </Box>
    </Link>
  );
}
