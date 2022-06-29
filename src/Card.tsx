import React, { ReactNode } from "react";
import { Image, ImageSourcePropType, View } from "react-native";
import nt from "./lib/theme";
import {
  ImagePropTypes,
  imageStyleTypes,
  ViewPropTypes,
  viewStyleTypes,
} from "./types";

export interface viewProps {
  children?: ReactNode;
  style?: viewStyleTypes;
}

export function Card({ style, children }: ViewPropTypes & viewProps) {
  return <View style={nt("overflow-hidden bg-white", style)}>{children}</View>;
}

export function CardBody({ style, children }: ViewPropTypes & viewProps) {
  return (
    <View style={nt("p-4 border border-gray-200", style)}>{children}</View>
  );
}

export interface imageProps {
  imageStyle?: imageStyleTypes;
  source: ImageSourcePropType;
}

export function CardImage({ imageStyle, source }: ImagePropTypes & imageProps) {
  return <Image source={source} style={nt(imageStyle)} />;
}
