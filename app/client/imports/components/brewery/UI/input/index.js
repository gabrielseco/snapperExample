import React from 'react';
import classnames from 'classnames';

var Input = React.createClass({
  propTypes: {
    customClasses: React.PropTypes.string,
    defaultValue: React.PropTypes.string,
    onChange: React.PropTypes.func
  },
  getDefaultProps: function() {
    return {
      customClasses: '',
    };
  },
  render() {

    var classes = classnames(
      'customInput',
      this.props.customClasses
    );

    var style = {
      fontSize: this.props.fontSize
    }


    return (
        <input defaultValue={this.props.defaultValue} onChange={this.props.onChange} style={style}/>
    );
  }
});

export default Input;
