import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId?: string;
}

export default function VideoModal({
  isOpen,
  onClose,
  videoId,
}: VideoModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="full">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Video</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <div className="videoCardContainer">
            <iframe
              className="cardVideo"
              src={`https://player.vimeo.com/video/${videoId}?background=1`}
              allow="autoplay; fullscreen"
              allowFullScreen // Add this line
            ></iframe>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
