var React = require('react');
var List = require('./ListItem.jsx');

var ingredients = [{"id":1, "text":"Shubham"}, {"id":2, "text":"Vats"}, {"id":3, "text":"Nis"} ]
var List = React.createClass({
  render: function() {
    var listItems = ingredients.map(function(item){
      return <ListItem key={item.id} ingredient={item.text} />;
    });

    return (<ul>{listItems}</ul>);
  }
});

module.exports = List;
