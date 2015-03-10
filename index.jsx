/** @jsx React.DOM */
'use strict'
var React = require('react')
var Hello = require('./Hello')

var Index = React.createClass({

    render: function() {
        return (
            <Hello />
        );
    }

});

React.render(<Index />, document.getElementById("content"))
// React.renderComponent(<Hello />, document.getElementById('content'))
