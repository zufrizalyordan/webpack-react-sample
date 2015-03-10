/** @jsx React.DOM */
'use strict'
var React = require('react')
var Michael = require('./Michael')
module.exports = React.createClass({
    displayName: 'HelloReact',
    render: function(){
        return (
            <div>Hello React <Michael /></div>
        )
    }
})