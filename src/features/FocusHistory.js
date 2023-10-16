import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";

import { colors } from "../utils/colors";
import { fontSizes } from "../utils/sizes";
import { spacing } from "../utils/sizes";

const FocusHistory = ({ history }) => {
  if (!history || history.length === 0) {
    return null;
  }

  const renderItem = ({ item, index }) => {
    return (
      <Text key={index} style={styles.item}>
        {item}
      </Text>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What you have focused on lately:</Text>
      <FlatList
        data={history}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    color: colors.white,
    fontSize: fontSizes.md,
    marginLeft: spacing.lg,
    paddingVertical: 4,
  },
  title: {
    color: colors.progressBar,
    fontSize: fontSizes.md,
    fontWeight: "bold",
    marginLeft: spacing.lg,
  },
});

export default FocusHistory;
