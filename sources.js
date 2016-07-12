var options = [
  {selector: '.aboutInfo', offset: 50, callback: function() {
    Materialize.fadeInImage('.aboutInfo');
  } },
  {selector: '.offer', offset: 205, callback: function() {
    Materialize.toast("We ONLY offer group tours of 25 people or more!", 500 );
  } },
  {selector: '.otherInfo', offset: 400, callback: function() {
    Materialize.showStaggeredList(".otherInfo");
  } },
  {selector: '.contactInfo', offset: 30, callback: function() {
    Materialize.fadeInImage('.contactInfo');
  } }
];
Materialize.scrollFire(options);
