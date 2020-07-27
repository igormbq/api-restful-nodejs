<h1 class="code-line" data-line-start=0 data-line-end=1 ><a id="API_RESTful_with_NodeJS_0"></a>API RESTful with NodeJS</h1>
<p class="has-line-data" data-line-start="2" data-line-end="3">In this project, we will build an API that integrates with Pipedrive (CRM), Bling (ERP) and AtlasDB (Cloud Database).The following functions have already been implemented: </p>
<ul>
<li class="has-line-data" data-line-start="4" data-line-end="5">Get all deals that have status equals “Won”</li>
<li class="has-line-data" data-line-start="5" data-line-end="6">Create Deals on the Bling Plataform</li>
<li class="has-line-data" data-line-start="6" data-line-end="7">Add colections(Deal) on the AtlasDB</li>
<li class="has-line-data" data-line-start="7" data-line-end="8">Find all Deals on the Atlas</li>
<li class="has-line-data" data-line-start="8" data-line-end="9">Get alll Deals  on the atlasDB group by date and amount</li>
</ul>
</br></br>
<h2><pre><code>                                     API REFERENCE   
</code></pre></h2>


<p class="has-line-data" data-line-start="17" data-line-end="21">Ex: Type -       Path                 - Result<br>
<b><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="178.5" height="28" role="img" aria-label="GET: /V1/PIPEDRIVE"><title>GET: /V1/PIPEDRIVE</title><g shape-rendering="crispEdges"><rect width="47.5" height="28" fill="#555"/><rect x="47.5" width="131" height="28" fill="#97ca00"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="100"><text fill="#fff" x="237.5" y="175" transform="scale(.1)" textLength="235">GET</text><text fill="#fff" x="1130" y="175" font-weight="bold" transform="scale(.1)" textLength="1070">/V1/PIPEDRIVE</text></g></svg>   =  Get all Deals(Status = “Won”) from Pipedrive and create data on Bling and AtlasDB.<br>
<b>GET</b>     /v1/deal         = Find all Deals from AtlasDB .<br>
<b>GET</b>     /v1/aggregate    = Find All Deals from AtlasDB aggregate group by Date and Amount</p>
<h1 class="code-line" data-line-start=23 data-line-end=24 ><a id="New_Features_23"></a>
Future implementations!</h1>
<ul>
<li class="has-line-data" data-line-start="25" data-line-end="26">Add more filters and pagination</li>
<li class="has-line-data" data-line-start="26" data-line-end="27">Clear code</li>
<li class="has-line-data" data-line-start="27" data-line-end="28">Make improvements in the coupling of functions</li>
<li class="has-line-data" data-line-start="28" data-line-end="29">Deploy on heroku</li>
<li class="has-line-data" data-line-start="29" data-line-end="31">Change to update the deals by webhooks</li>
</ul>
<h3 class="code-line" data-line-start=31 data-line-end=32 ><a id="Installation_31"></a>Installation</h3>
<p class="has-line-data" data-line-start="33" data-line-end="36">-&gt; This project requires <a href="https://nodejs.org/">Node.js</a> v4+ to run;<br>
-&gt;1- Download it on your computer;<br>
-&gt;2- Into yours folder run:in command line this: npm install<br>
-&gt;3- Command to start the application: npm run dev</p>

<p class="has-line-data" data-line-start="37" data-line-end="38">[in construction]</p>
