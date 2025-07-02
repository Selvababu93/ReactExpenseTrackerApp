import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
  theme: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },
});
