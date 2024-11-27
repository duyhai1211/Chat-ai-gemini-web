import React from "react";

const ChatDetail = () => {
    return (
        <div className="text-white w-[80%]">
            <h1 className="text-xl uppercase font-bold">Gemini</h1>
            <div className="max-w-[70%] w-full mx-auto border mt-32">
            <div className="flex flex-col space-y-5">
                <div className="space-y-1">
                    <h2 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-[30px] inline-block text-transparent bg-clip-text font-bold">
                        Hello
                    </h2>
                    <p className="text-3xl">How can I help you today?</p>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default ChatDetail;
