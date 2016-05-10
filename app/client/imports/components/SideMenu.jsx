import React from 'react'
import { IonSideMenu } from 'reactionic'

var SideMenu = React.createClass({
  contextTypes: {
    ionSnapper: React.PropTypes.object
  },

  render() {
    return (
      <IonSideMenu customClasses="side-menu">
        <div className="bar bar-header bar-stable">
          <h1 className="title">Left Menu</h1>
        </div>
        <div className="content has-header side-menu">
          <div className="list">
          </div>
        </div>
      </IonSideMenu>
    )
  }
});

export default SideMenu
