import React from "react";

type MyButtonProps = {
    type?: "button" | "reset" | "submit",
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children: JSX.Element | JSX.Element[] | string;
}

const MyButton = React.forwardRef((props: MyButtonProps, ref: React.ForwardedRef<HTMLButtonElement | null>) => {
    return (
        <button type={props.type} onClick={props.onClick} ref={ref} className="px-6 h-8 bg-green-500 text-white font-extrabold tracking-wider rounded-md transition-all">
            {props.children}
        </button>
    );
});

export default MyButton;