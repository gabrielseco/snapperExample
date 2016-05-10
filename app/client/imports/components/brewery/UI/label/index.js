import React from 'react';
import classnames from 'classnames';

var Label = React.createClass({
  propTypes: {
    customClasses: React.PropTypes.string,
    fontSize: React.PropTypes.string,
    fontFamily:React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      customClasses: '',
      fontSize:14,
      fontFamily:'Arial',
      color:'#000'
    };
  },
  render() {
    var classes = classnames(

    );

    var style = {
      fontSize: this.props.fontSize,
      fontFamily: this.props.fontFamily,
      color: this.props.color,
      width:'100%'
    }
    return (
      <label style={style}>
        {this.props.children}
      </label>
    );
  }
});

export default Label;
