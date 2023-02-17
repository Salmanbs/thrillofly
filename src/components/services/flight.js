import { flights } from "../../dummy_data/flights";

class Flight {
    search(params) {
        return new Promise((resolve, reject) => {
            // do something
            resolve(flights);
        });
    }
}

export const flightService = new Flight();
