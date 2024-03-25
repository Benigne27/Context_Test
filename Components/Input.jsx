import { Pressable, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import React from "react";
export default function Input({
  label,
  placeholder,
  icon,
  bool,
  icon2,
  value,
  change,
  error,
  correct,
  complete,
  press,
}) {
  return (
    <View style={styles.input}>
      <Text style={{ fontSize: 18, paddingVertical: 10, color: "white" }}>
        {label}
      </Text>
      <TextInput
        style={{
          height: 42,
          width: "100%",
          borderRadius: 5,
          backgroundColor: "white",
        }}
        theme={{ roundness: 5 }}
        secureTextEntry={bool}
        textColor="white"
        mode="outlined"
        placeholder={placeholder}
        onChangeText={change}
        value={value}
        error={error}
        autoComplete={complete}
        autoCorrect={correct}
        left={<TextInput.Icon icon={icon} />}
        right={<TextInput.Icon onPress={press} icon={icon2} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 370,
    display: "flex",
    alignSelf: "center",
    paddingBottom:20
  },
});
