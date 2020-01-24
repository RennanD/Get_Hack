import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import SingIn from '~/screens/SingIn';
import SingUp from '~/screens/SingUp';

import Home from '~/screens/Home';

export default (signed = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sing: createSwitchNavigator({
          SingIn,
          SingUp,
        }),
        App: createBottomTabNavigator({
          Home,
        }),
      },
      {
        initialRouteName: signed ? 'App' : 'Sing',
      },
    ),
  );
