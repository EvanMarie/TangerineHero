// VideoCard.tsx
import {
  Card,
  Center,
  HStack,
  Heading,
  IconButton,
  Image,
  Text,
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
      p="20px"
      pb="10px"
      bg="TangerineHero.700"
      zIndex={23}
      _hover={{ bg: "TangerineHero.850", transition: "all .4s ease-in-out" }}
    >
      <Card
        color="TangerineHero.100"
        width="375px"
        p="15px"
        bg="TangerineHero.600"
        _hover={{
          cursor: "pointer",
          transform: "scale(1.03)",
          transition: "all .3s ease-in-out",
          shadow: "xl",
        }}
      >
        <VStack>
          <Heading fontSize="lg">{title}</Heading>
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
          <Text noOfLines={2} fontSize="sm">
            {info}
          </Text>
        </VStack>
      </Card>
      <HStack pt="10px" px="10px" width="100%" justify="space-evenly">
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
      </HStack>
      <VideoModal
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
