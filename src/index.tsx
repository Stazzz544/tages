import axios from 'axios'
import ReactDOM from "react-dom/client";
import './css/index.css';
import App from './App';
import { setupStore } from "./redux/store";
import { Provider } from 'react-redux';


const store = setupStore()

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <Provider store={store}>
      <App />
    </Provider>
);

