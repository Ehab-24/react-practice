type HeaderProps = {
  title: string;
};

function header(props: HeaderProps): JSX.Element {
  return (
    <>
      <h1>{props.title}</h1>
      <MyComponent>
        <p>This can be anything specified by the parent</p>
      </MyComponent>
    </>
  );
}

//  *   ///////////////

type MyComponentProps = {
  children: JSX.Element[] | JSX.Element;
};

function MyComponent(props: MyComponentProps): JSX.Element {
  return (
    <>
      <h1>My Component</h1>
      <div>{props.children}</div>
    </>
  );
}

export default header;
