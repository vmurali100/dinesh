import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor() {}

  getContacts() {
    return [
      {
        id: 2497,
        email: "DBorrego@etiam.gov",
        username: "DKnight",
        password: "tRh3O"
      },
      {
        id: 2498,
        email: "FNacita@at.io",
        username: "JWong",
        password: "GgmFY"
      },
      {
        id: 2499,
        email: "PPeschke@odio.io",
        username: "LPepin",
        password: "VRdYM"
      },
      {
        id: 2500,
        email: "DMiyaki@amet.org",
        username: "PLlewellyn",
        password: "PBgVO"
      },
      {
        id: 2501,
        email: "CHatton@odio.net",
        username: "DPies",
        password: "bUPHs"
      }
    ];
  }
}
