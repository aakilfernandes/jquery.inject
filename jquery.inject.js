jQuery.prototype.inject = function(a){
	var indicators = ['#','.','['];
	var dom_objects = [];
	
	if(typeof a == 'string'){
		var x = [];
		x.push(a);
	}else{
		var x = a;
	}
	
	for(i=0;i<x.length;i++){
		var y = x[i];
		//y is the i'th element in x
		
		dom_objects.push({
			attributes: [],
			type:	'',
		});
		
		var attribute = 'type';
		
		for(var j=0;j<y.length;j++){
			var z = y[j];
			//z is the j'th letter in y
			if($.inArray(z),indicators){
			//if this character is one of the indicators
				switch(z){
					case '#':
						attribute = 'id';
						break;
					case '.':
						attribute = 'class';
						dom_objects[dom_objects.length-1][attribute]+=' ';
						break;
					case '[':
						attribute = 'class';
						break;
					default:
						//handle normal letters
						if(!dom_objects[dom_objects.length-1][attribute]){
							dom_objects[dom_objects.length-1].attributes.push(attribute);
							dom_objects[dom_objects.length-1][attribute]=''
						}
						dom_objects[dom_objects.length-1][attribute]+=z;
						break;
				}
			}
		}
	}
	
	for(var i=0;i<dom_objects.length;i++){
		var dom_object = dom_objects[i];
		var attributes_string='';
		var selector = null;
		
		for(var j=0;j<dom_object.attributes.length;j++){
			var attribute = dom_object.attributes[j];
			var value = eval('dom_object.'+attribute);
			
			
			switch(attribute){
				case 'type':
					break;
				case 'selector':
					selector = attribute;
					break;
				default:
					if(selector==null){
						selector = value;
					}
					attributes_string=attributes_string+attribute+'="'+value+'" ';
					break;
			}
		}
		
		this.append('<'+dom_object.type+' '+attributes_string+'></'+dom_object.type+'>')
		eval('this.'+selector+'=this.children().last()');
	}
}
