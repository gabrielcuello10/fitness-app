import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, ScrollView, Text, View, XStack } from "tamagui";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ImageSlider from "../components/ImageSlider";
import BodyParts from "../components/BodyPart";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <XStack ai="center" jc="space-between" px="$5" w="100%">
          <View>
            <Text fontSize="$10" fow="bold" col="$black15">
              READY TO
            </Text>
            <Text fontSize="$10" fow="bold" col="$red10">
              READY TO
            </Text>
          </View>
          <View gap={5}>
            <Avatar circular size="$5">
              <Avatar.Image
                accessibilityLabel="Nate Wienert"
                src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?&w=100&h=100&dpr=2&q=80"
              />
              <Avatar.Fallback delayMs={600} backgroundColor="$blue10" />
            </Avatar>
            <View
              bg="$gray8"
              borderRadius="$10"
              width="$5"
              height="$5"
              justifyContent="center"
              alignItems="center"
            >
              <MaterialCommunityIcons name="bell" size={24} color="#000" />
            </View>
          </View>
        </XStack>
        <ImageSlider />
        <BodyParts />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
