import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SingIn from '~/pages/SingIn';
import SingUp from '~/pages/SingUp';

import Dashboard from '~/pages/Dashboard';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={SingIn} />
            <Route path="/singup" component={SingUp} />

            <Route path="/dashboard" component={Dashboard} isPrivate />
        </Switch>
    );
}
