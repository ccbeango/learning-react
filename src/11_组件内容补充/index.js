import React, { Component, StrictMode } from 'react';
// import App1 from './01_ref的转发';
// import App2 from './02_portals的使用';
// import App3 from './03_fragment的使用';
import App4 from './04_strictMode的使用';

export default class Com08 extends Component {
  render() {
    return (
      <div>
        {/* <App1 /> */}
        {/* <App2 /> */}
        {/* <App3 /> */}
        <StrictMode>
          <App4 />
        </StrictMode>
      </div>
    )
  }
}
