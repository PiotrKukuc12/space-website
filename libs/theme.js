import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from "@chakra-ui/theme-tools"

// const breakpoints = createBreakpoints({
//   sm: "480px",
//   md: "768px"
// })

const theme = extendTheme({
  colors: {
    brand: {
      100: '#0b0d17',
      200: '#bac3f5',
      300: '#FFFFFF',
    },
  },
  fonts: {
      body: "Barlow Condensed",
      h1: "Bellefair"
  },
  // breakpoints
});

export default theme;
