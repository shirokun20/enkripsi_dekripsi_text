import React from 'react';
import { Text, View } from 'react-native';

const ValueApp = ({
    title = 'Chiper Text',
    value = '',
}) => (
    <View style={{
        paddingHorizontal: 10,
        paddingVertical: 15,
    }}>
        <Text style={{
            color: 'red',
        }}>{title} :</Text>
        <Text style={{
            fontSize: 20,
            color: 'black',
            fontWeight: 'bold',
        }}>{value.length ? value : '-'}</Text>
    </View>
);

export default ValueApp;
