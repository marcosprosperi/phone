import React, { useEffect } from "react";
import Base from "./src/components/Base";

export default () => {
  useEffect(async () => {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
  }, []);

  return <Base />;
};
