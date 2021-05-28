import React from "react";
import WelcomeMessage from "../../components/welcome-message/welcome-message";
import SummarizeForm from "../../features/summarize-form/summarize-form";
import HistoryList from "../../features/history-list/history-list";
import useIsDesktopMediaQuery from "../../hooks/useIsDesktopMediaQuery";

const HomePage: React.FC = () => {
    const isDesktop = useIsDesktopMediaQuery();

    return (
        <div className="flex flex-col p-6 sm:w-1/2">
            <WelcomeMessage />
            <SummarizeForm />
            {isDesktop && <HistoryList />}
        </div>
    )
};

export default HomePage;