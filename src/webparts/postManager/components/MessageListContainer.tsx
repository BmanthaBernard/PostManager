import * as React from 'react';
import pnp from 'sp-pnp-js';
import IMessageListContainerProps from './IMessageListContainerProps';
import MessageList from './MessageList';

export default class MessageListContainer extends React.Component<IMessageListContainerProps,any> {
    constructor(props,state){
        super(props);
        this.state = {sprows: [] , skipcount: 0 }; 
        // GET /_api/web/lists/getByTitle('Tasks')/items
       this.fetchItems();
    }
    public fetchItems(){
        console.log("skipcount: " +  this.state.skipcount);
        pnp.sp.web.lists.getByTitle("Community Discussions").items.filter("DiscussionLastUpdated gt '1/1/2000'").orderBy("DiscussionLastUpdated",true).top(200).get().then(r => {
            console.log(r);
            this.setState({sprows: r});
        });
    }

    public render(): React.ReactElement<IMessageListContainerProps> {
        if (!this.state.sprows){
            return(<div>Loading</div>);
        };
        console.log('in render of messagelistcontainer');
        return (<div>
        <div>Discussion List {this.state.sprows.length}</div>
        <MessageList rows={this.state.sprows} /></div>
        );
      }

}