import MyComponent from './MyComponent';
import MyButton from './MyButton';
import { Theme } from '../types/theme';
import useTheme from '../hooks/useTheme';

export type HeaderProps = {
  title: string;
};

function Header(props: HeaderProps): JSX.Element {
  const { theme, setTheme } = useTheme();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const newTheme = (
      event.currentTarget[0] as HTMLInputElement
    ).value.toLowerCase();
    setTheme(newTheme as Theme);
  }

  return (
    <>
      <section>
        <h1 className='text-2xl font-bold text-slate-500'>{props.title}</h1>
        <MyComponent>
          <p>Forward Refs</p>
        </MyComponent>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold text-slate-500">Current theme: {theme}</h2>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input className="border-2 mb-2" placeholder="dark, light, cream" />
          <MyButton type="submit">
            <p>Set Theme</p>
          </MyButton>
        </form>
      </section>
    </>
  );
}

export default Header;
