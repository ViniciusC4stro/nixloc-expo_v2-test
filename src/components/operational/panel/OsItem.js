import React from "react";
import styled from "styled-components/native";
import Icon5 from 'react-native-vector-icons/FontAwesome5'

const Area = styled.TouchableOpacity`
    width: 339px;
    height: 79px;
    border-radius: 15px;
    border: 1px solid #E9EDF3;
    margin-bottom: 8px;
    margin-left: 20px
`
const InfoArea = styled.View`
    width: 100%;
    height: 100%;
    padding-left: 16px;
    padding-top: 10px;
    padding-bottom: 9px;
    padding-right: 16px
`
const DelOrDevArea = styled.View`
    flex-direction: row;
    align-items: center;
`
const DeliveryOrDevolution = styled.View`
    
`
const Delivery = styled.Text`
    color: #009183;
    font-size: 14px;
    line-height: 21px;
`
const Devolution = styled.Text`
    color: #3D4EAE;
    font-size: 14px;
    line-height: 21px;
`
const ClientArea = styled.View`
    flex-direction: row;
    align-items: center;
`
const ClientName = styled.Text`
    flex-wrap: wrap;
    font-size: 13px; 
    color: #737070;
`
const DateArea = styled.View`
    flex-direction: row;
    align-items: center;
`
const Date = styled.Text`
    font-size: 14px;
    line-height: 21px;
`

export default ({content}) => {
    return (
        <Area>
            <InfoArea>
                <DelOrDevArea>
                    {content.isDelivery === true 
                    ? <Icon5 style={{paddingRight: 11}} name="truck" size={15} color='#009183'/>
                    : <Icon5 style={{paddingRight: 11}} name="truck" size={15} color='#3D4EAE'/>
                     }
                    <DeliveryOrDevolution>{content.isDelivery === true 
                    ? <Delivery>Entrega N° {content.numberRent}</Delivery>
                    : <Devolution>Retirada N° {content.numberRent}</Devolution>
                    }</DeliveryOrDevolution>
                </DelOrDevArea>

                <DateArea>
                    <Icon5 style={{paddingRight: 18}} name="calendar" size={14} color='#000' />
                    <Date>{content.type === 'delivery' 
                    ? content.startStr
                    : content.endStr
                }</Date>
                </DateArea>
                <ClientArea>
                    <Icon5 style={{paddingRight: 11}} name="user-friends" size={15} color='#000' />
                    <ClientName>{content.companyName}</ClientName>
                </ClientArea>
                <Icon5 style={{position: 'absolute', right: 5, top: 24}} name="angle-right" size={25} color='#DFDBDB'/>
            </InfoArea>
        </Area>
    )
}