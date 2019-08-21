import React, { Fragment } from "react";
import "./App.css";
import environment from "./Environment.js";
import { QueryRenderer, graphql } from "react-relay";
import Zoom from "react-reveal/Zoom";
import AnimatedHeader from './hooksAnimation/aniHeader'

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
                <AnimatedHeader name={'Chuck'}/>
                <Zoom duration={300}>
                  <table style={{ position: 'relative', left: '27%', height: '200px', width: "50%", fontFamily: 'Helvetica' }}>
                    <tr>
                      <th style={{fontWeight: '400'}}>Author</th>
                      <th style={{fontWeight: '400'}}>Location</th>
                      <th style={{fontWeight: '400'}}>Contact</th>
                    </tr>
                    {props.OpenMics.map((mic, key) => (
                      <tr style={{fontWeight: 'lighter'}}>
                        <td key={key}>{mic.author}</td>
                        <td>{mic.location};</td>
                        <td>{mic.phone}</td>
                      </tr>
                    ))}
                  </table>
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
