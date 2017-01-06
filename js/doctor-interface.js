var Search = require('./../js/doctor.js').doctorSearch;

var Doctor = function(searchResults) {
  for(var i =0; i<searchResults.data.length; i++){
    $('.results').append('<li>' + searchResults.data[i].profile.first_name + " " + searchResults.data[i].profile.last_name + '</li>' );
    console.log(searchResults);
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
