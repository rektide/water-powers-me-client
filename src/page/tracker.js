let
  React= require("react"),
  UserNav= require("../nav/user"),
  WaterInput= require("../input/water"),
  layout= require("react-mdl/lib/Layout"),
  Layout= layout.Layout,
  Drawer= layout.Drawer,
  Header= layout.Header,
  Navigation= layout.Navigation,
  Content= layout.Content,
  Div= React.DOM.div,
  State= require("../state")


let TrackerPage= React.createClass({
	displayName: "TrackerPage",
	getInitialState: State,
	render: function(props){
		return (<div>
				<Layout fixedHeader>
					<Header title="WaterPowers.me">
						<Navigation>
							<UserNav hoodie={this.state.hoodie} />
						</Navigation>
					</Header>
					<Drawer title="WaterPowers.me">
						<a href="#">⌂</a>
					</Drawer>
					<Content>
							<WaterInput />
					</Content>
				</Layout>
			</div>)
	}
})

module.exports= TrackerPage
