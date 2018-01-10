// import React from 'react';
// import Index from '/js/index';

// export default class App extends React.Component {
//   render() {
//     return (
//       <Index />
//     );
//   }
// }

import { Provider } from 'react-redux';
import React from 'react';

import store from './js/store/appStore';
import Index from './js/index';

const App = () => (
  <Provider store={ store }>
    <Index />
  </Provider>
);

export default App;