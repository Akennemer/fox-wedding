$(document).ready(function () {
  // alert("page is ready");
  console.log("doc is ready");})

  let shows= ["Tokyo Revengers", "X-Files","Ranking of Kings","Righteous Gemstones","Kid Cosmic"];


$.each(shows, function(index,value){
  console.log(shows[value]);
  $('#show-list').append(`<li> ${value} </li>`);
});


