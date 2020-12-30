import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { toReadable } from "../../utils";
import { selectAppState } from "../../store";
import { refreshData } from "../../effects/refreshData";
import { useMount } from "../../effects/useMount";
import { styles } from "./styles";

export const Header = () => {
  const dispatch = useDispatch();
  const { loading, currentValue, futureValue } = useSelector(selectAppState);

  useMount(() => {
    dispatch(refreshData());
  });

  return (
    !!currentValue && (
      <View style={styles.container}>
        <Text style={styles.label}>Курс по ЦБ РФ:</Text>
        <Text style={styles.accent}>{toReadable(currentValue)}₽</Text>

        {!!futureValue && (
          <Text style={styles.label}>
            Курс на завтра: {toReadable(futureValue)}₽
          </Text>
        )}
      </View>
    )
  );
};
