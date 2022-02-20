import React from "react";
import { GlobalStyle } from "./Styles/global";

import _Container from "./Components/container";

const App = () => {
    return (
        <React.StrictMode>
            <GlobalStyle />
            <_Container />
        </React.StrictMode>
    );
}

export default App;