<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Data Creator</title>
<style>
body {
font-family:Arial, Helvetica, sans-serif;
font-size:12;
margin:25px;
}
p {
font-family:Georgia, "Times New Roman", Times, serif;
font-size:1.0em;
padding:5px;	
}
.code {
font-family:"Courier New", Courier, monospace;
font-size:.8em;
padding:15px;
}
.input {
color:#36C;
}
.output {
color:#F63;
border:#999 1px solid;
}
</style>

</head>

<body>

<!---->
<h1>PhoData</h1>
<h2>The Placeholder Data Creator</h2>

<h3>About</h3>
<p>PhoData is a library for creating placeholder data that follows a user-described schema.</p>
<p>Nowadays, websites are regularly populated by centralized data services. These data services are often varied and complex- a mixture of text, numbers, and other binary information. Not only is the information varied, but so too is the quantity, standard, and precision of the data being delivered in the service.</p>
<p>Many people are familiar with <i>Lorem ipsum</i>. Graphic designers have long used the ancient latin words of Cicero to provide visual filler when presenting ideas for publication layouts. PhoData is a modernized approach to this.</p>
<p>When given a valid data schema, PhoData will create a JavaScript Object with placeholder data that corresponds to the quantity, standard, rules, and precision outlined by the schema's description.</p>
<p>PhoData utilizes a basic syntax to describe <i>how</i> a data object should be constructed. Currently supporting textual data, PhoData allows for a designer/developer, with just a few lines of code, to create placeholder data that can closely approximate a live data feed.</p>
<p>Using the schema and supplied parameters, PhoData creates lists that are used to randomly select placeholder data to populate the fields/properties defined in the schema. Using the schema you can, for example, define a field/property that is a string/text, where each row/value has a minimum and maximum number of words, where each word has a minimum and maximum number of characters, where the list of words being used is set to a specific size, and where each returned value has a specific function applied to it.</p>
<p>The PhoData schema allows for the creation of fields/properties that support text, numbers, datetime, latitude, longitude, and custom function parameters. Additionally, PhoData supports the use of custom lists that you can supply based on your own needs.</p>


<h3>Usage</h3>
<p>PhoData uses a JSON-based schema to define the data object you wish to create.</p>
<p>Out-of-the-box, PhoData supports the following data formats:
<ul>
<li><b>CSV</b> (Comma-separated file)</li>
<li><b>KML</b> (Keyhole Markup Language)</li>
<li><b>GEOJSON</b> (Geographic JSON format)</li>
<li><b>ARCJSON</b> (ESRI JSON format)</li>
</ul>
<p>To get started, begin by  including the main library (phodata.js) and all support libraries you will need (each data type is a separate suport library in PhoData):</p>
<div class="code input">
&lt;script src="./phodata/phodata.js">&lt;/script><br />
&lt;script src="./phodata/plugins/phodata-csv.js">&lt;/script><br />
&lt;script src="./phodata/plugins/phodata-kml.js">&lt;/script><br />
&lt;script src="./phodata/plugins/phodata-geojson.js">&lt;/script><br />
&lt;script src="./phodata/plugins/phodata-arcjson.js">&lt;/script><br />
</div>
<p>In order to create a new object, you simply pass your schema object to PhoData as follows:</p>
<div class="code input">
var myschema = {<i>[schema object definition]</i>};<br />
var mydata = phodata.createData(myschema);<br />
</div>
<p>In return, PhoData will provide an object with two sub-objects: <i>type</i> and <i>data</i>. In others words, in the example above, to get the actual data object being returned, you would need to access <i>mydata.data</i>.

<p><br />
<h3>Example #1: Hello World</h3>
<p>Here is a basic "Hello World" example that outputs a data object with the following parameters: CSV format, comma-separated, one field called "Notes", and 10 records that all have the exact value "Hello World"<br /><i>(Note the use of the "type":"custom" being used to force "Hello World" as our text value. No function is applied, so "func" is set to null.)</i></p>
<h4>Input:</h4>
<div class='code input'>
var myschema = {
"type":"csv",
"columnDelimiter":",",
"lineDelimiter":"\r\n",
"totalRecords":10,
"properties":[
{"name":"Notes","type":"custom","values":["Hello World"],"func":null}
]}
<br />
var mydata = phodata.createData(myschema);<br />
console.log(mydata.data);
</div>
<h4>Returns:</h4>
<div id="ex1" class="code output">
{"type":"csv","data":[["Notes"],["Hello World"],["Hello World"],["Hello World"],["Hello World"],["Hello World"],["Hello World"],["Hello World"],["Hello World"],["Hello World"],["Hello World"]]}
</div>

<p><br />
<h3>Example #2: Hello World with Random Values</h3>
<p>If we wanted to have multiple, random parameters in the "Notes" field, we would use the following parameters: CSV format, comma-separated, one field called "Notes", and 10 records that randomly pull from "Hello" and "World" would have a schema as follows: <br /><i>(No function is applied, so "func" is set to null)</i></p>
<h4>Input:</h4>
<div class='code input'>
var myschema = {
"type":"csv",
"columnDelimiter":",",
"lineDelimiter":"\r\n",
"totalRecords":10,
"properties":[
{"name":"Notes","type":"custom","values":["Hello","World"],"func":null}
]}<br />
var mydata = phodata.createData(myschema);<br />
console.log(mydata.data);</div>
<h4>Returns:</h4>
<div id="ex2" class="code output"></div>

<p><br />
<h3>Example #3: Multiple Fields/Properties</h3>
<p>If we wanted to have multiple fields/properties, we simply add another field/property description.<br /><i>(No function is applied, so "func" is set to null)</i></p>
<h4>Input:</h4>
<div class='code input'>
var myschema = {
"type":"csv",
"columnDelimiter":",",
"lineDelimiter":"\r\n",
"totalRecords":10,
"properties":[
{"name":"Name","type":"custom","values":["Sandy","Billy","Sam"],"func":null}
{"name":"Notes","type":"custom","values":["Hello","World"],"func":null}
]}<br />
var mydata = phodata.createData(myschema);<br />
console.log(mydata.data);</div>
</div>
<h4>Returns:</h4>
<div id="ex3" class="code output"></div>

<p><br />
<h3>Example #4: Lorem Ipsum with Random Values</h3>
<p>If you don't have data to work with, never fear! PhoData has a built-in list of Lorem ipsum words that can be used to auto-generate text data. The following example requests a CSV data object with one field/property called "Notes" where each value is a random selection of Lorem ipsum words joined into a phrase where each word is between 5 and 25 characters in length, each phrase is between 1 and 2 words, and the total number of random phrases should no exceed 25.<br /><i>(No function is applied, so "func" is set to null)</i></p>
<h4>Input:</h4>
<div class='code input'>
var myschema = {
"type":"csv",
"columnDelimiter":",",
"lineDelimiter":"\r\n",
"totalRecords":10,
"properties":[
{"name":"Notes","type":"string","minChars":5,"maxChars":25,"minWords":1,"maxWords":2,"count":25,"func":null}
]}<br />
var mydata = phodata.createData(myschema);<br />
console.log(mydata.data);</div>
</div>
<h4>Returns:</h4>
<div id="ex4" class="code output"></div>



<h3>History</h3>


<p>Many designers have learned that picking up the trade of data visualization requires  
</p>
<form id="schemaForm" onsubmit="get_action(this);">
	Enter Schema:<br>
  <textarea name="schema" rows="30" cols="125"></textarea>
</form>
<input type="button" onclick="init();" value="Create Data">
<input type="button" onclick="download();" value="Download Data">

</body>
<script src="./phodata/phodata.js"></script>
<script src="./phodata/plugins/phodata-arcjson.js"></script>
<script src="./phodata/plugins/phodata-geojson.js"></script>
<script src="./phodata/plugins/phodata-kml.js"></script>
<script src="./phodata/plugins/phodata-csv.js"></script>
<script type="text/javascript">

var data;
function init(){
	//var _schemaVal = document.getElementById("schemaForm").schema.value;
	//var _schema = JSON.parse(_schemaVal);
	//data = phodata.createData({"schema":_schema});
	//console.log(data);
}

function download(){
	phodata.downloadData(data);
}


var _ex2schema = {"type":"csv","columnDelimiter":",","lineDelimiter":"\r\n","totalRecords":10,"properties":[{"name":"Notes","type":"custom","values":["Hello","World"],"func":null}]};
var _ex2data = phodata.createData(_ex2schema);
document.getElementById('ex2').innerHTML = JSON.stringify(_ex2data);

var _ex3schema = {"type":"csv","columnDelimiter":",","lineDelimiter":"\r\n","totalRecords":10,"properties":[{"name":"Notes","type":"custom","values":["Hello","World"],"func":null},{"name":"Name","type":"custom","values":["Sandy","Billy","Sam"],"func":null}]};
var _ex3data = phodata.createData(_ex3schema);
document.getElementById('ex3').innerHTML = JSON.stringify(_ex3data);

var _ex4schema = {"type":"csv","columnDelimiter":",","lineDelimiter":"\r\n","totalRecords":10,"properties":[{"name":"Notes","type":"string","minChars":5,"maxChars":25,"minWords":1,"maxWords":2,"count":25,"func":null}]}
var _ex4data = phodata.createData(_ex4schema);
document.getElementById('ex4').innerHTML = JSON.stringify(_ex4data);

//TODO: add PDF support? https://web.archive.org/web/20141010035745/http://gnupdf.org/Introduction_to_PDF
	
</script>
</html>
