import * as React from 'react';
import './App.css';

import Topbar from './component/Appbar/top';
import TDTable from './component/Table/Table';

class App extends React.Component {
  public render() {
    return (
      <div>
        <Topbar/>
        <TDTable/>
      </div>
    );
  }
}

export default App;
