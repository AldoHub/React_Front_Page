import React, { Component } from 'react';

//import the main component
import Main from "./components/main";
//------------import redux components

//impor the store from the store file
import store from "./store/store";

//Provider from react-redux
import {Provider} from "react-redux";

class App extends Component {
  render() {
    return (
     <Provider store={store}>
      <div className="App">
        <Main />
      </div>
      </Provider>
    );
  }
}

export default App;
