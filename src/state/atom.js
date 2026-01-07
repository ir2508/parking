import { atom } from "recoil"

export const vehicleListState = atom({
    key: "vehicleListState",
    default: [],
})

export const customerListState = atom({
    key: "customerListState",
    default: [],
})

export const parkingSpacesState = atom({
    key: "parkingSpacesState",
    default: [],
})
