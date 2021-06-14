import React from "react";
import { ScrollView } from "react-native";
//
import { View } from "react-native";
import { Button, Input } from "react-native-elements";
//
import { ButtonApp, CheckBoxApp, ValueApp } from "../components";
import { dataRadio } from "../models";

const Enkrip = (props) => {
  //
  const [sIndex, setIndex] = React.useState(0);
  //
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 10,
        paddingVertical: 10,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Input placeholder="Plain Text" />
        {dataRadio.map((e, index) => {
          return (
            <CheckBoxApp
              key={index}
              title={e.text}
              checked={sIndex == index ? true : false}
              onPress={() => setIndex(index)}
            />
          );
        })}
        {dataRadio[sIndex].keyword ? (
          <Input placeholder="Key" />
        ) : (
          <View
            style={{
              marginVertical: 10,
            }}
          />
        )}
        <ButtonApp onPress={() => {}} />
        <ValueApp />
        <ButtonApp title={"Copy Text"} onPress={() => {}} />
      </ScrollView>
    </View>
  );
};

export default Enkrip;
