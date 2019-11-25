export class BetterDoctorApi {
  async getApiData(concern) {
    let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${concern}&location=or-portland&user_location=45.505%2C-122.675&skip=0&limit=10&user_key=28dc6ef66c985a5b07ae1edcf3ca42e6`);
    let jsonifiedResponse = await response.json();
    return jsonifiedResponse;
  }
}
