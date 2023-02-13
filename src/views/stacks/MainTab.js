import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import OsPanel from "../operational/OsPanel";
import User from "../adm/User";
import Tasks from "../shared/Tasks";
import Calendar from "../shared/Calendar";
import Search from "../Search";

import CustomTabBar from "../../components/CustomTabBar";

const Tab = createBottomTabNavigator()

export default () => (
    <Tab.Navigator tabBar={props=><CustomTabBar {...props} />}
    screenOptions={{
        headerShown: false
    }}>
        <Tab.Screen name="OsPanel" component={OsPanel}/>
        <Tab.Screen name="Calendar" component={Calendar}/>
        <Tab.Screen name="Search" component={Search}/>
        <Tab.Screen name="Tasks" component={Tasks}/>
        <Tab.Screen name="User" component={User}/>
    </Tab.Navigator>
)
