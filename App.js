import React from "react";
import {
  Text,
  Dimensions,
  StyleSheet,
  View,
  AppRegistry,
  Image,
  StatusBar
} from "react-native";
import { Toolbar } from "react-native-material-ui";
import UserInput from "./input";
import Jacolby from "./assets/Jacolby.jpg";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundColor: "blue"
    };

    this.changeColor = this.changeColor.bind(this);
  }

  changeColor(backgroundColor) {
    this.setState({
      backgroundColor
    });
  }

  render() {
    const { backgroundColor } = this.state;
    return (
      <View style={[styles.container, { backgroundColor }]}>
        <Text style={styles.button} onPress={() => this.changeColor("red")}>
          Red
        </Text>
        <Text style={styles.button} onPress={() => this.changeColor("blue")}>
          Blue
        </Text>
        <Text style={styles.button} onPress={() => this.changeColor("green")}>
          Green
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  button: {
    fontSize: 30,
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: "stretch",
    textAlign: "center"
  }
});

AppRegistry.registerComponent("FirstReactNative", () => App);
