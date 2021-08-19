// my-theme.ts
import { DefaultTheme } from "styled-components";

const myTheme: DefaultTheme = {
  borderRadius: "8px",
  colors: {
    darkText: "hsl(229, 25%, 31%)",
    scoreText: "hsl(229, 64%, 46%)",
    headerOutline: "hsl(217, 16%, 45%)",
  },
  gradients: {
    background: "radial-gradient(hsl(214, 47%, 23%) hsl(237, 49%, 15%))",
  },
};

export { myTheme };
