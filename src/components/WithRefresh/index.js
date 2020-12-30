import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ScrollView, RefreshControl } from "react-native";
import { refreshData } from "../../effects/refreshData";
import { selectAppState } from "../../store";
import { styles } from "./styles";

export const WithRefresh = ({ children }) => {
  const { loading } = useSelector(selectAppState);
  const dispatch = useDispatch();

  return (
    <ScrollView
      contentContainerStyle={styles.scrollView}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl
          refreshing={loading}
          onRefresh={() => dispatch(refreshData())}
        />
      }
    >
      {children}
    </ScrollView>
  );
};
