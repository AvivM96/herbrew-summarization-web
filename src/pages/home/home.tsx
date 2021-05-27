import React from "react";
import WelcomeMessage from "../../components/welcome-message/welcome-message";
import TextPaste from "../../components/text-paste/text-paste";
import Button from "../../components/button/button";

const HomePage: React.FC = () => {
    return (
        <div className="flex flex-col p-6 sm:w-1/2">
            <WelcomeMessage />
            <TextPaste />
            <Button className="mt-12 self-center w-full">
                Summarize !
            </Button>
        </div>
    )
};

export default HomePage;