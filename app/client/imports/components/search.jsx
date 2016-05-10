import React from 'react';
import { IonContent, IonList, IonItem, IonIcon } from 'reactionic';

import { getStore } from './utils/helpers'


var Search = React.createClass({
  propTypes: {
    ionSetTransitionDirection: React.PropTypes.func
  },
  getDefaultProps: function() {
    return {
      ionSetTransitionDirection: null
    };
  },

  getInitialState(){
    return {
      brewery: [],
      beers: []
    }
  },

  componentDidMount:function(){
    var data = getStore('data');
    var arrBrewery = [];
    var arrBeer    = [];

    data.filter(item => item.type === 'brewery')
        .map(brewery => arrBrewery.push(brewery))

    data.filter(item => item.type === 'beer')
            .map(beer => arrBeer.push(beer))

    this.setState({
      brewery: arrBrewery,
      beers: arrBeer
    });

  },

  breweryInfo:function(){
    console.log('brewery');
  },

  render:function() {
    var breweries = this.state.brewery.map(brewery => {
      return (
        <IonItem key={brewery.id} onClick={this.breweryInfo} iconRight>
        {brewery.name}
        <IonIcon icon="ios-arrow-right" onClick={this.breweryInfo} />
      </IonItem>
      )
    });

    var beers = this.state.beers.map(beer => {
      let img = null;
      if(beer.labels !== undefined){
          img = <img src={beer.labels.large}/>
          avatar = true;
      }
      return (
        <IonItem avatar key={beer.id} iconRight>
        {img}
        {beer.name}
        <IonIcon icon="ios-arrow-right" onClick={this.beerInfo} />

      </IonItem>
     )
    })
    return (
      <IonContent customClasses=""
                  {...this.props}>
      <IonList>
        <IonItem divider>Brewery</IonItem>
          {breweries}
        <IonItem divider>Beers</IonItem>
        {beers}
      </IonList>


      </IonContent>
    );
  }
});

export default Search;
