import React from "react";
import Logo from "../logo/logo";

const AppFooter: React.FC = () => {
    return (
        <div className="fixed bottom-0 w-screen bg-white shadow-lg border-t border-yellow-400 h-16">
            <Logo className="absolute bottom-0 right-4" />
        </div>
    )
};

export default AppFooter;