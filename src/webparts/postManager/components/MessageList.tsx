import * as React from 'react';
import pnp from 'sp-pnp-js';
import IMessageListProps from './IMessageListProps';

export default class MessageList extends React.Component<IMessageListProps, {}> {
    constructor(props){
        super(props);
        pnp.sp.web.get().then(r => {
            
            console.log(r);
        });
        pnp.sp.web.lists.getByTitle("Site Pages").get().then(r => {
            
            console.log(r);
        });
        // GET /_api/web/lists/getByTitle('Tasks')/items
        pnp.sp.web.lists.getByTitle("Site Pages").items.get().then(r => {
            console.log(r);
        });
    }
    public render(): React.ReactElement<IMessageListProps> {
        console.log('in render of messagelist');
        return (
        <div>Test Component Message List</div>
        );
      }

}