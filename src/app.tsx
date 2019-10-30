import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Root from './root';

const App: FunctionComponent = () => (
    <Router>
        <Root />
    </Router>
);

export default App;