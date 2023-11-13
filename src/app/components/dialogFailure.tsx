import {Dialog} from "primereact/dialog";
import {Button} from "primereact/button";

interface DialogFailureProps {
    visible: boolean
    setVisible: (data: boolean) => void
}


export default function DialogFailure(props: DialogFailureProps) {
    const {visible, setVisible} = props
    return <Dialog visible={visible} style={{width: '35vw',}} onHide={() => setVisible(false)} draggable={false}
                   pt={{root: {className: 'border-round-sm'}}}>
        <div className="grid justify-content-center align-items-center align-content-center">
            <p className="p-0 m-0 text-3xl text-center font-bold">
                Address updated
            </p>
            <p className="m-4 text-center text-lg font-semibold">
                New address added to your account
            </p>
            <p className="m-1 text-center font-medium text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                u llameo.

            </p>
            <p className="p-2 text-lg font-medium text-center">
                Nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>
        <div className="flex flex-column">
            <div className="flex h-6rem"></div>
        </div>
        <div className="flex justify-content-center align-items-center">
            <div className="flex col-7">
                <Button className="w-full bg-pink-400" rounded label="Understood"/>
            </div>
        </div>
    </Dialog>
}