import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";
import Gemini from "./gemini/index.js";
import { useDispatch } from "react-redux";

function App() {
    const dispatch = useDispatch();
    const  {data} = useSelector(state => SVGGradientElement.chat)
    return (
        <>
            <div className="bg-primaryBg-default h-screen flex">
                <div className="xl:block hidden">
                    <SideBar />
                </div>
                <Outlet />
            </div>
        </>
    );
}

export default App;
