import { airports } from "../dummy_data/locations";


class LocationService {
    getAllAirports = () => {
        return new Promise((resolve, reject) => {
            resolve(airports);
        });
    }
}

export const locationService = new LocationService();
