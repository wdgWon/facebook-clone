import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import rootRouter from "./router/Router";
import setActions from "./store/actions/actions";

// 상태 관련 액션함수 선언
setActions();

// ux 고려한 화면 스크롤
document.body.style.overflow = "hidden scroll";

ReactDOM.createRoot(document.getElementById("root")).render(
   <RouterProvider router={rootRouter} />
);