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
      let betterDoctorApi = new BetterDoctorApi();
      let response = await betterDoctorApi.getApiData(concern);
      getElements(response);
    })();

    function getElements(response) {
      $('.showData').text("")
      if (response.data.length === 0){
        $('.showData').text("There are no doctors in the Portland area that treat that issue.");
      } else {
      for (let i = 0; i < response.data.length; i++){
        $('.showData').append(`${response.data[i].profile.first_name}` + " " + `${response.data[i].profile.last_name}` + "," + `${response.data[i].profile.title}` + `<br>`);
      }
    }
  }
    document.getElementById("doc-search").reset();
  });
});
