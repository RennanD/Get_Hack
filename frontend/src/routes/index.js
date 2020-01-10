import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SingIn from '~/pages/SingIn';
import SingUp from '~/pages/SingUp';

import Dashboard from '~/pages/Dashboard';
import Details from '~/pages/Details';
import AddHackathon from '~/pages/Hackathon/New';
import EditHackathon from '~/pages/Hackathon/Edit';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={SingIn} />
            <Route path="/singup" component={SingUp} />

            <Route path="/dashboard" component={Dashboard} isPrivate />
            <Route path="/hackathons/details" component={Details} isPrivate />
            <Route path="/hackathons/new" component={AddHackathon} isPrivate />
            <Route
                path="/hackathons/:id/edit"
                component={EditHackathon}
                isPrivate
            />
        </Switch>
    );
}
