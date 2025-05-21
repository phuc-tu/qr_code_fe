import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import TablePage from "./pages/tables/Page";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="flex flex-col items-center min-h-screen p-4 bg-base-200">
            <h1 className="text-5xl font-bold">Danh sách bàn</h1>
            <div className="flex flex-wrap gap-4 wrap mt-4 w-full justify-center">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                    <TablePage id={item} />
                ))}
            </div>
        </div>
    );
}

export default App;
