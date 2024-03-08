import "./App.css";
import { isPermissionGranted, requestPermission, sendNotification } from '@tauri-apps/api/notification';

function App() {
  const notify = async () => {
    let permissionGranted = await isPermissionGranted();
    if (!permissionGranted) {
      const permission = await requestPermission();
      permissionGranted = permission === 'granted';
    }
    if (permissionGranted) {
      sendNotification('Tauri React notification');
      sendNotification({ title: 'TAURI', body: 'System notification from Tauri React' });
    }
  }
  return (
    <div className="container">
      <h1>Tauri React Notification</h1>
      <br/>
      <button onClick={notify}>Notify</button>
    </div>
  );
}

export default App;
