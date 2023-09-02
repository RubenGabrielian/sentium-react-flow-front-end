import { Spin } from "antd";
import React from "react";

const Loading = (): JSX.Element => {
    return (
        <div className="loading">
            <Spin size="large" />
        </div>
    )
}

export default Loading;