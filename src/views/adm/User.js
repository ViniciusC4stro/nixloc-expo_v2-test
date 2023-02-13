import React from "react";
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileInfoArea = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`
const LogoutButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 30px;
    border: 1px solid #e0e0e0;
    border-radius: 7px;
`
const ButtonText = styled.Text`

`
const UserInfoArea = styled.View`

`

export default ({navigation}) => {

    const goTo = (screenName) => {
        navigation.navigate(screenName)
    }

    const logoutUser = async () => {
        let userInfo = await AsyncStorage.getItem('userInfo')
        let userToken = await AsyncStorage.getItem('userToken')

        if(userInfo != null && userToken != null) {
            AsyncStorage.removeItem('userInfo')
            AsyncStorage.removeItem('userToken')

            goTo('Login')
        }
}

    return(
        <ProfileInfoArea>
            <UserInfoArea>

            </UserInfoArea>

            <LogoutButton onPress={() => logoutUser()}>
                <Icon name="logout" size={15}/>
                <ButtonText>Sair</ButtonText>
            </LogoutButton>
        </ProfileInfoArea>
    )
}