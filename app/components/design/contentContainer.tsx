import { Flex } from "@chakra-ui/react";

interface ContentContainerProps {
  children: React.ReactNode;
}

export default function ContentContainer({ children }: ContentContainerProps) {
  return (
    <Flex
      width="100%"
      maxWidth="1000px"
      justify="space-evenly"
      align="center"
      py="20px"
    >
      {children}
    </Flex>
  );
}
