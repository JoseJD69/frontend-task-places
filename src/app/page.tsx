'use client';

import {useCallback, useEffect, useState} from "react";
import {InputText} from "primereact/inputtext";
import {ListBox, ListBoxChangeEvent} from 'primereact/listbox';
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../../state";
import {getCodes, getPlaceDetail, getPlaces, Prediction} from "../../api/GoogleAPI";
import {AppState} from "../../state";
import DialogSuccess from "@/app/components/dialogSuccess";
import DialogFailure from "@/app/components/dialogFailure";



export default function Home() {
    const [visibleSuccess, setVisibleSuccess] = useState(false);
    const [visibleFailure, setVisibleFailure] = useState(false);
    const [visibleList, setVisibleList] = useState(false);
    const [value, setValue] = useState<string>('');
    const [selectedPlace, setSelectedPlace] = useState<Prediction | null>(null);
    const dispatch = useDispatch();
    const {searchPlaces, getZipCodes, obtainPlaceDetail} = bindActionCreators(actionCreators, dispatch)
    const state = useSelector((state: AppState) => state.app)

    useEffect(() => {
        getCodes().then((response) => {
            getZipCodes(response)
        }).catch((error) => {
            console.log(error)
        })
    }, [])
    const filteredMostRelevant = () => {
        return state.places.slice(0, 3)
    }
    const placeTemplate = (option: Prediction) => {
        return (
            <div className="grid nested-grid">
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

    const selectPlace = (place: Prediction) => {
        setValue(place.description)
        setSelectedPlace(place)
        setVisibleList(false)

        getPlaceDetail(place.place_id).then((response) => {
          
        })

    }
    const searchPlacesFunc = useCallback((place: string) => {
        setValue(place)
        getPlaces(place).then((response) => {
            searchPlaces(response)
        })
        setVisibleList(true)
    }, [state])
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
                                    <span className="p-input-icon-left">
                                        <img src="/images/map-pin.png" width="17" height="19"
                                             style={{position: 'absolute', zIndex: 2, marginTop: 15, left: 8}}/>
                                <InputText className="flex w-26rem h-3rem" placeholder="Search" value={value}
                                           onChange={(event) => searchPlacesFunc(event.target.value)}/>
                            </span>

                        </div>

                        {
                            visibleList &&
                            <ListBox value={selectedPlace?.description}
                                     onChange={(e: ListBoxChangeEvent) => selectPlace(e.value)}
                                     options={filteredMostRelevant()}
                                     optionLabel="name"
                                     itemTemplate={placeTemplate} className="w-full" listStyle={{maxHeight: '265px'}}/>
                        }
                    </div>
                </div>
            </div>
            <DialogSuccess visible={visibleSuccess} setVisible={setVisibleSuccess}/>
            <DialogFailure visible={visibleFailure} setVisible={setVisibleFailure}/>
        </>
    )
}
