import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceItemService {
  deviceItems = [
    {
      name: "Device 1",
      OsType: "Os 1",
      battery : 100,
      memory:"4 GB"
    },
    {
      name: "Device 2",
      OsType: "Os 2",
      battery : 100,
      memory:"4 GB"
    },
    {
      name: "Device 3",
      OsType: "Os 3",
      battery : 10,
      memory:"4 GB"
    },
    {
      name: "Device 4",
      OsType: "Os 4",
      battery : 50,
      memory:"4 GB"
    },
    {
      name: "Device 5",
      OsType: "Os 5",
      battery : 75,
      memory:"4 GB"
    },
    {
      name: "Device 6",
      OsType: "Os 6",
      battery : 100,
      memory:"4 GB"
    },

    

  ];

  get(){
    return this.deviceItems;
  }

  add(deviceItem) {
    this.deviceItems.push(deviceItem);
  }

  delete(deviceItem){
    let index = this.deviceItems.indexOf(deviceItem);
    if(index>=0) {
      this.deviceItems.splice(index, 1);
    }
  }

  update(deviceItem){
    console.log("Got in to Main Edit");
  }
}
