import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function WelcomeScreen({ navigation }) {
    return (
        <ScrollView style={styles.ScrollView}>
            <View style={styles.screen}>
                <Text style={styles.heading}>Welcome</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    ScrollView: {
        flexGrow: 1,
        flex: 1
    }, 
  screen: {
        backgroundColor: '#F0F4F8',
        flex: 1,
        minHeight: '100%'
    },
    heading: {
        fontSize: 24,
        color: '#1B4F72',
        padding: 20,
    },
});