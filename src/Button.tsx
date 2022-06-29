import React, { ComponentProps } from "react";
import { TouchableOpacity } from "react-native";
import nt from "./lib/theme";
import { Text } from "./Text";
import { textStyleTypes, viewStyleTypes } from "./types";

type TouchableProps = Omit<ComponentProps<typeof TouchableOpacity>, "style">;

export interface buttonProps {
  children?: string;
  style?: viewStyleTypes;
  textStyle?: textStyleTypes;
  type?: "primary" | "secondary" | "warning" | "success" | "danger" | "info";
  outline?: boolean;
  onPress?: () => void;
  rounded?: boolean;
}

export function Button({
  children,
  style,
  textStyle,
  type,
  outline,
  rounded,
  ...props
}: buttonProps & TouchableProps): React.ReactElement {
  // get button variant
  const buttonColor = () =>
    !type && outline
      ? styles.primaryOutline
      : outline
      ? styles[type + "Outline"]
      : type && !outline
      ? styles[type]
      : styles.primary;

  // get text color
  const textColor = () =>
    !type && outline
      ? styles.primaryText
      : outline
      ? styles[type + "Text"]
      : styles.text;

  return (
    <TouchableOpacity
      style={nt(styles.button, buttonColor(), rounded && styles.rounded, style)}
      {...props}
    >
      <Text style={nt(textColor())}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles: { [key: string]: string } = {
  button: "px-4 py-[10px] rounded mt-1 items-center justify-center",
  rounded: "rounded-full",
  text: "text-white",
  primary: "border border-primary bg-primary",
  secondary: "border border-secondary bg-secondary",
  success: "border border-success bg-success",
  warning: "border border-warning bg-warning",
  danger: "border border-danger bg-danger",
  info: "border border-info bg-info",

  // button outline types
  secondaryOutline: "border border-secondary ",
  successOutline: "border border-success",
  warningOutline: "border border-warning ",
  dangerOutline: "border border-danger",
  primaryOutline: "border border-primary",
  infoOutline: "border border-info",

  // button text colors
  primaryText: "text-primary",
  secondaryText: "text-secondary",
  successText: "text-success",
  warningText: "text-warning",
  dangerText: "text-danger",
  infoText: "text-info",
};
