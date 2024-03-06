import { View, Text, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

export default function LoginScreen() {
  return (
    <View className="bg-white w-full h-full">
      <StatusBar style='light' />
      <Image className="h-full w-full" source={require('../assets/images/background.png')}/>

      {/* anime images */}
      <View className="flex-row justify-around w-full absolute">
        <Image className="h-[90] w-[90] rounded-full mt-36 transform rotate-12" source={require('../assets/images/selfie1.png')} />
        <Image className="h-[40] w-[40] rounded-full mt-60 transform -rotate-45" source={require('../assets/images/selfie1.png')} />
        <Image className="h-[70] w-[70] rounded-full mt-10" source={require('../assets/images/selfie1.png')} />
        <Image className="h-[80] w-[80] rounded-full mt-40 transform -rotate-12" source={require('../assets/images/selfie1.png')} />
        <Image className="h-[60] w-[60] rounded-full mt-20 transform rotate-12" source={require('../assets/images/selfie1.png')} />
      </View>

      {/* title and form */}
      <View className="h-full w-full flex justify-center items-center">
        
        {/* title */}
        <View className="flex items-center">
        <Text className="text-black font-bold tracking-wider text-5xl">Welcome to Doniya</Text>
        </View>

      </View>
    </View>
  )
}