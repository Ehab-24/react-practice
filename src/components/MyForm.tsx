import Button from "./MyButton";

type FormProps = {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    children: JSX.Element[] | JSX.Element;
}

export default function MyForm(props: FormProps): JSX.Element {
    return (
        <form onSubmit={props.handleSubmit} className="flex flex-col items-center">
            {props.children}
            <Button type="submit">
                Submit
            </Button>
        </form>
    )
}