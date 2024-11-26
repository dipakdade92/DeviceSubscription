export const navItems = ['Location', 'About', 'Features', 'Rules', 'Pricing', 'Promotion', 'Pictures', 'Insurance', 'Subscription', 'Device', 'Easy Access'];

export const planData = [
    {
        planName: 'Just mates',
        location: 'Bring your own GPS',
        mileageDetail: 'Mileage reporing to be done by you',
        terms: 'In-person key handover to guestes',
        price: 'Free'
    },
    {
        planName: 'Good mates',
        location: 'Primary GPS included',
        mileageDetail: 'Automated mileage calculations',
        terms: 'In-person key handover to guestes',
        price: '$10'
    },
    {
        planName: 'Best mates',
        location: 'Keyless access technology',
        mileageDetail: 'Automated mileage calculations',
        terms: 'Remote handover to guestes',
        price: '$30'
    }
];

export const devicesData = [
    {
        deviceName: 'Device 1',
        type: 'Primary GPS',
        serialNumber: '',
        img: '',
        bringOwnDevice: true
    },
    {
        deviceName: 'Device 2',
        type: 'Secondary GPS',
        serialNumber: '',
        img: '',
        bringOwnDevice: true
    },
    {
        deviceName: 'Device 3',
        type: 'Drive mate Go',
        serialNumber: '',
        img: '',
        bringOwnDevice: true
    },
    {
        deviceName: 'Device 4',
        type: 'Lockbox',
        serialNumber: '',
        img: '',
        bringOwnDevice: true
    },
];

export const initialFormPages = {
    completed: ['Location', 'About', 'Features', 'Rules', 'Pricing', 'Promotion', 'Pictures', 'Insurance',],
    uncompleted: ['Device', 'Easy Access'],
    active: 'Subscription',
}