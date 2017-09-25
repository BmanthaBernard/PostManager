import * as React from 'react';
import pnp from 'sp-pnp-js';
import MessageRow from './MessageRow';

export default class MessageList extends React.Component<any,any> {

    constructor(props){
        super(props);
       console.log (props);
    }
    
    public render(): React.ReactElement<any> {
        if (!this.props.rows){
            return ( <div> Loading </div> );
        }
        console.log('in render of messagelist');

        var MessageListHTML =   this.props.rows.map((row) => {
            return (<MessageRow row={row} />);
        })
        return (
            <table><tr><td>Archive</td><td></td><td>last discussed</td><td>topic</td></tr>{MessageListHTML}</table>
        );
      }
}