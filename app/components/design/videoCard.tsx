// VideoCard.tsx
import {
  Card,
  Center,
  HStack,
  Heading,
  IconButton,
  Image,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { BsFillPlayCircleFill, BsInfoCircleFill } from "react-icons/bs";
import VideoModal from "./videoModal";
import InfoModal from "./infoModal";

interface VideoCardProps {
  title?: string;
  thumbnail?: string;
  info?: string;
  videoId?: string;
}

export default function VideoCard({
  title,
  info,
  videoId,
  thumbnail,
}: VideoCardProps) {
  const videoModalDisclosure = useDisclosure();
  const infoModalDisclosure = useDisclosure();

  return (
    <Card
      w={{ base: "275px", lg: "375px" }}
      color="TangerineHero.100"
      textShadow="2px 2px 10px black"
      p="10px 15px"
      bg="TangerineHero.850"
      shadow="lg"
      zIndex={23}
      _hover={{
        color: "TangerineHero.800",
        bg: "TangerineHero.250",
        border: `2px solid `,
        transform: "scale(1.03)",
        transition: "all .3s ease-in-out",
        textShadow: "2px 2px 8px white",
      }}
    >
      <VStack>
        <Heading fontSize={{ base: "md", lg: "lg" }}>{title}</Heading>
        <HStack w="100%">
          <Center w="100%" h="100%" onClick={videoModalDisclosure.onOpen}>
            <Image
              src={thumbnail}
              alt="thumbnail"
              width="100%"
              height="100%"
              objectFit="cover"
              borderRadius="10px"
            />
          </Center>
          {/* <VStack justify="space-between" spacing="20px">
            <IconButton
              icon={<BsFillPlayCircleFill />}
              aria-label="play video"
              size="lg"
              onClick={videoModalDisclosure.onOpen}
            />
            <IconButton
              icon={<BsInfoCircleFill />}
              aria-label="more info"
              size="lg"
              onClick={infoModalDisclosure.onOpen}
            />
          </VStack>{" "} */}
        </HStack>
      </VStack>
      <HStack pt="10px" px="10px" width="100%" justify="space-evenly">
        <IconButton
          icon={<BsFillPlayCircleFill />}
          aria-label="play video"
          size={{ base: "md", lg: "lg" }}
          onClick={videoModalDisclosure.onOpen}
        />
        <IconButton
          icon={<BsInfoCircleFill />}
          aria-label="more info"
          size={{ base: "md", lg: "lg" }}
          onClick={infoModalDisclosure.onOpen}
        />
      </HStack>
      <VideoModal
        videoId={videoId}
        isOpen={videoModalDisclosure.isOpen}
        onClose={videoModalDisclosure.onClose}
      />
      <InfoModal
        isOpen={infoModalDisclosure.isOpen}
        onClose={infoModalDisclosure.onClose}
      />{" "}
    </Card>
  );
}
