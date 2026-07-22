import { StrictMode } from "react";
// StrictMode giúp React phát hiện một số vấn đề trong quá trình phát triển.
import { createRoot } from "react-dom/client";
//createRoot dùng để tạo vùng hiển thị React trong HTML.
import "./index.css";
//Dòng này đưa CSS chung của dự án vào ứng dụng.
import App from "./App.tsx";
//Dòng này lấy component App từ file App.tsx.
createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
//đưa component App vào trong thẻ HTML có id là root.
