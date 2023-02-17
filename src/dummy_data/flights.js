export const flights = [
    {
        type: 'flight-offer',
        id: '1',
        source: 'GDS',
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        lastTicketingDate: '2023-03-15',
        numberOfBookableSeats: 7,
        itineraries: [
            {
                duration: 'PT16H40M',
                segments: [
                    {
                        departure: {iataCode: 'BLR', at: '2023-02-27T05:45:00'},
                        arrival: {
                            iataCode: 'DEL',
                            terminal: '3',
                            at: '2023-02-27T08:50:00'
                        },
                        carrierCode: 'AI',
                        number: '804',
                        aircraft: {code: '32N'},
                        operating: {carrierCode: 'AI'},
                        duration: 'PT3H5M',
                        id: '1',
                        numberOfStops: 0,
                        blacklistedInEU: false
                    },
                    {
                        departure: {
                            iataCode: 'DEL',
                            terminal: '3',
                            at: '2023-02-27T13:05:00'
                        },
                        arrival: {
                            iataCode: 'CDG',
                            terminal: '1',
                            at: '2023-02-27T17:55:00'
                        },
                        carrierCode: 'AI',
                        number: '143',
                        aircraft: {code: '788'},
                        operating: {carrierCode: 'AI'},
                        duration: 'PT9H20M',
                        id: '2',
                        numberOfStops: 0,
                        blacklistedInEU: false
                    }
                ]
            }
        ],
        price: {
            currency: 'USD',
            total: '345.46',
            base: '214.00',
            fees: [Array],
            grandTotal: '345.46'
        },
        pricingOptions: { fareType: [Array], includedCheckedBagsOnly: true },
        validatingAirlineCodes: [ 'WY' ],
        travelerPricings: [
            {
                travelerId: '1',
                fareOption: 'STANDARD',
                travelerType: 'ADULT',
                price: {currency: 'USD', total: '345.46', base: '214.00'},
                fareDetailsBySegment: [
                    {
                        segmentId: '1',
                        cabin: 'ECONOMY',
                        fareBasis: 'LELOIA',
                        class: 'L',
                        includedCheckedBags: {weight: 30, weightUnit: 'KG'}
                    },
                    {
                        segmentId: '2',
                        cabin: 'ECONOMY',
                        fareBasis: 'LELOIA',
                        class: 'L',
                        includedCheckedBags: {weight: 30, weightUnit: 'KG'}
                    }
                ]
            }
        ]
    },
    {
        type: 'flight-offer',
        id: '2',
        source: 'GDS',
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        lastTicketingDate: '2023-02-26',
        numberOfBookableSeats: 9,
        itineraries: [[Object]],
        price: {
            currency: 'USD',
            total: '356.26',
            base: '179.00',
            fees: [Array],
            grandTotal: '356.26'
        },
        pricingOptions: {fareType: [Array], includedCheckedBagsOnly: true},
        validatingAirlineCodes: ['EY'],
        travelerPricings: [
            {
                travelerId: '1',
                fareOption: 'STANDARD',
                travelerType: 'ADULT',
                price: {currency: 'USD', total: '356.26', base: '179.00'},
                fareDetailsBySegment: [
                    {
                        segmentId: '3',
                        cabin: 'ECONOMY',
                        fareBasis: 'ERV1EY',
                        brandedFare: 'YV',
                        class: 'E',
                        includedCheckedBags: {weight: 30, weightUnit: 'KG'}
                    },
                    {
                        segmentId: '4',
                        cabin: 'ECONOMY',
                        fareBasis: 'ERV1EY',
                        brandedFare: 'YV',
                        class: 'E',
                        includedCheckedBags: {weight: 30, weightUnit: 'KG'}
                    }
                ]
            }
        ]
    }
];
