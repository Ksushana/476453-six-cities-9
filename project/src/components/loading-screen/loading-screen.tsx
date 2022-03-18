function LoadingScreen(): JSX.Element {
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', flexDirection: 'column'}}><div className="lds-dual-ring"></div><p>Loading ...</p></div>
  );
}

export default LoadingScreen;
