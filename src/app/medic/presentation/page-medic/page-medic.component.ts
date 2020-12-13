import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UtilService } from 'src/app/services/util.service';
import { MedicEntity } from '../../domain/medic-entity';
import { MedicRepository } from '../../domain/medic.repository';
import { FormMedicComponent } from '../components/form-medic/form-medic.component';

@Component({
  selector: 'app-page-medic',
  templateUrl: './page-medic.component.html',
  styleUrls: ['./page-medic.component.css'],
})
export class PageMedicComponent implements OnInit {
  list: MedicEntity[];

  constructor(
    private readonly medicService: MedicRepository,
    private readonly util: UtilService
  ) {}

  ngOnInit(): void {
    this.loadMedic();
  }

  loadMedic() {
    this.medicService.getAll().subscribe((response) => (this.list = response));
  }

  openModal(record: any = null) {
    const options = {
      disableClose: true,
      panelClass: 'container-form',
      data: record,
    };

    const reference: Observable<any> = this.util.openModal(
      FormMedicComponent,
      options
    );
    reference.subscribe((response) => {
      if (response) {
        if (!response.id) {
          this.medicService.insert(response.fd).subscribe(() => {
            this.loadMedic();
            this.util.showMessage('Datos guardados');
          });
        } else {
          this.medicService.update(response.fd, response.id).subscribe(() => {
            this.loadMedic();
            this.util.showMessage('Datos guardados');
          });
        }
      }
    });
  }

  editMedic(medic: MedicEntity) {
    this.openModal(medic);
  }

  deleteMedic(_id: string) {
    this.medicService.delete(_id).subscribe(() => {
      this.loadMedic();
      this.util.showMessage('Datos eliminados');
    });
  }
}
