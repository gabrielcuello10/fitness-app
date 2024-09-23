import { useEffect, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { TouchableOpacity, ImageSourcePropType } from "react-native";
import { Image, ScrollView, View } from "tamagui";
import { fetchExercisesBodyPart } from "../api/exercise";
import ExercisesList from "../components/ExercisesList";
import { Ionicons } from "@expo/vector-icons";
import { IExercises } from "../interfaces/exercises";
import Screen from "../components/Screen";

const Exercises = () => {
  const [data, setData] = useState<IExercises[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const item = useLocalSearchParams<{
    id: string;
    image: string;
    name: string;
  }>();
  async function getExercises(url: string) {
    const data = await fetchExercisesBodyPart(url);
    setData(data);
    setIsLoading(false);
  }
  useEffect(() => {
    if (item && typeof item.name === "string") {
      getExercises(item.name);
    }
  }, []);
  return (
    <Screen isLoading={isLoading}>
      <TouchableOpacity
        onPress={() => router.back()}
        style={{
          position: "absolute",
          top: 30,
          left: 10,
          zIndex: 10,
          backgroundColor: "#8C0000",
          padding: 6,
          borderRadius: 50,
        }}
      >
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>
      <ScrollView>
        <Image
          source={item.image as ImageSourcePropType}
          width="100%"
          height={400}
          resizeMode="cover"
          borderRadius={40}
          borderTopRightRadius={0}
          borderTopLeftRadius={0}
        />
        <ExercisesList item={data} router={router} />
      </ScrollView>
    </Screen>
  );
};

export default Exercises;
