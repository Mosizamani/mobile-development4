import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

const Menu = () => {
    return (
        // <ScrollView>
            <View>
                <Text style={{ textAlign: 'center', fontSize: 18, marginVertical: 8 }}>Burrito</Text>
                <Image />
                <Text style={{ textAlign: 'center', fontSize: 18, marginVertical: 8 }}>Arroz Rojo</Text>
                <Text style={{ textAlign: 'center', fontSize: 18, marginVertical: 8 }}>Flautas</Text>
                <Text style={{ textAlign: 'center', fontSize: 18, marginVertical: 8 }}>Quesadillas</Text>
            </View>
        // </ScrollView>
    )
}

export default Menu
