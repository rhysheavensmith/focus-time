import { View, StyleSheet } from "react-native";
import React from "react";
import { RoundedButton } from "../components/RoundedButton";
import { spacing } from "../utils/sizes";

const Timing = ({ onChangeTime }) => {
  return (
    <View style={styles.timingButton}>
      <RoundedButton
        size={65}
        title="10"
        onPress={() => onChangeTime(10)}
        style={styles.button}
      />
      <RoundedButton
        size={75}
        title="15"
        onPress={() => onChangeTime(15)}
        style={styles.button}
      />
      <RoundedButton
        size={65}
        title="20"
        onPress={() => onChangeTime(20)}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  button: {
    marginHorizontal: spacing.lg,
  },
});

export default Timing;
