export class User{
  userId: number;
  nom : string;
  prenom: string;
  dateOfBirth: string;
  email: string;
  addresse: string;
  numAdh: number;
  numTel: string;
  role: string;
  enabled: boolean;

  constructor(userId: number, nom: string, prenom: string, dateOfBirth: string, email: string, addresse: string, numAdh: number, numTel: string, role: string, enabled: boolean) {
    this.userId = userId;
    this.nom = nom;
    this.prenom = prenom;
    this.dateOfBirth = dateOfBirth;
    this.email = email;
    this.addresse = addresse;
    this.numAdh = numAdh;
    this.numTel = numTel;
    this.role = role;
    this.enabled = enabled;
  }
}
