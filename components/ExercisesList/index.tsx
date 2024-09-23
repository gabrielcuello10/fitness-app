import { FlatList, TouchableOpacity } from "react-native";
import { Image, Text, View } from "tamagui";
import { IExercises } from "../../interfaces/exercises";

const ExercisesList = ({
  item,
  router,
}: {
  item: IExercises[];
  router: any;
}) => {
  const renderItem = ({ item }: { item: IExercises }) => (
    <TouchableOpacity
      onPress={() =>
        router.push({ pathname: `/exercisesDetails/`, params: item })
      }
    >
      <View p="$2" mb="$2" backgroundColor="$gray100">
        <Image
          source={{ uri: item.gifUrl }}
          width={190}
          height={190}
          resizeMode="cover"
        />
        <Text mt="$1" fontWeight="bold" ta="center">
          {item.name.length > 20 ? item.name.slice(0, 20) + "..." : item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={item}
      numColumns={2}
      showsHorizontalScrollIndicator={false}
      columnWrapperStyle={{
        justifyContent: "space-between",
      }}
      scrollEnabled={false}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default ExercisesList;
