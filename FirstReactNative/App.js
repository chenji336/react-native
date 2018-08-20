/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  PixelRatio,
  Dimensions
} from 'react-native';

import ReadMovice from './Pages/readMovie';
import FixedDimensionsBasics from './Pages/FixedDimensionsBasics';

/* const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
}); */

const dp2px = dp => PixelRatio.getPixelSizeForLayoutSize(dp);
const px2dp = px => PixelRatio.roundToNearestPixel(px);

let pxRatio = PixelRatio.get();
let { win_width, win_height } = Dimensions.get("window");

let scale = 1 / pxRatio;
let width = dp2px(win_width);
let height = dp2px(win_height);

export default class App extends Component {
  render() {
    return (
      // <ReadMovice />
      <View>
        <FixedDimensionsBasics />
        {/* <View sytle={styles.container}>
          <View style={{ width: 100, height: 200, backgroundColor: "red" }} />
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    transform: [{ translateX: -width * .5 },
    { translateY: -height * .5 },
    { scale: scale },
    { translateX: width * .5 },
    { translateY: height * .5 }]
  }
});
