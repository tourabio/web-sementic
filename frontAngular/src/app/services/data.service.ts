import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  getEmployees() {
    return this.http.get<any>("http://localhost:3030/agency/sparql?query=PREFIX+ns%3A+%3Chttp%3A%2F%2Fwww.semanticweb.org%2Fagence%2Fontologies%2F2021%2F9%2Fagencedevoyage-ontology%23%3E%0APREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0ASELECT+%3Femployee+%3Fname+%3Flastname+%3Femail+%3Fphone%0AWHERE+%7B%0A%3Femployee+rdf%3Atype+ns%3AEmployee.%0A%3Femployee+ns%3Afirst_name+%3Fname.%0A%3Femployee+ns%3Alast_name+%3Flastname.%0A%3Femployee+ns%3Aemail+%3Femail.%0A++%3Femployee+ns%3Aphone+%3Fphone.%0A%7D&output=json");
  }
  getHotels() {
    return this.http.get<any>("http://localhost:3030/agency/sparql?query=PREFIX+ns%3A+%3Chttp%3A%2F%2Fwww.semanticweb.org%2Fagence%2Fontologies%2F2021%2F9%2Fagencedevoyage-ontology%23%3E%0APREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0ASELECT+%3Fhotel+%3Fname+%3Fdescription+%3Flocation%0AWHERE+%7B%0A%3Fhotel+rdf%3Atype+ns%3AHotel.%0A%3Fhotel+ns%3Aname+%3Fname.%0A%3Fhotel+ns%3Adescription+%3Fdescription.%0A%3Fhotel+ns%3Alocation+%3Flocation.%0A%7D&output=json");
  }
  getShips() {
    return this.http.get<any>("http://localhost:3030/agency/sparql?query=PREFIX+ns%3A+%3Chttp%3A%2F%2Fwww.semanticweb.org%2Fagence%2Fontologies%2F2021%2F9%2Fagencedevoyage-ontology%23%3E%0APREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0ASELECT+*%0AWHERE+%7B%0A%09%3Fship+rdf%3Atype+ns%3AShip.%0A%09%3Fship+ns%3Aname+%3Fname.%0A++++%3Fship+ns%3Acapacity+%3Fcapacity.%0A++++%0A%7D&output=json");
  }
  getDestination() {
    return this.http.get<any>("http://localhost:3030/agency/sparql?query=PREFIX+ns%3A+%3Chttp%3A%2F%2Fwww.semanticweb.org%2Fagence%2Fontologies%2F2021%2F9%2Fagencedevoyage-ontology%23%3E%0APREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0ASELECT+*%0AWHERE+%7B%0A%09%3Fdestination+rdf%3Atype+ns%3ADestination.%0A%09%3Fdestination+ns%3Acity+%3Fcity.%0A++++%3Fdestination+ns%3Acountry+%3Fcountry.%0A++++%0A%7D&output=json");
  }
  searchHotelName(searchText:string) {
    return this.http.get<any>(`http://localhost:3030/agency/sparql?query=PREFIX+ns%3A+%3Chttp%3A%2F%2Fwww.semanticweb.org%2Fagence%2Fontologies%2F2021%2F9%2Fagencedevoyage-ontology%23%3E%0APREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0ASELECT+*%0AWHERE+%7B%0A%09%3Fhotel+rdf%3Atype+ns%3AHotel.%0A%09%3Fhotel+ns%3Aname+%3Fname.%0A++++%3Fhotel+ns%3Adescription+%3Fdescription.%0A++++%3Fhotel+ns%3Alocation+%3Flocation%0A++++FILTER+regex(%3Fname%2C+%22${searchText}%22%2C+%22i%22)%0A%7D&output=json`);
  }
  filterCapacityShip(capacity:number) {
    return this.http.get<any>(`http://localhost:3030/agency/sparql?query=PREFIX+ns%3A+%3Chttp%3A%2F%2Fwww.semanticweb.org%2Fagence%2Fontologies%2F2021%2F9%2Fagencedevoyage-ontology%23%3E%0APREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0ASELECT+*%0AWHERE+%7B%0A%09%3Fship+rdf%3Atype+ns%3AShip.%0A%09%3Fship+ns%3Aname+%3Fname.%0A++++%3Fship+ns%3Acapacity+%3Fcapacity.%0A++FILTER(%3Fcapacity%3E${capacity})%0A++++%0A%7D&output=json`);
  }
}
