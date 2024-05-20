export const carUpdateMock = {
    km: 1000
}

export const carMock = {
    id: "8beb45cd-d302-42bd-9fbb-a87a36c34a66",
    name: "RS7",
    description: "sports sedan",
    brand: "audi",
    year: 2023,
    km: 0
}
export const carUpdatedMock = {
    id: "8beb45cd-d302-42bd-9fbb-a87a36c34a66",
    name: "RS7",
    description: "sports sedan",
    brand: "audi",
    year: 2023,
    km: carUpdateMock.km
}

export const carListMock = [
    {
        id: "af389cba-b2a9-4d36-b167-a549771f9653",
        name: "F12",
        description: "supercar",
        brand: "ferrari",
        year: 2022,
        km: 500
    },
    {
        id: "a41ff43d-9ba6-4865-95c7-8fbd5675e413",
        name: "P1",
        description: "hypercar",
        brand: "mclaren",
        year: 2013,
        km: 5000
    }
]

export const carCreateListMock = [
    {
        name: "F12",
        description: "supercar",
        brand: "ferrari",
        year: 2022,
        km: 500
    },
    {
        name: "P1",
        description: "hypercar",
        brand: "mclaren",
        year: 2013,
        km: 5000
    }
]
export const carCreateMock = {
    name: "Huracan",
    description: "supercar",
    brand: "lamborghini",
    year: 2023,
    km: 0
}
export const carInvalidCreateMock = {
    brand: "lamborghini",
    year: 2023,
}


export const carInvalidIdMock = "284c6fdd-8562-4cc1-8515-f22769b0f7e0"