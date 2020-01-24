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

import Home from '~/screens/Home';
import Dashboard from '~/screens/Dashboard';

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
            Home,
            Dashboard,
          },
          {
            tabBarOptions: {
              style: {
                backgroundColor: '#222',
              },
              activeTintColor: '#fefefe',
              inactiveTintColor: 'rgba(255,255,255,0.6)',
            },
          },
        ),
      },
      {
        initialRouteName: signed ? 'App' : 'Sing',
      },
    ),
  );
