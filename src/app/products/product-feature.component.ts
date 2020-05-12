import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product, productFeatures } from './product';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-product-feature',
  templateUrl: "./product-feature.component.html"
})
export class ProductFeatureComponent {
  @Input() productField: Product<productFeatures>;
  @Output() productFieldChange = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {

  }

  emitChange(){
    this.productFieldChange.emit(this.productField);
  }
  productFeatureForm = this.fb.group({
    productName: ['', Validators.required],
    productCode: [''],
    productFeatures: new FormArray([])
  });

  get f() { return this.productFeatureForm.controls; }
  get p() { return this.f.productFeatures as FormArray; }

  get productFeatures() {
    return this.productFeatureForm.get('productFeatures') as FormArray;
  }

  ngOnInit() {
    this.p.push(this.fb.group({
      featureName: [''],
      featureAddedDate: [''],
      featureDescription: ['']
    }));
  }


  addNewProdField(index: number): void {
    this.p.push(this.fb.group({
      featureName: [''],
      featureAddedDate: [''],
      featureDescription: ['']
    }));
    this.productFieldChange.emit(this.productFeatureForm.value);
  }

  removeNewProdField(index: number): void {
    this.p.removeAt(index);
    this.productFieldChange.emit(this.productFeatureForm.value);

  }

  submitForm() {
    console.warn(this.productFeatureForm.value);
  }
}