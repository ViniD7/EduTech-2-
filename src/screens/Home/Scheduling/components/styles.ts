import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card: {
        width: '100%',
        backgroundColor: '#004E75',
        borderRadius: 20,
        padding: 20,
        borderColor: 'rgb(137, 168, 211)',
        borderWidth: 1,
        gap: 5
    },
    text: {
        color: 'white',
        fontSize: 15,
        fontWeight: '600'
    },
    logo: {
        position: 'absolute',
        top: 15,
        right: 20
    }
});

export default styles;
