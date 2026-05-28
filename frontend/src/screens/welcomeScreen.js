import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function WelcomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <ScrollView>
                {/* Hero Section */}

                <View style={styles.hero}>

                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>For Doctor's & Clinic's</Text>
                    </View>

                    <Text style={styles.heroTitle}>
                        Manage Patients, {'\n'}
                        <Text style={styles.heroAccent}>Not Paperwork</Text>
                    </Text>

                    <Text style={styles.heroSub}>
                        Everything you need to run your clinic — appointments,
                        patient records, and more. In one place.
                    </Text>

                    <View style={styles.btnRow}>
                        <TouchableOpacity style={styles.btnPrimary}>
                            <Text style={styles.btnPrimaryText}>Get Started</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnSecondary}>
                            <Text style={styles.btnSecondaryText}>Log In</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F4F8'
    }, 
    // Hero 
    hero:{ 
        backgroundColor: '#1B4F72' ,
        
        alignItems:'center',
        // borderBottomEndRadius:15,
        // borderBottomLeftRadius:15
        padding:50,        
    }, 
    badge:{
        backgroundColor:'rgba(255,255,255,0.15)',
        paddingHorizontal:12,
        paddingVertical:4,
        borderRadius:20,
        marginBottom:16
    },
    badgeText:{
        color:'#A8D8F0',
        fontSize:12,        
    },
    heroTitle:{
        color:'#ffffff',
        fontSize:26,
        fontWeight:'700',
        textAlign:'center',
        lineHeight:34,
        marginBottom:12
    },
    heroAccent:{
        color:'#5DCAA5'
    },
    heroSub:{
        color:'#A8D8C8',
        fontSize:14,
        textAlign:'center',
        lineHeight:21,
        marginBottom:28
    },
    btnRow:{
        flexDirection:'row',
        gap:10
    },
    btnPrimary:{
        backgroundColor:'#5DCAA5',
        paddingVertical:12,
        paddingHorizontal:24,
        borderRadius:10,
        flex:1
    },
    btnPrimaryText:{
        color:'#04342C',
        fontWeight:'700',
        fontSize:14,
        textAlign:'center'
    },
    btnSecondary:{
        backgroundColor:'rgba(255,255,255,0.35)',
        borderWidth:0.8,
        borderColor:'white',
        paddingHorizontal:24,
        paddingVertical:12,
        borderRadius:10,
        flex:1
    },
    btnSecondaryText:{
        color:'#ffffff',
        fontWeight:'500',
        textAlign:'center',
        fontSize:15
    }
});