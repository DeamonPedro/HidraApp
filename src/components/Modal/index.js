import React, {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from 'react';
import {View, Animated, Dimensions} from 'react-native';
import MaskedView from '@react-native-community/masked-view';
import styles from './styles';

export default Modal = forwardRef((props, ref) => {
  const dimensions = Dimensions.get('window');
  const expand = useRef(new Animated.Value(0)).current;
  const [start, setStart] = useState({x: 0, y: 0});
  const [visible, setVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    Show: (event) => {
      setVisible(true);
      setStart({
        x: event.nativeEvent.locationX,
        y: event.nativeEvent.locationY,
      });
      Animated.timing(expand, {
        toValue: 1,
        duration: 500,
      }).start();
    },
    Hide: (event) => {
      setVisible(true);
      setStart({
        x: dimensions.width / 2,
        y: 0,
      });
      Animated.timing(expand, {
        toValue: 0,
        duration: 500,
      }).start();
    },
  }));

  return (
    <MaskedView
      style={{
        ...styles.container,
        width: visible ? '100%' : 0,
        height: visible ? '100%' : 0,
      }}
      maskElement={
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            width: 0,
            height: 0,
            left: start.x,
            bottom: start.y,
          }}>
          <Animated.View
            style={{
              ...styles.circle,
              width: expand.interpolate({
                inputRange: [0, 1],
                outputRange: [
                  0,
                  2 * Math.hypot(dimensions.width, dimensions.height),
                ],
              }),
              height: expand.interpolate({
                inputRange: [0, 1],
                outputRange: [
                  0,
                  2 * Math.hypot(dimensions.width, dimensions.height),
                ],
              }),
            }}></Animated.View>
        </View>
      }>
      {props.children}
    </MaskedView>
  );
});
