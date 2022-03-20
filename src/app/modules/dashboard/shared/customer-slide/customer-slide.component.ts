import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SlideType} from "../../../../config/slide-type";
import {Customer} from "../model/customer";
import {CustomerService} from "../../../../includes/services";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-customer-slide',
  templateUrl: './customer-slide.component.html',
  styleUrls: ['./customer-slide.component.scss']
})
export class CustomerSlideComponent implements OnInit {

  @Output() onAdd: EventEmitter<any> = new EventEmitter<any>();
  @Output() onDelete: EventEmitter<any> = new EventEmitter<any>();
  @Output() onUpdate: EventEmitter<any> = new EventEmitter<any>();

  customerData!: Customer;


  validationMessages = {
    firstName: [{
      type: 'required',
      message: 'First name is required'
    }],
    lastName: [{
      type: 'required',
      message: 'Last name is required'
    }],
    email: [{
      type: 'required',
      message: 'Email is required'
    },
      {
        type: 'pattern',
        message: 'Invalid Email address'
      },
    ],
    city: [{
      type: 'required',
      message: 'City is required'
    }],
    state: [{
      type: 'required',
      message: 'State is required'
    }],
    address: [{
      type: 'required',
      message: 'Address is required'
    }],
    gender: [{
      type: 'required',
      message: 'Gender is required'
    }],

  }

  constructor(
    private customerService: CustomerService,
    private formBuilder: FormBuilder
  ) {
  }

  showSlider = false;
  slideTypes = SlideType;
  selectedSlideType: SlideType = this.slideTypes.ADD

  customerFrom!: FormGroup

  editMode = false;

  isSubmitted = false

  ngOnInit(): void {
    this.initForm()
  }


  initForm() {
    this.customerFrom = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['male', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+[a-z]{2,3}')
      ])],
    })
  }

  onOpenSlider() {
    this.showSlider = true;
    let body = document.getElementById("idBody");
    body?.classList.add("model-body-scroll");
  }

  onCloseSlider() {
    this.isSubmitted = false
    this.showSlider = false;
    let body = document.getElementById("idBody");
    if (body?.classList.contains("model-body-scroll")) {
      body.classList.remove("model-body-scroll");
    }
  }


  get cf() {
    return this.customerFrom.controls
  }

  findCustomerById = (customerId: String): Customer => {
    return this.customerService.getCustomerById(customerId);
  }


  onViewCustomer(customerId: String) {
    this.onOpenSlider()
    this.editMode = true;
    this.selectedSlideType = SlideType.EDIT;
    this.customerData = this.findCustomerById(customerId)
    this.cf['firstName'].setValue(this.customerData.firstName)
    this.cf['lastName'].setValue(this.customerData.lastName)
    this.cf['email'].setValue(this.customerData.email)
    this.cf['address'].setValue(this.customerData.address)
    this.cf['state'].setValue(this.customerData.state)
    this.cf['city'].setValue(this.customerData.city)
    this.cf['gender'].setValue(this.customerData.gender)

  }


  updateCustomer = () => {
    this.isSubmitted = true;

    if (!this.customerFrom.valid) {
      return
    }


    this.onUpdate.emit({
      customerId: this.customerData._id,
      value: this.customerFrom.value
    })
    this.onCloseSlider();
    this.customerFrom.reset()
  }


  onAddCustomer() {
    this.isSubmitted = true;

    if (!this.customerFrom.valid) {
      return
    }

    const data: Customer = this.customerFrom.value;
    data._id = new Date().getTime().toString()
    this.onAdd.emit(data)
  }

  onDeleteCustomer() {
    this.onCloseSlider();
    this.customerFrom.reset()
    this.onDelete.emit(this.customerData)

  }

  onCancel() {
    this.customerFrom.reset();
    this.onCloseSlider();
  }


}
