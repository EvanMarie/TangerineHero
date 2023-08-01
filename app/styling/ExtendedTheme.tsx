import { extendTheme } from "@chakra-ui/react";

const TangerineHero = {
  100: "#fce7bb",
  150: "rgba(252, 231, 187, 0.5)",
  200: "#facc4b",
  250: "rgba(250, 204, 75, 0.5)",
  300: "#ff8221",
  350: "rgba(255, 130, 33, 0.5)",
  400: "#ff612b",
  450: "rgba(255, 97, 43, 0.5)",
  500: "#d15024",
  550: "rgba(209, 80, 36, 0.5)",
  600: "#742701",
  650: "rgba(116, 39, 1, 0.5)",
  700: "#381301",
  750: "rgba(56, 19, 1, 0.5)",
  800: "#260101",
  850: "rgba(38, 1, 1, 0.8)",
  900: "#150000",
  950: "rgba(21, 0, 0, 0.85)",
};

export const customTheme = extendTheme({
  colors: {
    // Set the default color scheme for components here
    TangerineHero: {
      100: "#fce7bb",
      150: "rgba(252, 231, 187, 0.5)",
      200: "#facc4b",
      250: "rgba(250, 204, 75, 0.5)",
      300: "#ff8221",
      350: "rgba(255, 130, 33, 0.5)",
      400: "#ff612b",
      450: "rgba(255, 97, 43, 0.5)",
      500: "#d15024",
      550: "rgba(209, 80, 36, 0.5)",
      600: "#742701",
      650: "rgba(116, 39, 1, 0.5)",
      700: "#381301",
      750: "rgba(56, 19, 1, 0.5)",
      800: "#260101",
      850: "rgba(38, 1, 1, 0.8)",
      900: "#150000",
      950: "rgba(21, 0, 0, 0.85)",
    },
    paleYellow: TangerineHero[100],
    paleYellowTransparent: TangerineHero[150],
    yellow: TangerineHero[200],
    yellowTransparent: TangerineHero[250],
    tangerine: TangerineHero[300],
    tangerineTransparent: TangerineHero[350],
    brightOrange: TangerineHero[400],
    brightOrangeTransparent: TangerineHero[450],
    mediumOrange: TangerineHero[500],
    mediumOrangeTransparent: TangerineHero[550],
    darkOrange: TangerineHero[600],
    darkOrangeTransparent: TangerineHero[650],
    darkBrown: TangerineHero[700],
    darkBrownTransparent: TangerineHero[750],
    darkMaroon: TangerineHero[800],
    darkMaroonTransparent: TangerineHero[850],
    darkest: TangerineHero[900],
    darkestTransparent: TangerineHero[950],
  },

  breakpoints: {
    base: "0px",
    sm: "600px",
    md: "900px",
    lg: "1200px",
    xl: "1500px",
  },

  fontSizes: {
    xs: "1rem",
    sm: "1.1rem",
    md: "1.25rem",
    lg: "1.5rem",
    xl: "1.75rem",
    "2xl": "2rem",
    "3xl": "2.5rem",
    "4xl": "3rem",
    "5xl": "3.5rem",
    "6xl": "4rem",
  },
  styles: {
    global: {
      body: {
        fontFamily: "'Lato', sans-serif",
        lineHeight: "base",
        fontSize: { base: "md", sm: "lg" },
        bg: "TangerineHero.00",
        color: "TangerineHero.100",
        padding: "0px",
      },
      a: {
        color: "TangerineHero.300",
        textDecoration: "none",
        fontWeight: "bold",
        _hover: {
          color: "TangerineHero.400",
          transform: "scale(1.05)",
          transition: "all 0.3s ease-in-out",
        },
      },
      p: {
        padding: "0.2rem",
      },
    },
  },
  components: {
    IconButton: {
      baseStyle: {
        bg: "TangerineHero.600",
        color: "TangerineHero.900",
        _hover: {
          bg: "TangerineHero.500",
          color: "TangerineHero.800",
          transform: "scale(1.05)",
          transition: "all 0.3s ease-in-out",
          shadow: "xl",
        },
      },
    },
    Button: {
      defaultProps: {
        variant: "filled",
        size: "sm",
      },
      variants: {
        filled: {
          bg: "TangerineHero.300",
          color: "TangerineHero.800",
          fontWeight: "bold",
          borderRadius: "4px",
          border: "1.5px solid",
          _hover: {
            bg: "TangerineHero.200",
            color: "TangerineHero.500",
            transform: "scale(1.05)",
            transition: "all 0.3s ease-in-out",
            shadow: "xl",
          },
          _active: {
            bg: "TangerineHero.400",
          },
        },
      },
    },
  },
});
