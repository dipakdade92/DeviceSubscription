// src/store/slices/appSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState, CardDetails, Device } from '../../constants/types';

const initialState: AppState = {
  cardDetails: {
    number: '',
    expireMonth: '',
    expireYear: '',
    cvv: '',
  },
  devices: [
    { deviceName: 'Device 1', type: 'Primary GPS', serialNumber: '', img: '', bringOwnDevice: true },
    { deviceName: 'Device 2', type: 'Secondary GPS', serialNumber: '', img: '', bringOwnDevice: true },
    { deviceName: 'Device 3', type: 'Drive mate Go', serialNumber: '', img: '', bringOwnDevice: true },
    { deviceName: 'Device 4', type: 'Lockbox', serialNumber: '', img: '', bringOwnDevice: true },
  ],
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateCardDetails: (state, action: PayloadAction<CardDetails>) => {
      state.cardDetails = action.payload;
      localStorage.setItem('appState', JSON.stringify(state));
    },
    updateDevices: (state, action: PayloadAction<Device[]>) => {
      state.devices = action.payload;
      localStorage.setItem('appState', JSON.stringify(state));
    },
    // hydrateState: (state, action: PayloadAction<AppState>) => {
    //   return action.payload;
    // },
  },
});

export const { updateCardDetails, updateDevices } = appSlice.actions;
export default appSlice.reducer;
