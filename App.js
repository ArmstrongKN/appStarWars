import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const request = async(Callback) =>{
    const response = await fetch('http:///swapi.dev/api/people/');
    const parsed = await response.json();
    Callback (parsed.results);
}

export default function App() {
    const[registros, setRegistros] = useState([]);
    useEffect (()=>{
        request(setRegistros);
    },[])


return (
    <View style={styles.container}>
        <Text style={styles.titulo}>API do StarWars</Text>
        <FlatList data={registros} renderItem={({item}) => 
        <Text style={styles.itens}>
            <Text>Nome: {item.name}{'\n'}</Text>
            <Text>Peso: {item.mass} </Text>
        </Text>  
        }  />
        <StatusBar style="auto" />
    </View>
    );
  } 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        justifyContent:'space-between',
        backgroundColor:'#fff',
        paddingRight:10,
        paddingLeft:10,
        paddingTop:25,
        paddingBottom:25,
    },
    itens:{
        backgroundColor:'#a50800',
        flex:1,
        marginBottom:10,
        marginRight:10,
        paddingRight:10,
        paddingLeft:10,
        paddingTop:10,
        paddingBottom:10,
        textAlign:'center',
        paddingVertical:10,
        color:'#fff',
        fontSize:20
    },
    titulo:{
        fontSize:30,
        textAlign:'center',
        marginVertical:40
    }
});
