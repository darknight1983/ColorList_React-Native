import React, { Component } from "react";
import { TextInput, StyleSheet } from "react-native";

class UserInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userColor: ""
    };
  }
  render() {
    <TextInput
      style={styles.input}
      onChangeText={() => console.log("The user is typing a color")}
      value={this.state.userColor}
    />;
  }
}

StyleSheet.create({
  input: {
    width: "80%"
  }
});

export default UserInput;
