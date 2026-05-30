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
                        More Healing, {'\n'}
                        <Text style={styles.heroAccent}>Less Handling</Text>
                    </Text>

                    <Text style={styles.heroSub}>
                        Focus on patients. We'll handle the rest — from records to appointments, all in one place.
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

                {/* Feature Section */}
                <View style={styles.section}>

                    <Text style={styles.sectionLabel}>WHAT YOU GET</Text>
                    <Text style={styles.sectionTitle}>Built for your Clinic</Text>

                    <View style={styles.featureCard}>
                        <View style={[styles.featureIcon, { backgroundColor: '#E1F5EE' }]}>
                            <Text style={styles.featureEmoji}>👥</Text>
                        </View>
                        <View style={styles.featureText}>
                            <Text style={styles.featureTitle}>Patient Records</Text>
                            <Text style={styles.featureDesc}>Add and manage patient profiles with history and visit details — all in one tap.</Text>
                        </View>
                    </View>

                    <View style={styles.featureCard}>
                        <View style={[styles.featureIcon, { backgroundColor: '#E6F1FB' }]}>
                            <Text style={styles.featureEmoji}>📅</Text>
                        </View>
                        <View style={styles.featureText}>
                            <Text style={styles.featureTitle}>Appointments</Text>
                            <Text style={styles.featureDesc}>
                                View today's schedule at a glance. Never miss or double-book again.
                            </Text>
                        </View>
                    </View>

                    <View style={styles.featureCard}>
                        <View style={[styles.featureIcon, { backgroundColor: '#FAEEDA' }]}>
                            <Text style={styles.featureEmoji}>📊</Text>
                        </View>
                        <View style={styles.featureText}>
                            <Text style={styles.featureTitle}>Smart Dashboard</Text>
                            <Text style={styles.featureDesc}>
                                See total patients, upcoming visits, and key stats the moment you open the app.
                            </Text>
                        </View>
                    </View>

                </View>

                {/* Steps */}
                <View style={styles.section}>

                    <Text style={styles.sectionLabel}>STEP IN MINUTES</Text>
                    <Text style={styles.sectionTitle}>How it works</Text>

                    {/* Step 1 */}
                    <View style={styles.step}>

                        <View style={styles.stepLeft}>
                            <View style={styles.stepNum}>
                                <Text style={styles.stepNumText}>1</Text>
                            </View>
                            <View style={styles.stepLine} />
                        </View>

                        <View style={styles.stepContent}>
                            <Text style={styles.stepTitle}>Create your account</Text>
                            <Text style={styles.stepDesc}>
                                Sign up with your name and clinic details. Takes under 60 seconds.
                            </Text>
                        </View>
                    </View> 

                    {/* Step 2 */}
                    <View style={styles.step}>

                        <View style={styles.stepLeft}>
                            <View style={styles.stepNum}>
                                <Text style={styles.stepNumText}>2</Text>
                            </View>
                            <View style={styles.stepLine} />
                        </View>

                        <View style={styles.stepContent}>
                            <Text style={styles.stepTitle}>Add your patients</Text>
                            <Text style={styles.stepDesc}>
                                Enter patient profiles and store history and notes instantly.
                            </Text>
                        </View>
                    </View>

                    {/* Step 3 */}
                    <View style={styles.step}>

                        <View style={styles.stepLeft}>
                            <View style={styles.stepNum}>
                                <Text style={styles.stepNumText}>3</Text>
                            </View>                            
                        </View>

                        <View style={styles.stepContent}>
                            <Text style={styles.stepTitle}>Manage with ease</Text>
                            <Text style={styles.stepDesc}>
                                View appointments, track records, and run your clinic from anywhere.
                            </Text>
                        </View>
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
    hero: {
        backgroundColor: '#2563EB',

        alignItems: 'center',
        // borderBottomEndRadius:15,
        // borderBottomLeftRadius:15
        padding: 50,
    },
    badge: {
        backgroundColor: 'rgba(255,255,255,0.15)',
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 20,
        marginBottom: 16
    },
    badgeText: {
        color: 'rgba(255,255,255,0.75)',
        fontSize: 12,
    },
    heroTitle: {
        color: '#ffffff',
        fontSize: 26,
        fontWeight: '700',
        textAlign: 'center',
        lineHeight: 34,
        marginBottom: 12
    },
    heroAccent: {
        color: '#5DCAA5'
    },
    heroSub: {
        color: 'rgba(255,255,255,0.75)',
        fontSize: 14,
        textAlign: 'center',
        lineHeight: 21,
        marginBottom: 28
    },
    btnRow: {
        flexDirection: 'row',
        gap: 10
    },
    btnPrimary: {
        backgroundColor: '#5DCAA5',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 10,
        flex: 1
    },
    btnPrimaryText: {
        color: '#04342C',
        fontWeight: '700',
        fontSize: 14,
        textAlign: 'center'
    },
    btnSecondary: {
        backgroundColor: 'rgba(255,255,255,0.35)',
        borderWidth: 0.8,
        borderColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 10,
        flex: 1
    },
    btnSecondaryText: {
        color: '#ffffff',
        fontWeight: '500',
        textAlign: 'center',
        fontSize: 15
    },
    // Feature Section
    section: {
        padding: 20,
    },
    sectionLabel: {
        fontSize: 11,
        fontWeight: '700',
        color: '#1B4F72',
        letterSpacing: 1,
        marginBottom: 6
    },
    sectionTitle: {
        fontSize: 28,
        fontWeight: '700',
        color: '#1A2B3C',
        marginBottom: 16
    },
    featureCard: {
        backgroundColor: '#ffffff',
        borderRadius: 14,
        padding: 14,
        marginBottom: 13,
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 14,
        borderWidth: 1,
        borderColor: '#D8E4EE'
    },
    featureIcon: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    featureEmoji: {
        fontSize: 20
    },
    featureText: {
        flex: 1,
        flexShrink: 1
    },
    featureTitle: {
        fontSize: 14,
        color: '#1A2B3C',
        fontWeight: '700',
        marginBottom: 3,
    },
    featureDesc: {
        fontSize: 12,
        color: '#6B7D8E',
        lineHeight: 18
    },

    // Working Steps Section
    step:{
        flexDirection:'row',
        gap:14
    },
    stepLeft:{
        alignItems:'center',
        width:32,        
    },
    stepNum:{
        width:32,
        height:32,
        borderRadius:16,
        backgroundColor:'#2563EB',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:16
    },
    stepNumText:{
        color:'#ffffff',
        fontSize:13,
        fontWeight:'700'
    },
    stepLine:{
        width:2,
        flex:1,
        minHeight:28,
        backgroundColor:'#D8E4EE',
        marginVertical:4
    },
    stepContent:{
        flex:1,
        paddingBottom:24,
        flexShrink:1
    },
    stepTitle:{
        fontSize:12,
        fontWeight:'700',
        color:'#1A2B3C',
        marginBottom:3
    },
    stepDesc:{
        fontSize:12,
        color:'#6B7D8E',
        lineHeight:18,                
    }
});