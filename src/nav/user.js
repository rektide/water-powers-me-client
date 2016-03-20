let
  React= require("react")

let UserNav= React.createClass({
	displayName: "UserNav",
	propTypes: {
		hoodie: React.PropTypes.object.isRequired
	},
	render: function(){
		let text= this.props.hoodie.username || (<a href="#signin">sign in</a>)
		return (<span>{text}</span>)
	}
})

module.exports= UserNav
