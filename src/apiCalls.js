export class BetterDoctorApi {
  async getApiData(search){
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key=28dc6ef66c985a5b07ae1edcf3ca42e6`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
}
