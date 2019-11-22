import $ from 'jquery';
import './apiCalls.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { BetterDoctorApi } from './../src/apiCalls.js';


$(document).ready(function() {
  $('#doc-search').submit(function(event) {
    event.preventDefault();

    const getElements = function(response) {
      $('.DoctorName').text(`${response.name}`);
    };

    (async () => {
      let betterDoctorApi = new BetterDoctorApi();
      let jsonifiedResponse = await apiCall.getApiData(y);
      getElements(jsonifiedResponse);
    })();

  });
 });
