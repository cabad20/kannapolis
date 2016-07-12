var options = [
  {selector: '.mainSection', offset: 50, callback: function() {
    Materialize.fadeInImage('.mainSection');
  } },
  {selector: '.offer', offset: 205, callback: function() {
    Materialize.toast("We ONLY offer group tours of 25 people or more!", 1500 );
  } },
  // {selector: '#staggered-test', offset: 400, callback: function() {
  //   Materialize.showStaggeredList("#staggered-test");
  // } },
  {selector: '.footerPortion', offset: 500, callback: function() {
    Materialize.fadeInImage('.footerPortion');
  } }
];
Materialize.scrollFire(options);
