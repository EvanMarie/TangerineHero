// import { Box, Button, Text, VStack } from "@chakra-ui/react";
// import { Link } from "@remix-run/react";
import PageOne from "~/components/sections/pageOne";
import PageTwo from "~/components/sections/pageTwo";
// import { PageContainer } from "~/components/design/pageContainer";

export default function Index() {
  return (
    // <>
    //   <VStack spacing={4}>
    //     <Text fontSize="xs">xs Text</Text>
    //     <Text fontSize="sm">sm Text</Text>
    //     <Text fontSize="md">md Text</Text>
    //     <Text fontSize="lg">lg Text</Text>
    //     <Text fontSize="xl" color="tangerine">
    //       xl Text
    //     </Text>
    //     <Text fontSize="2xl">2xl Text</Text>
    //     <Text fontSize="3xl">3xl Text</Text>
    //     <Text fontSize="4xl">4xl Text</Text>
    //     <Text fontSize="5xl">5xl Text</Text>
    //     <Button>Testing</Button>
    //     <Link to="/about">About</Link>
    //     <Box bg="TangerineHero.900" p="20px" rounded="md">
    //       <Text
    //         fontFamily="'Staatliches', cursive"
    //         fontSize="3xl"
    //         color="TangerineHero.300"
    //       >
    //         Tangerine Hero
    //       </Text>
    //     </Box>

    //     <Box bg="TangerineHero.900" p="20px" rounded="md">
    //       <Text color="TangerineHero.100">Tangerine Hero 100</Text>
    //       <Text color="TangerineHero.200">Tangerine Hero 200</Text>
    //       <Text color="TangerineHero.300">Tangerine Hero 300</Text>
    //       <Text color="TangerineHero.400">Tangerine Hero 400</Text>
    //       <Text color="TangerineHero.500">Tangerine Hero 500</Text>
    //     </Box>
    //     <Box bg="TangerineHero.200" p="20px" rounded="md">
    //       <Text color="TangerineHero.600">Tangerine Hero 600</Text>
    //       <Text color="TangerineHero.700">Tangerine Hero 700</Text>
    //       <Text color="TangerineHero.800">Tangerine Hero 800</Text>
    //       <Text color="TangerineHero.900">Tangerine Hero 900</Text>
    //     </Box>
    //   </VStack>
    //   <Box h="40px" />
    // </>
    <>
      <PageOne />
      <PageTwo />
    </>
  );
}
