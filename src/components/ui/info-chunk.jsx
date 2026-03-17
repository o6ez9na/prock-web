import { Flex, Box, Text, Stack } from "@chakra-ui/react";
import { PiMemory } from "react-icons/pi";
import { BsCpu } from "react-icons/bs";
import {
  TbStack2,
  TbArrowBarToUp,
  TbArrowBarToDown,
  TbArrowAutofitUp,
  TbArrowAutofitDown,
} from "react-icons/tb";
import { FiHardDrive } from "react-icons/fi";
const ICON_MAP = {
  "Все процессы": <TbStack2 size="33px" />,
  "Всего памяти": <PiMemory size="33px" />,
  "Использование CPU": <BsCpu size="33px" />,
  "Диск I/O": <FiHardDrive size="33px" />,
  "Отправлено данных": <TbArrowBarToUp size="33px" />,
  "Принято данных": <TbArrowBarToDown size="33px" />,
  "Отправлено пакетов": <TbArrowAutofitUp size="33px" />,
  "Принято пакетов": <TbArrowAutofitDown size="33px" />,
};

export default function InfoChunk({ headerText, content, borderColor, bg }) {
  const IconComponent = ICON_MAP[headerText];

  return (
    <Flex
      flex="1"
      minH={"120px"}
      bg={bg}
      border="2px solid"
      borderColor={borderColor}
      borderRadius={"8px"}
      p={4}
      gap={4}
      align="center"
    >
      <Box
        w={"3.5rem"}
        h={"3.5rem"}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {IconComponent}
      </Box>

      <Stack flex="1" spacing={2} justify="center">
        <Text
          fontSize="sm"
          fontWeight="medium"
          textTransform="uppercase"
          letterSpacing="wide"
          color={borderColor}
        >
          {headerText}
        </Text>

        <Box h="2px" w={"100%"} bg={borderColor} />

        <Text fontSize="2xl" fontWeight="bold" lineHeight="shorter">
          {content}
        </Text>
      </Stack>
    </Flex>
  );
}
