import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Image } from 'react-native';


// Função para fazer a requisição para a API do Animechan para obter todas as citações
const fetchData = async (callback) => {
    try {
        const response = await fetch('https://animechan.xyz/api/quotes');
        const data = await response.json();
        callback(data);
    } catch (error) {
        console.error('Erro ao buscar dados da API do Animechan:', error);
    }
}

export default function App() {
    const [citations, setCitations] = useState([]);

    useEffect(() => {
        fetchData(setCitations);
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Citações de Anime</Text>
            <FlatList 
                data={citations} 
                renderItem={({ item }) => (
                    <View style={styles.quoteContainer}>
                        <Text style={styles.character}>Personagem: {item.character}</Text>
                        <Text style={styles.quote}>Citação: {item.quote}</Text>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()} 
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff7200',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    quoteContainer: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        marginBottom: 15,
        borderRadius: 5,
    },
    character: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    quote: {
        fontSize: 16,
    },
});


