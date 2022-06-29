import { View as RNView, ViewStyle } from "react-native";
import React from "react";
import nt from "./lib/theme";
import { ViewPropTypes } from "./types";

export interface viewProps {
  style?: string[] | string | ViewStyle;
}

export function View({ style, children }: ViewPropTypes & viewProps) {
  return <RNView style={nt(style)}>{children}</RNView>;
}
