(this["webpackJsonpmarvel-clicky-game"]=this["webpackJsonpmarvel-clicky-game"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"name":"Iron Man 2","image":"https://i.pinimg.com/originals/fe/04/04/fe0404f0fc125a32d7a6ce975f7ad3a6.jpg","clicked":false},{"id":2,"name":"Captain Marvel","image":"https://i.pinimg.com/originals/d9/d7/a4/d9d7a49c44b2a5dde693e12c8ea48142.jpg","clicked":false},{"id":3,"name":"The Avengers","image":"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg","clicked":false},{"id":4,"name":"Thor","image":"https://i.pinimg.com/originals/1e/c7/5f/1ec75fb52d39d18752561e6e32ec99a5.jpg","clicked":false},{"id":5,"name":"Captain America: Winter Soldier","image":"https://images-na.ssl-images-amazon.com/images/I/71FXNj0ER5L._AC_SL1500_.jpg","clicked":false},{"id":6,"name":"Avengers: Age of Ultron","image":"https://i.pinimg.com/originals/8d/d0/0d/8dd00df44ba6a6d7dba3ceb0c7929e3e.jpg","clicked":false},{"id":7,"name":"Captain America: Civil War","image":"https://cdn.shopify.com/s/files/1/0037/8008/3782/products/Captain_Amercia_Civil_War_2_framed1_e09b1db6-7fae-429c-8f9f-7cca85e4ee27.jpg?v=1556367187","clicked":false},{"id":8,"name":"Spider-Man: Homecoming","image":"https://images-na.ssl-images-amazon.com/images/I/A1CcbJfKqJL.jpg","clicked":false},{"id":9,"name":"Doctor Strange","image":"https://i.pinimg.com/originals/63/db/5c/63db5c0f50f06968df6e3c41ce94759b.jpg","clicked":false},{"id":10,"name":"Black Panther","image":"https://i.pinimg.com/originals/b8/ce/c7/b8cec7d7e348590d72a70c9441fc73e5.jpg","clicked":false},{"id":11,"name":"Avengers: Infinity War","image":"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg","clicked":false},{"id":12,"name":"Avengers: Endgame","image":"https://cdn.shopify.com/s/files/1/1057/4964/products/avengers-endgame-vintage-movie-poster-original-1-sheet-27x41.jpeg?v=1563829726","clicked":false}]')},,,,,,,,function(e,a,t){e.exports=t(20)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(0),i=t.n(c),n=t(3),r=t.n(n),s=(t(14),t(4)),o=t(5),l=t(7),m=t(6),d=t(8);t(15);var g=function(e){var a=e.clickHandler,t=e.id,c=e.image,n=e.name;return i.a.createElement("div",{onClick:function(){return a(t)},className:"card"},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:n,src:c})))};t(16);var f=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)},p=(t(17),function(){return i.a.createElement("div",{className:"banner text-center d-flex align-items-center justify-content-center"},i.a.createElement("p",{className:"m-0"},"MARVEL CLICKY GAME!"))});t(18);var u=function(e){var a=e.clickMessage,t=e.score,c=e.topScore;return i.a.createElement("nav",{className:"navbar fixed-top navbar-light bg-secondary"},i.a.createElement("a",{className:"navbar-brand text-center",id:"clickgame",href:"/"},"Clicky Game!"),i.a.createElement("li",{className:"navbar-brand text-center",id:"message"},a),i.a.createElement("li",{className:"navbar-brand text-center",id:"score"},"Score: ",t," | High Score: ",c))},h=t(1),k=(t(19),function(e){function a(){var e,t;Object(s.a)(this,a);for(var c=arguments.length,i=new Array(c),n=0;n<c;n++)i[n]=arguments[n];return(t=Object(l.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(i)))).state={images:h,score:0,topScore:0,clickMessage:"Click an image to begin!",isGuessCorrect:!0},t.handleSaveClick=function(e){var a=t.state.images,c=a.filter((function(a){return a.id===e}));c[0].clicked?t.handleIncorrectClick():(c[0].clicked=!0,t.handleCorrectClick(),t.randomize(a),t.setState({images:a}))},t.randomize=function(e){e.sort((function(e,a){return.5-Math.random()}))},t.handleCorrectClick=function(){t.setState({isGuessCorrect:!0}),t.state.score+1>t.state.topScore&&t.setState({topScore:t.state.topScore+1}),t.state.score+1>=t.state.maxScore?t.setState({score:t.state.score+1,clickMessage:"CONGRATS! YOU WIN!"}):t.setState({score:t.state.score+1,clickMessage:"YOU GUESSED CORRECTLY!"})},t.handleIncorrectClick=function(){t.setState({clickMessage:"INCORRECT. PLAY AGAIN?",isGuessCorrect:!1}),t.resetGame()},t.resetGame=function(e){for(var a=t.state.images,c=0;c<a.length;c++)a[c].clicked=!1;t.setState({score:0})},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement(f,null,i.a.createElement(u,{clickMessage:this.state.clickMessage,score:this.state.score,topScore:this.state.topScore}),i.a.createElement(p,null),h.map((function(a){var t=a.id,c=a.name,n=a.image,r=a.clicked;return i.a.createElement(g,{key:t,id:t,name:c,image:n,clicked:r,clickHandler:e.handleSaveClick})})))}}]),a}(c.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.2016e9ca.chunk.js.map