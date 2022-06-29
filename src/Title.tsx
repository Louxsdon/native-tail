import { Text as RNText } from "react-native";
import React from "react";
import nt from "./lib/theme";
import { TextPropTypes, textStyleTypes } from "./types";

export declare interface textProps {
  children?: string;
  style?: textStyleTypes;
  size?: "base" | "md" | "lg" | "xl" | "xl2" | "xl3";
  bold?: boolean;
}

export function Title({
  size,
  style,
  bold,
  children,
}: textProps & TextPropTypes) {
  return (
    <RNText
      style={nt(bold && "font-bold", styles.base, size && styles[size], style)}
    >
      {children}
    </RNText>
  );
}

const styles = {
  base: "text-xl",
  md: "text-2xl",
  lg: "text-3xl",
  xl: "text-4xl",
  xl2: "text-5xl",
  xl3: "text-6xl",
};
