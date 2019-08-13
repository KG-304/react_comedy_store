import React from "react";
import "./App.css";
import environment from "./Environment.js";
import { QueryRenderer, graphql } from "react-relay";

class App extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query AppQuery {
            OpenMics {
              id
              location
              description
              phone
              author
            }
          }
        `}
        render={({ error, props }) => {
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            return (
            <div>
              {props.OpenMics.map((mic, key) => 
              <div key={key}>
                    <span style={{display: 'block'}}>{mic.author}</span>
                    <span style={{display: 'block'}}>{mic.location}</span>
                    <span style={{display: 'block'}}>{mic.description}</span>
                    <span style={{display: 'block'}}>{mic.phone}</span>
                    <br/>
              </div>
                )}
            </div>
            )
          }
          return null;
        }}
      />
    );
  }
}

export default App;
