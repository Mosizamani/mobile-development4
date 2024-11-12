import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, ImageBackground } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context'

const Menu = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <ImageBackground 
                source={{ uri: 'https://plus.unsplash.com/premium_photo-1681406994502-bb673c265877?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}
                style={styles.image}
                resizeMode="cover"
                >
                <View style={styles.imageContainer}>
                    <Text style={styles.text}>Burrito</Text>
                    <Text style={styles.text}>Arroz Rojo</Text>
                    <Text style={styles.text}>Flautas</Text>
                    <Text style={styles.text}>Quesadillas</Text>
                </View>
                </ImageBackground>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
    backgroundColor: 'white',
    opacity: 0.5,
    padding: 10,             // Optional: add padding around the image
    },
    image: {
        flex: 1,  
        justifyContent: 'center',// Set the image to fill the container
        width: 400,              // Set your image width
        height: 800,             // Set your image height
    },
    text: {
        textAlign: 'center', 
        fontWeight: 'bold',
        fontSize: 18, 
        marginVertical: 8,
    },
});

export default Menu
