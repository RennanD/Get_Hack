import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

/**
 * Authenticate Screens
 */

import SingIn from '~/screens/SingIn';
import SingUp from '~/screens/SingUp';

/**
 * App Screens
 */

import Dashboard from '~/screens/Dashboard';
import Available from '~/screens/Hackathons';

export default (signed = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sing: createSwitchNavigator({
          SingIn,
          SingUp,
        }),
        App: createBottomTabNavigator(
          {
            Available,
            Dashboard,
          },
          {
            tabBarOptions: {
              style: {
                backgroundColor: '#222',
              },
              activeTintColor: '#2193f6',
              inactiveTintColor: 'rgba(255,255,255,0.6)',
              showLabel: false,
            },
          },
        ),
      },
      {
        initialRouteName: signed ? 'App' : 'Sing',
      },
    ),
  );
