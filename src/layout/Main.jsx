import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div>
            This is main layout
            <Outlet/>
        </div>
    );
};

export default Main;