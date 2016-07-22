/*
PhoData is a JavaScript library for creating automated files for testing data-heavy applications
(c) 2016, Mark Eberhart
 
The MIT License (MIT)
Copyright (c)2016 Mark Eberhart

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

phodata.samples.geojson = {
	"type":"geojson",
	"totalRecords":30000,
	"properties":[
		{"name":"latitude","type":"latitude","latMax":39,"latMin":30,"latCount":15,"decimalPlaces":4},
		{"name":"longitude","type":"longitude","lonMax":-78,"lonMin":-80,"lonCount":20,"decimalPlaces":4},
		{"name":"location","type":"string","minChars":25,"maxChars":50,"minWords":2,"maxWords":3,"count":100,"func":null},
		{"name":"name","type":"string","minChars":5,"maxChars":25,"minWords":1,"maxWords":2,"count":25,"func":null},
		{"name":"category","type":"string","minChars":5,"maxChars":10,"minWords":1,"maxWords":2,"count":1,"func":null},
		{"name":"type","type":"number","minNum":1,"maxNum":10,"func":null},
		{"name":"timestamp","type":"datetime","minDate":"1/31/2003","maxDate":"12/23/2011","minTime":"01:23:45","maxTime":"18:30:00","count":100,"format":"MM/DD/YYYY hh:mm:ss","func":null},
		{"name":"color","type":"custom","values":["red","yellow","orange","green","blue","purple"],"func":null}
	]
};

phodata.geojson = function() {
	var _properties = this.createProperties();
	var _data = {"type":"FeatureCollection","features":[]};
	for (r=0; r<this.schema.totalRecords; r++) {
		var _o = {"type":"Feature","geometry":{"type":"Point","id":"","coordinates":[]},"properties":{}};
		_o.geometry.id = String(r);
		var _i = _properties.getInstance(); 
		_o.geometry.coordinates = [_i.longitude,_i.latitude];
		_o.properties = _i;
		_data.features.push(_o);
	}
	_data = {type:this.type,data:_data};
	return _data;
}

phodata.geojson.getText = function(data) {
	var _text = "";
	if(data.type=="geojson"){
	}
}