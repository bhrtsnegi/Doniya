import { View, Text ,TextInput, StyleSheet} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

export default function HeaderNav() {
  return (
    <View style={styles.container}>

          <View style={styles.profile}>
             <AntDesign name="filter" size={24} color="black" />
         </View>

        <View style={styles.search}>
           <AntDesign name="search1" size={24} color="black" />
           <TextInput placeholder='HR specialist'/>
        </View>

      
      <Text>CandidateSearch</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
    },
    search : {
        flexDirection: 'row',
    },
    profile: {
       height: 30,
       width: 30,
       borderRadius: 30/2,
    }
})