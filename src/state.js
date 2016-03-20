let
  HoodieClient= require("hoodie-client")

let
  hoodie

module.exports= function(){
	if(!hoodie){
		hoodie= new HoodieClient({})
	}
	return { hoodie }
}
