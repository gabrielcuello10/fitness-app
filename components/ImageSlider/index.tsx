import { Dimensions } from "react-native";
import Swiper from "react-native-swiper";
import { Image } from "tamagui";
import { sliderImages } from "../../constants";
const { width } = Dimensions.get("window");

const ImageSlider = () => {
  return (
    <Swiper
      autoplay={true}
      showsPagination={false}
      containerStyle={{
        flex: 0,
        height: 200,
      }}
      height={200}
      width={width}
    >
      {sliderImages.map((image, index) => (
        <Image
          key={index}
          source={image}
          width={width - 40}
          margin="auto"
          borderRadius={20}
          height={200}
        />
      ))}
    </Swiper>
  );
};

export default ImageSlider;
