(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(24)},17:function(e,t,n){},19:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},20:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(4),i=n.n(a),s=(n(17),n(2)),c=n.n(s),u=n(5),l=n(6),p=n(7),v=n(9),m=n(8),d=n(10),f=(n(19),n(20),n(1)),h=n.n(f);n(23);function g(e){var t=e.title,n=e.poster;return r.a.createElement("div",null,r.a.createElement(w,{poster:n}),r.a.createElement("h1",null,t))}function w(e){var t=e.poster;return r.a.createElement("img",{src:t})}g.prototypes={title:h.a.string.isRequired,poster:h.a.string.isRequired},w.prototypes={poster:h.a.string.isRequired};var y=g,_=function(e){function t(){var e,n;Object(l.a)(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(n=Object(v.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).state={},n._getMovies=Object(u.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._callMovies();case 2:t=e.sent,console.log(t),n.setState({movies:t});case 5:case"end":return e.stop()}},e)})),n._callMovies=function(){return fetch("https://yts.lt/api/v2/list_movies.json?sort_by=rating").then(function(e){return e.json()}).then(function(e){return e.data.movies}).catch(function(e){return console.log(e)})},n._renderMovie=function(){return n.state.movies.map(function(e){return r.a.createElement(y,{title:e.title,poster:e.large_cover_image,key:e.id})})},n}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this._getMovies()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},this.state.movies?this._renderMovie():"loading")}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.3dae5dce.chunk.js.map