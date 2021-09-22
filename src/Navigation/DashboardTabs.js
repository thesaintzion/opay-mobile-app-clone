import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../Components/Dashboard/Home/Home';
import Details from '../Components/Dashboard/Details/Details';
import Finance from '../Components/Dashboard/Finance/Finance';
import Me from '../Components/Dashboard/Me/Me';
import Friends from '../Components/Dashboard/Friends/Friends';
import { COLORS } from '../Utlities/Utilities';;


const Tab = createBottomTabNavigator();

const DashboardTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        activeTintColor: 'red',
        tabBarShowLabel: true,
        tabBarInactiveTintColor: '#ccd6dd',
        tabBarActiveTintColor: COLORS.primary,
      }}>
      {/* jfjffjfj */}

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Details"
        component={Details}
        options={{
            tabBarLabel: 'Details',
            tabBarIcon: ({color, size}) => (
              <Icon name="basket-outline" color={color} size={size} />
            ),
          }}
      />

      <Tab.Screen
        name="Finance"
        component={Finance}
        options={{
            tabBarLabel: 'Finance',
            tabBarIcon: ({color, size}) => (
              <Icon name="card-outline" color={color} size={size} />
            ),
          }}
      />

      <Tab.Screen
        name="Friends"
        component={Friends}
        options={{
            tabBarLabel: 'Friends',
            tabBarIcon: ({color, size}) => (
              <Icon name="chatbubble-ellipses-outline" color={color} size={size} />
            ),
          }}
          />

      <Tab.Screen name="Me" component={Me}   options={{
            tabBarLabel: 'Me',
            tabBarIcon: ({color, size}) => (
              <Icon name="person-circle-outline" color={color} size={size} />
            ),
          }} />
    </Tab.Navigator>
  );
};

export default DashboardTabs;
