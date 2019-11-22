export class BetterDoctorApi {
  async getApiData() {
    let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=john&user_key=28dc6ef66c985a5b07ae1edcf3ca42e6`);
    let jsonifiedResponse = await response.json();
    return jsonifiedResponse;
  }
}
