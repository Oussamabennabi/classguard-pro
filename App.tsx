import { AuthenticatedUserProvider } from "./providers";
import { RootNavigator } from "./navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";

import {
  PaperProvider,
  MD3LightTheme as DefaultTheme,
} from "react-native-paper";
import * as ScreenCapture from "expo-screen-capture";
import { OverlayProvider } from "stream-chat-react-native";
import { ChatProvider } from "./context/ChatContext";
// Disable screen capture
ScreenCapture.preventScreenCaptureAsync();
const light = {
  colors: {
    primary: "#FEB41A",
    onPrimary: "black",
    primaryContainer: "rgb(151, 240, 255)",
    onPrimaryContainer: "rgb(0, 31, 36)",
    secondary: "rgb(152, 64, 97)",
    onSecondary: "rgb(255, 255, 255)",
    secondaryContainer: "rgb(255, 217, 226)",
    onSecondaryContainer: "rgb(62, 0, 29)",
    tertiary: "rgb(82, 94, 125)",
    onTertiary: "rgb(255, 255, 255)",
    tertiaryContainer: "rgb(218, 226, 255)",
    onTertiaryContainer: "rgb(14, 27, 55)",
    error: "rgb(186, 26, 26)",
    onError: "rgb(255, 255, 255)",
    errorContainer: "rgb(255, 218, 214)",
    onErrorContainer: "rgb(65, 0, 2)",
    background: "rgb(250, 253, 253)",
    onBackground: "rgb(25, 28, 29)",
    surface: "rgb(250, 253, 253)",
    onSurface: "rgb(25, 28, 29)",
    surfaceVariant: "rgb(219, 228, 230)",
    onSurfaceVariant: "rgb(63, 72, 74)",
    outline: "rgb(111, 121, 122)",
    outlineVariant: "rgb(191, 200, 202)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(46, 49, 50)",
    inverseOnSurface: "rgb(239, 241, 241)",
    inversePrimary: "rgb(79, 216, 235)",
    elevation: {
      level0: "transparent",
      level1: "rgb(238, 246, 246)",
      level2: "rgb(230, 241, 242)",
      level3: "rgb(223, 237, 238)",
      level4: "rgb(220, 235, 237)",
      level5: "rgb(215, 232, 234)",
    },
    surfaceDisabled: "rgba(25, 28, 29, 0.12)",
    onSurfaceDisabled: "rgba(25, 28, 29, 0.38)",
    backdrop: "rgba(41, 50, 52, 0.4)",
  },
};

const dark = {
  colors: {
    primary: "#FE574A",
    onPrimary: "black",
    primaryContainer: "rgb(144, 4, 54)",
    onPrimaryContainer: "rgb(255, 217, 221)",
    secondary: "#FEB41A",
    onSecondary: "#FEB41A",
    secondaryContainer: "#FEB41A",
    onSecondaryContainer: "#FEB41A",
    tertiary: "rgb(255, 181, 160)",
    onTertiary: "rgb(96, 21, 0)",
    tertiaryContainer: "rgb(135, 33, 0)",
    onTertiaryContainer: "black",
    error: "rgb(255, 180, 171)",
    onError: "rgb(105, 0, 5)",
    errorContainer: "rgb(147, 0, 10)",
    onErrorContainer: "rgb(255, 180, 171)",
    background: "#151514",
    onBackground: "rgb(236, 224, 224)",
    surface: "rgb(17, 17, 17)",
    onSurface: "rgb(236, 224, 224)",
    surfaceVariant: "black",
    onSurfaceVariant: "rgb(215, 193, 195)",
    outline: "#aaaaaa",
    outlineVariant: "rgb(82, 67, 69)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(236, 224, 224)",
    inverseOnSurface: "rgb(54, 47, 47)",
    inversePrimary: "rgb(177, 38, 76)",
    elevation: {
      level0: "transparent",
      level1: "rgb(43, 34, 35)",
      level2: "rgb(50, 38, 40)",
      level3: "rgb(57, 43, 45)",
      level4: "rgb(59, 44, 46)",
      level5: "rgb(63, 47, 50)",
    },
    surfaceDisabled: "black",
    onSurfaceDisabled: "black",
    backdrop: "black",
  },
};
const theme = {
  ...DefaultTheme,
  colors: dark.colors, // Copy it from the color codes scheme and then use it here
  roundness: 1,
  dark: true,
};
export default function App() {
  return (
    <PaperProvider theme={theme}>
      {/* <ChatProvider> */}
    
        <AuthenticatedUserProvider>
          <SafeAreaProvider>
            <RootNavigator />
          </SafeAreaProvider>
        </AuthenticatedUserProvider>
      {/* </ChatProvider> */}
    </PaperProvider>
  );
}
