jQuery.fn.inject = function(a){
	/*
	Object.prototype.hasOwnProperty = function(property) {
	    return this[property] !== undefined;
	};
	
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
						if(dom_objects[dom_objects.length-1].hasOwnProperty('class')){
							dom_objects[dom_objects.length-1]['class']=dom_objects[dom_objects.length-1]['class']+'&nbsp;';
						}
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
			var value = dom_object[attribute];
			
			switch(attribute){
				case 'selector':
					selector = attribute;
					break;
				case 'type':
					break;
				default:
					if(selector==null){
						selector = value;
					}
					attributes_string=attributes_string+attribute+'="'+value+'" ';
					break;
			}
		}
		
		while(attributes_string.indexOf('&nbsp;')>=0){
			attributes_string = attributes_string.replace('&nbsp;',' ')	
		}
		
		if(selector.indexOf('&nbsp;')>=0){
			selector = selector.replace('&nbsp;',' ')
			selector = selector.substring(0,selector.indexOf(' '))	
		}
		
		this.append('<'+dom_object.type+' '+attributes_string+'></'+dom_object.type+'>')	
		
		this[selector]=this.children().last();
		this[selector].papa = this;
		this[selector][0].wrap = this[selector];
		
		if(!this.hasOwnProperty('kids')){
			this.kids={};
		}
		
		if(!this.kids.hasOwnProperty(selector)){
			this.kids[selector] = [this[selector]];
			this.eachKid = function(selector,func){
				for(i=0;i<this.kids[selector].length;i++){
					var kid = this.kids[selector][i];
					func(kid);
				}
			} 
		}else{
			this.kids[selector].push(this[selector])
		}
		
		
	}
	
	return this[selector];
	*/
}
/*
jQuery.prototype.gift = function(key,value){
	this[key]=value;
	return this;
}
*/