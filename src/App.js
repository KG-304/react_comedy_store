import React, { Fragment } from "react";
import "./App.css";
import environment from "./Environment.js";
import { QueryRenderer, graphql } from "react-relay";
import Zoom from "react-reveal/Zoom";
import AnimatedHeader from './hooksAnimation/aniHeader'
import Navi from "./atoms/nav";

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
              <Fragment>
                <Navi />
                <AnimatedHeader name={'Karl'}/>
                <Zoom duration={300}>
                  <div style={{position: 'relative', top: '100px', left: '5%'}}>
                    {props.OpenMics.map((mic, key) => (
                      <div style={{fontWeight: 'lighter', width: '200px', height: '200px', float: 'left', backgroundColor: 'white',borderStyle: 'dotted' , marginRight: '30px'}}>
                        <span key={key}>{mic.author}</span>
                        <span>{mic.location}</span>
                        <span>{mic.phone}</span>
                      </div>
                    ))}
                  </div>
                </Zoom>
              </Fragment>
            );
          }
          return null;
        }}
      />
    );
  }
}

export default App;
