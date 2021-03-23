import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import CustomIcon from 'react-native-vector-icons/FontAwesome';
import CIcon from 'react-native-vector-icons/SimpleLineIcons';

const RColor = {
  orange: '#E35734',
  blue: '#65AAEA',
  white: '#FFFF',
  green: '#5BA092',
  grey: '#BEBAB3',
  darkGrey: '#78746D',
};

const ACTIVE_TAB_COLOR = RColor.orange;
const INACTIVE_TAB_COLOR = RColor.darkGrey;
const Icon = ({name, focused, size, style}) => (
  <CustomIcon
    name={name}
    size={size}
    color={focused ? ACTIVE_TAB_COLOR : INACTIVE_TAB_COLOR}
  />
);

const RSkipRight = props => {
  return (
    <TouchableOpacity style={styles.txtSkipContainer} onPress={props.onPress}>
      <Text style={styles.txtSkip}>{props.title}</Text>
    </TouchableOpacity>
  );
};
const RTitleSlider = props => {
  return (
    <View style={styles.titleSliderContainer}>
      <Text style={[styles.txtSlideTitle, props.CStyle]}>{props.title}</Text>
      <Text style={styles.txtSlideSubTitle}>{props.subTitle}</Text>
    </View>
  );
};
const RButton = props => {
  return (
    <TouchableOpacity
      style={[styles.btnContainer, props.CStyle]}
      onPress={props.onPress}>
      <Text style={styles.txtTilte}>{props.title}</Text>
    </TouchableOpacity>
  );
};
const RDotFilled = props => {
  const title = props.title;
  return (
    <View style={props.CStyle}>
      {title == 'left' ? (
        <View style={styles.dotContainer}>
          <View style={styles.dotFilled} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      ) : title == 'mid' ? (
        <View style={styles.dotContainer}>
          <View />
          <View style={styles.dot} />
          <View style={styles.dotFilled} />
          <View style={styles.dot} />
        </View>
      ) : (
        <View style={styles.dotContainer}>
          <View />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dotFilled} />
        </View>
      )}
    </View>
  );
};
const RTextInput = props => {
  return (
    <TextInput
      style={[styles.txtInput, props.CStyle]}
      onChangeText={props.onChangeText}
      placeholder={props.placeholder}
      value={props.value}
      onBlur={props.onBlur}
      onFocus={props.onFocus}
    />
  );
};


const RQuestion = props => {
  return (
    <TouchableOpacity style={styles.txtQContainer} onPress={props.onPress}>
      <Text style={styles.txtQ}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const RIcon = props => {
  return (
    <TouchableOpacity
      style={styles.iconContainer}>
      <CIcon name={props.name} size={props.size} style={{color: RColor.grey}} />
    </TouchableOpacity>
  );
};


export {
  RIcon,
  Icon,
  RQuestion,
  RTextInput,
  RColor,
  RButton,
  RTitleSlider,
  RDotFilled,
  RSkipRight,
};

const styles = StyleSheet.create({
  // ICON
  iconContainer:{
    borderColor: RColor.grey,
    width: 45,
    height: 45,
    borderWidth: 3,
    borderRadius: 45 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // TXT QUESTION
  txtQContainer: {
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
  txtQ: {
    color: RColor.darkGrey,
    fontSize: 16,
    fontWeight: 'bold',
  },
  // TXT INPUT
  txtInput: {
    alignSelf: 'center',
    width: '80%',
    height: 50,
    borderRadius: 15,
    borderWidth: 1,
    paddingLeft: 30,
    borderColor: RColor.grey,
  },
  // TXT INPUT SEARCH
  txtInputSearch: {
    alignSelf: 'center',
    width: '80%',
    height: 50,
    borderRadius: 15,
    borderWidth: 1,
    paddingLeft: 30,
    borderColor: RColor.grey,
  },
  // SKIP
  txtSkipContainer: {
    marginRight: 10,
    marginTop: 10,
    alignSelf: 'flex-end',
  },
  txtSkip: {
    color: RColor.grey,
    fontSize: 16,
    fontWeight: 'bold',
  },
  // BUTTON
  btnContainer: {
    width: '80%',
    height: 55,
    borderRadius: 15,
    backgroundColor: RColor.orange,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  txtTilte: {
    fontSize: 18,
    fontWeight: 'bold',
    color: RColor.white,
  },
  // SLIDER TEXT
  titleSliderContainer: {
    alignItems: 'center',
  },
  txtSlideTitle: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: '700',
    width: '80%',
  },
  txtSlideSubTitle: {
    textAlign: 'center',
    width: '80%',
  },
  // SLIDER DOT
  dotContainer: {flexDirection: 'row', alignSelf: 'center'},
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: RColor.grey,
    marginLeft: 3,
  },
  dotFilled: {
    width: 16,
    height: 6,
    borderRadius: 4,
    backgroundColor: RColor.blue,
    marginLeft: 3,
  },
});
