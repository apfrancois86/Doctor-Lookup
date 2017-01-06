var Search = require('./../js/doctor.js').doctorSearch;

var Doctor = function(searchResults) {
  for(var i =0; i<searchResults.data.length; i++){
    $('.results').append('<h2>' + searchResults.data[i].profile.first_name + " " + searchResults.data[i].profile.last_name + '</h2>' + '<li>' + searchResults.data[i].profile.bio + '</li>');
  }
};

$(document).ready(function(){
  $('.doctor').submit(function(event){
    event.preventDefault();
    var currentSearch = new Search();
    var symptom = $('#symptom').val();
    currentSearch.getDoctors(symptom, Doctor);
    console.log(currentSearch);
  });
});
