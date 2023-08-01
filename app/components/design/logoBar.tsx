import { HStack, Icon, useTheme } from "@chakra-ui/react";
import Logo from "./logo";
import { BsFillCaretDownSquareFill } from "react-icons/bs";

export default function LogoBar() {
  const theme = useTheme();
  return (
    <HStack
      p="0px 20px"
      align="center"
      justify="space-between"
      textAlign="center"
      bg="TangerineHero.950"
      w="100%"
      h="75px"
      position="fixed"
      shadow="xl"
      top="0"
      left="0"
      zIndex="11"
      boxShadow={`0px 4px 8px 0px  ${theme.colors.TangerineHero[700]}`}
    >
      <Logo />
      <Icon
        as={BsFillCaretDownSquareFill}
        w={9}
        h={9}
        color="TangerineHero.400"
      />
    </HStack>
  );
}
