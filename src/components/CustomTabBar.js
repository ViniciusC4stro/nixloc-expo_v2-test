import React, { useContext} from "react";
import styled from 'styled-components/native'
import IconAwesome from 'react-native-vector-icons/FontAwesome'
import IconAwesome5 from 'react-native-vector-icons/FontAwesome5'

// import { UserContext } from "../contexts/userContext";

const TabArea = styled.View`
    height: 59px;
    background-color: #577696;
    flex-direction: row
`;
const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`
const TabItemCenter = styled.TouchableOpacity`
    width: 70px;
    height: 70px;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 35px;
    border: 3px solid #577696
    margin-top: -34px
`
const AvatarIcon = styled.Image`
    width: 22px
    height: 22px;
    border-radius: 11px
`

export default ({state, navigation}) => {
    // const { state: user} = useContext(UserContext)

    const goTo = (screenName) => {
        navigation.navigate(screenName)
    }

    return(
        <TabArea>
            <TabItem onPress={() =>goTo('Calendar')}>
                    <IconAwesome5 style={{opacity: state.index ===1 ? 1 : 0.5}} name="calendar" size={20} color='#fff'/>
            </TabItem>

            <TabItem style={{opacity: state.index ===2 ? 1 : 0.5}} onPress={() =>goTo('Search')}>
                    <IconAwesome name="search" size={20} color='#fff'/>
            </TabItem>

            <TabItemCenter style={{opacity: state.index ===0 ? 1 : 0.5}} onPress={()=> goTo('OsPanel')}>
                    <IconAwesome5 name="truck-loading" size={25} color='#577696'/>
            </TabItemCenter>

            <TabItem style={{opacity: state.index ===3 ? 1 : 0.5}} onPress={() =>goTo('Tasks')}>
                    <IconAwesome5 name="check-double" size={20} color='#fff'/>
            </TabItem>
            
            <TabItem style={{opacity: state.index ===4 ? 1 : 0.5}} onPress={() =>goTo('User')}>
                {/* {user.avatar != '' ?
                <AvatarIcon source={{uri: user.avatar}}/>
                :
            } */}
            <IconAwesome5 name="user-circle" size={22} color='#fff'/>   
            </TabItem>
        </TabArea>
    )
}