import { Box, Flex } from "@chakra-ui/react";
import InfoChunk from "../ui/info-chunk";
import { useColorModeValue } from "../ui/color-mode";
import UpdateMenu from "../ui/update-menu";

export default function DashboardInfoLayout({ blockHeader, data }) {
  const borderColor = useColorModeValue("#09090b", "white");
  const bg = useColorModeValue("white", "#09090b");
  return (
    <Flex direction="column">
      <Box fontSize={"1.4rem"} mb={"-0.5rem"}>
        {blockHeader} <UpdateMenu borderColor={borderColor} bg={bg} />
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
