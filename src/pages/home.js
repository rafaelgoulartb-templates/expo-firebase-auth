import React from "react";
import { Text, TouchableOpacity } from "react-native";
import * as firebase from 'firebase';

export default function Home() {
  return (
    <>
      <Text> Home </Text>

      <TouchableOpacity
        onPress={async () => { firebase.auth().signOut() }}
        style={{ marginTop: 18, borderColor: "black", borderWidth: 1 }}
      >
        <Text>Log out</Text>
      </TouchableOpacity>
    </>
  );
}
