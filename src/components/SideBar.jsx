import PropTypes from "prop-types"; // Sửa PropType thành PropTypes
import IconPlus from "../assets/plusIcon.png";
import IconChat from "../assets/chat.png";
import IconTrash from "../assets/remove.png";
import IconMenu from "../assets/menu.png";

const SideBar = ({ onToggle }) => {
    return (
        <div className="bg-primaryBg-sideBar w-[280px] h-screen text-white p-8">
            <button className="flex ml-auto xl:hidden" onClick={onToggle}>
                <img src={IconMenu} alt="menu icon" className="w-10 h-10" loading="lazy" />
            </button>
            <div className="mt-20">
                <button className="px-4 py-2 flex items-center space-x-4 bg-gray-600 mb-10">
                    <img src={IconPlus} alt="plus icon" className="w-4 h-4" loading="lazy" />
                    <p>New Chat</p>
                </button>
                <p>Recents:</p>
                <div className="flex flex-col space-y-6">
                    <div className="flex items-center justify-between p-4 bg-gray-800">
                        <div className="flex items-center space-x-4">
                            <img
                                src={IconChat}
                                alt="chat icon"
                                className="w-8 h-8"
                                loading="lazy"
                            />
                            <p>chat</p>
                        </div>
                        <img
                            src={IconTrash}
                            alt="trash icon"
                            className="w-5 h-5"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

SideBar.propTypes = {
    onToggle: PropTypes.func.isRequired, // Đảm bảo rằng onToggle là một hàm bắt buộc
};

export default SideBar;
