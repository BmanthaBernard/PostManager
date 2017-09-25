import * as React from 'react';
import pnp from 'sp-pnp-js';
import {Checkbox, ICheckboxStyles} from 'office-ui-fabric-react/lib/Checkbox';
import {PrimaryButton, IButtonProps} from 'office-ui-fabric-react/lib/Button';

export default class MessageRow extends React.Component < any,any > {
    constructor(props) {
        super(props);
    }
    public updateArchiveStatus(itemId){
        pnp.sp.web.lists.getByTitle("Community Discussions").items.getById(itemId).update({
            ArchiveDiscussion: true,
        }).then(result => {
            // here you will have updated the item
            console.log(JSON.stringify(result));
        });

    }
    public render() : React.ReactElement < any > {
        return <tr>
            <td>
                <Checkbox
                    checked={this.props.row.ArchiveDiscussion}
                    onChange={(ev, checked) => {
                    this.setState({isChecked: checked});
                }}/></td>
            <td>
                <PrimaryButton
                    data-automation-id='test'
                    disabled={false}
                    checked={false}
                    text='Mark Archive'
                    onClick={() => this.updateArchiveStatus(this.props.row.ID)}/>

            </td>
            <td>{this.props.row.DiscussionLastUpdated.substr(0,10)}</td>
            <td>{this.props.row.Title}</td>
        </tr>;
    }
}