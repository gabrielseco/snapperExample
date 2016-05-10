import React, { Component } from 'react'
import { IonBody, IonIcon, IonNavBar, IonNavView, IonSideMenuContainer, IonSideMenuContent, IonSideMenu, IonSideMenus, IonView } from 'reactionic'
import SideMenu from './SideMenu'

var Snapper = React.createClass({
  contextTypes: {
    ionSnapper: React.PropTypes.object
  },
  navButton() {
    //if (Meteor.userId() === null) return;
    console.log(this);
    return (
      <a onClick={() => { this.context.ionSnapper.toggle('left') }} className="button button-icon icon ion-navicon"></a>
    )
  },

  sideMenu() {
    //if (Meteor.userId() === null) return;
    return (
      <IonSideMenus>
        <SideMenu />
      </IonSideMenus>
    )
  },

  render() {
    return (
        <IonSideMenuContainer {...this.props}>
          <IonSideMenus>
            {this.sideMenu()}
          </IonSideMenus>
          <IonSideMenuContent>
              <IonNavBar customClasses="bar-dark"
                 title="Oviation"
                 leftButton={this.navButton()} />
               <IonNavView>
                <IonView>
                  {this.props.children}
                  hola
                </IonView>
              </IonNavView>
          </IonSideMenuContent>
        </IonSideMenuContainer>
    )
  },


});

export default Snapper
