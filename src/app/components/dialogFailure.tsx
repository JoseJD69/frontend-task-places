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
                Out of Delivery Area
            </p>
            <p className="m-4 text-center text-lg font-semibold">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                "Wherever I go, there I am."
            </p>
            <p className="m-1 text-center font-medium text-lg">
                Sadly, this quote is not true for us. In other words, we are
                not operating in your area (yet), but things change
                everyday.

            </p>
            <p className="p-2 text-lg font-medium text-center">
                Sign up to our newsletter to get notified.
            </p>
        </div>
        <div className="flex flex-column">
            <div className="flex h-6rem"></div>
        </div>
        <div className="flex justify-content-center align-items-center">
            <div className="flex col-7">
                <Button className="w-full bg-pink-400" rounded label="Understood" onClick={() => setVisible(false)}/>
            </div>
        </div>
    </Dialog>
}