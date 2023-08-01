import {
  HStack,
  Icon,
  useTheme,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Link,
  useDisclosure,
  DrawerFooter,
  Box,
  Stack,
  Image,
  Text,
} from "@chakra-ui/react";
import Logo from "./logo";
import { BsFillCaretDownSquareFill } from "react-icons/bs";

export default function LogoBar() {
  const theme = useTheme();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const LinkStyle = {
    w: "100%",
    py: "15px",
    align: "center",
    color: "TangerineHero.200",
    fontSize: "2xl",
    textShadow: `1px 1px 4px ${theme.colors.TangerineHero[900]}`,
    _hover: {
      bg: "TangerineHero.175",
      color: "TangerineHero.300",
      transform: "scale(1.05)",
      rounded: "sm",
      transition: "all 0.3s ease-in-out",
    },
  };

  return (
    <>
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
        boxShadow={`0px 4px 8px 0px ${theme.colors.TangerineHero[700]}`}
      >
        <Logo />
        <Icon
          as={BsFillCaretDownSquareFill}
          w={9}
          h={9}
          color="TangerineHero.400"
          _hover={{
            color: "TangerineHero.200",
            transform: "scale(1.05)",
            transition: "all 0.3s ease-in-out",
          }}
          onClick={onOpen} // Open the drawer when the icon is clicked
        />
      </HStack>

      <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
        <DrawerOverlay bg="TangerineHero.250" />
        <DrawerContent
          w="100%"
          h={{ base: "100%", sm: "100%", md: "400px" }}
          bg="TangerineHero.875"
          shadow="xl"
        >
          <DrawerCloseButton color="TangerineHero.200" size="lg" />
          <DrawerHeader>
            <Logo />
          </DrawerHeader>

          <DrawerBody>
            <Stack
              direction={{ base: "column", md: "row" }}
              align="center"
              justify={{ base: "center", md: "space-evenly" }}
              spacing={0}
              py="20px"
            >
              <Box onClick={onClose} {...LinkStyle}>
                <Link href="#pageOne">Main</Link>
              </Box>
              <Box onClick={onClose} {...LinkStyle}>
                <Link href="#pageTwo">Experience</Link>
              </Box>
              <Box onClick={onClose} {...LinkStyle}>
                <Link href="#pageThree">About</Link>
              </Box>
              <Box onClick={onClose} {...LinkStyle}>
                <Link href="/services">Another Link</Link>
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            <HStack>
              <Text fontSize="sm">Created by </Text>
              <Link href="http://www.iheartcomponents.com" isExternal>
                <Image
                  src="/images/iheartcomponents.png"
                  w="150px"
                  rounded="md"
                  _hover={{
                    transform: "scale(1.05)",
                    transition: "all 0.3s ease-in-out",
                  }}
                />
              </Link>
            </HStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
