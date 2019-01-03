/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component, createRef } from "react";
import { Platform, StyleSheet, View, Animated } from "react-native";

type Props = {};
type State = {
  progress: Animated.Value
};

export default class App extends Component<Props, State> {
  textRef = createRef();
  state = {
    progress: new Animated.Value(0)
  };

  componentDidMount() {
    this.state.progress.addListener(ev => {
      this.textRef.current &&
        this.textRef.current.setNativeProps({ text: Math.round(ev.value) });
    });
    Animated.timing(this.state.progress, {
      toValue: 100,
      duration: 2000
    }).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.Text style={styles.welcome} ref={this.textRef}>
          -
        </Animated.Text>
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
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
