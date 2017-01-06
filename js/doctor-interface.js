var Doctors = require('./../js/doctor.js').doctorSearch;

$(document).ready(function(){
  $('.doctor').submit(function(event){
    event.preventDefault();
    var currentSearch = new Search();
    var symptom = $('#sypmtom').val();
    currentSearch.getDoctors(symptom);
    console.log(symptom);
  });
});
