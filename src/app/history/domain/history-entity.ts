export interface HistoryEntity {
  _id?: string;
  dateRequest: Date | string;
  contractor: string;
  authorizationCode: string;
  policy: string;
  document: string;
  name: string;
  lastName: string;
  phone: string;
  age: number;
  typeAge: boolean;
  gender: number;
  address: string;
  reference: string;
  diagnostic: string;
  medic: any;
  driver: any;
  symptoms: string;
  treatment: string;
}
