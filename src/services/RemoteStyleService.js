const baseURL = "http://localhost:3001";

export default class RemoteStyleService {

  constructor(baseurl) {
    this.baseurl = baseurl || baseURL;
  }

  async allStyles() {
    let url = `${this.baseurl}/styles`;
    return fetch(url).then((results) => results.json()).then((data) => {
      console.log(`RemoteStyleService.allStyles() returned ${data}`);

      return data.map(style => {
        return {
          id: style.id,
          name: style.name,
          imageURL: style.imageURL,
          stars: style.stars,
          price: style.price,
          description: style.description,
          purchaseURL : style.purchaseURL
        };
      })
    });
  }

  async handleComplexOpp(url, postData, method){
    const response = await fetch(url, {
      method: `${method}`,
      body : postData || ''
    });
    const responseJson = await response.json();
    return responseJson;
  }
  async addStyle(style) {
    let url = `${this.baseurl}/styles`;
    const postData = JSON.stringify(style);
    const responseJson = await this.handleComplexOpp(url,postData,"POST");
    return !!(responseJson);
  }

  async removeStyle(id) {
    let url = `${this.baseurl}/styles/${id}`;
    const responseJSON =  await this.handleComplexOpp(url,JSON.stringify(id),"DELETE");
    return !!(responseJSON);
  }
}
