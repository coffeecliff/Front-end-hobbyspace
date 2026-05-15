// components/NotificationCategory.tsx

import React from "react";
import {
  Text,
  Pressable,
} from "react-native";

import { NotificationsStyles as styles } from "../styles/screens/notificationsStyles";

type Props = {
  title: string;
  active?: boolean;
  onPress: () => void;
};

export function NotificationCategory({
  title,
  active,
  onPress,
}: Props) {

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.categoryButton,
        active && styles.activeCategory,
      ]}
    >

      <Text
        style={[
          styles.categoryText,
          active && styles.activeCategoryText,
        ]}
      >
        {title}
      </Text>

    </Pressable>
  );
}