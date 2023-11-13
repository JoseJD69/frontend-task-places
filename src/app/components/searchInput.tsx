import {InputText} from "primereact/inputtext";

interface SearchInputProps {
    value: string
    onChange: (data: string) => void
}

export default function SearchInput(props: SearchInputProps) {
    const {value, onChange} = props
    return <span className="p-input-icon-left">
    <img src="/images/map-pin.png" width="17" height="19"
         style={{position: 'absolute', zIndex: 2, marginTop: 15, left: 8}}/>
    <InputText className="flex w-26rem h-3rem" placeholder="Search" value={value}
               onChange={(event) => onChange(event.target.value)}/>
  </span>

}