import { useRoute } from "@react-navigation/native";
import { ResizeMode, Video } from "expo-av";
import { Dimensions, ScrollView, StatusBar, View } from "react-native";
import VideoPlayer from "expo-video-player";
import { Icon, IconButton, Text, useTheme } from "react-native-paper";
import { setStatusBarHidden } from "expo-status-bar";
import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect, useRef, useState } from "react";
const VideoScreen = ({navigation}:{navigation:any}) => {
  const route = useRoute<any>();
  const { videoUrl, title } = route?.params?.params;
  console.log(videoUrl);
  const theme = useTheme();
  const [inFullscreen, setInFullsreen] = useState(false);
  const refVideo = useRef<any>(null);
  const [screenDimensions, setScreenDimensions] = useState(
    Dimensions.get("window")
  );

  useEffect(() => {
    const updateDimensions = () => {
      setScreenDimensions(Dimensions.get("window"));
    };

    Dimensions.addEventListener("change", updateDimensions);
    return () => {};
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        height: "100%",
        backgroundColor: "black",
        width: "100%",
        alignItems: "center",
      }}
    >
      <VideoPlayer
        slider={{
          thumbTintColor: theme.colors.primary,
          minimumTrackTintColor: theme.colors.primary,
        }}
        style={{
          width: screenDimensions.width,
          height: screenDimensions.height,
        }}

        videoProps={{
          source: { uri: videoUrl },
          shouldPlay: true,
          resizeMode: ResizeMode.CONTAIN,
        }}
        defaultControlsVisible
        icon={{ color: theme.colors.primary }}
        header={<View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",paddingLeft:10}}>
          <IconButton  size={30} icon={"chevron-left"} onPress={()=>navigation.goBack()}/>
          <Text style={{ padding: 20,paddingLeft:0 }}>{title}</Text>
        </View>}
        fullscreen={{
          inFullscreen: inFullscreen,
          enterFullscreen: async () => {
            setStatusBarHidden(true, "fade");
            setInFullsreen(!inFullscreen);
            await ScreenOrientation.lockAsync(
              ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
            );
            refVideo?.current?.setStatusAsync({
              shouldPlay: true,
            });
          },
          exitFullscreen: async () => {
            setStatusBarHidden(false, "fade");
            setInFullsreen(!inFullscreen);
            await ScreenOrientation.lockAsync(
              ScreenOrientation.OrientationLock.DEFAULT
            );
          },
        }}
      />
    </View>
  );
};

export default VideoScreen;
