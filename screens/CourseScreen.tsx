import { useNavigation, useRoute } from "@react-navigation/native";
import { Image, View, StyleSheet } from "react-native";
import {
  ActivityIndicator,
  List,
  TouchableRipple,
  MD2Colors,
  Text,
  IconButton,
  Icon,
  useTheme,
} from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { ResizeMode ,Video} from "expo-av";
import { useEffect, useRef, useState } from "react";
import { addScreenshotListener } from "expo-screen-capture";
import useCourseById from "../hooks/cms/useCourseById";
import Space from "../components/Space";

const CourseScreen = ({ navigation }: { navigation: any }) => {
  const route = useRoute<any>();
  const { course } = route?.params?.params;
  const videoRef = useRef<any>(null);
  const [isPlaying, setPlaying] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  const { courseDetails, error, loading } = useCourseById(course?._id);

  useEffect(() => {
    const screenCaptureListener = addScreenshotListener(() => {
      setIsRecording(true);
    });

    return () => {
      // Remove the event listener when the component is unmounted
      screenCaptureListener.remove();
    };
  }, []);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef?.current?.pauseAsync();
    } else {
      videoRef?.current?.playAsync();
    }
    setPlaying(!isPlaying);
  };


  return (
    <SafeAreaView>
      <View>

        <Video
          source={{ uri: course?.video?.url??course?.videoUrl }}
          style={{ width: "100%", height: 200 }}
          videoStyle={{ aspectRatio: "1/1" }}
          posterSource={{ uri: course?.image?.url }}
          posterStyle={{ height: "100%", width: "100%", objectFit: "cover" }}
          usePoster
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
        />

      </View>
      <View style={{padding:10}}>
        <Text variant="headlineSmall" style={{fontWeight:"bold"}}>{course?.title}</Text>
        <Text style={{paddingTop:4}}>{course?.description} </Text>

      </View>

      {isRecording && (
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            height: 3000,
            flex: 1,
            backgroundColor: "black",
            zIndex: 1000000, // Ensure the black overlay is on top of the video
            opacity: 0.7, // Adjust opacity as needed
          }}
        />
      )}

      <View >
        {loading ? (
          <ActivityIndicator animating={true} size={"large"} />
        ) : (
          <>
          <CourseChapters
            chapters={courseDetails?.courseContent[0]?.chapters}
          />
        <Space/>
        <CourseQuestions qa={courseDetails?.qaPairs?.qaPairs}/>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

const CourseChapters = ({ chapters }: { chapters: any }) => {
  const navigation = useNavigation()
  const theme = useTheme();

  return (
    <List.AccordionGroup>
      {chapters?.map((chapter: any, i: number) => (
        <List.Accordion
          key={i}
          title={chapter.title}
          titleNumberOfLines={1}
          titleStyle={{ fontSize: 18 }}
          id={`accordion-${i}`}
        >
          {chapter.lectures?.map((l: any, j: number) => (
            <TouchableRipple
              key={l?._key}
              onPress={() => {
                // Navigate to the CourseScreen and pass the video URL
                navigation.navigate("VideoScreen", {
                  screen: "VideoScreen",
                  params: { videoUrl: l?.video?.url??l?.videoUrl ,title:l?.title} ,
                });
              }}
              style={{
                padding: 12,
              }}
            >
              <View style={{ flexDirection: "column", alignItems: "flex-end" }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text>{l?.title}</Text>
                  <Icon
                    size={22}
                    source={"play"}
                    color={theme.colors.primary}
                  />
                </View>
                <Text style={{ color: "rgba(255, 255, 255, 0.5)" }}>
                  {l?.duration}
                </Text>
              </View>
            </TouchableRipple>
          ))}
        </List.Accordion>
      ))}
    </List.AccordionGroup>
  );
};


const CourseQuestions = ({ qa }: { qa: any }) => {
  const theme = useTheme();

  return (
    <View>
        <Text style={{marginBottom:5}} variant="titleLarge">FAQ's</Text>
    <List.AccordionGroup>
      {qa?.map((q: any, i: number) => (
        <List.Accordion
          key={i}
          title={q?.question}
          titleNumberOfLines={1}
  
          titleStyle={{ fontSize: 18 }}
          id={`accordion-${i}`}
        >
          <View>
            <Text>
              {q?.answer}
            </Text>
            </View>
        </List.Accordion>
      ))}
    </List.AccordionGroup>
    </View>
  );
};


export default CourseScreen;
