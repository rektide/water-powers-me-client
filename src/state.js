let
  HoodieClient= require("hoodie-client"),
  History = require("history")

let
  hoodie,
  history

module.exports= function(){
	if(!hoodie){
		hoodie= new HoodieClient({})
	}
	if(!history){
		history = History.createHistory()
	}
	return { hoodie, history, showLoginCard: false }
}
