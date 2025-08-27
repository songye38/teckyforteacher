import "./../styles/arduino.css";


export default function Arduino() {
    return (
        <div style={{ padding: 60, fontFamily: "'Noto Sans KR', sans-serif", color: '#222', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h1>아두이노 기초 익히기</h1>


            {/*  1️⃣ 아두이노란? */}
            <div style={{ backgroundColor: '#F5F5F5', padding: '28px', borderRadius: '12px', marginBottom: '12px' }}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 16 }}>
                    <h1 style={{ margin: 0 }}>1 아두이노란?</h1>
                </div>
                <div className="content">아두이노는 작은 컴퓨터 보드입니다. <br />
                    컴퓨터처럼 모니터나 키보드가 달려 있지는 않지만, 손바닥만 한 보드 안에 명령을 실행하는 두뇌가 들어 있다고 볼 수 있습니다. <br />

                    예를 들어, <br /><br />

                    버튼을 누르면 불이 켜져라. <br />

                    온도가 올라가면 소리를 내라. <br /><br />

                    이와 같은 명령을 주면 아두이노가 센서와 부품을 작동시켜 그대로 실행합니다. 그래서 교실에서는 작은 발명 도구로 불릴 만큼, 아이디어를 바로 현실로 만들어 볼 수 있는 장치입니다.</div>
                <div>
                    <img
                        src="/images/arduinos/arduino_due_without_header.webp"
                        alt="arduino_due_without_header 모델 이미지"
                        style={{ width: 280 }}
                    />
                    <img
                        src="/images/arduinos/arduino_giga.webp"
                        alt="arduino_giga 모델 이미지"
                        style={{ width: 280 }}
                    />
                    <img
                        src="/images/arduinos/arduino_mega.webp"
                        alt="arduino_mega 모델 이미지"
                        style={{ width: 280 }}
                    />
                    <img
                        src="/images/arduinos/arduino_nano.webp"
                        alt="arduino_nano 모델 이미지"
                        style={{ width: 280 }}
                    />
                    <img
                        src="/images/arduinos/arduino_rock.webp"
                        alt="arduino_rock 모델 이미지"
                        style={{ width: 280 }}
                    />
                    <img
                        src="/images/arduinos/arduino_stella.webp"
                        alt="arduino_stella 모델 이미지"
                        style={{ width: 280 }}
                    />
                    <img
                        src="/images/arduinos/arduino_uno_wifi.webp"
                        alt="arduino_uno_wifi 모델 이미지"
                        style={{ width: 280 }}
                    />
                    <img
                        src="/images/arduinos/arduino_uno.webp"
                        alt="arduino_uno 모델 이미지"
                        style={{ width: 280 }}
                    />
                </div>
            </div>

            {/*  2️⃣ 준비물 */}
            <div style={{ backgroundColor: '#F5F5F5', padding: '28px', borderRadius: '12px', marginBottom: '12px' }}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 16 }}>
                    <h1 style={{ margin: 0 }}>2 아두이노 준비물</h1>
                </div>

                {/*  2-1. 아두이노 보드 종류 */}
                <div style={{ backgroundColor: '#F5F5F5', padding: '20px', borderRadius: '12px', marginBottom: '12px' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 16 }}>
                        <h2 style={{ margin: 0 }}>2-1. 아두이노 보드 종류</h2>
                    </div>
                    <div className="content">
                        <div className="sub-section">
                            <div className="sub-header">아두이노 UNO
                                <div className="sub-content">가장 기본적이고 입문용으로 많이 사용되는 모델입니다. 확장성이 좋고 자료가 많아 교실에서 활용하기 적합합니다.</div>
                            </div>
                            <img
                                src="/images/arduinos/arduino_uno.webp"
                                alt="arduino_uno 모델 이미지"
                                style={{ width: 280 }}
                            />
                        </div>
                        <div className="sub-section">
                            <div className="sub-header">아두이노 NANO
                                <div className="sub-content">크기가 작아서 공간을 절약할 수 있습니다. 브레드보드에 바로 꽂아서 사용하기 좋아 실습형 수업에서 편리합니다.</div>
                            </div>
                            <img
                                src="/images/arduinos/arduino_nano.webp"
                                alt="arduino_nano 모델 이미지"
                                style={{ width: 280 }}
                            />
                        </div>
                        <div className="sub-section">
                            <div className="sub-header">아두이노 정품보드
                                <div className="sub-content">안정성과 호환성이 뛰어나 수업용으로 적합하나 가격이 호환보드보다 비쌉니다. 정품은 arduino 글자가 새겨져 있습니다.</div>
                            </div>
                            <img
                                src="/images/arduinos/arduino_uno.webp"
                                alt="arduino_uno 아두이노 우노 정품보드 이미지"
                                style={{ width: 280 }}
                            />
                        </div>
                        <div className="sub-section">
                            <div className="sub-header">아두이노 호환보드
                                <div className="sub-content">가격이 저렴하지만 품질과 호환성은 다소 차이가 날 수 있습니다. 호환보드는 보통 이름 없이 uno라고 새겨져 있습니다.</div>
                            </div>
                            <img
                                src="/images/arduinos/arduino_uno_r3.png"
                                alt="arduino_uno 아두이노 우노 호환보드 이미지"
                                style={{ width: 280 }}
                            />
                        </div>
                        <div className="tip">Mega, Leonardo 등 다른 모델도 있지만, 초보 교사나 학생들에게는 UNO가 가장 무난합니다. 저희 수업시간에도 arduino uno를 사용합니다.<br />
                            <a className="buy-link" href="https://store-usa.arduino.cc/collections/boards-modules">아두이노 공식 판매 사이트(영문)</a>
                            <a className="buy-link" href="https://www.devicemart.co.kr/goods/catalog?code=00050001">디바이스 마트 (한국)</a>
                            <a className="buy-link" href="https://www.eleparts.co.kr/goods/brand?brand_code=0971">엘레파츠 (한국)</a>
                        </div>
                    </div>
                </div>


                {/*  2-2. 기본 전자 부품 */}
                <div style={{ backgroundColor: '#F5F5F5', padding: '20px', borderRadius: '12px', marginBottom: '12px' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 16 }}>
                        <h2 style={{ margin: 0 }}>2-2. 기본 전자 부품</h2>
                    </div>
                    <div className="content">
                        <div className="sub-section">
                            <div className="sub-header">USB 케이블
                                <div className="sub-content">컴퓨터와 아두이노 보드를 연결하는 기본 연결선입니다. (대부분 보드 구매 시 함께 제공됩니다.)</div>
                                <img
                                    src="/images/materials/arduino_cable.jpg"
                                    alt="아두이노 보드와 컴퓨터를 연결하는 데 사용되는 케이블 이미지"
                                    style={{ width: 280 }}
                                />
                                <div className="tip">케이블은 보드에 따라 달라집니다. 아두이노 보드를 구매하실 때 케이블이 함께 오는지 확인하고 같이 오지 않는다면 보드에 맞는 케이블을 구매해주세요. <br />
                                    <a className="buy-link" href="https://www.devicemart.co.kr/goods/view?no=1330154">구매링크 : 아두이노 우노와 컴퓨터를 연결하는 기본 케이블 <br /></a>
                                </div>
                            </div>
                        </div>
                        <div className="sub-section">
                            <div className="sub-header">LED
                                <div className="sub-content">전자학습의 기본. 불을 켜고 끄는 가장 쉬운 실습 부품입니다.</div>
                                <img
                                    src="/images/materials/arduino_led.jpeg"
                                    alt="LED 부품 이미지"
                                    style={{ width: 280 }}
                                />
                                <div className="tip">케이블은 보드에 따라 달라집니다. 아두이노 보드를 구매하실 때 케이블이 함께 오는지 확인하고 같이 오지 않는다면 보드에 맞는 케이블을 구매해주세요. <br />
                                    <a className="buy-link" href="https://www.devicemart.co.kr/goods/view?no=1313547">구매링크 : LED 샘플키트<br /></a>
                                    <a className="buy-link" href="https://www.devicemart.co.kr/goods/view?no=1287089">구매링크 : 아두이노 RGB LED 모듈<br /></a>
                                </div>
                            </div>
                        </div>
                        <div className="sub-section">
                            <div className="sub-header">저항
                                <div className="sub-content">전류가 너무 많이 흐르지 않도록 조절하는 장치입니다. LED와 함께 꼭 필요합니다.</div>
                                <img
                                    src="/images/materials/arduino_cable.jpg"
                                    alt="저항 부품 이미지"
                                    style={{ width: 280 }}
                                />
                            </div>
                            <div className="tip">브레드보드는 크기에 따라 가격이 달라지지만 가격 자체가 그렇게 비싸지 않으므로 다양한 사이즈로 2~3개씩 구매하시길 권장합니다. <br />
                                <a className="buy-link" href="https://www.devicemart.co.kr/goods/view?no=1385274">구매링크 : 저항 키트 기본 <br /></a>
                                <a className="buy-link" href="https://www.devicemart.co.kr/goods/view?no=12533737">구매링크 : 저항 키트 고급 <br /></a>
                            </div>
                        </div>
                        <div className="sub-section">
                            <div className="sub-header">브레드보드
                                <div className="sub-content">납땜 없이 부품을 꽂아 실험할 수 있는 판입니다. 선생님들이 학생과 함께 빠르게 실습할 때 유용합니다.</div>
                                <img
                                    src="/images/materials/breadboard_1.jpeg"
                                    alt="브레드보드 이미지 첫 번째"
                                    style={{ width: 280 }}
                                />
                                <img
                                    src="/images/materials/breadboard_2.jpeg"
                                    alt="브레드보드 이미지 두 번째"
                                    style={{ width: 280 }}
                                />
                                <div className="tip">브레드보드는 크기에 따라 가격이 달라지지만 가격 자체가 그렇게 비싸지 않으므로 다양한 사이즈로 2~3개씩 구매하시길 권장합니다. <br />
                                    <a className="buy-link" href="https://www.devicemart.co.kr/goods/view?no=1329504">구매링크 : 브레드보드 소 <br /></a>
                                    <a className="buy-link" href="https://www.devicemart.co.kr/goods/view?no=1328148">구매링크 : 브레드보드 중 <br /></a>
                                    <a className="buy-link" href="https://www.devicemart.co.kr/goods/view?no=1322408">구매링크 : 브레드보드 대 <br /></a>
                                </div>
                            </div>
                        </div>
                        <div className="sub-section">
                            <div className="sub-header">점퍼 케이블
                                <div className="sub-content">부품과 아두이노 보드를 연결하는 전선입니다. (수-수, 수-암, 암-암 타입이 있음)</div>
                                <img
                                    src="/images/materials/cable_f_to_f.png"
                                    alt="아두이노와 컴퓨터를 연결하는데 사용되는 케이블 (암-암)"
                                    style={{ width: 280 }}
                                />
                                <img
                                    src="/images/materials/cable_f_to_m.jpeg"
                                    alt="아두이노와 컴퓨터를 연결하는데 사용되는 케이블 (암-수)"
                                    style={{ width: 280 }}
                                />
                                <img
                                    src="/images/materials/cable_m_to_m.png"
                                    alt="아두이노와 컴퓨터를 연결하는데 사용되는 케이블 (수-수)"
                                    style={{ width: 280 }}
                                />
                                <div className="tip">점퍼 케이블은 길면 길수록 더 좋습니다. 짧으면 아두이노와 연결선이 짧아지게 되는 것이므로 되도록 긴 것으로 구매해주세요. 그리고 넉넉히 구매해 주세요 <br />
                                    <a className="buy-link" href="https://www.devicemart.co.kr/goods/view?no=1321195">구매링크 : 점퍼 케이블 40P (칼라) (암/수) 20cm <br /></a>
                                    <a className="buy-link" href="https://www.devicemart.co.kr/goods/view?no=1321196">구매링크 : 케이블 40P (칼라) (수/수) 20cm <br /></a>
                                    <a className="buy-link" href="https://www.devicemart.co.kr/goods/view?no=1321192">구매링크 : 점퍼 케이블 40P (칼라) (암/암) 20cm <br /></a>
                                </div>
                            </div>
                        </div>
                        <div className="sub-section">
                            <div className="sub-header">센서 몇 개
                                <div className="sub-content">온도센서, 조도센서, 초음파센서 같은 간단한 센서를 준비하면 응용 실습이 가능합니다.</div>
                                <img
                                    src="/images/materials/arduino_sensor_1.jpeg"
                                    alt="아두이노 모듈 중 첫 번째 이미지 "
                                    style={{ width: 280 }}
                                />
                                <img
                                    src="/images/materials/arduino_sensor_2.jpeg"
                                    alt="아두이노 모듈 중 두 번째 이미지"
                                    style={{ width: 280 }}
                                />
                                <img
                                    src="/images/materials/arduino_sensor_3.jpeg"
                                    alt="아두이노 모듈 중 세 번째 이미지"
                                    style={{ width: 280 }}
                                />
                                <img
                                    src="/images/materials/arduino_sensor_4.jpeg"
                                    alt="아두이노 모듈 중 네 번째 이미지"
                                    style={{ width: 280 }}
                                />
                                <div className="tip">브레드보드는 크기에 따라 가격이 달라지지만 가격 자체가 그렇게 비싸지 않으므로 다양한 사이즈로 2~3개씩 구매하시길 권장합니다.<br />
                                    <a className="buy-link" href="https://www.devicemart.co.kr/goods/catalog?code=000500010005">구매링크</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/*  2-3. 소프트웨어 설치 */}
                <div style={{ backgroundColor: '#F5F5F5', padding: '20px', borderRadius: '12px', marginBottom: '12px' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 16 }}>
                        <h2 style={{ margin: 0 }}>2-3. 소프트웨어 설치</h2>
                    </div>
                    <div className="content">
                        <div className="sub-section">
                            <div className="sub-header">아두이노 ide
                                <div className="sub-content">두이노 공식 프로그램으로, PC에 설치해서 사용합니다. 공식 프로그램인 만큼 안정적이고 예제 코드와 라이브러리 호환성이 완벽합니다.</div>
                                <img
                                    src="/images/software/arduino_ide.png"
                                    alt="아두이노 ide 다운로드 설치 페이지 이미지, 이미지 안에 다운로드 버튼과 운영체제를 선택할 수 있는 드롭다운 버튼이 있습니다."
                                    style={{ width: 1200 }}
                                />
                                <div className="tip">아두이노는 다양한 컴퓨터 운영체제를 위한 소프트웨어를 제공합니다. 홈페이지에서 자신의 컴퓨터 운영체제에 맞는 버전을 다운로드 해주세요 <br />
                                    <a className="buy-link" href="https://www.arduino.cc/en/software/">아두이노 ide 다운로드 링크 <br /></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/*  3️⃣ 아두이노와 부품 연결하기 */}
            <div style={{ backgroundColor: '#F5F5F5', padding: '28px', borderRadius: '12px', marginBottom: '12px' }}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 16 }}>
                    <h1 style={{ margin: 0 }}>3 아두이노와 부품 연결하기 </h1>
                </div>


                {/*  3-1. 기본 전자 부품 */}
                <div style={{ backgroundColor: '#F5F5F5', padding: '20px', borderRadius: '12px', marginBottom: '12px' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 16 }}>
                        <h2 style={{ margin: 0 }}>3-1. 모듈 정보 얻기</h2>
                    </div>
                    <div className="content">
                        아래 그림에서 왼쪽은 모듈, 오른쪽은 센서입니다. 두 부품은 기능적으로 동일하게 빛의 밝기를 측정하여 아두이노에서 값을 확인할 수 있습니다. <br />예를 들어, 어두운 곳에서는 값이 작게 나오고, 밝은 곳에서는 값이 크게 나타납니다.

                        차이점은 사용 편의성에 있습니다. <br />센서는 자체적으로는 사용할 수 없고, LED처럼 다른 부품과 함께 연결해야 합니다. 따라서 가격은 저렴하지만, 전자회로 지식이 없는 사람에게는 연결 과정이 다소 어렵습니다.<br />

                        반면, 모듈은 센서와 필요한 부품들이 이미 함께 납땜되어 있어, 다른 부품을 따로 연결하지 않고도 바로 사용할 수 있습니다.<br /> 가격은 조금 높지만, 사용 편리성 측면에서는 센서보다 훨씬 우수합니다.
                    </div>
                    <img
                        src="/images/module/cds_module.jpg"
                        alt="빛의 밝기를 측정하는데 사용되는 cds 모듈 이미지"
                        style={{ width: 280 }}
                    />
                    <img
                        src="/images/module/cds_cell.jpg"
                        alt="빛의 밝기를 측정하는데 사용되는 cds 센서 이미지"
                        style={{ width: 280 }}
                    />
                </div>

                {/*  3-2. 소프트웨어 설치 */}
                <div style={{ backgroundColor: '#F5F5F5', padding: '20px', borderRadius: '12px', marginBottom: '12px' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 16 }}>
                        <h2 style={{ margin: 0 }}>3-2. chatGPT에게 연결 방법 물어보기</h2>
                    </div>
                    <div className="content">
                        모듈 구매처에 가셔서 구매한 모듈 페이지로 가시면 아랫쪽에 모듈에 대한 정보가 나와 있습니다.<br />
                        이 내용을 복사해서 chatGPT에게 복사한 다음 연결 방법와 사용하기 위한 코드를 알려달라고 하면 친절히 방법을 알려줍니다.
                    </div>
                    <img
                        src="/images/module/cds_features.png"
                        alt="cds 모듈 구매처에서 제공하는 cds 모듈에 대한 특징을 담은 설명글을 캡쳐한 이미지"
                        style={{ width: 520 }}
                    />
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <img
                            src="/images/module/cds_code_1.png"
                            alt="위의 설명글 내용을 복사하여 chatGPT에게 연결도와 코드를 작성해달라고 요청해 받은 연결도를 표현하고 있는 이미지"
                            style={{ width: 520 }}
                        />
                        <img
                            src="/images/module/cds_code_2.png"
                            alt="위의 설명글 내용을 복사하여 chatGPT에게 연결도와 코드를 작성해달라고 요청해 받은 코드를 표현하고 있는 이미지"
                            style={{ width: 520 }}
                        />

                    </div>
                </div>

                {/*  3-3. 점퍼선을 이용해 연결 */}
                <div style={{ backgroundColor: '#F5F5F5', padding: '20px', borderRadius: '12px', marginBottom: '12px' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 16 }}>
                        <h2 style={{ margin: 0 }}>3-3. 점퍼케이블을 이용해 아두이노와 모듈 연결하기</h2>
                    </div>
                    <div className="content">
                        <strong>1. GND (Ground)</strong> <br />

                        역할: 전기의 ‘출구’라고 생각하면 됩니다. <br />

                        전류가 흐른 후 다시 돌아가는 길을 만들어 주는 핀입니다. <br />

                        모든 회로는 전원(VCC) → 부품 → GND 순으로 연결되어야 합니다. <br /><br />

                        <strong>2. VCC (또는 5V, 3.3V)</strong> <br />

                        역할: 전원의 ‘공급원’입니다. <br />

                        아두이노에서 전류를 보내는 핀으로, 센서나 모듈에 전력을 공급할 때 연결합니다. <br />

                        VCC 핀의 전압은 센서 종류에 맞춰 5V 또는 3.3V를 선택해야 합니다. <br /><br />

                        <strong>3. 디지털 핀 (0~13) </strong><br />

                        역할: 전류를 켜거나 끄는 신호를 보내거나 받을 때 사용합니다. <br />

                        예시: LED를 켜거나 버튼 상태를 읽는 등 0과 1의 신호로 제어합니다. <br />

                        **입력(Input)**과 **출력(Output)**으로 설정해서 사용합니다. <br /><br />

                        <strong>4. 아날로그 핀 (A0~A5)</strong> <br />

                        역할: 연속적인 값(전압)을 읽을 때 사용합니다. <br />

                        예시: 조도 센서, 온도 센서처럼 밝기나 온도를 측정할 때 사용합니다. <br />

                        디지털 핀과 달리 0~1023 범위의 값으로 측정할 수 있습니다. <br /><br />

                        <strong>5. 전원 핀 </strong> <br />

                        5V / 3.3V: 센서나 모듈에 전원 공급 <br />

                        GND: 회로의 전류가 다시 돌아가는 길 <br /><br />

                        위에서 ChatGPT가 안내하는 대로 모듈의 각 핀을 아두이노의 지정된 핀에 연결하면 됩니다.<br />
                        대부분의 모듈에는 어떤 핀에 연결해야 하는지 표시가 되어 있습니다. <br />

                        예를 들어, 모듈에 (+) 표시가 있다면 전원 연결용 핀을 의미하므로, 아두이노의 5V 핀에 연결하면 됩니다.<br />

                    </div>
                    <img
                        src="/images/module/arduino_pin.png"
                        alt="아두이노에는 양쪽에 여러개의 핀이 존재하는데 각 핀에는 번호가 있고 그 번호들을 정리해놓은 이미지"
                        style={{ width: 520 }}
                    />
                </div>
            </div>

            {/*  4️⃣ 아두이노와 컴퓨터 연결하기  */}
            <div style={{ backgroundColor: '#F5F5F5', padding: '28px', borderRadius: '12px', marginBottom: '12px' }}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 16 }}>
                    <h1 style={{ margin: 0 }}>4 내가 쓴 코드 아두이노에 업로드하기 </h1>
                </div>

                {/*  4-1. 아두이노 보드 종류 */}
                <div style={{ backgroundColor: '#F5F5F5', padding: '20px', borderRadius: '12px', marginBottom: '12px' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 16 }}>
                        <h2 style={{ margin: 0 }}>4-1. 코드 컴파일</h2>
                    </div>
                    <div className="content">
                        코드를 작성한 뒤에는 먼저 코드에 오류가 없는지 확인하는 과정이 필요합니다. <br />
                        이 과정을 <strong>컴파일(compile)</strong>이라고 하는데, 코드에 오류가 없으면 <strong>done compile</strong>이 표시되고, 오류가 있으면 <strong>error 메시지</strong>가 나타납니다. <br />
                        ChatGPT가 작성해준 코드는 그대로 복사해서 사용하는 것을 권장하며, 만약 그럼에도 불구하고 오류가 발생한다면 에러 메시지를 복사해 ChatGPT에게 해결 방법을 물어보면 됩니다. <br />

                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: 12 }}>
                        <img
                            src="/images/connection/arduino_compile_done.png"
                            alt="아두이노 ide에서 코드 컴파일에 성공했을 때 이미지"
                            style={{ width: 520 }}
                        />
                        <img
                            src="/images/connection/arduino_compile_error.png"
                            alt="아두이노 ide에서 코드 컴파일에 실패했을 때 이미지"
                            style={{ width: 520 }}
                        />
                    </div>
                </div>


                {/*  4-2. 기본 전자 부품 */}
                <div style={{ backgroundColor: '#F5F5F5', padding: '20px', borderRadius: '12px', marginBottom: '12px' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 16 }}>
                        <h2 style={{ margin: 0 }}>4-2. 코드 업로드</h2>
                    </div>
                    <div className="content">
                        코드 컴파일이 정상적으로 끝나면 작성한 코드를 아두이노에 업로드해야 합니다. <br />
                        업로드하기 전에 반드시 컴퓨터와 아두이노 보드를 연결해주세요.<br />
                        그리고 업로드 버튼 오른쪽에서 연결된 아두이노 보드를 선택해야 합니다. <br />(일반적으로는 자동으로 선택되지만, 케이블을 뽑았다가 다시 연결하면 자동으로 인식되지 않을 수 있으니 오류가 발생하면 직접 확인해 주세요.)
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: 12 }}>
                        <img
                            src="/images/connection/arduino_upload_done.png"
                            alt="아두이노에 업로드 성공했을 때 이미지"
                            style={{ width: 520 }}
                        />
                        <img
                            src="/images/connection/arduino_upload_error.png"
                            alt="아두이노에 업로드 실패했을 때 이미지"
                            style={{ width: 520 }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
