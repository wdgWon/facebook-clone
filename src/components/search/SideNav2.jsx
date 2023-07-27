import { Link } from "react-router-dom";
import profile_img from "../../img/profile_img5.png";
import { useStore } from "../../store/store";

const FRIENDS_URL = "/friends";

const SideNavCard = ({ url, children }) => {
    return (
        <button type="button" className="px-2">
            <Link to={url}>
                <label className="flex py-2 px-2 space-x-3 items-center  cursor-pointer rounded-md hover:bg-gray-300/50">
                    {children}
                </label>
            </Link>
        </button>
    );
};

const Profile = () => {
    return (
        <SideNavCard>
            <i
                datavisualcompletion="css-img"
                className="bg-[url('https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png')]"
                style={{
                    backgroundPositionY: "-296px",
                    width: "36px",
                    height: "36px",
                }}
            ></i>
            <span className="text-black text-sm">모두</span>
        </SideNavCard>
    );
};

const Friends = () => {
    return (
        <SideNavCard url={FRIENDS_URL}>
            <i
                datavisualcompletion="css-img"
                className="bg-[url('https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png')]"
                style={{
                    backgroundPositionY: "-296px",
                    width: "36px",
                    height: "36px",
                }}
            ></i>
            <span className="text-black text-sm">친구</span>
        </SideNavCard>
    );
};

const Fid = () => {
    return (
        <SideNavCard>
            <img
                draggable="false"
                height="36"
                width="36"
                alt="피드"
                referrerPolicy="origin-when-cross-origin"
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yb/r/eECk3ceTaHJ.png"
            />
            <span className="text-black text-sm">피드</span>
        </SideNavCard>
    );
};

const Event = () => {
    return (
        <SideNavCard>
            <i
                data-visualcompletion="css-img"
                className="bg-[url('https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/WMOYDeEqIYv.png')]"
                style={{ width: "36px", height: "36px" }}
            ></i>
            <span className="text-black text-sm">이벤트</span>
        </SideNavCard>
    );
};

const Watch = () => {
    return (
        <SideNavCard>
            <i
                data-visualcompletion="css-img"
                className='bg-[url("https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png")]'
                style={{
                    backgroundPositionY: "-518px",
                    width: "36px",
                    height: "36px",
                }}
            ></i>
            <span className="text-black/70 text-sm font-semibold">Watch</span>
        </SideNavCard>
    );
};

export default function SideNav() {
    const state = useStore(false)[0];
    return (
        <div className="flex flex-col">
            <Profile />
            <Friends />
            <Fid />
            <Event />
            <Watch />
            <Watch />
            <Watch />
            <Watch />
            <Watch />
            <Watch />
            <Watch />
            <Watch />
            <Watch />
        </div>
    );
}
