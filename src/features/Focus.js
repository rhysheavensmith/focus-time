import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import React, { useState } from "react";

import { colors } from "../utils/colors";
import { spacing } from "../utils/sizes";
import { RoundedButton } from "../components/RoundedButton";

export default function Focus({ addSubject, addHistory }) {
  const [subject, setSubject] = useState("");

  const handleFocusItem = () => {
    if (subject) {
      addSubject(subject);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          label="What would you like to focus on?"
          onChangeText={(text) => setSubject(text)}
          style={styles.textInput}
        />
        <View style={styles.buttonContainer}>
          <RoundedButton title="+" size={50} onPress={handleFocusItem} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  text: {
    color: colors.white,
  },
  buttonContainer: {
    justifyContent: "center",
  },
});
