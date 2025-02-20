import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useState ,useEffect} from 'react';
import ScreenBoiler from '../Components/ScreenBoiler';
import {FlatList, Icon} from 'native-base';
import {moderateScale, ScaledSheet} from 'react-native-size-matters';
import {windowHeight, windowWidth} from '../Utillity/utils';
import Color from '../Assets/Utilities/Color';
import LinearGradient from 'react-native-linear-gradient';
import CustomText from '../Components/CustomText';
import {useDispatch, useSelector} from 'react-redux';
import {GiftedChat} from 'react-native-gifted-chat';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomImage from '../Components/CustomImage';
import {Pusher} from '@pusher/pusher-websocket-react-native';
import {useNavigation} from '@react-navigation/native';

const MessagesScreen = () => {
  const userRole = useSelector(state => state.commonReducer.selectedRole);
  const user = useSelector(state => state.commonReducer.userData);
  const token = useSelector(state => state.authReducer.token);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [searchData, setSearchData] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'john',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 1,
        text: 'Hello',
        createdAt: new Date(),
        user: {
          _id: 3,
          name: 'chris',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    )
  }, [])



  return (
    <ScreenBoiler
      statusBarBackgroundColor={
        userRole == 'Qbid Member'
          ? Color.themeBgColor
          : userRole == 'Qbid Negotiator'
          ? Color.themeBgColorNegotiator
          : Color.themebgBusinessQbidder
      }
      statusBarContentStyle={'light-content'}>
      <LinearGradient
        style={{
          height: windowHeight * 0.97,
        }}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={
          userRole == 'Qbid Member'
            ? Color.themeBgColor
            : userRole == 'Qbid Negotiator'
            ? Color.themeBgColorNegotiator
            : Color.themebgBusinessQbidder
        }>
        <View style={styles.row}>
          <Icon
            onPress={() => {
              navigation.goBack();
            }}
            as={Ionicons}
            name="arrow-back"
            size={moderateScale(22, 0.6)}
            color={Color.white}
          />
          <View style={styles.image}>
            <CustomImage
              source={{uri: image}}
              style={{
                width: '100%',
                height: '100%',
              }}
              resizeMode={'cover'}
            />
          </View>
          <View
            style={{
              width: windowWidth * 0.7,
            }}>
            <CustomText isBold style={styles.text}>
              {name}
            </CustomText>
            {/* <CustomText style={styles.text2}>from</CustomText> */}
          </View>
        </View>
        <GiftedChat
          textInputStyle={{
            color: Color.black,
            marginTop: moderateScale(5, 0.3),
          }}
          placeholderTextColor={Color.lightGrey}
          messages={messages}
          isTyping={false}
          onSend={messages => onSend(messages)}
          key={item => item?.id}
          user={{
            _id:2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any'
          }}
        />
      </LinearGradient>
    </ScreenBoiler>
  );
};

export default MessagesScreen;

const styles = ScaledSheet.create({
  header: {
    color: Color.black,
    fontSize: moderateScale(18, 0.3),
    width: windowWidth * 0.9,
  },
  image: {
    marginHorizontal: moderateScale(10, 0.3),
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    borderRadius: windowWidth * 0.7,
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  text: {
    fontSize: moderateScale(12, 0.6),
    paddingTop: moderateScale(5, 0.6),
  },
  row: {
    width: windowWidth,
    height: windowHeight * 0.06,
    paddingHorizontal: moderateScale(10, 0.6),
    flexDirection: 'row',
    alignItems: 'center',
  },
  text2: {
    fontSize: moderateScale(10, 0.6),
    marginTop: moderateScale(-3, 0.6),
  },
});
