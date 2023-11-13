'use client';
import axios from "axios";

const BASE_URL = "/api";

export type Prediction = {
    description: string;
    structured_formatting: {
        main_text: string;
        secondary_text: string;
    }
    place_id: string;
}

export type PlaceResponse = {
    predictions: Array<Prediction>;
    status: string;
}

export type AddressComponent = {
    long_name: string;
    short_name: string;
    types: Array<string>;

}
export type PlaceDetail = {
    address_components: Array<AddressComponent>;
}

export const getPlaces = async (query: string): Promise<PlaceResponse> => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios.get(`${BASE_URL}?query=${query}`);
            const data = response.data;
            resolve(data);
        } catch (e) {
            reject(e);
        }
    });
}

export const getPlaceDetail = async (placeId: string): Promise<PlaceDetail> => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios.get(`${BASE_URL}/detail?place_id=${placeId}`);
            const data = response.data;
            resolve(data);
        } catch (e) {
            reject(e);
        }
    });
}


export const getCodes = async (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios.get(`/zips_allowed.txt`);
            const text = response.data;
            const data = text.split('\n');
            resolve(data);
        } catch (e) {
            reject(e);
        }
    });
}