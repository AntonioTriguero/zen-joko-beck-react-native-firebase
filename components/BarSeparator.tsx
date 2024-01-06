import { View, StyleSheet, Text } from "react-native";

const BarSeparator = () => {
  return <View style={styles.separator}></View>;
};

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 10,
    paddingVertical: 1,
    backgroundColor: "#242424",
    borderWidth: 0,
    borderColor: "transparent",
  },
});
export default BarSeparator;
