import React, { useRef, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import {
  Button,
  Card,
  Icon,
  IconButton,
  Searchbar,
  Text,
  TouchableRipple,
} from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import useCourses from "../hooks/cms/useCourses";
import { Video } from "expo-av";
import Space from "../components/Space";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const { courses } = useCourses();
  const [searchQuery, setSearchQuery] = React.useState("");

  const navigation = useNavigation();

  const onChangeSearch = (query: string) => setSearchQuery(query);
  const renderCourseCard = ({ item }: any) => (
    <CourseCard
      onPress={() => {
        // Navigate to the CourseScreen and pass the video URL
        navigation.navigate("CourseScreen", {
          screen: "CourseDetails",
          params: { course: item },
        });
      }}
      course={item}
    />
  );

  return (
    <SafeAreaView>

      <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
      <Searchbar
        style={{
          flex:1,
          backgroundColor: "transparent",
          borderWidth: 1,
          borderRadius: 100,
          padding: 0,
        }}
        placeholder="Search"
        // inputStyle={{fontSize:10}}

        onChangeText={onChangeSearch}
        value={searchQuery}
      />

      <IconButton icon={"chat-processing-outline"} 
  onPress={() => {
    // Navigate to the CourseScreen and pass the video URL
    navigation.navigate("GroupChatScreen", {
      screen: "GroupChatScreen",
      // params: { course: item },
    });
  }}
       size={30}/>
      </View>
      <Space />
      <FlatList
        ItemSeparatorComponent={() => <View style={{ marginVertical: 10 }} />}
        data={courses}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderCourseCard}
        contentContainerStyle={{ paddingBottom: 100 }}
      />

      <Text>Home</Text>
    </SafeAreaView>
  );
};

const CourseCard = ({ course, onPress }: { course: any; onPress: any }) => {
  return (
    <Card mode="outlined" onPress={onPress}>
      <Card.Cover source={{ uri: course?.image.url }} style={{}} />

      <Card.Content>
        <Text variant="titleMedium">{course?.title}</Text>
      </Card.Content>
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
  );
};
export default HomeScreen;

