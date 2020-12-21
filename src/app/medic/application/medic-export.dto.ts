import { MedicEntity } from '../domain/medic-entity';

export interface IDtoMedicExport {
  'Nombre Médico': string;
  apellidoMedico: string;
  numeroColegiatura: string;
}

export class DtoMedicExport {
  mapping(data: MedicEntity[]): IDtoMedicExport[] {
    return data.map((el) => ({
      'Nombre Médico': el.name,
      apellidoMedico: el.lastname,
      numeroColegiatura: el.cmp,
    }));
  }
}
