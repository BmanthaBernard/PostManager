import * as React from 'react';
import styles from './PostManager.module.scss';
import { IPostManagerProps } from './IPostManagerProps';
import { escape } from '@microsoft/sp-lodash-subset';
import MessageList from './MessageList';

export default class PostManager extends React.Component<IPostManagerProps, {}> {
  public render(): React.ReactElement<IPostManagerProps> {
    return (
      <div className={styles.postManager}>
        <div className={styles.container}>
          <div className={`ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}`}>
            <div className="ms-Grid-col ms-lg10 ms-xl8 ms-xlPush2 ms-lgPush1">
              <span className="ms-font-xl ms-fontColor-white">Welcome to SharePoint!</span>
              <p className="ms-font-l ms-fontColor-white">Customize SharePoint experiences using Web Parts.</p>
              <p className="ms-font-l ms-fontColor-white">{escape(this.props.description)}</p>
              <MessageList />
            </div>
          </div>
        </div>
       
      </div>
      
    );
  }
}
