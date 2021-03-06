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
    bodyBackground: "radial-gradient(hsl(214, 47%, 23%) hsl(237, 49%, 15%))",
    scissorsGradient: "radial-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))",
    paperGradient: "radial-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))",
    rockGradient: "radial-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))",
  },
};

export { myTheme };
