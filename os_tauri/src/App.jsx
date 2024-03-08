import { useEffect, useState } from "react";
import { arch } from '@tauri-apps/api/os';
import { locale } from '@tauri-apps/api/os';
import { platform } from '@tauri-apps/api/os';
import { type } from '@tauri-apps/api/os';
import { version } from '@tauri-apps/api/os';
import "./App.css";


function App() {
  const [osArch, setOsArch] = useState("null");
  const [osLocale, setOsLocale] = useState("null");
  const [osPlatform, setOsPlatform] = useState("null");
  const [osType, setOsType] = useState("null");
  const [osVersion, setOsVersion] = useState("null");

  useEffect(() => {
    arch().then((value) => {
      setOsArch(value);
    });
    locale().then((value) => {
      setOsLocale(value);
    });
    platform().then((value) => {
      setOsPlatform(value);
    });
    type().then((value) => {
      setOsType(value);
    });
    version().then((value) => {
      setOsVersion(value);
    });
  }, []);

  return (
    <div className="container">
      <h1>Tauri OS API</h1>
      <h3>OS Arch: {osArch}</h3>
      <h3>OS Locale: {osLocale}</h3>
      <h3>OS Platform: {osPlatform}</h3>
      <h3>OS Type: {osType}</h3>
      <h3>OS Version: {osVersion}</h3>
    </div>
  );
}

export default App;
