// VideoCard.tsx
import {
  Card,
  Center,
  HStack,
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
    <Card p="20px" pb="10px" bg="TangerineHero.700">
      <Card width="375px" p="20px" bg="TangerineHero.600">
        <VStack>
          <Center
            bg="red"
            w="100%"
            h="100%"
            onClick={videoModalDisclosure.onOpen}
          >
            <Image
              src={thumbnail}
              alt="thumbnail"
              width="100%"
              height="100%"
              objectFit="cover"
            />
          </Center>
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
      />
    </Card>
  );
}
