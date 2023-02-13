import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {useState, useEffect} from "react";
import { RefreshControl } from "react-native";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, Alert } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import api from "../../ApiManager";

import OsItem from '../../components/operational/panel/OsItem'

export default () => {

    useEffect(()=> {
        setTimeout(() => {
            setIsLoading(true)
            getAllOsPanel()
        },500)
        setIsLoading(false)
    }, [])

    useEffect(() => {
        if(searchText == '') {
            setList(list) 
        } else {
            setList(
                list.filter(item => {
                    if(item.companyName.toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
                        return true
                    } else {
                        return false
                    }
                })
            )
        }
    }, [searchText])

    const [searchText, setSearchText] = useState('')
    const [list, setList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const[refreshing, setRefreshing] = useState(false)

    const getAllOsPanel = async() => {
        setIsLoading(true)
        setList([])

        let URL = 'https://backend-cliente-dev.azurewebsites.net'
        const req = await api.get('/api/v1/operational/get-all-os-panel?ShowDelivery=true&ShowPeriod=true&ShowProgress=true&ShowDevolution=true&Done=true').then(res => {
            let list = res.data.content
            setList(list)
            AsyncStorage.setItem('osInfo', JSON.stringify(list))
            console.log(list)
            return list
        }).catch(err => {
            console.error(err)
            Alert.alert('Erro: ' + err)
        })
        setIsLoading(false)
    }

    const onRefresh = () => {
        setRefreshing(false)
        getAllOsPanel()
    }

    return(
        <View style={styles.container}>
                <View style={styles.headerTitle}>
                    <Text style={styles.title}>Painel de O.S</Text>
                </View>
                <View style={styles.searchArea}>
                    <View style={styles.searchInputArea}>
                        <TextInput style={styles.searchInput} 
                        placeholder='Pesquisar'
                        placeholderTextColor='#737070'
                        value={searchText}
                        onChangeText={searchText => setSearchText(searchText)}/>
                        <TouchableOpacity style={styles.searchButton}>
                            <FontAwesomeIcon name="search" size={18} color='#000'/>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.filterButton}>
                        <FontAwesomeIcon name="filter" size={22} color='#000'/>
                    </TouchableOpacity>

             
                </View>

                <FlatList 
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
                }
                data={list}
                style={styles.listArea}
                keyExtractor={(content) => content.title}
                renderItem={({ item }) => <OsItem content={item}/>}/>

                {isLoading &&
                        <ActivityIndicator style={styles.loadingIcon} size='large' color='#577696'/>
                    }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    headerTitle: {
        width: '100%',
        height: 89,
        backgroundColor: '#577696',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        color: '#fff',
        marginTop: 25
    },
    searchArea: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 16,
        alignItems: 'center'
    }, 
    searchInput: {
        flex: 1,
        paddingLeft: 10
    },
    searchInputArea: {
        marginLeft: 20,
        width: '80%',
        height: 39,
        borderWidth: 1,
        borderRadius: 50,
        borderColor: '#E9EDF3',
        flexDirection: 'row',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },  
    searchButton: {
        paddingRight: 12
    },
    filterButton: {
        marginLeft: 15,
    },
    loadingIcon: {
        marginTop: 200,
    },
    listArea: {
        marginTop: 20,
        marginBottom: 63
    }
})