import React from 'react';
import { View, Text } from 'react-native';

const Menu = () => {
    return (
        <View>
            <Text style={{ textAlign: 'center', fontSize: 18, marginVertical: 8 }}>Burrito</Text>
            <Text style={{ textAlign: 'center', fontSize: 18, marginVertical: 8 }}>Arroz Rojo</Text>
            <Text style={{ textAlign: 'center', fontSize: 18, marginVertical: 8 }}>Flautas</Text>
            <Text style={{ textAlign: 'center', fontSize: 18, marginVertical: 8 }}>Quesadillas</Text>
        </View>
    );
};

export default Menu;
