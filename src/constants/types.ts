export interface PlanDetails  {
    planName: string,
    location: string,
    mileageDetail: string,
    terms: string,
    price: string
}

export interface DeviceData {
    deviceName: string,
    type: string,
    serialNumber: string,
    img: string,
    bringOwnDevice: boolean
}

export interface IFormPages {
    completed: string[];
    uncompleted: string[];
    active: string;
}

export interface CardDetails {
    number: string;
    expireMonth: string;
    expireYear: string;
    cvv: string;
  }

  export interface Device {
    deviceName: string;
    type: string;
    serialNumber: string;
    img: string;
    bringOwnDevice: boolean;
  }

  export interface AppState {
    cardDetails: CardDetails;
    devices: Device[];
  }