// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet , StatusBar, Image} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import profile from '../assets/images/profile.png';


// import { FontAwesome5 } from '@expo/vector-icons';


export default function Profile(){
    return(
        <View style={styles.maincontainer}>
            <StatusBar  translucent  barStyle={'dark-content'}/>
           <View style={styles.rowView}>
              <Text style={styles.text1}>Profile</Text>
              <View style={{height:45, width:45,borderRadius:45/2, backgroundColor:'red'}}>
                 <Image source={profile} style={{width:45, height:45, borderRadius: 45/2}} />
              </View>
              {/* <FontAwesome name="user-circle" size={24} color="black" /> */}
              
            </View>
                          {/* personal information */}
            <View>
                <View  style={styles.rowView}>
                    
                    <Text style={styles.text2}>Personal Information</Text>
                    <View>
                        <TouchableOpacity>
                             <View style={styles.inView}>
                                <Text style={styles.text3}>Edit</Text>
                                <MaterialIcons name="navigate-next" size={24} color="black"  />
                             </View>
                           
                        </TouchableOpacity>
                    </View>
                   
                </View>

                <View style={styles.horiLine}></View>

                <View  style={styles.pInfoRowView}>
                    {/* icon */}
                 
                    <Entypo name="user" size={24} color="black" />
                    <Text style={styles.text4}>Name</Text>
                </View>

                <View style={styles.horiLine}></View>

                <View  style={styles.pInfoRowView}>
                    {/* icon */}
                    <View style={{marginRight: 8, marginLeft:2}}>
                       <FontAwesome5 name="mobile" size={24} color="black" />
                    </View>
                    
                    <Text style={styles.text4}>Mobile </Text>
                </View>
                <View style={styles.horiLine}></View>

                <View  style={styles.pInfoRowView}>
                    {/* icon */}
                    <View style={{marginRight: 4}}>
                      <FontAwesome5 name="birthday-cake" size={24} color="black" />
                    </View>
                    
                    <Text style={styles.text4}>DOB</Text>
                </View>

                <View style={styles.horiLine}></View>

                <View  style={styles.pInfoRowView}>
                    {/* icon */}
                    <Entypo name="home" size={24} color="black" />
                    <Text style={styles.text4}>Address</Text>
                </View>
               
            </View>

               {/* settings */}

               <View>
                  <View style={styles.heightSetting}>
                     <Text style={styles.text2}>Settings</Text>
                  </View>
                 
                    <View style={styles.horiLine}></View>

                   <View style={styles.rowView}>
                       <View style={styles.inView}>
                            <FontAwesome5 name="chess-queen" size={24} color="orange" />
                            <Text style={styles.text3}>Get Premium</Text>
                       </View>
                       <View >
                           <TouchableOpacity>
                            <View style={styles.inView}>
                                <Text style={styles.text3}>More</Text>
                                <MaterialIcons name="navigate-next" size={24} color="black" />
                            </View>
                           
                         </TouchableOpacity>
                       </View>
                     
                     
                   </View>

                      <View style={styles.horiLine}></View>
                   <View style={styles.rowView}>
                      <View style={styles.inView}>
                            <MaterialIcons name="policy" size={24} color="green" /> 
                            <Text style={styles.text3}>Private Policy</Text>
                      </View>
                      <View>
                            
                        <TouchableOpacity>
                            <View style={styles.inView}>
                                <Text style={styles.text3}>More</Text>
                                <MaterialIcons name="navigate-next" size={24} color="black" />
                            </View>
                            
                        </TouchableOpacity>
                      </View>
                     
                   </View>

                      <View style={styles.horiLine}></View>
                   <View style={styles.rowView}>
                     <View style={styles.inView}>
                          <Fontisto name="heart" size={24} color="red" />
                          <Text style={styles.text3}>Rate us</Text>
                     </View>
                     <View>
                        <View>
                            <TouchableOpacity>
                                <View style={styles.inView}>
                                    <Text style={styles.text3}>More</Text>
                                    <MaterialIcons name="navigate-next" size={24} color="black" />
                                </View>
                               
                            </TouchableOpacity>
                        </View>
                     </View>
                     
                 </View>

                     <View style={styles.horiLine}></View>
                   <View style={styles.rowView}>
                      <View style={styles.inView}>
                         <MaterialIcons name="feedback" size={24} color="blue" />
                         <Text style={styles.text3}>Send Feedback</Text>
                      </View>
                       <View>
                            <View>
                                <TouchableOpacity>
                                    <View style={styles.inView}>
                                        <Text style={styles.text3}>More</Text>
                                        <MaterialIcons name="navigate-next" size={24} color="black" />
                                    </View>
                                  
                                </TouchableOpacity>
                            </View>
                       </View>
                  
                  
                   </View>
               </View>
        </View>
    );
    }

    const styles = StyleSheet.create({
       maincontainer : {
        flex: 1,
        marginTop:50,
        margin:10,
       },
       pinformation : {
        flexDirection: 'row',
        justifyContent: 'space-between'
       },
       horiLine : {
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth
       },

       rowView : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop :14,
        marginBottom: 14
       },

       pInfoRowView : {
        flexDirection: 'row',
        marginTop :14,
        marginBottom: 14,
        gap: 9,
       },

       heightSetting: {
         marginTop: 18,
         marginBottom: 10
       },

       viewHeight : {
        height: 5
       },
       topicView: {
        height:50
       },
       text1: {
        fontSize:30,
        fontWeight:"800"
       },
       text2: {
        fontSize: 20,
        fontWeight: "800"
       },
       text3: {
        fontSize:15,
        fontWeight: "700",
       },
       text4 : {
        fontSize: 15,
       },
       inView: {
        flexDirection: 'row',
        gap:6
       }

    })