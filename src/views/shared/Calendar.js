import React from "react";
import { Text, StyleSheet, View, Alert } from "react-native";

import { Calendar, Agenda } from "react-native-calendars";

export default () => {
    const dayPress = () => {
        Alert.alert('Esse dia foi pressionado!')
    }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calendário</Text>
      <Calendar style={styles.calendar}
            markingType={'custom'}
            markedDates={{
                '2023-02-18': {customStyles: {container:{backgroundColor:'black', elevation: 2}, text:{color:'white'}}},
                '2023-02-28': {customStyles: {container:{backgroundColor:'blue', elevation: 2}, text:{color:'white'}}}
            }}
            onDayPress={() => dayPress()}
            />
      {/* <Agenda style={styles.agenda}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    marginTop: 50,
  },
  calendar: {
    marginTop: 50,
  },
  agenda: {
    marginTop: 50,
    width: "100%",
    height: '100%',
  }
});
