import * as React from 'react';
import styles from './PostManager.module.scss';
import { IPostManagerProps } from './IPostManagerProps';
import { escape } from '@microsoft/sp-lodash-subset';
import MessageListContainer from './MessageListContainer';

export default class PostManager extends React.Component<IPostManagerProps, {}> {
  public render(): React.ReactElement<IPostManagerProps> {
    return (
      <div className={styles.postManager}>
        <div className={styles.container}>
          <div className={`ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}`}>
            <div className="ms-Grid-col ms-lg10 ms-xl8 ms-xlPush2 ms-lgPush1">
               <p className="ms-font-l ms-fontColor-white">{escape(this.props.description)}</p>
              <MessageListContainer />
            </div>
          </div>
        </div>
       
      </div>
      
    );
  }
}
