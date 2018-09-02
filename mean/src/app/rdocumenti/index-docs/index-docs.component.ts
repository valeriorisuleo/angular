import { Component, OnInit } from '@angular/core';
import { IndexDocsService } from '../../services/rdocumenti/index-docs/index-docs.service';
import { InitDocsService } from '../../services/rdocumenti/init/init-docs.service';
import { IndexPraticheService } from '../../services/rpratiche/ls-pratiche/index-pratiche.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'docs-list',
  templateUrl: './index-docs.component.html',
  styleUrls: ['./index-docs.component.scss']
})
export class IndexDocsComponent implements OnInit {

  filterParams = {};
  allParams: any[];

  all: any[];
  limit: any[];
  indexArray: number;
  pageNumber: number;

  isActive = false;
  spinners = false;


  calendar = {
    start: {
      startDate: null,
      time: {
        hour: null,
        minute: null
      }
    },
    end: {
      endDate: null,
      time: {
        hour: null,
        minute: null
      }
    },
    placeHolder: null
  }

  constructor(
    private serviceInit: InitDocsService,
    private serviceDocs: IndexDocsService,
    private servicePrat: IndexPraticheService ) {

    this.indexArray = 10;
    this.pageNumber = 1;
  }

  updateDateRange(obj) {
    const vm = this;

    vm.calendar.start.startDate = obj.startDate;
    vm.calendar.end.endDate = obj.endDate;

    if (obj.startDate != null) {
      vm.calendar.placeHolder = `From ${obj.startDate.day}/${obj.startDate.month}/${obj.startDate.year} `;
    }

    if (obj.endDate != null) {
      vm.calendar.placeHolder += `To ${obj.endDate.day}/${obj.endDate.month}/${obj.endDate.year}`;
      vm.isActive = false;
    }
  }


  toggleDataPicker() {
    this.isActive = !this.isActive;
  }


  spinnersShow() {
    const lastMinuteField = document.getElementById('timepicker-start');

    if(lastMinuteField.classList.contains('ng-untouched')) {
      this.spinners = true;
    }
  }

  spinnersShowAgain() {
    const vm = this;
    const minute = <HTMLInputElement> document.getElementsByClassName('ngb-tp-minute')[1].children[0];
    const lastMinuteField = document.getElementById('timepicker-start');

    minute.addEventListener('blur', () => {
      (minute.value !== '') ? vm.spinners = false : vm.spinners = true;
      lastMinuteField.classList.remove('ng-touched');
      lastMinuteField.classList.add('ng-untouched');
    });
  }

  docsFilter(docsform) {
    const vm = this;
    const table1 = document.getElementById('table-one');
    const table2 = document.getElementById('table-two');

    console.log(docsform.value);

    if (docsform.value.docsoptions === '') {
      vm.serviceDocs.getAll()
      .subscribe((response) => {
        vm.all = response.json();
        vm.limit = vm.all.slice(0, vm.indexArray);
      });
      table1.classList.remove('nope');
    } else if (docsform.value.docsoptions === 3) {
      table2.classList.remove('nope');
      vm.getPratiche();
    }
    // vm.filterParams = docsform.value;
    // console.log(vm.filterParams);
    // vm.service.sendFilters(vm.filterParams)
    // .subscribe((response) => {
    //   vm.all = response.json();
    // });
  }


  getPratiche() {
    const vm = this;

    vm.servicePrat.getAll()
    .subscribe((response) => {
      vm.all = response.json();
      vm.limit = vm.all.slice(0, vm.indexArray);
      console.log('limit', vm.limit);
    });
  }

  nextPage() {
    const vm = this;
    vm.pageNumber++;
    vm.limit = vm.all.slice(((vm.pageNumber-1) * vm.indexArray), (vm.pageNumber*vm.indexArray));
  }

  previousPage() {
    const vm = this;
    vm.pageNumber--;

    if (vm.limit.length === 10) {
      vm.limit = vm.all.slice(((vm.pageNumber-1) * vm.indexArray), (vm.pageNumber*vm.indexArray));
    } else if (vm.limit.length < 10) {
      (<HTMLInputElement> document.getElementById("previous-btn")).disabled = true;
      return false
    }
  }


  ngOnInit() {
    const vm = this;

    vm.allParams = vm.serviceInit.getFormParmas();
    vm.spinnersShowAgain();


    //   vm.serviceInit.getAll()
    //   .subscribe((response) => {
    //     vm.allParams = response.json();
    //     console.log('allParams', vm.allParams);
    //   })
    // }
  }
}
