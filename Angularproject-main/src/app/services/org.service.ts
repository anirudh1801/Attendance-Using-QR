import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class OrganisationService {

  private baseUrl = 'http://localhost:8080';

  // Method to mark attendance
  async createOrg(org: {email:String,password:String}): Promise<any> {
    try {
      const response = await axios.post(`http://localhost:8080/organisation/register`,org);
      return response.data; // Return the response data
    } catch (error) {
      throw error; // Throw the error if something goes wrong
    }
  }

  async deleteOrg(id:string): Promise<any> {
    try {
      const response = await axios.delete(`http://localhost:8080/organisation/${id}`);
      return response.data;
    } catch (error) {
      throw error; // Throw the error if something goes wrong
    }
  }
 

}
