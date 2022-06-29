import { Text as RNText } from "react-native";
import React from "react";
import nt from "./lib/theme";
import { TextPropTypes, textStyleTypes } from "./types";

export declare interface textProps {
  children?: string;
  style?: textStyleTypes;
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "xl2" | "xl3" | "xl4" | "xl5";
}

export function Text({ size, style, children }: textProps & TextPropTypes) {
  return (
    <RNText style={nt("text-gray-700", size && styles[size], style)}>
      {children}
    </RNText>
  );
}

const styles = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  xl2: "text-2xl",
  xl3: "text-3xl",
  xl4: "text-4xl",
  xl5: "text-5xl",
};
