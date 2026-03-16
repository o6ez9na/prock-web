import {
  Flex,
  Box,
  Heading,
  Input,
  Button,
  Stack,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";

import { useColorModeValue } from "../ui/color-mode";

import { FaUser, FaLock } from "react-icons/fa";

export default function AuthPage() {
  const pageBg = useColorModeValue("gray.50", "black");
  const textColor = useColorModeValue("gray.800", "white");
  const subTextColor = useColorModeValue("gray.500", "gray.400");

  const buttonBg = useColorModeValue("black", "white");
  const buttonColor = useColorModeValue("white", "black");
  const buttonHoverBg = useColorModeValue("gray.800", "gray.200");

  const inputBorder = useColorModeValue("gray.200", "gray.600");
  const inputFocusBorder = useColorModeValue("gray.300", "gray.500");

  return (
    <Flex minH="100vh" align="center" justify="center" bg={pageBg} p={4}>
      <Box p={8} rounded="2xl" w="full" maxW="420px" borderWidth="2px">
        <Stack gap={6}>
          <Stack gap={2} textAlign="center">
            <Heading size="lg" color={textColor} fontWeight="bold">
              С возвращением!
            </Heading>
            <Text color={subTextColor} fontSize="sm">
              Введите данные для входа в аккаунт
            </Text>
          </Stack>

          <Stack gap={5}>
            <Stack gap={2}>
              <Text fontSize="sm" fontWeight="medium" color={textColor}>
                Имя пользователя{" "}
                <Text as="span" color="red.500">
                  *
                </Text>
              </Text>
              <Box position="relative">
                {typeof FaUser !== "undefined" && (
                  <Box
                    as="span"
                    position="absolute"
                    left={4}
                    top="50%"
                    transform="translateY(-50%)"
                    color={subTextColor}
                    zIndex={1}
                    pointerEvents="none"
                    display="flex"
                    alignItems="center"
                  >
                    <FaUser size={14} />
                  </Box>
                )}
                <Input
                  type="text"
                  placeholder="Имя пользователя"
                  border="1px solid"
                  borderColor={inputBorder}
                  borderWidth="1px"
                  _focus={{
                    borderColor: inputFocusBorder,
                    outline: "none",
                  }}
                  size="lg"
                  borderRadius="lg"
                  pl={10}
                />
              </Box>
            </Stack>

            <Stack gap={2}>
              <Flex justify="space-between" align="center">
                <Text fontSize="sm" fontWeight="medium" color={textColor}>
                  Пароль{" "}
                  <Text as="span" color="red.500">
                    *
                  </Text>
                </Text>
              </Flex>
              <Box position="relative">
                {typeof FaLock !== "undefined" && (
                  <Box
                    as="span"
                    position="absolute"
                    left={4}
                    top="50%"
                    transform="translateY(-50%)"
                    color={subTextColor}
                    zIndex={1}
                    pointerEvents="none"
                    display="flex"
                    alignItems="center"
                  >
                    <FaLock size={14} />
                  </Box>
                )}
                <Input
                  type="password"
                  placeholder="Ваш пароль"
                  border="1px solid"
                  borderColor={inputBorder}
                  borderWidth="1px"
                  _focus={{
                    borderColor: inputFocusBorder,
                    outline: "none",
                  }}
                  size="lg"
                  borderRadius="lg"
                  pl={10}
                />
              </Box>
            </Stack>

            <Button
              bg={buttonBg}
              color={buttonColor}
              size="lg"
              borderRadius="lg"
              fontWeight="bold"
              _hover={{ bg: buttonHoverBg }}
              _active={{ transform: "translateY(0)" }}
              transition="all 0.2s"
              mt={2}
            >
              Войти
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Flex>
  );
}
