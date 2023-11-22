import React from "react";

export const App = () => {
    React.useEffect(() => {
        console.log("Hello World from react app");
    }, []);

    return (
        <div>
            <h1>Hello World!</h1>
        </div>
    );
};
