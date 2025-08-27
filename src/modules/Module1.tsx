
import "./../styles/module.css";

export default function Module1() {
    return (
        <div style={{ padding: 30, fontFamily: "'Noto Sans KR', sans-serif", color: '#222', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h1>프로젝트 1 : 심박 센서로 심장 박동 기록하기 가이드</h1>

            {/*  1. 필요한 부품 */}
            <div style={{ backgroundColor: '#F5F5F5', padding: '20px', borderRadius: '12px', marginBottom: '12px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 4 }}>
                    <h2 style={{ margin: 0 }}>필요한 부품</h2>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <p style={{ fontSize: 18, lineHeight: '1.5' }}>
                            아두이노 정품 보드 (혹은 호환보드) 1개 <br />
                            아두이노와 컴퓨터를 연결하기 위한 케이블 1개 <br />
                            심박 센서 모듈 1개 <br />
                            점퍼 케이블 (암-수) 3개 <br />
                        </p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
                        <img
                            src="/images/arduinos/arduino_uno_r3.png"
                            alt="reset icon"
                            style={{ width: 320, height: 320 }}
                        />
                        <img
                            src="/images/parts/heart_module.jpg"
                            alt="reset icon"
                            style={{ width: 320, height: 320 }}
                        />
                        <img
                            src="/images/materials/cable_f_to_m.webp"
                            alt="reset icon"
                            style={{ width: 320, height: 'auto' }}
                        />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <a href="https://www.devicemart.co.kr/goods/view?no=34404">아두이노 정품 보드</a>
                        <a href="https://www.devicemart.co.kr/goods/view?no=1245596">아두이노 호환 보드</a>
                        <a href="https://www.devicemart.co.kr/goods/view?no=1327434">아두이노 심박 측정 센서 Pulse/Heart Rate Sensor</a>
                        <a href="https://www.devicemart.co.kr/goods/view?no=1321195">점퍼 케이블 암-수</a>
                    </div>
                </div>
            </div>

            {/*  2. 연결관계 안내 */}
            <div style={{ backgroundColor: '#F5F5F5', padding: '20px', borderRadius: '12px', marginBottom: '12px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 4 }}>
                    <h2 style={{ margin: 0 }}>아두이노와 모듈 연결관계</h2>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <p style={{ fontWeight: 600, fontSize: 18, lineHeight: '2', whiteSpace: 'pre-wrap' }}>
                            {`
S (Signal) -> 아두이노 A0
+ (VCC) -> 아두이노 5V
- (GND) -> 아두이노 GND
`}
                        </p>
                    </div>
                </div>
            </div>

            {/*  3. 코드  */}
            <div style={{ backgroundColor: '#F5F5F5', padding: '20px', borderRadius: '12px', marginBottom: '12px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 4 }}>
                    <h2 style={{ margin: 0 }}>아두이노 코드</h2>
                    <div style={{ textAlign: 'left' }}> {/* 부모 div에 left 적용 */}
                        <p
                            style={{
                                fontSize: 18,
                                lineHeight: 1.5,
                                fontFamily: '"Cascadia Code", sans-serif',
                                whiteSpace: 'pre-wrap', // 줄바꿈 유지
                                margin: 0,               // p 태그 기본 margin 제거
                            }}
                        >
                            {`
const int PULSE_PIN = A0;

void setup() {
    Serial.begin(9600);
}

void loop() {
    int sensorValue  = analogRead(PULSE_PIN);
    Serial.println(sensorValue);
    delay(10);
}
                                `}
                        </p>
                    </div>

                </div>
            </div>

        </div>
    );
}