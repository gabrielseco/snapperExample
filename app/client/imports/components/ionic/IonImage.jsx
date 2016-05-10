import React from 'react';
import classnames from 'classnames';

require('./img.css');

`WORKS LIKE THIS
If background property is present it loads as a background.

Then if you want UI ELEMENTS above the image putting as their child

example

<IonImage url={'images/beer.jpg'} background>
  <Label fontSize={'45px'}
         font-family={'Arial'}
         color={'#fff'}>
         Search your beer
  </Label>
</IonImage>

If property background not presented it loads an image and you don't need to put the elements inside the IonImage

example

<IonImage url={'images/beer.jpg'} background>

</IonImage>
<Label fontSize={'45px'}
       font-family={'Arial'}
       color={'#fff'}>
       Search your beer
</Label>

`



var IonImage = React.createClass({
  propTypes: {
    customClasses: React.PropTypes.string,
    url: React.PropTypes.string,
    background:React.PropTypes.bool,
  },
  getDefaultProps: function() {
    return {
      customClasses: '',
    };
  },
  render() {
    var classes = classnames(
      {'img--fit': this.props.background},
      this.props.customClasses
    );
    if(!this.props.background){
      return (
        <img className={classes} src={this.props.url}></img>
      );
    } else {
      var style = {
        background:'url('+this.props.url+')',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover'
      }
    }
    return(
      <div style={style} className={classes}>
        {this.props.children}
      </div>
    )
  }
});

export default IonImage;
