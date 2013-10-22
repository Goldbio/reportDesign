var fs = require('fs'),
$ = require('jQuery').create()
md = require('node-markdown').Markdown;


xml=fs.readFileSync('screening_schedule.html', 'utf8');

$('body').append(xml);


var rowspan_counter=[];
var span_val=[];

$('body').find('table tr').each( function(  ){
	var tr = $(this);
	console.log("##"+ tr.find('td').length );
	var td_set = tr.find('td');
	var pos=0;

	for(i=0; i<12;i++){
		if( rowspan_counter[i]>-1 ){
			rowspan_counter[i]--;	
			console.log('##'+i+' '+ span_val[i] );
		}
		else{
			console.log(i+' '+ td_set.eq(pos).text() );
			
			var rowspan=td_set.eq(pos).attr('rowspan');
			if( rowspan > 0 ){
				rowspan_counter[i]= rowspan;
				span_val[i]=td_set.eq(pos).text();
			}
			pos++;

		}
	}

});
