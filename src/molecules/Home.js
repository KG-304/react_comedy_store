import React, { Fragment } from "react";
import environment from "../config/Environment";
import { QueryRenderer, graphql } from "react-relay";
import Zoom from "react-reveal/Zoom";
import AnimatedHeader from '../hooksAnimation/aniHeader'
import Navi from "../atoms/nav";
import OpenMicIcon from "../atoms/openMicIcon";

class Home extends React.Component {
  render() {  
    return (
      <QueryRenderer
        environment={environment} // env for headers, endpoint, and other config for graphql
        query={graphql`
          query HomeQuery {
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
                    <Navi/>
                    <AnimatedHeader name={'Karl'}/>
                      <Zoom duration={300}>
                        <h2 style={{fontFamily: 'Helvetica', fontWeight: 'lighter', position: 'relative', top: '30px', left: '79px'}}>Take a glance at open mics tonight!</h2>
                        <div style={{position: 'relative', top: '100px', left: '5%'}}>
                          {props.OpenMics.map((mic, key) => (
                            <OpenMicIcon mic={mic} key={key} />
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

export default Home