
import { useState } from "react";
import "./../styles/ethics.css";

export default function Ethics() {
    const [open1, setOpen1] = useState(true);
    const [open2, setOpen2] = useState(true);
    const [open3, setOpen3] = useState(true);
    const [open4, setOpen4] = useState(true);
    const [open5, setOpen5] = useState(true);
    const [open6, setOpen6] = useState(true);
    const [open7, setOpen7] = useState(true);
    const [open8, setOpen8] = useState(true);
    return (
        // 전체 섹션
        <div className="main">
            {/* 2장 존재와 기억 */}
            <div className="question-section">
                <h2
                    className="question-header"
                    onClick={() => setOpen1(!open1)}
                    style={{ cursor: "pointer" }}
                >
                    존재와 기억 {open1
                        ? <img src="/icons/chevron-up.svg" alt="" aria-hidden="true" />
                        : <img src="/icons/chevron-down.svg" alt="" aria-hidden="true" />
                    }
                </h2>

                {open1 && (
                    <div className="question-content-section">
                        <div className="question-content">
                            Q1. 인공지능 기술을 이용해 나와 얼굴, 목소리가 똑같은 가상의 존재에 내 기억을 저장할 수 있다면 어떨까?
                        </div>
                        <div className="question-content">
                            Q2. 내가 죽은 후에도 그 존재가 다른들과 이야기를 나눌 수 있다면 어떨까?
                        </div>
                        <div className="question-content">
                            Q3. 우리는 그 많은 모습 중 어떤 모습으로 기억되길 원하는걸까?
                        </div>
                        <div className="question-content">
                            Q4. 다양한 사회적 자아를 모두 포함한 '나'일까? 아니면 어떤 특정한 모습과 역할을 하는 '나'일까?
                        </div>
                        <div className="question-content">
                            Q5. 죽음 이후에도 나를 닮은 아바타의 입을 통해 오래도록 기억되고 전달되길 원하는 이야기는 무엇일까?
                        </div>
                        <div className="question-content">
                            Q6. 죽음 이후에도 오래도록 살아남아 세상을 풍요롭게 만들어줄 이야기는 무엇일까?
                        </div>
                        <div className="question-content">
                            Q7. 나를 재현한 디지털 아바타가 사후에도 디지털상에 남아 있다고 해서 불멸의 삶을 산다고 말할 수 있을까?
                        </div>
                        <div className="question-content">
                            Q8. 만약 나의 디지털 도플갱어가 학습을 통해 계속 발전해나간다면, 그때도 '나'라고 할 수 있을까?
                        </div>
                        <div className="question-content">
                            Q9. 죽은 사람이 온라인에서 활동하는 것이 괜찮을까?
                        </div>
                        <div className="question-content">
                            Q10. 디지털 도플갱어가 올린 글로 문제가 발생하면 누구에게 책임을 물어야 할까?
                        </div>
                    </div>
                )}
            </div>
            {/* 3장 대화와 관계 */}
            <div className="question-section">
                <h2
                    className="question-header"
                    onClick={() => setOpen2(!open2)}
                    style={{ cursor: "pointer" }}
                >
                    대화와 관계 {open2
                        ? <img src="/icons/chevron-up.svg" alt="" aria-hidden="true" />
                        : <img src="/icons/chevron-down.svg" alt="" aria-hidden="true" />
                    }
                </h2>

                {open2 && (
                    <div className="question-content-section">
                        <div className="question-content">
                            Q1. 인공지능 인형이나 장난감을 아이들 곁에 둬도 괜찮은 걸까?
                        </div>
                        <div className="question-content">
                            Q2. 챗봇과의 대화가 사람에게 영향을 미칠 수 있을까?
                        </div>
                        <div className="question-content">
                            Q3. 챗봇과의 대화 서비스가 소외감이나 외로움을 느끼거나 대화 상대가 필요한 사람들에게 정말 도움이 될까?
                        </div>
                        <div className="question-content">
                            Q4. 왜 사람들은 인공지능에게 개인적인 이야기를 털어놓는 걸까?
                        </div>
                        <div className="question-content">
                            Q5. 인공지능 서비스가 인간과의 관계를 대체하고 있는 상황에서 우리의 대화와 관계는 앞으로 어떻게 변하게 될까?
                        </div>
                        <div className="question-content">
                            Q6. 인공지능과의 대화가 보편화된다면 어떤 일이 일어날까?
                        </div>
                        <div className="question-content">
                            Q7. 온라인 '인간' 친구와 '인공지능' 친구의 관계 맺음의 차이는 어디서 발생할까?
                        </div>
                        <div className="question-content">
                            Q8. 인간적인 속성을 부여한 로봇을 인간에게 제공해 심리적, 정서적 돌봄을 맡기는 일이 바람직할까?
                        </div>
                        <div className="question-content">
                            Q9. 고유한 기억과 경험을 가진 존재를 단순한 도구로만 볼 수 있을까?
                        </div>
                        <div className="question-content">
                            Q10. 우리가 맺을 수 있는 관계의 형태는 무엇일까?
                        </div>
                    </div>
                )}
            </div>
            {/* 4장 믿음과 신뢰 */}
            <div className="question-section">
                <h2
                    className="question-header"
                    onClick={() => setOpen3(!open3)}
                    style={{ cursor: "pointer" }}
                >
                    믿음과 신뢰 {open3
                        ? <img src="/icons/chevron-up.svg" alt="" aria-hidden="true" />
                        : <img src="/icons/chevron-down.svg" alt="" aria-hidden="true" />
                    }
                </h2>

                {open3 && (
                    <div className="question-content-section">
                        <div className="question-content">
                            Q1. 사람들은 딥페이크를 잘 구분하지 못할까?
                        </div>
                        <div className="question-content">
                            Q2. 눈에는 보이는 것은 믿을 수 있는가? 믿어야 하는가?
                        </div>
                    </div>
                )}
            </div>
            {/* 5장 추천과 선택 */}
            <div className="question-section">
                <h2
                    className="question-header"
                    onClick={() => setOpen4(!open4)}
                    style={{ cursor: "pointer" }}
                >
                    추천과 선택 {open4
                        ? <img src="/icons/chevron-up.svg" alt="" aria-hidden="true" />
                        : <img src="/icons/chevron-down.svg" alt="" aria-hidden="true" />
                    }
                </h2>

                {open4 && (
                    <div className="question-content-section">
                        <div className="question-content">
                            Q1. 추천 서비스는 어떤 데이터를 바탕으로 작동하고 있는 걸까?
                        </div>
                        <div className="question-content">
                            Q2. 기업은 수집한 우리의 데이터로 무엇을 할까?
                        </div>
                        <div className="question-content">
                            Q3. 인공지능이 생각해낸 것을 내가 생각한 것이라고 착각하고 있는 것은 아닐까?
                        </div>
                    </div>
                )}
            </div>
            {/* 6장 위임과 책임 */}
            <div className="question-section">
                <h2
                    className="question-header"
                    onClick={() => setOpen5(!open5)}
                    style={{ cursor: "pointer" }}
                >
                    위임과 책임 {open5
                        ? <img src="/icons/chevron-up.svg" alt="" aria-hidden="true" />
                        : <img src="/icons/chevron-down.svg" alt="" aria-hidden="true" />
                    }
                </h2>

                {open5 && (
                    <div className="question-content-section">
                        <div className="question-content">
                            Q1. 인공지능이 내린 판단은 정말로 인간의 기대만큼 객관적이고 공정할까?
                        </div>
                        <div className="question-content">
                            Q2. 인간은 자신의 일을 인공지능에게 어디까지 맡길 의향이 있는가?
                        </div>
                    </div>
                )}
            </div>
            {/* 7장 고용과 일 */}
            <div className="question-section">
                <h2
                    className="question-header"
                    onClick={() => setOpen6(!open6)}
                    style={{ cursor: "pointer" }}
                >
                    고용과 일 {open6
                        ? <img src="/icons/chevron-up.svg" alt="" aria-hidden="true" />
                        : <img src="/icons/chevron-down.svg" alt="" aria-hidden="true" />
                    }
                </h2>

                {open6 && (
                    <div className="question-content-section">
                        <div className="question-content">
                            Q1. 이전의 자동화와 앞으로의 자동화는 어떻게 다를까?
                        </div>
                        <div className="question-content">
                            Q2. 인공지능으로 무장한 기계가 우리의 일자리르 빼앗아갈까?
                        </div>
                        <div className="question-content">
                            Q3. 인공지능 기술을 활용해 무엇을 자동화하고 무엇은 자동화하지 않을 것인가?
                        </div>
                        <div className="question-content">
                            Q4. 인공지능 기술의 발전이 일과 일자리에 가져오는 변화는 구체적으로 어떤 모습일까? 그 변화의 흐름은 어떤 방향일까?
                        </div>
                    </div>
                )}
            </div>
            {/* 8장 배움과 학습 */}
            <div className="question-section">
                <h2
                    className="question-header"
                    onClick={() => setOpen7(!open7)}
                    style={{ cursor: "pointer" }}
                >
                    배움과 교육 {open7
                        ? <img src="/icons/chevron-up.svg" alt="" aria-hidden="true" />
                        : <img src="/icons/chevron-down.svg" alt="" aria-hidden="true" />
                    }
                </h2>

                {open7 && (
                    <div className="question-content-section">
                        <div className="question-content">
                            Q1. 모든 것이 불확실하고 예측 불가능한 상황에서 배워야 할 것은 무엇일까?
                        </div>
                        <div className="question-content">
                            Q2. 기술이 대체할 수 없는 '인간 고유의 능력'은 어떤 역량을 말하는 걸까?
                        </div>
                        <div className="question-content">
                            Q3. 창의성이 발현되기 위해서는 어떤 조건이 필요할까?
                        </div>
                        <div className="question-content">
                            Q4. 정말 인간만이 발휘할 수 있는 창의성의 영역이 있는걸까?
                        </div>
                        <div className="question-content">
                            Q5. 비판적 사고는 왜 필요할까? 그리고 최근에 더 중요해진 이유는 무엇일까?
                        </div>
                        <div className="question-content">
                            Q6. 왜 학교에서 배운 비판적 사고 기술이 업무 현장이나 일상생활에서 발현되지 못하는 걸까?
                        </div>
                    </div>
                )}
            </div>
            {/* 9장 생산과 윤리 */}
            <div className="question-section">
                <h2
                    className="question-header"
                    onClick={() => setOpen8(!open8)}
                    style={{ cursor: "pointer" }}
                >
                    생산과 윤리 {open8
                        ? <img src="/icons/chevron-up.svg" alt="" aria-hidden="true" />
                        : <img src="/icons/chevron-down.svg" alt="" aria-hidden="true" />
                    }
                </h2>

                {open8 && (
                    <div className="question-content-section">
                        <div className="question-content">
                            Q1. 딥페이크 성착취물은 왜 이렇게 증가한 걸까?
                        </div>
                        <div className="question-content">
                            Q2. 왜 딥페이크 성착취물에서 10대의 비율이 높은 걸까?
                        </div>
                        <div className="question-content">
                            Q3. 한 인간이 오랜 시간에 걸쳐 구축한 스타일을 원작자의 동의 없이 몇줄의 프롬프트만으로 쉽게 복재해 가져다 써도 되는가?
                        </div>
                        <div className="question-content">
                            Q4. 정말 인간만이 발휘할 수 있는 창의성의 영역이 있는걸까?
                        </div>
                        <div className="question-content">
                            Q5. 비판적 사고는 왜 필요할까? 그리고 최근에 더 중요해진 이유는 무엇일까?
                        </div>
                        <div className="question-content">
                            Q6. 왜 학교에서 배운 비판적 사고 기술이 업무 현장이나 일상생활에서 발현되지 못하는 걸까?
                        </div>
                    </div>
                )}
            </div>
            <div className="caption">
                위 내용은 우숙영님이 쓰신 "어느날 미래가 도착했다"에서 발췌하였습니다.
            </div>
        </div >
    );
}
