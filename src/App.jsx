import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    loaderUrl: "/Aviator P Deploy/Build/Aviator P Deploy.loader.js",
    dataUrl: "/Aviator P Deploy/Build/Aviator P Deploy.data",
    frameworkUrl: "/Aviator P Deploy/Build/Aviator P Deploy.framework.js",
    codeUrl: "/Aviator P Deploy/Build/Aviator P Deploy.wasm",
    productName: "Aviator P Deploy prototipo",

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
