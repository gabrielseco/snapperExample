import React from 'react';
import classnames from 'classnames';

require('./section.css')

var Section = React.createClass({
  propTypes: {
    customClasses: React.PropTypes.string,
    marginTop: React.PropTypes.string,
    marginBottom: React.PropTypes.string,
    align:React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      customClasses: '',
    };
  },
  render() {


    var style = {
      marginTop: this.props.marginTop,
      marginBottom: this.props.marginBottom
    }

    var parentClasses = classnames(
      this.props.align === 'centered' ? 'center--parent' : '',
      this.props.customClasses
    );
    var childClasses = classnames(
      this.props.align === 'centered' ? 'center--child' : '',
    );


    return (
        <div className={parentClasses} style={style}>
        <div className={childClasses}>
        {this.props.children}
        </div>
        </div>
    );
  }
});

export default Section;
