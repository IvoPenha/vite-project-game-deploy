import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    loaderUrl: "/aviator/Build/aviator teste.loader.js",
    dataUrl: "/aviator/Build/aviator teste.data",
    frameworkUrl: "/aviator/Build/aviator teste.framework.js",
    codeUrl: "/aviator/Build/aviator teste.wasm",
    productName: "Aviator prototipo",

  });

  return ( <div style={{width: "100vw", height: "100vh", display:'flex', alignItems: 'center', justifyContent: 'center', background:'#4d4d4d',}}>
    {!isLoaded && (
      <p>Loading Application... {Math.round(loadingProgression * 100)}%</p>
    )}
    <div style={{height: '50%', width : '50%'}}>

    <Unity
      unityProvider={unityProvider}
      style={{ visibility: isLoaded ? "visible" : "hidden", height: '100%', width: '100%'}}
      />
    </div>
  </div>
  )
}

export default App
