import {Injectable} from '@angular/core';
import {HotToastService} from "@ngneat/hot-toast";

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toast: HotToastService) {
  }


  positions: any = {
    TOP_LEFT: 'top-left',
    TOP_CENTER: 'top-center',
    TOP_RIGHT: 'top-right',
    BOTTOM_LEFT: 'bottom-left',
    BOTTOM_RIGHT: 'bottom-right',
    BOTTOM_CENTER: 'bottom-center',
  }

  duration = 3000;
  id = 'DEMo ID'
  style = {
    borderRadius: '10px',
    background: '#333',
    color: '#fff',
    padding: '16px',
    fontSize: '18px'

  }

  success(msg = '', duration = this.duration, position = this.positions.TOP_CENTER, style = this.style) {
    this.toast.success(msg, {
      duration: duration,
      position: position,
      style: style,
      id: this.id

    })
  }

  warning(msg = '', duration = this.duration, position = this.positions.TOP_CENTER, style = this.style) {
    this.toast.warning(msg, {
      duration: duration,
      position: position,
      style: style,
      id: this.id


    })
  }

  error(msg = '', duration = this.duration, position = this.positions.TOP_CENTER, style = this.style) {
    this.toast.error(msg, {
      duration: duration,
      position: position,
      style: style,
      id: this.id


    })
  }


  info(msg = '', duration = this.duration, position = this.positions.TOP_CENTER, style = this.style) {
    this.toast.info(msg, {
      duration: duration,
      position: position,
      style: style,
      id: this.id


    })
  }

  loader(msg = '', duration = this.duration, position = this.positions.TOP_CENTER, style = this.style) {
    this.toast.loading(msg, {
      position: position,
      duration: duration,
      style: style,
      id: this.id

    })

  }

  observe(msg = '', success = '', error = '', style = this.style) {
    return this.toast.observe({
      loading: msg,
      success: success,
      error: error,


    })
  }

}
