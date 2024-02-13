import React from "react";

function Footer() {
    return (
        <div
            style={{
                height: "30px",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1rem",
                backgroundColor: "#999",
            }}
        >
            <p style={{ color: "#000000", textAlign: "center" }}>
                Copyright 2023. InjeUniversity PNN All rights reserved.
            </p>
        </div>
    );
}

export default Footer;
