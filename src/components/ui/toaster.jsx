import {
  Toaster as ChakraToaster,
  Portal,
  Spinner,
  Stack,
  Toast,
  createToaster,
} from "@chakra-ui/react";

import { useColorModeValue } from "../ui/color-mode";

export const toaster = createToaster({
  placement: "bottom-end",
  pauseOnPageIdle: true,
  transition: {
    enter: { animation: "slideIn 0.3s ease-out" },
    exit: { animation: "slideOut 0.2s ease-in forwards" },
  },
});

const toastColors = {
  success: {
    borderColor: "rgba(22, 163, 74, 0.9)",
  },
  error: {
    borderColor: "rgba(239, 68, 68, 0.9)",
  },
  warning: { borderColor: "rgba(245, 158, 11, 0.9)" },
  info: { borderColor: "rgba(59, 130, 246, 0.9)" },
  loading: { borderColor: "rgba(30, 30, 30, 0.9)" },
};

export const Toaster = () => {
  const textColor = useColorModeValue("gray.800", "white");
  const bgColor = useColorModeValue("white", "black");
  return (
    <Portal>
      <ChakraToaster toaster={toaster} insetInline={{ mdDown: "4" }}>
        {(toast) => {
          const colors = toastColors[toast.type] || toastColors.info;

          return (
            <Toast.Root
              width={{ md: "sm" }}
              bg={bgColor}
              color={textColor}
              borderWidth="3px"
              borderColor={colors.borderColor}
            >
              {toast.type === "loading" ? (
                <Spinner size="sm" color="white" />
              ) : (
                <Toast.Indicator />
              )}
              <Stack gap="1" flex="1" maxWidth="100%">
                {toast.title && <Toast.Title>{toast.title}</Toast.Title>}
                {toast.description && (
                  <Toast.Description>{toast.description}</Toast.Description>
                )}
              </Stack>
              {toast.action && (
                <Toast.ActionTrigger>{toast.action.label}</Toast.ActionTrigger>
              )}
              {toast.closable && <Toast.CloseTrigger />}
            </Toast.Root>
          );
        }}
      </ChakraToaster>
    </Portal>
  );
};
