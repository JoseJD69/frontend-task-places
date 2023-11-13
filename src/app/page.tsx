'use client';
import {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../../state";
import {getCodes, getPlaceDetail, getPlaces, Prediction} from "../../api/GoogleAPI";
import {AppState} from "../../state";
import DialogSuccess from "@/app/components/dialogSuccess";
import DialogFailure from "@/app/components/dialogFailure";
import SearchInput from "@/app/components/searchInput";
import PlaceList from "@/app/components/placeList";


export default function Home() {
    const dispatch = useDispatch();
    const {searchPlaces, getZipCodes, obtainPlaceDetail, setLoading} = bindActionCreators(actionCreators, dispatch)
    const state = useSelector((state: AppState) => state.app)
    const [visibleSuccess, setVisibleSuccess] = useState(false);
    const [visibleFailure, setVisibleFailure] = useState(false);
    const [visibleList, setVisibleList] = useState(false);
    const [value, setValue] = useState<string>('');
    const [selectedPlace, setSelectedPlace] = useState<Prediction | null>(null);

    //get zip codes from the api at the beginning
    useEffect(() => {
        getCodes().then((response) => {
            getZipCodes(response)
            setLoading(false)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    //function to filter the 3 most relevant places
    const filteredMostRelevant = () => {
        return state.places.slice(0, 3)
    }
    //function to template a place in the list
    const placeTemplate = (option: Prediction) => {
        return (
            <div className="grid nested-grid place-template">
                <div className="flex col-1 align-items-center justify-content-center">
                    <img alt="cursor" src="/images/map-pin-gray.png"
                         style={{width: '1.25rem', marginRight: '.5rem'}}/>

                </div>
                <div className="col-11">
                    <div className="font-light font-semibold mt-2 mb-2">{option.structured_formatting.main_text}</div>
                    <div className="font-light text-base">{option.structured_formatting.secondary_text}</div>
                </div>
            </div>
        );
    };
    //function to select a place
    const selectPlace = useCallback(async (place: Prediction) => {
        setValue(place.description)
        setSelectedPlace(place)
        setVisibleList(false)

        await getPlaceDetail(place.place_id).then((response) => {
            obtainPlaceDetail(response)
            setLoading(false)
        }).finally(() => {
            setLoading(false)
        })

        if (!state.loading) {
            state.placeDetail.address_components.some((item) => {
                if (item.types.includes('postal_code')) {
                    const isZipCodeValid = state.zipCodes.includes(item.long_name.toString());
                    if (isZipCodeValid) {
                        setVisibleSuccess(true);
                        setVisibleList(false)
                    } else {
                        setValue('')
                        setVisibleFailure(true);
                        setVisibleList(false)
                    }
                }
            });
        }

    }, [obtainPlaceDetail, setLoading, state.loading, state.placeDetail.address_components, state.zipCodes])
    //function to search places
    const searchPlacesFunc = useCallback(async (place: string) => {
        setValue(place)
        await getPlaces(place).then((response) => {
            searchPlaces(response)
            setLoading(false)
        })
        setVisibleList(true)
    }, [searchPlaces])

    return (
        <>
            <div className="flex flex-wrap h-screen p-0 m-0">
                <div
                    className="col-12 flex justify-content-center border-round">
                    <div className="flex flex-column  align-content-center">
                        <div>
                            <p className="text-3xl text-center font-bold">
                                Where are you located?
                            </p>
                        </div>
                        <div><p className="text-center font-semibold">
                            So we know where to drop off the stuff
                        </p></div>
                        <div><p className="text-center ">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            We won't share you address
                            <br/>
                            with your ex(or whoever).
                        </p></div>
                        <div><p className="text-center">

                        </p></div>
                        <div className="flex justify-content-center align-content-center flex-wrap">
                            <SearchInput value={value} onChange={(value) => searchPlacesFunc(value)}/>
                        </div>

                        {
                            visibleList &&
                            <PlaceList value={selectedPlace?.description} places={filteredMostRelevant()}
                                       onSelect={(e) => selectPlace(e)} template={placeTemplate}/>
                        }
                    </div>
                </div>
            </div>
            <DialogSuccess visible={visibleSuccess} setVisible={setVisibleSuccess}/>
            <DialogFailure visible={visibleFailure} setVisible={setVisibleFailure}/>
        </>
    )
}
