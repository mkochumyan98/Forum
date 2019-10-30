import React, { FunctionComponent } from 'react';
import { Route, Switch } from 'react-router-dom';

const Root: FunctionComponent = () => (
    <>
        <Switch>
            <Route render={() => <div>asdasdasd</div>} />
        </Switch>
    </>
);

export default Root;