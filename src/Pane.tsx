import { View as RNView, ViewStyle } from "react-native";
import React, { ComponentProps, ReactNode } from "react";
import nt from "./lib/theme";
import { viewStyleTypes } from "./types";

export type comProps = ComponentProps<typeof RNView>;
type ViewProps = Omit<comProps, "style">;

export interface viewProps {
  children?: ReactNode;
  style?: viewStyleTypes;
}

export function Pane({ style, children }: ViewProps & viewProps) {
  return (
    <RNView style={nt("p-3 rounded border border-gray-200 bg-white", style)}>
      {children}
    </RNView>
  );
}
