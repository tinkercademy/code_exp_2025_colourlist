import { View } from "react-native";

const BlockRGB = ({ red, green, blue }) => {
  return (
    <View
      style={{
        width: "100%",
        height: 100,
        backgroundColor: `rgb(${red}, ${green}, ${blue})`
      }}
    />
  );
};

export default BlockRGB;
