import { Text, TextInput, View } from "react-native";
import React, { ComponentProps } from "react";
import nt from "./lib/theme";
import { textStyleTypes, viewStyleTypes } from "./types";

// include default props for Text Input Component
type TextInputProps = Omit<ComponentProps<typeof TextInput>, "style">;

// input props
interface inputProps {
  secureTextEntry?: boolean;
  label?: string;
  placeholder?: string;
  style?: viewStyleTypes;
  containerStyle?: viewStyleTypes;
  labelStyle?: textStyleTypes;
  disable?: boolean;
  rounded?: boolean;
}

export function Input({
  secureTextEntry,
  label,
  placeholder,
  style,
  containerStyle,
  labelStyle,
  disable,
  rounded,
  ...rest
}: inputProps & TextInputProps) {
  return (
    <View style={nt(styles.container, containerStyle)}>
      {label && <Text style={nt(styles.label, labelStyle)}>{label}</Text>}
      <TextInput
        editable={!disable}
        style={nt(
          styles.textInput,
          disable && styles.disable,
          rounded && styles.rounded,
          style
        )}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        {...rest}
      />
    </View>
  );
}

const styles = {
  container: "py-1",
  label: "p-1",
  textInput: "border border-gray-200 rounded px-3 py-[5px]",
  disable: "bg-slate-100",
  rounded: "rounded-full",
};
