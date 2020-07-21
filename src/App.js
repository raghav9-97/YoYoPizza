import React, {Component} from 'react';
import Amplify from 'aws-amplify';
import {ChatBot, AmplifyTheme} from 'aws-amplify-react';
import awsconfig from './aws-exports';
import './App.css';

Amplify.configure(awsconfig);

const myTheme = {
  ...AmplifyTheme,
  sectionHeader: {
    ...AmplifyTheme.sectionHeader,
    backgroundColor: '#ff6600'
  }
};

Amplify.configure({
  Interactions: {
    bots: {
      "YoYoPizza": {
        "name": "YoYoPizza",
        "alias": "$LATEST",
        "region": "ap-southeast-1",
      },
    }
  }
});

class App extends Component {
  render() {
    return (
      <div className="App">
      <ChatBot
        title="YoYoPizza"
        theme={myTheme}
        botName="YoYoPizza"
        welcomeMessage="Hi There! Welcome to YoYo Pizza Chatbot. Order a Pizza / Know Order Status"
      />
      </div>
    );
  }
}

export default App;
