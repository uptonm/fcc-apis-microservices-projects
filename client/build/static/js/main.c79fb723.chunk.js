(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(57)},31:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(20),c=a.n(r),i=a(6),o=a(7),s=a(9),m=a(8),u=a(10),h=a(59),p=a(60),d=a(24),E=(a(31),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container",style:{height:"100vh"}},l.a.createElement("h1",{className:"display-4 text-center"},"API Project: Timestamp Microservice"),l.a.createElement("hr",null),l.a.createElement("h2",null,"User Stories (WIP):"),l.a.createElement("ol",null,l.a.createElement("li",null,"The API endpoint is GET [project_url]/api/timestamp/:date_string?"),l.a.createElement("li",null,'A date string is valid if can be successfully parsed by new Date(date_string). Note that the unix timestamp needs to be an integer (not a string) specifying milliseconds. In our test we will use date strings compliant with ISO-8601 (e.g. "2016-11-20") because this will ensure an UTC timestamp.'),l.a.createElement("li",null,"If the date string is empty it should be equivalent to trigger new Date(), i.e. the service uses the current timestamp."),l.a.createElement("li",null,"If the date string is valid the api returns a JSON having the structure",l.a.createElement("br",null),l.a.createElement("code",null,'{"unix": <date.getTime()>, "utc" : <date.toUTCString()> }'),l.a.createElement("br",null),"e.g. ",l.a.createElement("code",null,'{"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"}')),l.a.createElement("li",null,"If the date string is invalid the api returns a JSON having the structure",l.a.createElement("br",null),l.a.createElement("code",null,'{"error" : "Invalid Date" }'))),l.a.createElement("div",{className:"container text-center"},l.a.createElement("h3",null,"Example Usage:"),l.a.createElement("a",{href:"/api/timestamp/2015-12-25"},l.a.createElement("code",null,"[project url]/api/timestamp/2015-12-25")),l.a.createElement("br",null),l.a.createElement("a",{href:"/api/timestamp/1450137600"},l.a.createElement("code",null,"[project url]/api/timestamp/1450137600")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h3",null,"Example Output:"),l.a.createElement("code",null,'{"unix": 1451001600000, "utc":"Fri, 25 Dec 2015 00:00:00 GMT"}')))}}]),t}(n.Component)),v=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"display-4 text-center"},"API Project: Request Header Parser Microservice"),l.a.createElement("hr",null),l.a.createElement("h2",null,"User Story:"),l.a.createElement("ol",null,l.a.createElement("li",null,"The API endpoint is GET [project_url]/api/timestamp/:date_string?"),l.a.createElement("li",null,"I can get the IP address, preferred languages (from header ",l.a.createElement("code",null,"Accept-Language"),") and system infos (from header ",l.a.createElement("code",null,"User-Agent"),") for my device.")),l.a.createElement("div",{className:"container text-center"},l.a.createElement("h3",null,"Example Usage:"),l.a.createElement("a",{href:"/api/whoami"},l.a.createElement("code",null,"[project url]/api/whoami")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h3",null,"Example Output:"),l.a.createElement("code",null,'{"ipaddress":"159.20.14.100","language":"en-US,en;q=0.5",\n"software":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"}')))}}]),t}(n.Component),f=a(13),b=a.n(f),g=a(21),j=a(22),w=a.n(j),N=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={url:"",shortenedUrl:""},a.handleChange=function(e){a.setState({url:e.target.value})},a.handleSubmit=function(){var e=Object(g.a)(b.a.mark(function e(t){var n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,w.a.post("/api/url",{url:a.state.url});case 3:n=e.sent,a.setState({shortenedUrl:n.data.code},function(){console.log(a.state)});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"display-4 text-center"},"API Project: URL Shortener Microservice"),l.a.createElement("hr",null),l.a.createElement("h2",null,"User Story:"),l.a.createElement("ol",null,l.a.createElement("li",null,"I can POST a URL to ",l.a.createElement("code",null,"[project_url]/api/shorturl/new")," and I will receive a shortened URL in the JSON response.",l.a.createElement("br",null),"Example :",l.a.createElement("code",null,'\t{"original_url": "www.google.com","short_url":1}')),l.a.createElement("li",null,"If I pass an invalid URL that doesn't follow the"," ",l.a.createElement("code",null,"http(s)://www.example.com(/more/routes)"),"format, the JSON response will contain an error like"," ",l.a.createElement("code",null,'{"error":"invalid URL"}'),l.a.createElement("br",null),"HINT: to be sure that the submitted url points to a valid site you can use the function dns.lookup(host, cb) from the dns core module."),l.a.createElement("li",null,"When I visit the shortened URL, it will redirect me to my original link.")),l.a.createElement("div",{className:"container text-center"},l.a.createElement("h3",null,"Short URL Creation:"),l.a.createElement("span",null,"example: ",l.a.createElement("code",null,"POST [project_url]/api/url")," - ",l.a.createElement("code",null,"https://google.com")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("form",{className:"bd-example",onSubmit:this.handleSubmit.bind(this)},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"url"},"Url to Shorten: "),l.a.createElement("input",{className:"form-control",type:"text",id:"url",value:this.state.url,onChange:this.handleChange.bind(this)})),this.state.shortenedUrl.length>0?l.a.createElement("h3",null,l.a.createElement("a",{href:"api/url/".concat(this.state.shortenedUrl)},"[project_url]/api/url".concat(this.state.shortenedUrl))):"",l.a.createElement("button",{className:"btn btn-lg btn-primary",type:"submit"},"Submit")),l.a.createElement("br",null),l.a.createElement("h3",null,"Example Usage:"),l.a.createElement("a",{href:"/api/url/9a31e9"},l.a.createElement("code",null,"[this_project_url]/api/url/9a31e9")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h3",null,"Will Redirect To:"),l.a.createElement("code",null,"https://google.com")))}}]),t}(n.Component),y=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"jumbotron"},l.a.createElement("h1",{className:"display-4"},"Introduction to the APIs and Microservices Projects"),l.a.createElement("p",{class:"lead"},"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."),l.a.createElement("hr",{class:"my-4"})))},O=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(h.a,null,l.a.createElement("div",null,l.a.createElement("ul",{className:"nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(p.a,{className:"nav-link",activeClassName:"active",to:"/timestamp"},"Timestamp API")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(p.a,{className:"nav-link",activeClassName:"nav-link active",to:"/headerparser"},"Header Parser API")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(p.a,{className:"nav-link",activeClassName:"nav-link active",to:"/url"},"Url Shortener API"))),l.a.createElement(d.a,{exact:!0,path:"/",component:y}),l.a.createElement(d.a,{path:"/timestamp",component:E}),l.a.createElement(d.a,{path:"/headerparser",component:v}),l.a.createElement(d.a,{path:"/url",component:N}))),l.a.createElement("footer",{className:"footer"},l.a.createElement("span",null,"made with ",l.a.createElement("i",{className:"fas fa-heart"})," for"," ",l.a.createElement("a",{href:"https://freecodecamp.com"},"freeCodeCamp"))))}}]),t}(n.Component);a(56),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.c79fb723.chunk.js.map