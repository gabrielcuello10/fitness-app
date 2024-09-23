import { Text, YStack, Button, XStack } from "tamagui";
import { router } from "expo-router";
import { ImageBackground } from "react-native";

const Index = () => {
  return (
    <ImageBackground
      source={require("../assets/welcome.png")}
      resizeMode="cover"
      style={{ flex: 1 }}
    >
      <YStack
        jc="flex-end"
        ai="center"
        p="$4"
        bg="rgba(255, 255, 255, 0.1)"
        pos="absolute"
        w="100%"
        h="100%"
      >
        <Text fos="$7" fow="bold" col="$red10" ta="center" mb="$6">
          Discover your potential and achieve your goals with us!
        </Text>
        <XStack mb="$4">
          <Button
            onPress={() => router.push("home")}
            size="$6"
            theme="active"
            br="$10"
            px="$6"
            bg="$red10"
            color="$white1"
            shof={{ width: 0, height: 4 }}
            shop={0.5}
            shar={8}
            bw={2}
            bc="$blue3"
            pressStyle={{ scale: 0.95, backgroundColor: "$red9" }}
          >
            Get Started
          </Button>
        </XStack>
      </YStack>
    </ImageBackground>
  );
};

export default Index;
