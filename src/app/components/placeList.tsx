import {Prediction} from "../../../api/GoogleAPI";
import {ListBox, ListBoxChangeEvent} from "primereact/listbox";
import {ReactElement} from "react";

interface PlaceListProps {
    places: Prediction[]
    value?: string
    onSelect: (data: Prediction) => void
    template: (option: Prediction) => ReactElement
}


export default function PlaceList(props: PlaceListProps) {
    const {places, onSelect, template, value} = props

    return <ListBox value={value} onChange={(e: ListBoxChangeEvent) => onSelect(e.value)}
                    options={places} optionLabel="name" itemTemplate={template} className="w-full"
                    listStyle={{maxHeight: '268px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'}} style={{}}/>


}