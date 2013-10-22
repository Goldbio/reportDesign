var xmldoc = require('xmldoc').XmlDocument; 
var fs = require('fs');

fs.readFile('pathway_files/sample_fit.xml','utf8',function(e,data){
	var xml = new xmldoc(data);

	var pat=xml.childNamed('patient');
	var names = pat.childNamed('name');
	names.eachChild( function(n){
		console.log( n.val );
	
	});

	
});

