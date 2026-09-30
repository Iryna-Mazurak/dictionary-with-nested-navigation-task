import { useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";

import { COLORS, COLORS_LIGHT } from "../constants";

function Settings() {
  const [isDark, setIsDark] = useState(true);

  const colors = isDark ? COLORS : COLORS_LIGHT;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.appBackground,
        },
      ]}
    >
      <Text
        style={[
          styles.title,
          {
            color: colors.fontMain,
          },
        ]}
      >
        Choose color theme:
      </Text>

      <View style={styles.switchContainer}>
        <Text
          style={[
            styles.text,
            {
              color: colors.fontMain,
            },
          ]}
        >
          Light
        </Text>

        <Switch
          value={isDark}
          onValueChange={setIsDark}
          trackColor={{
            false: COLORS_LIGHT.grey300,
            true: COLORS.primary300,
          }}
          thumbColor={
            isDark
              ? COLORS.primary900
              : COLORS_LIGHT.grey600
          }
        />

        <Text
          style={[
            styles.text,
            {
              color: colors.fontMain,
            },
          ]}
        >
          Dark
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 100,
  },

  title: {
    fontSize: 20,
    fontWeight: "600",
  },

  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    marginTop: 40,
  },

  text: {
    fontSize: 18,
  },
});

export default Settings;