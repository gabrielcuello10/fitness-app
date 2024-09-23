import { router, useLocalSearchParams } from "expo-router";
import { TouchableOpacity } from "react-native";
import { Image, ScrollView, Text, YStack, XStack } from "tamagui";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const ExercisesDetails = () => {
  const item = useLocalSearchParams();
  return (
    <SafeAreaView style={{ flex: 1 }}>
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
          source={{
            uri: Array.isArray(item.gifUrl) ? item.gifUrl[0] : item.gifUrl,
          }}
          width="100%"
          height={300}
          resizeMode="contain"
        />
        <YStack padding="$4" gap="$4">
          <Text fontSize="$9" fontWeight="bold" color="$red7Dark">
            {item.name}
          </Text>
          <XStack gap="$2">
            <Text fontSize="$5" fontWeight="bold" color="$red8Dark">
              Body Part:
            </Text>
            <Text>{item.bodyPart}</Text>
          </XStack>
          <XStack gap="$2">
            <Text fontSize="$5" fontWeight="bold" color="$red8Dark">
              Equipment:
            </Text>
            <Text>{item.equipment}</Text>
          </XStack>
          <XStack
            flexDirection={item.secondaryMuscles.length > 25 ? "column" : "row"}
            gap="$2"
          >
            <Text fontSize="$5" fontWeight="bold" color="$red8Dark">
              Secondary Muscles:
            </Text>
            <Text flexWrap="wrap">{item.secondaryMuscles}</Text>
          </XStack>
          <XStack gap="$2">
            <Text fontSize="$5" fontWeight="bold" color="$red8Dark">
              Target:
            </Text>
            <Text>{item.target}</Text>
          </XStack>
          <Text fontSize="$9" fontWeight="bold" color="$red7Dark">
            Instructions:
          </Text>
          <Text>
            {(Array.isArray(item.instructions)
              ? item.instructions
              : item.instructions.split(",")
            ).map(
              (instruction, index) => `${index + 1}. ${instruction.trim()}\n`
            )}
          </Text>
        </YStack>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExercisesDetails;
