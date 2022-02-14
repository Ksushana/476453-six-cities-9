import Main from '../main-page/main-page';

type AppScreenProps = {
  placesToStay: number;
}

function App({placesToStay}: AppScreenProps): JSX.Element {
  return (
    <Main placesToStay={placesToStay}/>
  );
}

export default App;
