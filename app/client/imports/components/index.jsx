import React from 'react';
import { IonContent, IonIcon, IonButton } from 'reactionic';
import Label from './brewery/UI/label';
import Section from './brewery/UI/section'
import Input from './brewery/UI/input'
import Message from './brewery/UI/message';
import IonImage from './ionic/IonImage';


import { API, API_KEY } from '../../API'
import { setStore } from './utils/helpers'



var Index = React.createClass({
  propTypes: {
    ionSetTransitionDirection: React.PropTypes.func
  },
  contextTypes:{
    router: React.PropTypes.object
  },
  getDefaultProps: function() {
    return {
      ionSetTransitionDirection: null
    };
  },
  getInitialState:function(){
    return {
      q: '',
      result: null
    }
  },
  handleSearch:function() {
    fetch(API + 'search/?key='+ API_KEY +'&q='+ this.state.q)
         .then(response => response.json())
         .then(json => this.handleResponse(json));
  },
  handleResponse:function(json){
    if(json.data === undefined){
      this.setState({
        result: <Message text={'No results found. Try again with another beer'}/>,
        q: ''
      });
    }
    else {
      setStore('data',json.data);
      this.context.router.push('/search');

    }
  },
  render:function() {

    return (
      <IonContent customClasses=""
                  {...this.props}>
        <IonImage url={'images/beer.jpg'} background>
          <Section align='centered'>
            <Label fontSize={'8vw'}
                   font-family={'Arial'}
                   color={'#fff'}>
                   Search your beer
            </Label>
            <Section marginTop={'25px'} marginBottom={'25px'}>
              <Input fontSize={'28px'}
                     defaultValue={this.state.q}
                     onChange={ (e) => { this.setState( { q: e.target.value } ) } }/>
            </Section>
            <IonButton icon="ion-ios-search"
                       iconPosition="left"
                       size="large"
                       color="dark"
                       onClick={this.handleSearch}>GO AHEAD</IonButton>
            <Section marginTop={'25px'}>
              {this.state.result}
            </Section>
          </Section>
        </IonImage>

      </IonContent>
    );
  }
});

export default Index;
