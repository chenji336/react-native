import React, { Component } from 'react';
import { View, Text, Image, Dimensions, PixelRatio } from 'react-native';
const dp2px = dp => PixelRatio.getPixelSizeForLayoutSize(dp);
const px2dp = px => PixelRatio.roundToNearestPixel(px);

export default class FixedDimensionsBasics extends Component {
    constructor() {
        super();
    }
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <View>
                <View style={{ width: 430, height: 50, backgroundColor: 'powderblue' }} />
                <View style={{ width: 200, height: 100, backgroundColor: 'skyblue' }} />
                <View style={{ width: px2dp(200), height: px2dp(100), backgroundColor: 'blue' }} />
                <Image source={pic} style={{ width: 100, height: 100 }} />
                <Text>当前的屏幕像素密度比例为:{PixelRatio.get()};</Text>
                <Text>当前的屏幕宽度:{Dimensions.get('window').width};</Text>
            </View>
        );
    }
};
