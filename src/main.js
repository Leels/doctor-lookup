import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { BetterDoctorApi } from './../src/apiCalls.js';


$(document).ready(function() {
  $('#doc-search').submit(function(event) {
    event.preventDefault();

    let concern= $("input#concern").val();

    (async () => {
      let betterDoctorApi = new BetterDoctorApi(concern);
      let response = await betterDoctorApi.getApiData(concern);
      getElements(response);
    })();

    function getElements(response) {
      $('.showData').text("")
      if (response.data.length === 0){
        $('.showData').text("There are no doctors in the Portland area that treat that issue.");
      } else {
        for (let i = 0; i < response.data.length; i++){
          $('.showData').append(`${response.data[i].profile.first_name} ${response.data[i].profile.last_name},  ${response.data[i].profile.title} <br>  ${response.data[i].practices[0].name} <br> ${response.data[i].practices[0].visit_address.street} ${response.data[i].practices[0].visit_address.city}, ${response.data[i].practices[0].visit_address.state} <br>  Phone: ${response.data[i].practices[0].phones[0].number} <br> Accepting new patients: ${response.data[i].practices[0].accepts_new_patients} <br> <br>`);
        }
      }
    }
    document.getElementById("doc-search").reset();
  });
});
