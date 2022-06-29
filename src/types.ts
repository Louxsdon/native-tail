import { ComponentProps } from "react";
import type {
  ViewStyle,
  TextStyle,
  ImageStyle,
  View,
  Text,
  Image,
} from "react-native";

export declare type viewStyleTypes =
  | string
  | string[]
  | boolean
  | null
  | undefined
  | {
      [k: string]: boolean | string | number;
    }
  | ViewStyle;

export declare type textStyleTypes =
  | string
  | string[]
  | boolean
  | null
  | undefined
  | {
      [k: string]: boolean | string | number;
    }
  | TextStyle;

export declare type imageStyleTypes =
  | string
  | string[]
  | boolean
  | null
  | undefined
  | {
      [k: string]: boolean | string | number;
    }
  | ImageStyle;

export declare type ViewPropTypes = Omit<ComponentProps<typeof View>, "style">;

export declare type TextPropTypes = Omit<ComponentProps<typeof Text>, "style">;

export declare type ImagePropTypes = Omit<
  ComponentProps<typeof Image>,
  "style"
>;
