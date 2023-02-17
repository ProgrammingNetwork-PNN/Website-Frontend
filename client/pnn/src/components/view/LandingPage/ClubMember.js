import React, { useState } from "react";
import "./Landing.css";

function ClubMember(props) {
    const [isCheck, setCheck] = useState(true);
    const [member] = useState(["1학년 모집중!", "2학년", "3학년", "4학년"]);
    return (
        <>
            <div
                // 간단하게 내부에 css스타일링
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px",
                    boxSizing: "border-box",
                    backgroundColor: "#111",
                    width: "100%",
                    height: "60px",
                    color: "#fff",
                }}
            >
                <h1 style={{ fontSize: "2vmax" }}>{props.title}</h1>
                <button
                    onClick={() => {
                        setCheck((e) => !e);
                    }}
                >
                    {isCheck ? "-" : "+"}
                </button>
            </div>
            {isCheck && (
                <p
                    style={{
                        margin: "0",
                        backgroundColor: "#666",
                        color: "#fff",
                        padding: "10px",
                    }}
                >
                    {member.map((a, i) => {
                        return (
                            <>
                                <MemberRect member={member[i]} />
                            </>
                        );
                    })}
                </p>
            )}
        </>
    );
}

export default ClubMember;

function MemberRect(props) {
    return (
        <>
            <p className="RectText">{props.member}</p>
            <hr />
            {props.member == "1학년 모집중!" ? (
                void 0
            ) : (
                <>
                    <div className="Rectangle">홍길동</div>
                    <br />
                    <br />
                    <br />
                </>
            )}
        </>
    );
}
