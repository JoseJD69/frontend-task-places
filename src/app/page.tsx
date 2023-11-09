'use client';
import { Dialog } from 'primereact/dialog';
import {Button} from "primereact/button";
import {useState} from "react";

export default function Home() {
    const [visible, setVisible] = useState(false);

  return (
      <><Button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} />
        <Dialog header="Header" visible={visible} onHide={() => setVisible(false)}
                style={{ width: '50vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}>
          <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Dialog></>
  )
}
