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
      $('.showData').text(`${response.data[0].profile.first_name}` + " " + `${response.data[0].profile.last_name}` + "," + `${response.data[0].profile.title}`);
    }
     document.getElementById("doc-search").reset();
  });
});
