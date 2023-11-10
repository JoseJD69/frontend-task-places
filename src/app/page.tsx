'use client';
import {Dialog} from 'primereact/dialog';
import {Button} from "primereact/button";
import {useState} from "react";
import {AutoComplete, AutoCompleteCompleteEvent} from 'primereact/autocomplete';
import {InputText} from "primereact/inputtext";
import { ListBox, ListBoxChangeEvent } from 'primereact/listbox';

interface Country {
    name: string;
    code: string;
}
export default function Home() {
    const [visible, setVisible] = useState(false);
    const [value, setValue] = useState<string>('');
    const [items, setItems] = useState<string[]>([]);
    const [selectedCountries, setSelectedCountries] = useState<Country | null>(null);
    const countries: Country[] = [
        { name: 'Australia', code: 'AU' },
        { name: 'Brazil', code: 'BR' },
        { name: 'China', code: 'CN' }
    ];
    const countryTemplate = (option: Country) => {
        return (
            <div className="flex align-items-center">
                <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`flag flag-${option.code.toLowerCase()}`} style={{ width: '1.25rem', marginRight: '.5rem' }}/>
                <div>{option.name}</div>
            </div>
        );
    };
    const search = (event: AutoCompleteCompleteEvent) => {
        // @ts-ignore
        setItems([...Array(10).keys()].map(item => event.query + '-' + item));
    }
    return (
        <>
            <div className="flex flex-wrap h-screen p-0 m-0">
                <div
                    className="col-12 flex justify-content-center border-round">
                    <div className="flex flex-column  align-content-center">
                        <div>
                            <p className="text-3xl text-center">
                                Where are you located?
                            </p>
                        </div>
                        <div><p className="text-center">
                            So we know where to drop off the stuff
                        </p></div>
                        <div><p className="text-center">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            We won't share you address
                            <br/>
                            with your ex(or whoever).
                        </p></div>
                        <div><p className="text-center">

                        </p></div>
                        <div className="flex justify-content-center align-content-center flex-wrap">
                                    <span className="p-input-icon-left"><i className="pi pi-search"/>
                                <InputText className="flex w-26rem" placeholder="Search"/>
                            </span>

                        </div>
                        <ListBox value={selectedCountries} onChange={(e: ListBoxChangeEvent) => setSelectedCountries(e.value)} options={countries} optionLabel="name"
                                 itemTemplate={countryTemplate} className="w-full" listStyle={{ maxHeight: '250px' }} />
                    </div>

                </div>
            </div>
        </>
    )
}
