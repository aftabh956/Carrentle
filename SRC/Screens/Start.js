import React, { useState } from 'react';
import Color from '../Assets/Utilities/Color';
import CustomImage from '../Components/CustomImage';
import { apiHeader, windowHeight, windowWidth } from '../Utillity/utils';
import { moderateScale, ScaledSheet } from 'react-native-size-matters';
import ScreenBoiler from '../Components/ScreenBoiler';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
    ScrollView,
    View,
    StyleSheet,
} from 'react-native';
import CustomText from '../Components/CustomText';
import CustomButton from '../Components/CustomButton';
import { useDispatch } from 'react-redux';
// import CardContainer from '../Components/CardContainer';
import { useNavigation } from '@react-navigation/native';
// import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FONTS, SIZES } from '../Constant/theme';
import localStoreUtil from '../Utillity/localstoreUntil';
import { setUserType } from '../Store/slices/auth-slice';

const Start = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const onPressButton = async type => {
        await localStoreUtil.store_data('user_type', type);
        dispatch(setUserType(type))
        navigation.navigate('LoginScreen');
    };
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScreenBoiler
                statusBarBackgroundColor={'white'}
                statusBarContentStyle={'dark-content'}>
                <ScrollView showsVerticalScrollIndicator={false} >
                    <LinearGradient
                        start={{ x: 0, y: 2.1 }}
                        end={{ x: 4, y: 2 }}
                        colors={['#00309E', '#79B9F6', '#FFFFFF']}
                        style={styles.container}>
                        <View
                            style={{
                                height: windowHeight * 0.3,
                                width: windowHeight * 0.3,
                            }}>
                            <CustomImage
                                resizeMode="contain"
                                source={require('../Assets/Images/logo.png')}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                }}
                            />
                            <CustomText
                                style={styles.description}
                                numberOfLines={2}>
                                Select Your Type before Starting
                            </CustomText>
                        </View>
                        <CustomButton
                            onPress={() => {
                                onPressButton('Rider')
                            }}
                            text={'Rider'}
                            fontSize={moderateScale(14, 0.3)}
                            textColor={Color.white}
                            borderWidth={1.5}
                            borderColor={Color.white}
                            borderRadius={moderateScale(8, 0.3)}
                            width={windowWidth * 0.7}
                            height={windowHeight * 0.06}
                            marginTop={moderateScale(30, 0.3)}
                            bgColor={'transparent'}
                            isBold
                        />
                        <CustomButton
                            onPress={() => {
                                onPressButton('Customer')
                            }}
                            text={'Customer'}
                            fontSize={moderateScale(14, 0.3)}
                            textColor={Color.white}
                            borderWidth={1.5}
                            borderColor={Color.white}
                            borderRadius={moderateScale(8, 0.3)}
                            width={windowWidth * 0.7}
                            height={windowHeight * 0.06}
                            marginTop={moderateScale(30, 0.3)}
                            bgColor={'transparent'}
                            isBold
                        />
                    </LinearGradient>
                </ScrollView>
            </ScreenBoiler>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: windowHeight * 0.1,
        height: windowHeight,
        width: windowWidth,
        alignItems: 'center',
    },
    description: {
        color: Color.lightGrey,
        ...FONTS.PoppinsLight14,
        // fontSize: moderateScale(13, 0.6),
        paddingHorizontal: SIZES.padding * 1.25,
        marginTop: moderateScale(-45, 0.3),
        textAlign: 'center'
    },
    text: {
        color: 'white',
        marginTop: moderateScale(20, 0.3),
        ...FONTS.Regular10,
        // fontSize: moderateScale(13, 0.6),
        paddingTop: moderateScale(10, 0.3),
    },
    signup_btn: {
        // fontSize: moderateScale(16, 0.6),
        ...FONTS.Bold16,
        color: 'white',
    },
    edit: {
        backgroundColor: Color.white,
        width: moderateScale(20, 0.3),
        height: moderateScale(20, 0.3),
        position: 'absolute',
        // top: 110,
        bottom: -2,
        right: 5,
        borderRadius: moderateScale(10, 0.3),
        elevation: 8,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
    icon: {
        backgroundColor: Color.white,
        height: windowHeight * 0.03,
        width: windowHeight * 0.03,
        borderRadius: (windowHeight * 0.03) / 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text_view: { justifyContent: 'flex-end', flex: 1, marginBottom: SIZES.padding * 2 }
});

export default Start;
