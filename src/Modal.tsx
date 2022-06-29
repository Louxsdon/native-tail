import { View, Modal as RNModal } from "react-native";
import React, { ReactNode } from "react";
import { viewStyleTypes } from "./types";
import nt from "./lib/theme";

type modalProps = {
  visible: boolean;
  onDismis: () => void;
  dismissable?: boolean;
  style?: viewStyleTypes;
  containerStyle?: viewStyleTypes;
  children?: ReactNode;
};

export function Modal({
  visible = false,
  onDismis,
  dismissable,
  style,
  containerStyle,
  children,
}: modalProps) {
  return (
    <RNModal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onDismis}
    >
      <View
        style={nt(
          `bg-black bg-opacity-50 absolute top-0 right-0 bottom-0 left-0 `
        )}
        onTouchStart={dismissable ? onDismis : () => null}
      />
      <View
        style={nt(`h-full w-full items-center justify-center `, containerStyle)}
      >
        <View style={nt(`bg-white p-4 z-50 w-[80%]`, style)}>
          <>{children}</>
        </View>
      </View>
    </RNModal>
  );
}
