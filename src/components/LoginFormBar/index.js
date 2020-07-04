import React from 'react';
import {ImageBackground, ActivityIndicator, Animated} from 'react-native';
import LoginBarTop from '../../assets/images/loginBarWithHidra.png';
import Hidra from '../../assets/images/hidra.png';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';

export default function LoginFormBar({translateY, loading, children}) {
  return (
    <>
      <Animated.Image
        source={Hidra}
        style={{
          ...styles.hidraImage,
          opacity: translateY.interpolate({
            inputRange: [-230, -200, 0],
            outputRange: [1, 0, 0],
          }),
        }}
      />
      <ImageBackground source={LoginBarTop} style={styles.headerBarPush}>
        {loading ? (
          <Animated.View
            style={{
              opacity: translateY.interpolate({
                inputRange: [-230, 0, 0],
                outputRange: [0, 1, 0],
                extrapolate: 'clamp',
              }),
            }}>
            <ActivityIndicator
              size="large"
              color={styles.ActivityIndicator.color}
            />
          </Animated.View>
        ) : (
          <Animated.Text
            style={{
              ...styles.loginText,
              opacity: translateY.interpolate({
                inputRange: [-200, 0, 300],
                outputRange: [0, 1, 1],
              }),
            }}>
            ARRASTE{' '}
            <Icon name="arrow-up" color={styles.IconUp.color} size={20} /> PARA
            FAZER LOGIN
          </Animated.Text>
        )}
        <Animated.View
          style={{
            marginTop: 90,
            opacity: translateY.interpolate({
              inputRange: [-230, 0, 0],
              outputRange: [1, 0, 0],
              extrapolate: 'clamp',
            }),
            transform: [
              {
                translateY: translateY.interpolate({
                  inputRange: [-230, 0, 0],
                  outputRange: [-70, 0, 0],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}>
          {children}
        </Animated.View>
      </ImageBackground>
    </>
  );
}
