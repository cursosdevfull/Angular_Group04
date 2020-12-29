import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { DriverEntity } from 'src/app/driver/domain/driver-entity';
import { DriverRepository } from 'src/app/driver/domain/driver.repository';
import { HistoryEntity } from 'src/app/history/domain/history-entity';
import { HistoryRepository } from 'src/app/history/domain/history.repository';
import { MedicEntity } from 'src/app/medic/domain/medic-entity';
import { MedicRepository } from 'src/app/medic/domain/medic.repository';

@Component({
  selector: 'app-form-history',
  templateUrl: './form-history.component.html',
  styleUrls: ['./form-history.component.css'],
})
export class FormHistoryComponent implements OnInit {
  private history: HistoryEntity;
  group: FormGroup;
  listMedic: MedicEntity[] = [];
  subscriptionMedic: Subscription;
  subscriptionHistory: Subscription;
  listDriver: Observable<DriverEntity[]>;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly medicRepository: MedicRepository,
    private readonly historyRepository: HistoryRepository,
    private readonly driverRepository: DriverRepository,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.history = this.activatedRoute.snapshot.data.history;
    this.loadData();
    this.setForm();
  }

  loadData() {
    this.subscriptionMedic = this.medicRepository
      .getAll()
      .subscribe((response) => {
        this.listMedic = response;
      });

    this.listDriver = this.driverRepository.getAll();
  }

  setForm() {
    this.group = new FormGroup({
      _id: new FormControl(this.history?._id),
      dateRequest: new FormControl(
        this.history?.dateRequest,
        Validators.required
      ),
      contractor: new FormControl(
        this.history?.contractor,
        Validators.required
      ),
      authorizationCode: new FormControl(
        this.history?.authorizationCode,
        Validators.required
      ),
      policy: new FormControl(this.history?.policy, Validators.required),
      document: new FormControl(this.history?.document, Validators.required),
      name: new FormControl(this.history?.name, Validators.required),
      lastName: new FormControl(this.history?.lastName, Validators.required),
      phone: new FormControl(this.history?.phone),
      age: new FormControl(this.history?.age, Validators.required),
      typeAge: new FormControl(
        this.history ? this.history?.typeAge.toString() : null,
        Validators.required
      ),
      gender: new FormControl(
        this.history ? this.history?.gender.toString() : null,
        Validators.required
      ),
      address: new FormControl(this.history?.address, Validators.required),
      reference: new FormControl(this.history?.reference, Validators.required),
      diagnostic: new FormControl(
        this.history?.diagnostic,
        Validators.required
      ),
      symptoms: new FormControl(this.history?.symptoms, Validators.required),
      treatment: new FormControl(this.history?.treatment, Validators.required),
      medic: new FormControl(this.history?.medic, Validators.required),
      driver: new FormControl(this.history?.driver, Validators.required),
    });
  }

  ngOnDestroy() {
    this.subscriptionMedic.unsubscribe();

    if (this.subscriptionHistory) {
      this.subscriptionHistory.unsubscribe();
    }
  }

  save() {
    const dataForm = this.group.value;
    dataForm.typeAge = dataForm.typeAge === 'true' ? true : false;
    dataForm.gender = +dataForm.gender;
    console.log(dataForm);
    /*     dataForm.medic = dataForm.medic._id;
    dataForm.driver = dataForm.driver._id; */

    if (this.history) {
      this.subscriptionHistory = this.historyRepository
        .update(dataForm)
        .subscribe(() => {
          this.router.navigate(['/histories']);
        });
    } else {
      this.subscriptionHistory = this.historyRepository
        .insert(dataForm)
        .subscribe(() => {
          this.router.navigate(['/histories']);
        });
    }
  }
}
