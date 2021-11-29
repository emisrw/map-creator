// theme.js
import { extendTheme } from "@chakra-ui/react";

// Global style overrides
import global from "./styles";
import colors from "./styles/colors";
import fonts from "./styles/fonts";
import fontSizes from "./styles/font-sizes";
import sizes from "./styles/sizes";
import Container from './components/container'

export default extendTheme({
  styles: {
    global,
  },
  colors,
  fonts,
  fontSizes,
  sizes,
  components: {
    Container
  }
});
