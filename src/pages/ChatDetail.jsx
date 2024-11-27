import ImgTemp from "../assets/temp.jpeg";

const ChatDetail = () => {
    return (
        <div className="text-white w-[80%]">
            <h1 className="text-xl uppercase font-bold">Gemini</h1>
            <div className="max-w-[90%] w-full mx-auto mt-32">
                <div className="flex flex-col space-y-5">
                    <div className="space-y-1">
                        <h2 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-[30px] inline-block text-transparent bg-clip-text font-bold">
                            Hello
                        </h2>
                        <p className="text-3xl">How can I help you today?</p>
                    </div>
                </div>
                <div className="flex items-center space-x-3 mt-10">
                    <div className="w-[200px] h-[200px] bg-primaryBg-sideBar flex items-center justify-center rounded-lg">
                        <p>Meal planning</p>
                    </div>

                    <div className="w-[200px] h-[200px] bg-primaryBg-sideBar flex items-center justify-center rounded-lg">
                        <p>Memorize vocabulary</p>
                    </div>

                    <div className="w-[200px] h-[200px] bg-primaryBg-sideBar flex items-center justify-center rounded-lg">
                        <p>How cars work?</p>
                    </div>

                    <div className="w-[200px] h-[200px] bg-primaryBg-sideBar flex items-center justify-center rounded-lg flex-col">
                        <p>Create images with AI</p>
                        <img src={ImgTemp} alt="temp" className="w-[150px] h-[150px]" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatDetail;
