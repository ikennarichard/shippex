import React, { useEffect } from "react";
import { Dimensions, StyleSheet } from "react-native";
import Animated, {
  Easing,
  interpolate,
  interpolateColor,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import Bottom from "../assets/images/bottom-logo.svg";
import Top from "../assets/images/top-logo.svg";

const { height } = Dimensions.get("window");

type Props = {
  onFinish: () => void;
};

export default function WelcomeScreen({ onFinish }: Props) {
  const zoomIn = useSharedValue(1);
  const bgColorProgress = useSharedValue(0);
  const topProgress = useSharedValue(0);
  const bottomProgress = useSharedValue(0);

  useEffect(() => {
    // Step 1: Zoom in the whole logo block
    zoomIn.value = withDelay(
      1000,
      withTiming(
        4,
        {
          duration: 4000,
          easing: Easing.out(Easing.exp),
        },
        () => {
          topProgress.value = withDelay(
            300,
            withTiming(1, {
              duration: 6000,
              easing: Easing.out(Easing.cubic),
            })
          );

          bottomProgress.value = withDelay(
            300,
            withTiming(1, {
              duration: 4000,
              easing: Easing.out(Easing.cubic),
            })
          );

          bgColorProgress.value = withDelay(
            500,
            withTiming(
              1,
              {
                duration: 700,
                easing: Easing.linear,
              },
              () => {
                runOnJS(onFinish)();
              }
            )
          );
        }
      )
    );
  }, []);

  const containerStyle = useAnimatedStyle(() => {
    const bgColor = interpolateColor(
      bgColorProgress.value,
      [0, 1],
      ["#FFFFFF", "#2563EB"]
    );
    return {
      backgroundColor: bgColor,
    };
  });

  const logoStyle = useAnimatedStyle(() => ({
    transform: [{ scale: zoomIn.value }],
  }));

  const topLogoStyle = useAnimatedStyle(() => {
    const scale = interpolate(topProgress.value, [0, 1], [1, 20]);
    const translateX = interpolate(topProgress.value, [0, 1], [0, 1]);
    const translateY = interpolate(
      topProgress.value,
      [0, 1],
      [0, -height * 0.1]
    );

    return {
      transform: [{ scale }, { translateX }, { translateY }],
    };
  });

  const bottomLogoStyle = useAnimatedStyle(() => {
    const scale = interpolate(bottomProgress.value, [0, 1], [1, 3]);
    const translateX = interpolate(bottomProgress.value, [0, 1], [0, -40]);
    const translateY = interpolate(
      bottomProgress.value,
      [0, 1],
      [0, -height * 0.2]
    );

    return {
      transform: [{ scale }, { translateX }, { translateY }],
    };
  });

  return (
    <Animated.View style={[styles.container, containerStyle]}>
      <Animated.View style={logoStyle}>
        <Animated.View style={topLogoStyle}>
          <Top />
        </Animated.View>
        <Animated.View style={bottomLogoStyle}>
          <Bottom />
        </Animated.View>
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
