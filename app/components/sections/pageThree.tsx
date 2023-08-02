import { Box, Flex, Image, Stack, Text, VStack } from "@chakra-ui/react";
import ContentContainer from "../design/contentContainer";
import { PageContainer } from "../design/pageContainer";
import SectionHeading from "../design/sectionHeading";

export default function PageThree() {
  return (
    <PageContainer>
      <ContentContainer>
        <Box id="pageThree" pt="85px">
          <VStack w="100%" spacing={4}>
            <SectionHeading>- Joel Edwards -</SectionHeading>
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing="20px"
              w="100%"
              maxWidth="1200px"
              px={3}
            >
              <Flex
                w={{ base: "100%", md: "375px", lg: "450px" }}
                justify="center"
                align="flex-start"
              >
                <Image
                  src="/images/joelHeadshot.png"
                  alt="Joel Headshot"
                  w={{ base: "300px", md: "350px", lg: "425px" }}
                  rounded="md"
                />
              </Flex>
              <Flex
                bg="TangerineHero.750"
                width="100%"
                direction="column"
                justify="center"
                py={3}
                px={3}
                rounded="md"
                fontSize={{ base: "sm", md: "md" }}
                overflowY="auto"
              >
                <Text>
                  After two decades of audio and video post-production work in
                  Nashville and Atlanta, I created Tangerine Hero in 2011 to do
                  what I love: using my digital toolbox to create images and
                  sounds that convey the arc of a story, illuminated by emotion.
                </Text>
                <br />
                <Text>
                  I can find the essentials in a mountain of footage, cut them
                  down to a clear, powerful narrative, illustrate complex
                  concepts with motion graphics, compose, record, edit, and mix
                  the music and sound effects to support the storyline, and
                  deliver the final product on time and under budget.
                </Text>
                <br />
              </Flex>
            </Stack>
          </VStack>
        </Box>
      </ContentContainer>
    </PageContainer>
  );
}
