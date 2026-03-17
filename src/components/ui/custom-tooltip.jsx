import { Tooltip } from "@chakra-ui/tooltip";
import { Box } from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";

export default function CustomTooltip({ children, header, body }) {
  const tooltipBG = useColorModeValue("white", "#09090b");
  const dotColor = useColorModeValue("#09090b", "white");

  return (
    <Tooltip
      openDelay={200}
      bg={tooltipBG}
      border="2px solid"
      borderColor="gray.700"
      borderRadius="8px"
      p="10px"
      maxW={"350px"}
      label={
        <Box>
          <Box fontWeight="bold" fontSize={"1.1rem"}>
            {header}
          </Box>

          <Box borderTop="2px solid" borderColor="gray.600" my="6px" />

          <Box fontSize="1rem">{body}</Box>
        </Box>
      }
    >
      <Box
        position="relative"
        display="flex"
        justifyContent="center"
        alignItems="center"
        className="group"
        _hover={{ cursor: "pointer" }}
      >
        {children}
        <Box
          position="absolute"
          bottom="-10px"
          w="6px"
          h="6px"
          borderRadius="100%"
          bg={dotColor}
          transition="opacity 0.2s, transform 0.2s"
          _groupHover={{ opacity: 0 }}
        />
      </Box>
    </Tooltip>
  );
}
