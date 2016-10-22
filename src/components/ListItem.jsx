var React = require('react');

var ListItem = React.createClass({
  render: function(){
    return(
      <li>
        {/*
        'props' is 'properties'
        Assuming there is props pass down call 'ingredient'
        from top e.g. from 'List.jsx' */}
        <h4>{this.props.ingredient}</h4>
      </li>
    )
  }
});

module.exports= ListItem;
