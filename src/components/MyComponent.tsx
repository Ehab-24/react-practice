import React from 'react';
import Button from './MyButton';
import MyForm from './MyForm';

type MyComponentProps = {
  children: JSX.Element[] | JSX.Element;
};

function MyComponent(props: MyComponentProps): JSX.Element {
  const btnRef = React.createRef<HTMLButtonElement | null>();

  function sayHi(): void {
    console.log('Hi!');
  }
  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    
    const {value: email} = event.currentTarget[0] as HTMLInputElement;
    console.log(email);
    
    const btn = btnRef.current;
    if (btn) {
        btn.click();
        btn.className = "px-6 h-8 bg-purple-500 text-white font-extrabold tracking-wider rounded-md transition-all";
        setTimeout(() => {
            btn.className = "px-6 h-8 bg-green-500 text-white font-extrabold tracking-wider rounded-md transition-all";
        }
        , 1000);
    }
    console.log('Submitted!');
  }

  return (
    <>
      <h1>My Component</h1>
      <div>{props.children}</div>
      
      <Button onClick={sayHi} ref={btnRef}>
        Hello!
      </Button>

      <MyForm handleSubmit={handleSubmit}>
        <input type="email" className="border-2 my-2"/>
        <input type="password" className="border-2 my-2"/>
      </MyForm>
    </>
  );
}

export default MyComponent;
