<h1>PhoData</h1>
A JavaScript library for creating placeholder data that follows a user-described schema.

<h3>About</h3>
<p>PhoData is a library for creating placeholder data that follows a user-described schema.</p>
<p>When given a valid data schema, PhoData will create a JavaScript Object with placeholder data that corresponds to the quantity, standard, and precision outlined by the schema's description.</p>
<p>PhoData utilizes a basic syntax to describe <i>how</i> a data object should be constructed. Currently supporting textual data, PhoData allows for a designer/developer, with just a few lines of code, to create placeholder data that can closely approximate a live data feed. Take the following example:</p>

	{
        "type":"geojson",
        "totalRecords":30000,
        "coordinates":{"latMax":39,"latMin":30,"lonMax":-78,"lonMin":-80,"latCount":25,"lonCount":30,"decimalPlaces":5},
        "properties":[
            {"name":"location","type":"string","minChars":25,"maxChars":50,"minWords":2,"maxWords":3,"count":100,"func":null},
            {"name":"name","type":"string","minChars":5,"maxChars":25,"minWords":1,"maxWords":2,"count":25,"func":null},
            {"name":"category","type":"string","minChars":5,"maxChars":10,"minWords":1,"maxWords":2,"count":1,"func":null},
            {"name":"type","type":"number","minNum":1,"maxNum":10,"func":null},
            {"name":"timestamp","type":"datetime","minDate":"1/31/2003","maxDate":"12/23/2011","minTime":"01:23:45","maxTime":"18:30:00","count":100,"format":"MM/DD/YYYY hh:mm:ss","func":null},
            {"name":"color","type":"custom","values":["red","yellow","orange","green","blue","purple"],"func":null}
        ]
	}   

<h3>History</h3>
<p>Many people are familiar with <i>Lorem ipsum</i>. Graphic designers have long used the ancient latin words of Cicero to provide visual filler when presenting ideas for publication layouts. PhoData is a modernized approach to this. 
<p>Websites are not what they were when Tim Berners-Lee fired-up the first web page so long ago. Nowadays, websites are regularly populated by centralized data services. These data services are often varied and complex- a mixture of text, numbers, and other binary information. Not only is the information varied, but so too is the quantity, standard, and precision of the data being delivered in the service.</p>
<p>Many designers have learned that picking up the trade of data visualization requires  
</p>
