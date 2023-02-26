import React, { useState } from "react";

function MemberPage(props) {
    const [member] = useState(["18학번", "19학번", "20학번", "21학번"]);
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
                    backgroundColor: "#fff",
                    width: "100%",
                    height: "65px",
                    color: "#fff",
                }}
            >
                <h1 style={{ fontSize: "2vmax" }}>{props.title}</h1>
            </div>
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
        </>
    );
}

function MemberRect(props) {
    return (
        <>
            <p className="RectText">{props.member}</p>
            <hr />
            {props.member === "18학번" ? (
                <>
                    <div className="Rectangle" style={{ width: "28vmax" }}>
                        권승현 | 신민승 | 이재현 | 이현수 | 장보민 | 정대희 |
                        천예준
                    </div>
                    <br />
                </>
            ) : (
                void 0
            )}
            {props.member === "19학번" ? (
                <>
                    <div className="Rectangle" style={{ width: "20vmax" }}>
                        고동민 | 김재민 | 어정훈 | 정필교 | 최원석
                    </div>
                    <br />
                </>
            ) : (
                void 0
            )}

            {props.member === "20학번" ? (
                <>
                    <div className="Rectangle" style={{ width: "16vmax" }}>
                        이고은 | 이승훈 | 정민영 | 현지훈
                    </div>
                    <br />
                </>
            ) : (
                void 0
            )}
            {props.member === "21학번" ? (
                <>
                    <div className="Rectangle" style={{ width: "20vmax" }}>
                        강민석 | 신수현 | 오유빈 | 이영채 | 이유진
                    </div>
                    <br />
                </>
            ) : (
                void 0
            )}
        </>
    );
}

export default MemberPage;