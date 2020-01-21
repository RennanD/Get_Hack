import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import SingIn from '~/screens/SingIn';
import SingUp from '~/screens/SingUp';

export default createAppContainer(
  createSwitchNavigator({
    Sing: createSwitchNavigator({
      SingIn,
      SingUp,
    }),
  }),
);
