var fs = require('fs'),
$ = require('jQuery').create()
md = require('node-markdown').Markdown;


xml=fs.readFileSync('pathway_files/sample_health.xml', 'utf8');

$('body').append(xml);


$('body').find('phenotype').each( function( i, d ){
	var pheno = $(this);
	var disease =  pheno.find('name').eq(0).text() ;
	
	pheno.find("outcome:eq(2)").each( function(){
			var risk_type = $(this).find('name').text() ;
			if( $(this).attr('patient_result') == 'true' ){
				console.log(disease +'::' + risk_type  );
			}
	});

});
