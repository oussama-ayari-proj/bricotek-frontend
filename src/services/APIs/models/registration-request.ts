/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

export interface RegistrationRequest {
  adresse?: string;
  cotisation?: boolean;
  dateOfBirth?: string;
  email: string;
  nom: string;
  numTel?: string;
  password: string;
  prenom: string;
  role?: 'USER' | 'ADMIN';
}
