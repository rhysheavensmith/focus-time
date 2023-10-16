import { View, Text, StyleSheet, Vibration } from "react-native";
import React, { useState } from "react";
import { ProgressBar } from "react-native-paper";
import { useKeepAwake } from "expo-keep-awake";

import { Countdown } from "../components/Countdown";
import { spacing, fontSizes } from "../utils/sizes";
import { RoundedButton } from "../components/RoundedButton";
import { colors } from "../utils/colors";
import Timing from "./Timing";

const oneSecond = 1000;

const pattern = [
  1 * oneSecond,
  1 * oneSecond,
  1 * oneSecond,
  1 * oneSecond,
  1 * oneSecond,
];

const Timer = ({ focusSubject, clearSubject, onTimerEnd }) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(15);

  const onEnd = (reset) => {
    Vibration.vibrate(pattern);
    setIsStarted(false);
    setProgress(1);
    reset();
    onTimerEnd(focusSubject);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          isPaused={!isStarted}
          onProgress={setProgress}
          onEnd={onEnd}
          minutes={minutes}
        />
        <View style={{ paddingTop: spacing.xl }}>
          <Text style={styles.title}>Focusing on:</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>
      <ProgressBar
        progress={progress}
        color={colors.progressBar}
        style={{ height: spacing.sm }}
      />
      <View style={styles.timingWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>
      <View style={styles.buttonWrapper}>
        <RoundedButton
          title={isStarted === true ? "stop" : "start"}
          onPress={() => setIsStarted(!isStarted)}
        />
      </View>
      <View style={styles.clearWrapper}>
        <RoundedButton title="back" size={75} onPress={clearSubject} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  timingWrapper: {
    flex: 0.1,
    paddingTop: spacing.xxxl,
    flexDirection: "row",
  },
  countdown: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: "row",
    padding: spacing.md,
    justifyContent: "center",
    alignItems: "center",
  },
  clearWrapper: {
    flexDirection: "row",
    justifyContent: "center",
  },
  title: {
    color: colors.white,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: fontSizes.xl,
  },
  task: {
    color: colors.white,
    textAlign: "center",
    fontSize: fontSizes.lg,
  },
});

export default Timer;
