import {Injectable} from '@angular/core';
import {Customer} from "../../modules/dashboard/shared/model/customer";
import {CustomersDataset} from '../../config/dataset/customers'

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  filteredCustomer!: Customer[]
  customerData: Customer[] = CustomersDataset

  constructor() {
    this.filteredCustomer = this.customerData
  }


  getCustomers(searchText: string = ''): Customer[] {
    if (!searchText) {
      return this.customerData
    } else {
      this.filteredCustomer = this.customerData.filter((customer: Customer) => {
        return (
          customer.firstName.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) ||
          customer.lastName.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
        )
      })
      return this.filteredCustomer
    }
  }

  getCustomerById = (customerId: String): Customer => {
    return <Customer>this.customerData.find((customer: Customer) => customer._id === customerId)
  }



}
