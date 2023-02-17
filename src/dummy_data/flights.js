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
        itineraries: [ [Object] ],
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
