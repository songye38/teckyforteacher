import "./../styles/module.css";

export default function Module3() {
    return (
        <div style={{ padding: 30, fontFamily: "'Noto Sans KR', sans-serif", color: '#222', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h1>프로젝트 3 : 컬러센서로 색 기록하기 가이드</h1>

            {/*  1. 필요한 부품 */}
            <div style={{ backgroundColor: '#F5F5F5', padding: '20px', borderRadius: '12px', marginBottom: '12px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 4 }}>
                    <h2 style={{ margin: 0 }}>필요한 부품</h2>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <p style={{ fontSize: 18, lineHeight: '1.5' }}>
                            아두이노 정품 보드 (혹은 호환보드) 1개 <br />
                            아두이노와 컴퓨터를 연결하기 위한 케이블 1개 <br />
                            컬러 센서 모듈 1개 <br />
                            점퍼 케이블 (암-수) 8개 <br />
                        </p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
                        <img
                            src="/images/arduinos/arduino_uno_r3.png"
                            alt="reset icon"
                            style={{ width: 320, height: 320 }}
                        />
                        <img
                            src="/images/parts/color_module.jpg"
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
                        <a href="https://www.devicemart.co.kr/goods/view?no=1327428">아두이노 컬러감지 센서 모듈 GY-31</a>
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
VCC -> 아두이노 5V
GND -> 아두이노 GND
OUT -> 아두이노 D2
S0 -> 아두이노 D3
S1 -> 아두이노 D4
S2 -> 아두이노 D5
S3 -> 아두이노 D6
LED -> 아두이노 D7
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
      
#define S0 3
#define S1 4
#define S2 5
#define S3 6
#define OUT 2
#define LED 7


int scaleColor(int value, int minVal, int maxVal){
  int v = map(value,minVal,maxVal,0,255);
  if(v<0) v =0;
  if(v>255) v = 255;
  return v;
}


void setup() {
  pinMode(S0,OUTPUT);
  pinMode(S1,OUTPUT);
  pinMode(S2,OUTPUT);
  pinMode(S3,OUTPUT);
  pinMode(OUT,INPUT);
  pinMode(LED,OUTPUT);

  digitalWrite(S0,HIGH);
  digitalWrite(S1,LOW);

  digitalWrite(LED,HIGH);
  Serial.begin(9600);

}

void loop() {

  int red,green,blue;
  digitalWrite(S2,LOW);
  digitalWrite(S3,LOW);
  red = pulseIn(OUT,LOW);

  digitalWrite(S2,LOW);
  digitalWrite(S3,HIGH);
  green = pulseIn(OUT,LOW);

  digitalWrite(S2,HIGH);
  digitalWrite(S3,LOW);
  blue = pulseIn(OUT,LOW);

  int r = scaleColor(red,20,2000);
  int g = scaleColor(green,20,2000);
  int b = scaleColor(blue,20,2000);

  char hexColor[8];
  sprintf(hexColor,"#%02X%02X%02X",r,g,b);
  Serial.print("HEX : "); 
  Serial.println(hexColor);

  delay(500);
}

                                `}
                        </p>
                    </div>

                </div>
            </div>

        </div>
    );
}