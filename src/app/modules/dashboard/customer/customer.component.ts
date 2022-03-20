import {Component, OnInit, ViewChild} from '@angular/core';
import {CustomersDataset} from '../../../config/dataset/customers'
import {Customer} from "../shared/model/customer"
import {ViewType} from "../../../config/view-type";
import {CustomerService, PaginationService, ToastService} from "../../../includes/services";
import {Pager} from "../shared/model/pager";
import {CustomerSlideComponent} from "../shared/customer-slide/customer-slide.component";
import {SlideType} from "../../../config/slide-type";
import {Menu} from "../../../config/menu";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  @ViewChild('slide') slide!: CustomerSlideComponent
  customerData: Customer [] = CustomersDataset
  viewType = ViewType
  selectedViewType: ViewType = ViewType.GRID


  currentPageData: any = [];
  pager!: Pager;

  searchKeyword: any;

  menuTypes = Menu;
  selectedMenu: Menu = this.menuTypes.CARD

  constructor(
    private paginationService: PaginationService,
    private customerService: CustomerService,
    private toast: ToastService
  ) {
  }

  ngOnInit(): void {
    this.getCustomers();
  }


  getCustomers() {
    this.customerData = this.customerService.getCustomers(this.searchKeyword)
    this.gotoPage(1)

  }

  gotoPage(pageNumber: number) {

    if (pageNumber < 1) {
      return;
    }

    this.pager = this.paginationService.getPager(this.customerData.length, pageNumber)
    this.currentPageData = this.getCurrentPageData(this.pager.startIndex, this.pager.endIndex + 1);
  }


  onSearch() {
    this.getCustomers()
  }

  onChangeViewType = (viewType: ViewType) => this.selectedViewType = viewType

  getCurrentPageData = (startIndex: number = 0, indexNumber: number = 0) =>
    this.customerData.slice(this.pager.startIndex, this.pager.endIndex + 1);


  onClickAddCustomer() {
    this.selectedMenu=Menu.NEW_CUSTOMER
    this.slide.selectedSlideType = SlideType.ADD
    this.slide.editMode = false
    this.slide.onOpenSlider()
  }

  onAddCustomer(customer: Customer) {
    this.customerData.unshift(customer);
    this.toast.success('Successfully added')
    this.getCustomers();

  }

  onDeleteCustomer(customer: Customer) {
    this.customerService.customerData = this.customerData.filter(cust => cust._id !== customer._id);
    this.toast.success('Successfully Deleted')
    this.getCustomers();

  }

  onUpdateCustomer(objCustomer: any) {
    const customer: Customer = this.customerService.getCustomerById(objCustomer.customerId)
    customer.firstName = objCustomer.value.firstName
    customer.lastName = objCustomer.value.lastName
    customer.city = objCustomer.value.city
    customer.state = objCustomer.value.state
    customer.gender = objCustomer.value.gender
    customer.address = objCustomer.value.address
    customer.email = objCustomer.value.email
    this.toast.success('Successfully Updated')

  }


  onViewCustomer(customerId: String) {
    this.slide.onViewCustomer(customerId)
  }


}
