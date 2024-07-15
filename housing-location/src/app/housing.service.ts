import {Injectable} from '@angular/core';
import {HousingLocation} from './housinglocation';
@Injectable({
  providedIn: 'root',
})
export class HousingService {
  url = 'http://localhost:3000/locations';
  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    const jsonData = (await data.json()) ?? {};
    if (Array.isArray(jsonData)) {
      jsonData.forEach((item: any) => {
        if (item.photo) {
          item.photo = item.photo.replace('${this.baseUrl}', 'https://angular.dev/assets/images/tutorials/common');
        }
      });
    }
  
    return jsonData ?? {};
  }
  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    const jsonData = (await data.json()) ?? {};
    if (jsonData.photo) {
      jsonData.photo = jsonData.photo.replace('${this.baseUrl}', 'https://angular.dev/assets/images/tutorials/common');
    }
    return jsonData ?? {};
  }
  submitApplication(firstName: string, lastName: string, email: string) {
    // tslint:disable-next-line
    console.log(firstName, lastName, email);
  }
}