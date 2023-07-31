import { HStack, Icon } from "@chakra-ui/react";
import Logo from "./logo";
import { BsFillCaretDownSquareFill } from "react-icons/bs";

export default function LogoBar() {
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
      z-index="1000"
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
