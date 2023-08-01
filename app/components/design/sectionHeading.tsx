import { Box, useTheme } from "@chakra-ui/react";

interface SectionHeadingProps {
  children: React.ReactNode;
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  const theme = useTheme();

  return (
    <Box
      fontFamily="'Staatliches', cursive"
      fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
      color="TangerineHero.300"
      bgGradient={`linear(to-b, ${theme.colors.TangerineHero[800]}, ${theme.colors.TangerineHero[700]}, ${theme.colors.TangerineHero[600]})`}
      bgClip="text"
    >
      {children}
    </Box>
  );
}
