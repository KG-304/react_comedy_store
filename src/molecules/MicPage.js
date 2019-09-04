import React, { Fragment } from 'react'
import Navi from '../atoms/nav';
import environment from "../config/Environment";
import { QueryRenderer, graphql } from "react-relay"
import Zoom from "react-reveal/Zoom";

class MicPage extends React.Component{
    render(){
        console.log(this.props)
        return(
        <QueryRenderer
            environment={environment} // env for headers, endpoint, and other config for graphql
            query={graphql`
              query MicPageQuery($id: ID!) {
                OpenMic(id: $id) {
                  id
                  location
                  description
                  phone
                  author
                }
              }
            `}
            variables={{
                id: this.props.match.params.id
            }}
            render={({ error, props }) => { 
              if (error) {
                return <div>{error.message}</div>;
              } else if (props) {
                return (
                    <Fragment>
                        <Navi/>
                        <Zoom duration={300}>
                        <div>{props.OpenMic.location}</div>
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

export default MicPage