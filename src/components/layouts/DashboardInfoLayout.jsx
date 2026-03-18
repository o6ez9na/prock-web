import { Box, Grid, Flex } from "@chakra-ui/react";
import InfoChunk from "../ui/info-chunk";

export default function DashboardInfoLayout({
  borderColor,
  bg,
  blockHeader,
  data,
  child,
}) {
  return (
    <Flex direction={"column"} mb={"20px"}>
      <Box fontSize={"1.4rem"} mb={"-0.5rem"}>
        {blockHeader} {child}
      </Box>

      <Box
        h="2px"
        w="100%"
        bg={borderColor}
        borderRadius="full"
        mt="0.8rem"
        mb="0.8rem"
      />

      <Grid
        templateColumns={{
          base: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap="1.2rem"
        w="100%"
      >
        {data.map((item, index) => (
          <InfoChunk
            key={index}
            headerText={item.headerText}
            content={item.content}
            borderColor={borderColor}
            bg={bg}
          />
        ))}
      </Grid>
    </Flex>
  );
}
