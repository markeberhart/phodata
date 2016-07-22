/*
PhoData is a JavaScript library for creating automated files for testing data-heavy applications
(c) 2016, Mark Eberhart
 
The MIT License (MIT)
Copyright (c)2016 Mark Eberhart

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

phodata.samples.csv = {
	  "type":"csv",
	  "columnDelimiter":",",
	  "lineDelimiter":"\r\n",
	  "totalRecords":10,
	  "properties":[
		  {"name":"latitude","type":"latitude","latMax":39,"latMin":30,"latCount":15,"decimalPlaces":4},
		  {"name":"longitude","type":"longitude","lonMax":-78,"lonMin":-80,"lonCount":20,"decimalPlaces":4},
		  {"name":"description","type":"string","minChars":5,"maxChars":15,"minWords":1,"maxWords":5,"count":5,"func":null},
		  {"name":"location","type":"string","minChars":25,"maxChars":50,"minWords":2,"maxWords":3,"count":10,"func":null},
		  {"name":"name","type":"string","minChars":5,"maxChars":25,"minWords":1,"maxWords":2,"count":25,"func":null},
		  {"name":"category","type":"string","minChars":5,"maxChars":10,"minWords":1,"maxWords":2,"count":1,"func":null},
		  {"name":"type","type":"number","minNum":1,"maxNum":3,"func":null},
		  {"name":"timestamp","type":"datetime","minDate":"1/31/2003","maxDate":"12/23/2011","minTime":"01:23:45","maxTime":"18:30:00","count":10,"format":"MM/DD/YYYY hh:mm:ss","func":null},
		  {"name":"color","type":"custom","values":["red","yellow","orange","green","blue","purple","black","white","grey"],"func":null}
	  ]
  };

phodata.csv = function() { //convert to JS object (same as KML) and build a to-string converter for each
	console.log("phodata.csv called.");
	var _data = [];
	_data[0] = [];
	var _properties = this.createProperties();
	var _i = _properties.getInstance(); //get a sample instance to use for the header of CSV
	var _cnt = 0; // create a counter
	for(p in _i){
		// return the number of items in a sample object
		// use this as a means to add the column headers to index "0"
		// of the _data object's array
		_data[0].push(p); 
	}
	
	for (r=1; r<this.schema.totalRecords+1; r++) {
		_i = _properties.getInstance();
		_data[r] = [];
		for(p in _i){
			_data[r].push(_i[p]);  
		}
	}
	
	_data = {type:this.type,data:_data};
	return _data;
}

phodata.csv.getText = function(data) {
	var _text = "";
	var _len = Object.keys(data.data[0]).length-1;
	if(data.type=="csv"){
		for (r=0; r<phodata.schema.totalRecords+1; r++) {
			var _cnt = 0;
			for(d in data.data[r]){
				var _item = data.data[r][d];
				if(_cnt<_len){
					_text += (_item+phodata.schema.columnDelimiter);
				}else{
					_text += (_item+phodata.schema.lineDelimiter);
				}
				_cnt++;
			}
		}
		//console.log(r,_text);
	}
}