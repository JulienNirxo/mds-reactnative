import { View } from "react-native";

function Square({ color, size, borderColor }) {
  return (
    <View
      style={{
        height: size,
        width: size,
        backgroundColor: color,
        borderColor: borderColor,
        borderWidth: 2,
      }}
    ></View>
  );
}

export default Square;