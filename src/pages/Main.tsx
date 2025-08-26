import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Main() {
  const navigate = useNavigate();

  const buttons = [
    {
      label: '데이터 수집',
      desc: '아두이노 시리얼 데이터를 수집하고 저장하는 기능',
      path: '/collect',
    },
    {
      label: '데이터 탐색',
      desc: '수집된 데이터를 시각화하고 분석하는 기능',
      path: '/explore',
    },
    {
      label: '데이터 학습',
      desc: '수집한 데이터를 기반으로 모델을 학습하는 기능',
      path: '/train',
    },
  ];

  return (
    <div style={{ padding: 80, display: 'flex', flexDirection: 'row', gap: 20, alignItems: 'center', paddingTop: 60 }}>
      {/* 왼쪽의 설명이 들어가는 영역 */}
      <div
        style={{
          textAlign: 'left',
          alignSelf: 'flex-start', // 부모 flex 내에서 위/아래 위치는 그대로, 가로는 왼쪽으로
          width: '50%',
        }}
      >
        <div style={{ textAlign: 'left', alignSelf: 'flex-start' }}>
          <h1 style={{
            color: 'black',
            fontSize: 38,
            fontWeight: '600',
            userSelect: 'none',
            fontFamily: "Outfit",
          }}>
            Learn By Touch
          </h1>
          <h3 style={{ fontFamily: 'Pretendard', marginTop: 8,fontSize:22 }}>
            손끝으로 느끼며 배우는 체험형 학습 플랫폼
          </h3>
        </div>

        {/* 간단 소개 */}
        <p style={{ fontFamily: 'Pretendard', marginTop: 16, maxWidth: 600, lineHeight: 1.5, fontSize: 20 }}>
          Tecky는 데이터를 손끝으로 느끼고, 소리와 진동으로 체험하며 학습하는 새로운 방식의 교육 플랫폼입니다.
          AI와 센서를 활용한 체험형 실습으로, 누구나 쉽게 배우고 탐험할 수 있습니다.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24,marginTop:80 }}>
          <h1>세가지 핵심 기능</h1>
          {/* 1. 핵심 기능 */}
          <div style={{
            flex: 1,
            padding: 16,
            paddingLeft: 40,
            display: 'flex',
            flexDirection: 'column',
            borderLeft: '4px solid black', // ← 왼쪽에만 선
            alignItems: 'flex-start', // ← 자식 요소 왼쪽 정렬
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              marginBottom: 20,
            }}>
              <h4 style={{ color: 'black', fontSize: 22, marginBottom: 12, marginTop: 0 }}>1. 데이터 수집</h4>
              <p style={{ margin: 0, fontSize: 18 }}>아두이노를 이용해 직접 데이터 수집</p>
            </div>

            <button style={{
              backgroundColor: '#2F6EBF',
              color: '#fff',
              padding: '12px 28px',
              borderRadius: 8,
              border: 'none',       // ← 테두리 제거
              outline: 'none',      // ← 클릭 시 생기는 테두리 제거
              fontWeight: 600,
              fontFamily: 'Pretendard',
              cursor: 'pointer',
              fontSize: 18,
            }}>
              지금 시작하기
            </button>
          </div>
          {/* 2. 핵심 기능 */}
          <div style={{
            flex: 1,
            padding: 16,
            paddingLeft: 40,
            display: 'flex',
            flexDirection: 'column',
            borderLeft: '4px solid black', // ← 왼쪽에만 선
            alignItems: 'flex-start', // ← 자식 요소 왼쪽 정렬
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              marginBottom: 20,
            }}>
              <h4 style={{ color: 'black', fontSize: 22, marginBottom: 12, marginTop: 0 }}>2. 데이터 탐색</h4>
              <p style={{ margin: 0, fontSize: 18 }}>진동과 소리로 데이터를 직관적으로 이해</p>
            </div>

            <button style={{
              backgroundColor: '#2F6EBF',
              color: '#fff',
              padding: '12px 28px',
              borderRadius: 8,
              border: 'none',       // ← 테두리 제거
              outline: 'none',      // ← 클릭 시 생기는 테두리 제거
              fontWeight: 600,
              fontFamily: 'Pretendard',
              cursor: 'pointer',
              fontSize: 18,
            }}>
              지금 시작하기
            </button>
          </div>
          {/* 3. 핵심 기능 */}
          <div style={{
            flex: 1,
            padding: 16,
            paddingLeft: 40,
            display: 'flex',
            flexDirection: 'column',
            borderLeft: '4px solid black', // ← 왼쪽에만 선
            alignItems: 'flex-start', // ← 자식 요소 왼쪽 정렬
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              marginBottom: 20,
            }}>
              <h4 style={{ color: 'black', fontSize: 22, marginBottom: 12, marginTop: 0 }}>3. 데이터 학습</h4>
              <p style={{ margin: 0, fontSize: 18 }}>수집한 데이터를 이용해 분류 모델 만들기</p>
            </div>

            <button style={{
              backgroundColor: '#2F6EBF',
              color: '#fff',
              padding: '12px 28px',
              borderRadius: 8,
              border: 'none',       // ← 테두리 제거
              outline: 'none',      // ← 클릭 시 생기는 테두리 제거
              fontWeight: 600,
              fontFamily: 'Pretendard',
              cursor: 'pointer',
              fontSize: 18,
            }}>
              지금 시작하기
            </button>
          </div>

        </div>


      </div>

      {/* 이미지가 들어가는 영역 */}
      <div
        style={{
          width: '50%',
          height: '65vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontFamily: "'Noto Sans KR', sans-serif",
          backgroundImage: 'url(/images/main-image.jpg)',
          backgroundSize: 'contain',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#F5F0EA',
        }}
      >
      </div>
    </div>
  );
}



