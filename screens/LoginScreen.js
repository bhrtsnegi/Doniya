import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Animated,{ Easing, FadeIn, FadeInDown, FadeInUp, FadeOut } from 'react-native-reanimated';
import Profile from './Profile';
import { useNavigation } from '@react-navigation/native';


export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <View className="bg-white w-full h-full">
      <StatusBar style='light' />
      <Image className="h-full w-full" source={require('../assets/images/background.png')}/>

      {/* anime images */}
      <View className="flex-row justify-around w-full absolute">
        <Animated.Image entering={FadeInUp.delay(100).randomDelay()
.duration(1000).springify().damping(6)} className="h-[90] w-[90] rounded-full mt-36 transform rotate-12" source={require('../assets/images/selfie1.png')} />
        <Animated.Image entering={FadeInUp.delay(200).randomDelay()
.duration(1000).springify().damping(6)} className="h-[40] w-[40] rounded-full mt-60 transform -rotate-45" source={require('../assets/images/selfie1.png')} />
        <Animated.Image entering={FadeInUp.delay(300).randomDelay()
.duration(1000).springify().damping(6)} className="h-[70] w-[70] rounded-full mt-10" source={require('../assets/images/selfie1.png')} />
        <Animated.Image entering={FadeInUp.delay(400).randomDelay()
.duration(1000).springify().damping(6)} className="h-[80] w-[80] rounded-full mt-40 transform -rotate-12" source={require('../assets/images/selfie1.png')} />
        <Animated.Image entering={FadeInUp.delay(500).randomDelay()
.duration(1000).springify().damping(6)} className="h-[60] w-[60] rounded-full mt-20 transform -rotate-45" source={require('../assets/images/selfie1.png')} />
      </View>

      {/* title and form */}
      <View className="flex justify-around absolute w-full h-full pt-48">
        {/* title */}
        <View className="flex items-center transform -rotate-12">
          <Animated.Text entering={FadeInUp.duration(1000).springify()} className="text-white font-bold text-5xl">
            Doniya
          </Animated.Text>
        </View>

        {/* form */}
        <View className="flex items-center mx-4 space-y-4">
          <Animated.View entering={FadeInDown.duration(1000).springify()} className="bg-black/5 p-5 rounded-2xl w-full">
            <TextInput placeholder='Email' placeholderTextColor={'gray'} />
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} className="bg-black/5 p-5 rounded-2xl w-full">
            <TextInput placeholder='Password' placeholderTextColor={'gray'} secureTextEntry/>
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} className="w-full">
            <TouchableOpacity className="w-full bg-sky-400 p-3 rounded-2xl mb-3" onPress={() => navigation.push('profile')}>
              <Text className="text-xl font-bold text-white text-center">Login</Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} className="flex-row justify-center">
            <Text>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.push('signup')}>
              <Text className="text-sky-600">SignUp</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  )
}