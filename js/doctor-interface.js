var Doctors = require('./../js/doctor.js').getDoctors;

$(document).ready(function(){
  $('.doctor').submit(function(event){
    // event.preventDefault();
    // var medicalIssue = $('symptom').val();
    // $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' +medicalIssue + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey).then(function(response){
    //   console.log(response);
    // }).fail(function(error){
    //      console.log("fail");
    //   });
  });
});
