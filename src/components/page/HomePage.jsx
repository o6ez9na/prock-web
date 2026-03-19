import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import APIService from "../../api/API";
import { Flex, Spinner } from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";

export default function HomePage() {
  const loaderColor = useColorModeValue("#09090b", "white");
  const bg = useColorModeValue("white", "#010b13");

  const [redirect, setRedirect] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await APIService.getMe();
        setRedirect("/dashboard");
      } catch (error) {
        if (error.response?.status === 401) {
          setRedirect("/auth");
        } else {
          console.error(error);
        }
      }
    };

    checkAuth();
  }, []);

  if (redirect) {
    return <Navigate to={redirect} replace />;
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      justifyContent={"center"}
      alignItems={"center"}
      bg={bg}
    >
      <Spinner size="xl" color={loaderColor} />
    </Flex>
  );
}
