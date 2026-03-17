import { Flex } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

export default function InfoChunk({ headerText, content, borderColor, bg }) {
  return (
    <Flex
      w={"25%"}
      h={"6rem"}
      bg={bg}
      border="2px solid"
      borderColor={borderColor}
      borderRadius={"8px"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Flex gap="4px" align="center">
        <Box>
          {headerText} <b>{content}</b>
        </Box>
      </Flex>
    </Flex>
  );
}
