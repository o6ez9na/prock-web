import { Box, Flex } from "@chakra-ui/react";
import InfoChunk from "../ui/info-chunk";

export default function DashboardInfoLayout({
  borderColor,
  bg,
  blockHeader,
  data,
  child,
}) {
  return (
    <Flex direction="column">
      <Box fontSize={"1.4rem"} mb={"-0.5rem"}>
        {blockHeader} {child}
      </Box>
      <Box
        h="2px"
        w="100%"
        bg={borderColor}
        borderRadius={"10px"}
        my={"0.8rem"}
      />
      <Flex gap={"1.2rem"} w={"100%"}>
        {data.map((item, index) => (
          <InfoChunk
            key={index}
            headerText={item.headerText}
            content={item.content}
            borderColor={borderColor}
            bg={bg}
          />
        ))}
      </Flex>
    </Flex>
  );
}
