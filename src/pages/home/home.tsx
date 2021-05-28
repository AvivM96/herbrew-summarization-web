import React from "react";
import WelcomeMessage from "../../components/welcome-message/welcome-message";
import SummarizeForm from "../../features/summarize-form/summarize-form";

const HomePage: React.FC = () => {
    return (
        <div className="flex flex-col p-6 sm:w-1/2">
            <WelcomeMessage />
            <SummarizeForm />
        </div>
    )
};

export default HomePage;