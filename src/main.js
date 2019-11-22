import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { BetterDoctorApi } from './../src/apiCalls.js';


$(document).ready(function() {
  $('#doc-search').submit(function(event) {
    event.preventDefault();

    (async () => {
      let betterDoctorApi = new BetterDoctorApi();
      let response = await betterDoctorApi.getApiData();
      getElements(response);
    })();

    function getElements(response) {
      $('.showJoke').text(`${response.data.practices.location_slug}`);
      console.log(getElements(response))

    }
  });
});
