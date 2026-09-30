import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import dummyData from "../../dummyData";
import { COLORS } from "../../constants";
import { playSound } from "../../services/soundHandler";

function Play({ words }) {
  const [wordList, setWordList] = useState(words || dummyData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);

  const learningWords = wordList.filter((item) => item.status < 2);
  const currentWord = learningWords[currentIndex];

  const handleNext = () => {
    setIsRevealed(false);

    if (currentIndex >= learningWords.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleKnewIt = () => {
    if (!currentWord) return;

    setWordList((prev) =>
      prev.map((item) =>
        item.word === currentWord.word
          ? { ...item, status: item.status + 1 }
          : item
      )
    );

    setIsRevealed(false);

    if (currentIndex >= learningWords.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  if (!currentWord) {
    return (
      <View style={styles.container}>
        <Text style={styles.congrats}>Congrats!</Text>

        <Text style={styles.message}>
          For now you have learned all the words
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.card}
        onPress={() => setIsRevealed(true)}
      >
        <Text style={styles.word}>{currentWord.word}</Text>

        {isRevealed && (
          <View style={styles.details}>
            <Text style={styles.phonetics}>
              {currentWord.phonetics}
            </Text>

            <Text style={styles.meaning}>
              {currentWord.meaning}
            </Text>

            <Pressable
              style={styles.audioButton}
              disabled={!currentWord.audio}
              onPress={() => playSound(currentWord.audio)}
            >
              <Ionicons
                name="play-outline"
                size={28}
                color={
                  currentWord.audio
                    ? COLORS.primary900
                    : COLORS.grey300
                }
              />
            </Pressable>
          </View>
        )}
      </Pressable>

      {isRevealed && (
        <View style={styles.buttons}>
          <Pressable
            style={[styles.button, styles.dontKnowButton]}
            onPress={handleNext}
          >
            <Text style={styles.buttonText}>
              Didn't know it
            </Text>
          </Pressable>

          <Pressable
            style={[styles.button, styles.knowButton]}
            onPress={handleKnewIt}
          >
            <Text style={styles.buttonText}>
              Knew it
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.appBackground,
    alignItems: "center",
    padding: 20,
  },

  card: {
    width: "100%",
    minHeight: 220,
    borderRadius: 12,
    backgroundColor: COLORS.primary200,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  word: {
    fontSize: 32,
    fontWeight: "700",
    color: COLORS.fontMain,
  },

  details: {
    alignItems: "center",
    marginTop: 20,
  },

  phonetics: {
    fontSize: 18,
    color: COLORS.fontMain,
    marginBottom: 12,
  },

  meaning: {
    fontSize: 16,
    color: COLORS.fontMain,
    textAlign: "center",
  },

  audioButton: {
    marginTop: 15,
  },

  buttons: {
    width: "100%",
    marginTop: 25,
    gap: 12,
  },

  button: {
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },

  dontKnowButton: {
    backgroundColor: COLORS.secondary800,
  },

  knowButton: {
    backgroundColor: COLORS.primary900,
  },

  buttonText: {
    color: COLORS.fontInverse,
    fontSize: 16,
    fontWeight: "600",
  },

  congrats: {
    fontSize: 32,
    fontWeight: "700",
    color: COLORS.primary900,
    marginTop: 100,
  },

  message: {
    fontSize: 18,
    color: COLORS.fontMain,
    textAlign: "center",
    marginTop: 20,
  },
});

export default Play;