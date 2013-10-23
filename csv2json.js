var csv = require('fast-csv');

console.log("{");
csv("pathwayfit.csv").on("data", function(data){
	console.log( "'"+data[0]+"':{'"+data[1] +"':'"+data[2] +"'}" );
}).parse();

console.log("}");
