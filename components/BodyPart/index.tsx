import { FlatList, TouchableOpacity } from "react-native";
import { Image, Text, View } from "tamagui";
import { bodyParts } from "../../constants";
import { useRouter } from "expo-router";

const BodyPartCard = ({
  index,
  router,
  item,
}: {
  index: number;
  router: any;
  item: { image: any; name: string };
}) => {
  return (
    <View key={index}>
      <TouchableOpacity
        onPress={() => router.push({ pathname: "/exercises", params: item })}
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: 2,
          marginBottom: 2,
        }}
      >
        <Image source={item.image} w={190} h={140} borderRadius={30} />
        <Text textAlign="center" mt={5}>
          {item.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const BodyParts = () => {
  const router = useRouter();
  return (
    <View mx="$2">
      <Text
        fontSize="$8"
        fontWeight="bold"
        color="$red10"
        textAlign="center"
        marginVertical="$4"
      >
        Body Parts
      </Text>
      <FlatList
        data={bodyParts}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 10, paddingTop: 10 }}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        renderItem={({ item }) => (
          <BodyPartCard index={item.id} router={router} item={item} />
        )}
        scrollEnabled={false}
      />
    </View>
  );
};

export default BodyParts;
