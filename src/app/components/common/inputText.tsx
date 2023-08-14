import Button from "./Button"

interface IInputTextProps {
    placeholder?: string
    value?: string
    className?: string
}

const InputText = ({placeholder, value, className}: IInputTextProps) => {
    return <div className="px-[5px] py-[4px] bg-white rounded-[117px] grid-cols-12">
        <input className="col-span-9 px-5" placeholder={placeholder} value={value} />
        <Button className="px-[55px] py-[15px]" variant="primary">I'm in</Button>
    </div>
}

export default InputText