var options = [
  {selector: '.rollOut', offset: 50, callback: function() {
    Materialize.toast("We ONLY offer group tours of 25 people or more!", 1500 );
  } },
  {selector: '.otherInfo', offset: 200, callback: function() {
    Materialize.showStaggeredList(".otherInfo");
  } },
  {selector: '.contactInfo', offset: 205, callback: function() {
    Materialize.fadeInImage('.contactInfo');
  } }
];
Materialize.scrollFire(options);
