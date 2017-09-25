import * as React from 'react';
import pnp from 'sp-pnp-js';

export default class MessageItem extends React.Component<any,any> {
    constructor(props){
        super(props);
    }
    public render(): React.ReactElement<any> {
        console.log('in render of messageitem');
        return (
        <div>Item {this.props.GUID}</div>
        );
      }
}