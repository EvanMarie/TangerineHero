// InfoModal.tsx
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import {
  ModalBodyStyle,
  ModalCloseButtonStyle,
  ModalContentStyle,
  ModalFooterStyle,
  ModalHeaderStyle,
  ModalOverlayStyle,
} from "~/styling/modalStyles";

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose} size="2xl">
    <ModalOverlay {...ModalOverlayStyle} />
    <ModalContent {...ModalContentStyle}>
      <ModalHeader {...ModalHeaderStyle}>Video</ModalHeader>
      <ModalCloseButton {...ModalCloseButtonStyle} />
      <ModalBody {...ModalBodyStyle}>Your info goes here.</ModalBody>
      <ModalFooter {...ModalFooterStyle}>
        <Button onClick={onClose}>Close</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);

export default InfoModal;
