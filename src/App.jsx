import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    loaderUrl: "/teste/Build/teste.loader.js",
    dataUrl: "/teste/Build/teste.data",
    frameworkUrl: "/teste/Build/teste.framework.js",
    codeUrl: "/teste/Build/teste.wasm",
    productName: "Aviator prototipo",

  });

  return ( <div style={{width: "100vw", height: "100vh", display:'flex', alignItems: 'center', justifyContent: 'center', background:'#4d4d4d',}}>
    {!isLoaded && (
      <p>Loading Application... {Math.round(loadingProgression * 100)}%</p>
    )}
    <Unity
      unityProvider={unityProvider}
      style={{ visibility: isLoaded ? "visible" : "hidden", height:'60%', width:'60%', padding:'100px' }}
    />
  </div>
  )
}

export default App
