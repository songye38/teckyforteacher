import React, { useState, useRef } from 'react';
import { DataPoint,TrainOptions } from "./../types/methodTypes";
import "./../styles/method.css";
import "./../styles/train.css";
const KNN = require('ml-knn');
const { DecisionTreeClassifier } = require('ml-cart');




export default function Module1() {

    // ------------------- 단계 정의 -------------------
    const algorithms = [
        { title: '평균값 기준(Nearest Centroid)' },
        { title: 'K-최근접 이웃(KNN)' },
        { title: '결정 트리(Decision Tree, 간단 버전)' },
        { title: '무작위 선택(Random)' },
    ];


    const [data, setData] = useState<DataPoint[]>([]);
    const [fileName, setFileName] = useState<string>(""); // 파일 이름 상태
    const [labelFilter, setLabelFilter] = useState<string>(""); // 문자열
    const [trainInfo, setTrainInfo] = useState<string>(""); // 학습 정보 텍스트
    const [accuracy, setAccuracy] = useState<number | null>(null);
    const [precision, setPrecision] = useState<Record<string, number>>({});
    const [recall, setRecall] = useState<Record<string, number>>({});
    const [loss, setLoss] = useState<number | null>(null);
    const [model, setModel] = useState<any>({});




    //1단계 파일 업로드 관련 함수
    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setFileName(file.name); // 파일 이름 저장

        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const text = event.target?.result as string;
                const lines = text.split("\n").map(l => l.trim()).filter(Boolean);
                const parsed: DataPoint[] = lines.map(line => {
                    const [valueStr, label] = line.split(",");
                    const value = Number(valueStr);
                    if (isNaN(value) || !label) throw new Error("잘못된 형식");
                    return { value, label };
                });
                setData(parsed);
            } catch (err) {
                alert("파일 형식이 올바르지 않거나 읽는 중 오류가 발생했습니다.");
            }
        };
        reader.readAsText(file);
    }

    const trainModel = ({ algorithm = 'KNN', removeOutliers = false }: TrainOptions) => {
        if (data.length === 0) {
            alert("먼저 데이터를 업로드하세요!");
            return;
        }

        // 1️⃣ 데이터 전처리
        let trainingData: DataPoint[] = data.map(d => ({
            value: Number(d.value),
            label: String(d.label).trim(),
        }));

        let removedCount = 0;

        // 이상치 제거 (레이블별)
        if (removeOutliers) {
            const grouped: Record<string, DataPoint[]> = {};
            trainingData.forEach(d => {
                if (!grouped[d.label]) grouped[d.label] = [];
                grouped[d.label].push(d);
            });

            const filteredData: DataPoint[] = [];
            for (const label in grouped) {
                const values = grouped[label].map(d => d.value);
                const mean = values.reduce((a, b) => a + b, 0) / values.length;
                const std = Math.sqrt(values.map(v => (v - mean) ** 2).reduce((a, b) => a + b, 0) / values.length);
                const filtered = grouped[label].filter(d => Math.abs(d.value - mean) <= 2 * std);
                removedCount += grouped[label].length - filtered.length;
                filteredData.push(...filtered);
            }
            trainingData = filteredData;
            console.log("trainingdata",trainingData);
        }

        const X = trainingData.map(d => [d.value]);
        const y = trainingData.map(d => d.label);
        const allLabels = Array.from(new Set(y));

        setTrainInfo(
            removeOutliers
                ? `${algorithm} 알고리즘으로 ${trainingData.length}개의 데이터로 학습 시작 (이상치 ${removedCount}개 제거됨)`
                : `${algorithm} 알고리즘으로 총 ${trainingData.length}개의 데이터로 학습 시작`
        );

        let predictions: string[] = [];
        let model: any = {};

        switch (algorithm) {
            case 'KNN':
                const knn = new KNN(X, y, { k: Math.min(3, X.length - 1) });
                predictions = knn.predict(X);
                console.log("KNN predictions",predictions);
                model = knn; // 필요하면 저장
                break;

            case 'Decision Tree':
                const tree = new DecisionTreeClassifier();
                tree.train(X, y);
                predictions = X.map(row => tree.predict(row));
                console.log("Decision Tree predictions",predictions);
                model = tree;
                break;

            case 'Random':
                predictions = X.map(() => allLabels[Math.floor(Math.random() * allLabels.length)]);
                console.log("random predictions",predictions);
                break;

            // Nearest Centroid는 직접 구현해야 하지만, KNN/Tree 쓰면 대부분 커버 가능
        }

        // 정확도, Precision/Recall 계산
        let correct = 0;
        const labelCounts: Record<string, { tp: number; fp: number; fn: number }> = {};
        allLabels.forEach(label => (labelCounts[label] = { tp: 0, fp: 0, fn: 0 }));

        trainingData.forEach((d, idx) => {
            const pred = predictions[idx];
            if (!labelCounts[pred]) labelCounts[pred] = { tp: 0, fp: 0, fn: 0 };

            if (pred === d.label) {
                correct++;
                labelCounts[d.label].tp++;
            } else {
                labelCounts[d.label].fn++;
                labelCounts[pred].fp++;
            }
        });

        const acc = correct / trainingData.length;
        setAccuracy(acc);

        const prec: Record<string, number> = {};
        const rec: Record<string, number> = {};
        Object.entries(labelCounts).forEach(([label, { tp, fp, fn }]) => {
            prec[label] = tp + fp === 0 ? 0 : tp / (tp + fp);
            rec[label] = tp + fn === 0 ? 0 : tp / (tp + fn);
        });

        setPrecision(prec);
        setRecall(rec);
        setModel(model);
    };






    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleReset = () => {
        setData([]);
        setFileName("");
        setModel({});
        setAccuracy(null);
        setLoss(null);
        setPrecision({});
        setRecall({});
        setTrainInfo("");
        setLabelFilter("");

        // 파일 input 초기화
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };









    return (
        <div style={{ padding: 30, fontFamily: "'Noto Sans KR', sans-serif", color: '#222', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h1>데이터 학습</h1>

            {/*  0️⃣ 과정(Process) 단계 */}
            <div style={{ backgroundColor: '#F5F5F5', padding: '20px', borderRadius: '12px', marginBottom: '12px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <h2 style={{ margin: 0 }}>프로젝트 안내</h2>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <p style={{ fontSize: 18, lineHeight: '1.5' }}>
                            이 프로젝트는 총 5개의 단계로 구성되어 있으며, 순서대로 진행하면 됩니다.<br />
                            각 단계별로 완료 상태가 표시되며, 중간에 문제가 생기면 아래 <strong>초기화 버튼</strong>을 눌러 처음부터 다시 시작할 수 있습니다.
                        </p>
                    </div>
                </div>
                <button
                    style={{
                        fontSize: 18,
                        fontWeight: '600',
                        padding: '16px 20px',
                        borderRadius: 8,
                        border: 'none',
                        cursor: 'pointer',
                        backgroundColor: '#184175', // 파란 계열
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        transition: 'background-color 0.3s ease',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#2F609F')} // hover 더 진한 파랑
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#2F609F')}
                    onClick={handleReset}
                >
                    <img
                        src="/icons/alert.svg"
                        alt="reset icon"
                        style={{ width: 24, height: 24 }}
                    />
                    모든 단계를 초기화하고 처음부터 시작하기
                </button>

                <div>
                </div>
            </div>

            {/*  1️⃣ 과정(Process) 단계 */}
            <div style={{ backgroundColor: '#F5F5F5', padding: '20px', borderRadius: '12px', marginBottom: '12px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <h2 style={{ margin: 0 }}>1단계 데이터 불러오기</h2>
                    <p style={{ fontSize: 18, lineHeight: '1.5' }}>데이터 수집단계에서 만든 데이터 불러와서 사용하기</p>
                </div>
                <input
                    type="file"
                    id="fileInput"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleFileUpload}
                />

                <label htmlFor="fileInput" className="select-file">
                    <img
                        src={fileName ? "/icons/file-check.svg" : "/icons/file.svg"}
                        alt={fileName ? "파일 선택됨" : "파일 선택"}
                        style={{ width: 24, height: 24 }}
                    />
                    {fileName || "파일 선택"}
                </label>


            </div>

            {/*  2️⃣ 과정(Process) 단계 */}
            <div style={{ backgroundColor: '#F5F5F5', padding: '20px', borderRadius: '12px', marginBottom: '12px' }}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 16 }}>
                    <h2 style={{ margin: 0 }}>2단계 모델 학습시키기</h2>
                    <p style={{ fontSize: 18, lineHeight: '1.5' }}>불러온 데이터를 이용하여 분류 모델을 학습합니다.</p>
                </div>

                {/* 2-1 : 학습 방법 선택하기 */}
                <div style={{ backgroundColor: '#F5F5F5', padding: '20px', borderRadius: '12px', marginBottom: '12px', border: '2px solid black', margin: '28px' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 16 }}>
                        <h2 style={{ margin: 0 }}>2-1단계 학습 방법 선택하기</h2>
                        <p style={{ fontSize: 18, lineHeight: '1.5' }}>업로드한 데이터를 그대로 학습합니다.</p>

                    </div>
                    <div className="label-list">
                        {algorithms.map(alg => (
                            <button
                                key={alg.title}
                                onClick={() =>
                                    setLabelFilter(prev =>
                                        prev === alg.title ? "" : alg.title // 같은 버튼 클릭하면 선택 해제, 아니면 선택
                                    )
                                }
                                className={`label-item ${labelFilter === alg.title ? "active" : ""}`}
                                style={{ display: "flex", alignItems: "center", gap: "8px" }}
                            >
                                {alg.title}
                                {labelFilter === alg.title && (
                                    <img
                                        src="/icons/colored-check.svg"
                                        alt="선택됨"
                                        style={{ width: 24, height: 24 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
                <div style={{ backgroundColor: '#F5F5F5', padding: '20px', borderRadius: '12px', marginBottom: '12px', border: '2px solid black', margin: '28px' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 16 }}>
                        <h2 style={{ margin: 0 }}>2-2단계 학습 데이터 선택하기</h2>
                        <p style={{ fontSize: 18, lineHeight: '1.5' }}>학습 전에 데이터를 어떻게 처리할지 선택하세요.</p>
                    </div>

                    <div style={{ display: 'flex', gap: 16, overflowX: 'auto', padding: 12 }}>
                        <button
                            className="train-button"
                            onClick={() =>
                                trainModel({
                                    algorithm: labelFilter as 'Nearest Centroid' | 'KNN' | 'Decision Tree' | 'Random',
                                    removeOutliers: false
                                })
                            }
                        >
                            이대로 학습하기
                        </button>
                        <button
                            className="train-button"
                            onClick={() =>
                                trainModel({
                                    algorithm: labelFilter as 'Nearest Centroid' | 'KNN' | 'Decision Tree' | 'Random',
                                    removeOutliers: true
                                })
                            }
                        >
                            이상치 제거하고 학습하기
                        </button>

                    </div>
                    <div style={{ padding: 12, fontSize: 20, fontWeight: 500, color: 'black' }}>
                        {trainInfo}
                    </div>
                </div>
            </div>

            {/* 3️⃣ 모듈 1 레이블 선택 및 추가 */}
            <div style={{ backgroundColor: '#F5F5F5', padding: '20px', borderRadius: '12px', marginBottom: '12px' }}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 16 }}>
                    <h2 style={{ margin: 0 }}>3단계 학습 결과 확인하기</h2>
                    <p style={{ fontSize: 18, lineHeight: '1.5' }}>학습이 끝난 후 정확도와 학습 데이터를 확인합니다.</p>
                </div>

                <div style={{ marginTop: 16, fontSize: 18, color: '#184175' }}>
                    {trainInfo && <p>{trainInfo}</p>}
                    {accuracy !== null && <p>훈련 데이터 정확도: {(accuracy * 100).toFixed(1)}%</p>}
                    {loss !== null && <p>Loss(MSE): {loss.toFixed(3)}</p>}
                    {Object.keys(precision).length > 0 && (
                        <div>
                            {Object.keys(precision).map(label => (
                                <p key={label}>
                                    [{label}] Precision: {(precision[label] * 100).toFixed(1)}%, Recall: {(recall[label] * 100).toFixed(1)}%
                                </p>
                            ))}
                        </div>
                    )}
                </div>
            </div>



            {/* 4️⃣ 선택한 레이블과 값 받기 */}
            <div style={{ backgroundColor: '#F5F5F5', padding: '20px', borderRadius: '12px', marginBottom: '12px' }}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 16 }}>
                    <h2 style={{ margin: 0 }}>4단계 실시간 예측하기</h2>
                    <p style={{ fontSize: 18, lineHeight: '1.5' }}>아두이노와 연결하여 새로운 센서 값이 들어왔을 때 학습된 모델이 라벨을 예측합니다.</p>
                </div>

                {/* 레이블 선택 버튼 */}
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    marginBottom: '20px',
                }}>

                </div>
            </div>
        </div>
    );
}