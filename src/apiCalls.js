export class BetterDoctorApi {
  async getApiData() {
    let response = await fetch(`https://sv443.net/jokeapi/category/any`);
    let jsonifiedResponse = await response.json();
    return jsonifiedResponse;
  }
}
