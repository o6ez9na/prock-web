import {
  Flex,
  Box,
  Heading,
  Input,
  Button,
  Stack,
  Text,
  Spinner,
} from "@chakra-ui/react";

import { useColorModeValue } from "../ui/color-mode";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";

import APIService from "../../api/API";

export default function AuthPage() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const pageBg = useColorModeValue("gray.50", "#010b13");
  const textColor = useColorModeValue("gray.800", "white");

  const buttonBg = useColorModeValue("black", "white");
  const buttonColor = useColorModeValue("white", "black");
  const buttonHoverBg = useColorModeValue("gray.800", "gray.200");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await APIService.auth({
        username,
        password,
      });
      if (response.status == 200) {
        localStorage.setItem("authToken", response.data.access_token);
        localStorage.setItem("refreshToken", response.data.refresh_token);
        APIService.setAuthToken(response.data.access_token);
        navigate("/dashboard");
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Flex minH="100vh" align="center" justify="center" bg={pageBg} p={4}>
      {isLoading ? (
        <Flex
          w={"100vw"}
          h={"100%"}
          justifyContent="center"
          alignItems="center"
        >
          <Spinner size="xl" color={textColor} />
        </Flex>
      ) : (
        <Box
          p={8}
          rounded="2xl"
          w="full"
          maxW="420px"
          borderWidth="2px"
          borderColor={textColor}
        >
          <Stack gap={6}>
            <Stack gap={2} textAlign="center">
              <Heading size="lg" color={textColor} fontWeight="bold">
                С возвращением!
              </Heading>
              <Text color={textColor} fontSize="sm">
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
                      color={textColor}
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
                    border={"None"}
                    borderBottom={"2px solid"}
                    borderColor={textColor}
                    _focus={{
                      borderColor: "inherit",
                      outline: "none",
                    }}
                    borderRadius={0}
                    size={"lg"}
                    pl={10}
                    onChange={(e) => setUsername(e.target.value)}
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
                      color={textColor}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    border={"None"}
                    borderBottom={"2px solid"}
                    borderColor={textColor}
                    _focus={{
                      borderColor: "inherit",
                      outline: "none",
                    }}
                    borderRadius={0}
                    size={"lg"}
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
                onClick={handleSubmit}
                w={"100%"}
              >
                Войти
              </Button>
            </Stack>
          </Stack>
        </Box>
      )}
    </Flex>
  );
}
