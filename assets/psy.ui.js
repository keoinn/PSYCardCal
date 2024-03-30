const Input_IGoal_R = document.querySelector("#igoal_r");
const Input_IGoal_I = document.querySelector("#igoal_i");
const Input_IGoal_A = document.querySelector("#igoal_a");
const Input_IGoal_S = document.querySelector("#igoal_s");
const Input_IGoal_E = document.querySelector("#igoal_e");
const Input_IGoal_C = document.querySelector("#igoal_c");
const Input_IGoal_Total = document.querySelector("#igoal_total");
const Input_ICare_R = document.querySelector("#icare_r");
const Input_ICare_I = document.querySelector("#icare_i");
const Input_ICare_A = document.querySelector("#icare_a");
const Input_ICare_S = document.querySelector("#icare_s");
const Input_ICare_E = document.querySelector("#icare_e");
const Input_ICare_C = document.querySelector("#icare_c");
const Input_ICare_Total = document.querySelector("#icare_total");
const Input_ILike_R = document.querySelector("#ilike_r");
const Input_ILike_I = document.querySelector("#ilike_i");
const Input_ILike_A = document.querySelector("#ilike_a");
const Input_ILike_S = document.querySelector("#ilike_s");
const Input_ILike_E = document.querySelector("#ilike_e");
const Input_ILike_C = document.querySelector("#ilike_c");
const Input_ILike_Total = document.querySelector("#ilike_total");
const Input_ICan_R = document.querySelector("#ican_r");
const Input_ICan_I = document.querySelector("#ican_i");
const Input_ICan_A = document.querySelector("#ican_a");
const Input_ICan_S = document.querySelector("#ican_s");
const Input_ICan_E = document.querySelector("#ican_e");
const Input_ICan_C = document.querySelector("#ican_c");
const Input_ICan_Total = document.querySelector("#ican_total");
const Input_Total_R = document.querySelector("#total_r");
const Input_Total_I = document.querySelector("#total_i");
const Input_Total_A = document.querySelector("#total_a");
const Input_Total_S = document.querySelector("#total_s");
const Input_Total_E = document.querySelector("#total_e");
const Input_Total_C = document.querySelector("#total_c");
const Input_Total_All = document.querySelector("#total_all");

const Ratio_IGoal_R = document.querySelector("#igoal_ratio_r");
const Ratio_IGoal_I = document.querySelector("#igoal_ratio_i");
const Ratio_IGoal_A = document.querySelector("#igoal_ratio_a");
const Ratio_IGoal_S = document.querySelector("#igoal_ratio_s");
const Ratio_IGoal_E = document.querySelector("#igoal_ratio_e");
const Ratio_IGoal_C = document.querySelector("#igoal_ratio_c");
const Ratio_IGoal_Total = document.querySelector("#igoal_ratio_total");
const Ratio_ICare_R = document.querySelector("#icare_ratio_r");
const Ratio_ICare_I = document.querySelector("#icare_ratio_i");
const Ratio_ICare_A = document.querySelector("#icare_ratio_a");
const Ratio_ICare_S = document.querySelector("#icare_ratio_s");
const Ratio_ICare_E = document.querySelector("#icare_ratio_e");
const Ratio_ICare_C = document.querySelector("#icare_ratio_c");
const Ratio_ICare_Total = document.querySelector("#icare_ratio_total");
const Ratio_ILike_R = document.querySelector("#ilike_ratio_r");
const Ratio_ILike_I = document.querySelector("#ilike_ratio_i");
const Ratio_ILike_A = document.querySelector("#ilike_ratio_a");
const Ratio_ILike_S = document.querySelector("#ilike_ratio_s");
const Ratio_ILike_E = document.querySelector("#ilike_ratio_e");
const Ratio_ILike_C = document.querySelector("#ilike_ratio_c");
const Ratio_ILike_Total = document.querySelector("#ilike_ratio_total");
const Ratio_ICan_R = document.querySelector("#ican_ratio_r");
const Ratio_ICan_I = document.querySelector("#ican_ratio_i");
const Ratio_ICan_A = document.querySelector("#ican_ratio_a");
const Ratio_ICan_S = document.querySelector("#ican_ratio_s");
const Ratio_ICan_E = document.querySelector("#ican_ratio_e");
const Ratio_ICan_C = document.querySelector("#ican_ratio_c");
const Ratio_ICan_Total = document.querySelector("#ican_ratio_total");
const Ratio_Total_R = document.querySelector("#total_ratio_r");
const Ratio_Total_I = document.querySelector("#total_ratio_i");
const Ratio_Total_A = document.querySelector("#total_ratio_a");
const Ratio_Total_S = document.querySelector("#total_ratio_s");
const Ratio_Total_E = document.querySelector("#total_ratio_e");
const Ratio_Total_C = document.querySelector("#total_ratio_c");
const Ratio_Total_All = document.querySelector("#total_ratio_all");

const Set_IGoal_R = document.querySelector("#igoal_set_r");
const Set_IGoal_I = document.querySelector("#igoal_set_i");
const Set_IGoal_A = document.querySelector("#igoal_set_a");
const Set_IGoal_S = document.querySelector("#igoal_set_s");
const Set_IGoal_E = document.querySelector("#igoal_set_e");
const Set_IGoal_C = document.querySelector("#igoal_set_c");
const Set_IGoal_Total = document.querySelector("#igoal_set_total");
const Set_ICare_R = document.querySelector("#icare_set_r");
const Set_ICare_I = document.querySelector("#icare_set_i");
const Set_ICare_A = document.querySelector("#icare_set_a");
const Set_ICare_S = document.querySelector("#icare_set_s");
const Set_ICare_E = document.querySelector("#icare_set_e");
const Set_ICare_C = document.querySelector("#icare_set_c");
const Set_ICare_Total = document.querySelector("#icare_set_total");
const Set_ILike_R = document.querySelector("#ilike_set_r");
const Set_ILike_I = document.querySelector("#ilike_set_i");
const Set_ILike_A = document.querySelector("#ilike_set_a");
const Set_ILike_S = document.querySelector("#ilike_set_s");
const Set_ILike_E = document.querySelector("#ilike_set_e");
const Set_ILike_C = document.querySelector("#ilike_set_c");
const Set_ILike_Total = document.querySelector("#ilike_set_total");
const Set_ICan_R = document.querySelector("#ican_set_r");
const Set_ICan_I = document.querySelector("#ican_set_i");
const Set_ICan_A = document.querySelector("#ican_set_a");
const Set_ICan_S = document.querySelector("#ican_set_s");
const Set_ICan_E = document.querySelector("#ican_set_e");
const Set_ICan_C = document.querySelector("#ican_set_c");
const Set_ICan_Total = document.querySelector("#ican_set_total");
const Set_Total_R = document.querySelector("#total_set_r");
const Set_Total_I = document.querySelector("#total_set_i");
const Set_Total_A = document.querySelector("#total_set_a");
const Set_Total_S = document.querySelector("#total_set_s");
const Set_Total_E = document.querySelector("#total_set_e");
const Set_Total_C = document.querySelector("#total_set_c");
const Set_Total_All = document.querySelector("#total_set_all");

const Job1_Select = document.querySelector("#card_job1_select");
const Job2_Select = document.querySelector("#card_job2_select");
const Job3_Select = document.querySelector("#card_job3_select");

const Job1_ICare = document.querySelector("#icare_job_1");
const Job1_ILike = document.querySelector("#ilike_job_1");
const Job1_ICan = document.querySelector("#ican_job_1");
const Job1_Total = document.querySelector("#job1_total");

const Job2_ICare = document.querySelector("#icare_job_2");
const Job2_ILike = document.querySelector("#ilike_job_2");
const Job2_ICan = document.querySelector("#ican_job_2");
const Job2_Total = document.querySelector("#job2_total");

const Job3_ICare = document.querySelector("#icare_job_3");
const Job3_ILike = document.querySelector("#ilike_job_3");
const Job3_ICan = document.querySelector("#ican_job_3");
const Job3_Total = document.querySelector("#job3_total");

const Job_ICare_Total = document.querySelector("#icare_job_total");
const Job_ILike_Total = document.querySelector("#ilike_job_total");
const Job_ICan_Total = document.querySelector("#ican_job_total");
const Job_Total_All = document.querySelector("#job_total_all");

const JobInputGroup = document.querySelectorAll(".job-input");
const InputGroup = document.querySelectorAll(".card-input");
const JobOptionGroup = document.querySelectorAll(".job-option");

const Ratio_Job1_ICare = document.querySelector("#ratio_job1_icare");
const Ratio_Job2_ICare = document.querySelector("#ratio_job2_icare");
const Ratio_Job3_ICare = document.querySelector("#ratio_job3_icare");

const Ratio_Job1_ILike = document.querySelector("#ratio_job1_ilike");
const Ratio_Job2_ILike = document.querySelector("#ratio_job2_ilike");
const Ratio_Job3_ILike = document.querySelector("#ratio_job3_ilike");

const Ratio_Job1_ICan = document.querySelector("#ratio_job1_ican");
const Ratio_Job2_ICan = document.querySelector("#ratio_job2_ican");
const Ratio_Job3_ICan = document.querySelector("#ratio_job3_ican");

const Ratio_Job1_Label = document.querySelector("#ratio_job1_label");
const Ratio_Job2_Label = document.querySelector("#ratio_job2_label");
const Ratio_Job3_Label = document.querySelector("#ratio_job3_label");

const ctx = document.getElementById("acquisitions");
const ShowReportBtn = document.querySelector("#loadingReport");
const TextareaOutputReport = document.querySelector("#report_json");
const TextareaInputReport = document.querySelector("#input_report_json");
const CopyReportJsonBtn = document.querySelector("#copy_report_text");
const VisualReportBtn = document.querySelector("#visual_report");

const InitStatus = '{"goal":{"R":"","I":"","A":"","S":"","E":"","C":""},"care":{"R":"","I":"","A":"","S":"","E":"","C":""},"like":{"R":"","I":"","A":"","S":"","E":"","C":""},"can":{"R":"","I":"","A":"","S":"","E":"","C":""},"job":{"j1":{"opt":"","care":"","like":"","can":""},"j2":{"opt":"","care":"","like":"","can":""},"j3":{"opt":"","care":"","like":"","can":""}}}';
const ResetAllCalBtn = document.querySelector("#reset_cal");
/**
 * Init Options in the Selects tag
 */
Job1_Select.add(new Option("", ""));
Job2_Select.add(new Option("", ""));
Job3_Select.add(new Option("", ""));

let JobOption;
fetch("assets/job_cate.json")
  .then((response) => response.json())
  .then((data) => {
    JobOption = data;
    for (const [key, value] of Object.entries(data)) {
      Job1_Select.add(new Option(`[${value.id}] (${value.hcode}) ${value.name}`, key));
      Job2_Select.add(new Option(`[${value.id}] (${value.hcode}) ${value.name}`, key));
      Job3_Select.add(new Option(`[${value.id}] (${value.hcode}) ${value.name}`, key));
    }
  })
  .catch((error) => console.error("Error fetching JSON:", error));

/**
 * Returns 0 if input is null or empty.
 * @param {number|string} target Value of Input
 * @returns {number}
 */
const ckInputVal = (target) => {
  return target == "" ? 0 : parseInt(target);
};

/**
 * Retruns 0 if input is NaN or Infinity
 * @param {number|string} target
 * @returns
 */
const ckOutputVal = (target) => {
  return isFinite(target) ? parseFloat(target) : 0;
};

/**
 * 產生 Radar Chart 的圖
 * @returns {Object} chart.js data
 */
const generateRadarFigureData = () => {
  return {
    labels: ["我重視 (I Care)", "我喜歡 (I Like)", "我可以 (I Can)"],
    datasets: [
      {
        label: Ratio_Job1_Label.innerText,
        data: [ckOutputVal(Ratio_Job1_ICare.value), ckOutputVal(Ratio_Job1_ILike.value), ckOutputVal(Ratio_Job1_ICan.value)],
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgb(255, 99, 132)",
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
      {
        label: Ratio_Job2_Label.innerText,
        data: [ckOutputVal(Ratio_Job2_ICare.value), ckOutputVal(Ratio_Job2_ILike.value), ckOutputVal(Ratio_Job2_ICan.value)],
        fill: true,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgb(54, 162, 235)",
        pointBackgroundColor: "rgb(54, 162, 235)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(54, 162, 235)",
      },
      {
        label: Ratio_Job3_Label.innerText,
        data: [ckOutputVal(Ratio_Job3_ICare.value), ckOutputVal(Ratio_Job3_ILike.value), ckOutputVal(Ratio_Job3_ICan.value)],
        fill: true,
        backgroundColor: "rgba(255,205,86,0.2)",
        borderColor: "rgba(255,205,86,255)",
        pointBackgroundColor: "rgba(255,205,86,255)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(255,205,86,255)",
      },
    ],
  };
};

/**
 * 產生 Config
 * @returns {Object} chart.js config
 */
const generateRaderFigureConfig = () => {
  return (config = {
    type: "radar",
    data: generateRadarFigureData(),
    options: {
      plugins: {
        legend: {
          labels: {
            // This more specific font property overrides the global property
            font: {
              size: 16,
            },
          },
        },
      },
      responsive: false, // 设置图表为响应式，根据屏幕窗口变化而变化
      maintainAspectRatio: false, // 保持图表原有比例
      elements: {
        line: {
          borderWidth: 3, // 设置线条宽度
        },
      },
      scales: {
        r: {
          //   beginAtZero: true, //從 0 開始計算
          //   startAngle: 90, // 選轉角度

          //   angleLines: {
          //     display: false, // 對角線隱藏
          //   },
          //   grid: {
          //     color: '#000', // 六邊型顏色
          //   },
          max: 100, //最大數值
          min: 0, //最小數值
          ticks: {
            display: true,
            // color: 'red', //數值顏色
            stepSize: 10, //寬距
            font: {
              size: 15,
            },
          },
          pointLabels: {
            // color: '#000', //六邊 lebal 顏色
            font: {
              size: 20, //六邊 lebal 字體
            },
          },
        },
      },
    },
  });
};
const myChart = new Chart(ctx, generateRaderFigureConfig());

/**
 * 加總卡牌測量結果
 */
const sumOfInput = () => {
  Input_IGoal_Total.value = ckInputVal(Input_IGoal_R.value) + ckInputVal(Input_IGoal_I.value) + ckInputVal(Input_IGoal_A.value) + ckInputVal(Input_IGoal_S.value) + ckInputVal(Input_IGoal_E.value) + ckInputVal(Input_IGoal_C.value);

  Input_ICare_Total.value = ckInputVal(Input_ICare_R.value) + ckInputVal(Input_ICare_I.value) + ckInputVal(Input_ICare_A.value) + ckInputVal(Input_ICare_S.value) + ckInputVal(Input_ICare_E.value) + ckInputVal(Input_ICare_C.value);

  Input_ILike_Total.value = ckInputVal(Input_ILike_R.value) + ckInputVal(Input_ILike_I.value) + ckInputVal(Input_ILike_A.value) + ckInputVal(Input_ILike_S.value) + ckInputVal(Input_ILike_E.value) + ckInputVal(Input_ILike_C.value);

  Input_ICan_Total.value = ckInputVal(Input_ICan_R.value) + ckInputVal(Input_ICan_I.value) + ckInputVal(Input_ICan_A.value) + ckInputVal(Input_ICan_S.value) + ckInputVal(Input_ICan_E.value) + ckInputVal(Input_ICan_C.value);

  Input_Total_R.value = ckInputVal(Input_IGoal_R.value) + ckInputVal(Input_ICare_R.value) + ckInputVal(Input_ILike_R.value) + ckInputVal(Input_ICan_R.value);
  Input_Total_I.value = ckInputVal(Input_IGoal_I.value) + ckInputVal(Input_ICare_I.value) + ckInputVal(Input_ILike_I.value) + ckInputVal(Input_ICan_I.value);
  Input_Total_A.value = ckInputVal(Input_IGoal_A.value) + ckInputVal(Input_ICare_A.value) + ckInputVal(Input_ILike_A.value) + ckInputVal(Input_ICan_A.value);
  Input_Total_S.value = ckInputVal(Input_IGoal_S.value) + ckInputVal(Input_ICare_S.value) + ckInputVal(Input_ILike_S.value) + ckInputVal(Input_ICan_S.value);
  Input_Total_E.value = ckInputVal(Input_IGoal_E.value) + ckInputVal(Input_ICare_E.value) + ckInputVal(Input_ILike_E.value) + ckInputVal(Input_ICan_E.value);
  Input_Total_C.value = ckInputVal(Input_IGoal_C.value) + ckInputVal(Input_ICare_C.value) + ckInputVal(Input_ILike_C.value) + ckInputVal(Input_ICan_C.value);
  Input_Total_All.value = ckInputVal(Input_IGoal_Total.value) + ckInputVal(Input_ICare_Total.value) + ckInputVal(Input_ILike_Total.value) + ckInputVal(Input_ICan_Total.value);

  Ratio_IGoal_R.value = ((ckInputVal(Input_IGoal_R.value) / ckInputVal(Set_IGoal_R.value)) * 100).toFixed(2);
  Ratio_IGoal_I.value = ((ckInputVal(Input_IGoal_I.value) / ckInputVal(Set_IGoal_I.value)) * 100).toFixed(2);
  Ratio_IGoal_A.value = ((ckInputVal(Input_IGoal_A.value) / ckInputVal(Set_IGoal_A.value)) * 100).toFixed(2);
  Ratio_IGoal_S.value = ((ckInputVal(Input_IGoal_S.value) / ckInputVal(Set_IGoal_S.value)) * 100).toFixed(2);
  Ratio_IGoal_E.value = ((ckInputVal(Input_IGoal_E.value) / ckInputVal(Set_IGoal_E.value)) * 100).toFixed(2);
  Ratio_IGoal_C.value = ((ckInputVal(Input_IGoal_C.value) / ckInputVal(Set_IGoal_C.value)) * 100).toFixed(2);
  Ratio_ICare_R.value = ((ckInputVal(Input_ICare_R.value) / ckInputVal(Set_ICare_R.value)) * 100).toFixed(2);
  Ratio_ICare_I.value = ((ckInputVal(Input_ICare_I.value) / ckInputVal(Set_ICare_I.value)) * 100).toFixed(2);
  Ratio_ICare_A.value = ((ckInputVal(Input_ICare_A.value) / ckInputVal(Set_ICare_A.value)) * 100).toFixed(2);
  Ratio_ICare_S.value = ((ckInputVal(Input_ICare_S.value) / ckInputVal(Set_ICare_S.value)) * 100).toFixed(2);
  Ratio_ICare_E.value = ((ckInputVal(Input_ICare_E.value) / ckInputVal(Set_ICare_E.value)) * 100).toFixed(2);
  Ratio_ICare_C.value = ((ckInputVal(Input_ICare_C.value) / ckInputVal(Set_ICare_C.value)) * 100).toFixed(2);
  Ratio_ILike_R.value = ((ckInputVal(Input_ILike_R.value) / ckInputVal(Set_ILike_R.value)) * 100).toFixed(2);
  Ratio_ILike_I.value = ((ckInputVal(Input_ILike_I.value) / ckInputVal(Set_ILike_I.value)) * 100).toFixed(2);
  Ratio_ILike_A.value = ((ckInputVal(Input_ILike_A.value) / ckInputVal(Set_ILike_A.value)) * 100).toFixed(2);
  Ratio_ILike_S.value = ((ckInputVal(Input_ILike_S.value) / ckInputVal(Set_ILike_S.value)) * 100).toFixed(2);
  Ratio_ILike_E.value = ((ckInputVal(Input_ILike_E.value) / ckInputVal(Set_ILike_E.value)) * 100).toFixed(2);
  Ratio_ILike_C.value = ((ckInputVal(Input_ILike_C.value) / ckInputVal(Set_ILike_C.value)) * 100).toFixed(2);
  Ratio_ICan_R.value = ((ckInputVal(Input_ICan_R.value) / ckInputVal(Set_ICan_R.value)) * 100).toFixed(2);
  Ratio_ICan_I.value = ((ckInputVal(Input_ICan_I.value) / ckInputVal(Set_ICan_I.value)) * 100).toFixed(2);
  Ratio_ICan_A.value = ((ckInputVal(Input_ICan_A.value) / ckInputVal(Set_ICan_A.value)) * 100).toFixed(2);
  Ratio_ICan_S.value = ((ckInputVal(Input_ICan_S.value) / ckInputVal(Set_ICan_S.value)) * 100).toFixed(2);
  Ratio_ICan_E.value = ((ckInputVal(Input_ICan_E.value) / ckInputVal(Set_ICan_E.value)) * 100).toFixed(2);
  Ratio_ICan_C.value = ((ckInputVal(Input_ICan_C.value) / ckInputVal(Set_ICan_C.value)) * 100).toFixed(2);
  Ratio_Total_R.value = ((ckInputVal(Input_Total_R.value) / ckInputVal(Set_Total_R.value)) * 100).toFixed(2);
  Ratio_Total_I.value = ((ckInputVal(Input_Total_I.value) / ckInputVal(Set_Total_I.value)) * 100).toFixed(2);
  Ratio_Total_A.value = ((ckInputVal(Input_Total_A.value) / ckInputVal(Set_Total_A.value)) * 100).toFixed(2);
  Ratio_Total_S.value = ((ckInputVal(Input_Total_S.value) / ckInputVal(Set_Total_S.value)) * 100).toFixed(2);
  Ratio_Total_E.value = ((ckInputVal(Input_Total_E.value) / ckInputVal(Set_Total_E.value)) * 100).toFixed(2);
  Ratio_Total_C.value = ((ckInputVal(Input_Total_C.value) / ckInputVal(Set_Total_C.value)) * 100).toFixed(2);

  highlightRatioDom(Ratio_IGoal_R);
  highlightRatioDom(Ratio_IGoal_I);
  highlightRatioDom(Ratio_IGoal_A);
  highlightRatioDom(Ratio_IGoal_S);
  highlightRatioDom(Ratio_IGoal_E);
  highlightRatioDom(Ratio_IGoal_C);
  highlightRatioDom(Ratio_ICare_R);
  highlightRatioDom(Ratio_ICare_I);
  highlightRatioDom(Ratio_ICare_A);
  highlightRatioDom(Ratio_ICare_S);
  highlightRatioDom(Ratio_ICare_E);
  highlightRatioDom(Ratio_ICare_C);
  highlightRatioDom(Ratio_ILike_R);
  highlightRatioDom(Ratio_ILike_I);
  highlightRatioDom(Ratio_ILike_A);
  highlightRatioDom(Ratio_ILike_S);
  highlightRatioDom(Ratio_ILike_E);
  highlightRatioDom(Ratio_ILike_C);
  highlightRatioDom(Ratio_ICan_R);
  highlightRatioDom(Ratio_ICan_I);
  highlightRatioDom(Ratio_ICan_A);
  highlightRatioDom(Ratio_ICan_S);
  highlightRatioDom(Ratio_ICan_E);
  highlightRatioDom(Ratio_ICan_C);
  highlightRatioDom(Ratio_Total_R);
  highlightRatioDom(Ratio_Total_I);
  highlightRatioDom(Ratio_Total_A);
  highlightRatioDom(Ratio_Total_S);
  highlightRatioDom(Ratio_Total_E);
  highlightRatioDom(Ratio_Total_C);

  Ratio_IGoal_Total.value = analysisCode([parseFloat(Ratio_IGoal_R.value), parseFloat(Ratio_IGoal_I.value), parseFloat(Ratio_IGoal_A.value), parseFloat(Ratio_IGoal_S.value), parseFloat(Ratio_IGoal_E.value), parseFloat(Ratio_IGoal_C.value)]);
  Ratio_ICare_Total.value = analysisCode([parseFloat(Ratio_ICare_R.value), parseFloat(Ratio_ICare_I.value), parseFloat(Ratio_ICare_A.value), parseFloat(Ratio_ICare_S.value), parseFloat(Ratio_ICare_E.value), parseFloat(Ratio_ICare_C.value)]);
  Ratio_ILike_Total.value = analysisCode([parseFloat(Ratio_ILike_R.value), parseFloat(Ratio_ILike_I.value), parseFloat(Ratio_ILike_A.value), parseFloat(Ratio_ILike_S.value), parseFloat(Ratio_ILike_E.value), parseFloat(Ratio_ILike_C.value)]);
  Ratio_ICan_Total.value = analysisCode([parseFloat(Ratio_ICan_R.value), parseFloat(Ratio_ICan_I.value), parseFloat(Ratio_ICan_A.value), parseFloat(Ratio_ICan_S.value), parseFloat(Ratio_ICan_E.value), parseFloat(Ratio_ICan_C.value)]);
  Ratio_Total_All.value = analysisCode([parseFloat(Ratio_Total_R.value), parseFloat(Ratio_Total_I.value), parseFloat(Ratio_Total_A.value), parseFloat(Ratio_Total_S.value), parseFloat(Ratio_Total_E.value), parseFloat(Ratio_Total_C.value)]);
};

InputGroup.forEach((ev) => ev.addEventListener("change", sumOfInput));

const sumOfJobInput = () => {
  // Sum of Input
  Job1_Total.value = ckInputVal(Job1_ICare.value) + ckInputVal(Job1_ILike.value) + ckInputVal(Job1_ICan.value);

  Job2_Total.value = ckInputVal(Job2_ICare.value) + ckInputVal(Job2_ILike.value) + ckInputVal(Job2_ICan.value);

  Job3_Total.value = ckInputVal(Job3_ICare.value) + ckInputVal(Job3_ILike.value) + ckInputVal(Job3_ICan.value);

  Job_ICare_Total.value = ckInputVal(Job1_ICare.value) + ckInputVal(Job2_ICare.value) + ckInputVal(Job3_ICare.value);

  Job_ILike_Total.value = ckInputVal(Job1_ILike.value) + ckInputVal(Job2_ILike.value) + ckInputVal(Job3_ILike.value);

  Job_ICan_Total.value = ckInputVal(Job1_ICan.value) + ckInputVal(Job2_ICan.value) + ckInputVal(Job3_ICan.value);

  Job_Total_All.value = ckInputVal(Job_ICare_Total.value) + ckInputVal(Job_ILike_Total.value) + ckInputVal(Job_ICan_Total.value);

  // Ratio for Input
  Ratio_Job1_ICare.value = (ckOutputVal(Job1_ICare.value / Job_ICare_Total.value) * 100).toFixed(2);
  Ratio_Job2_ICare.value = (ckOutputVal(Job2_ICare.value / Job_ICare_Total.value) * 100).toFixed(2);
  Ratio_Job3_ICare.value = (ckOutputVal(Job3_ICare.value / Job_ICare_Total.value) * 100).toFixed(2);
  Ratio_Job1_ILike.value = (ckOutputVal(Job1_ILike.value / Job_ILike_Total.value) * 100).toFixed(2);
  Ratio_Job2_ILike.value = (ckOutputVal(Job2_ILike.value / Job_ILike_Total.value) * 100).toFixed(2);
  Ratio_Job3_ILike.value = (ckOutputVal(Job3_ILike.value / Job_ILike_Total.value) * 100).toFixed(2);
  Ratio_Job1_ICan.value = (ckOutputVal(Job1_ICan.value / Job_ICan_Total.value) * 100).toFixed(2);
  Ratio_Job2_ICan.value = (ckOutputVal(Job2_ICan.value / Job_ICan_Total.value) * 100).toFixed(2);
  Ratio_Job3_ICan.value = (ckOutputVal(Job3_ICan.value / Job_ICan_Total.value) * 100).toFixed(2);

  myChart.data = generateRadarFigureData();
  myChart.update();
};

/**
 * Job 卡牌分析與作圖
 */
JobInputGroup.forEach((ev) => ev.addEventListener("change", sumOfJobInput));

/**
 * 職業代碼分析主程式
 * @param {*} ratio_group
 * @returns {}
 */
const analysisCode = (ratio_group) => {
  let key_map = ["R", "I", "A", "S", "E", "C"];
  let high_fit = Array();
  let midden_fit = Array();
  let final_res = Array();

  // Step 1. 分類
  ratio_group.forEach((el, idx) => {
    if (el > 66.0) {
      high_fit.push(idx);
    } else if (el > 50.0 && el < 66.0) {
      midden_fit.push(idx);
    }
  });

  // Step2. 數量檢測
  let high_num = high_fit.length;

  function compareFn(a, b) {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    }
    // a must be equal to b
    return 0;
  }

  let high_fitness = Array();
  let tmp;
  let count;
  switch (high_num) {
    case 6:
    case 5:
    case 4:
    case 3:
      // 排序
      // [0, 2, 3] // length=3 <2
      high_fitness = Array();
      high_fit.forEach((el) => {
        high_fitness.push(ratio_group[el]);
      });
      high_fitness = high_fitness.sort(compareFn);
      console.log(high_fitness);

      // 檢查大於差異 >12% 數量
      let highest_fit = [];
      tmp = high_fitness[0] - high_fitness[high_fitness.length - 1];
      if (tmp > 12.0) {
        highest_fit.push(high_fitness[0]);
      }
      for (let i = 0; i < high_fitness.length - 1; i++) {
        let tmp1 = high_fitness[i] - high_fitness[i + 1];
        if (tmp1 > 12.0) {
          if (highest_fit.indexOf(high_fitness[i]) == -1) {
            highest_fit.push(high_fitness[i]);
          }
        }
      }

      if (highest_fit.length > 0) {
        count = 0;
        ratio_group.forEach((el) => {
          if (el == high_fitness[0]) {
            count = count + 1;
          }
        });
        if (count == 1) {
          final_res.push(key_map[ratio_group.indexOf(high_fitness[0])]);
        }
      } else {
        count = 0;
        ratio_group.forEach((el) => {
          if (el == high_fitness[0]) {
            count = count + 1;
          }
        });
        if (count == 1) {
          final_res.push(key_map[ratio_group.indexOf(high_fitness[0])]);
          final_res.push(key_map[ratio_group.indexOf(high_fitness[1])]);
        }
      }

      break;
    case 2:
      high_fitness = Array();
      high_fit.forEach((el) => {
        high_fitness.push(ratio_group[el]);
      });
      high_fitness = high_fitness.sort(compareFn);
      tmp = high_fitness[0] - high_fitness[1];
      if (tmp > 12.0) {
        final_res.push(key_map[ratio_group.indexOf(high_fitness[0])]);
      } else {
        final_res.push(key_map[ratio_group.indexOf(high_fitness[0])]);
        final_res.push(key_map[ratio_group.indexOf(high_fitness[1])]);
      }

      break;
    case 1:
      final_res.push(key_map[high_fit[0]]);
      break;
  }

  if (high_num == 0) {
    let midden_num = midden_fit.length;

    switch (midden_num) {
      case 6:
      case 5:
      case 4:
      case 3:
      case 0:
        break;

      case 2:
        let midden_fitness = Array();
        midden_fit.forEach((el) => {
          midden_fitness.push(ratio_group[el]);
        });
        midden_fitness = midden_fitness.sort(compareFn);

        final_res.push(key_map[ratio_group.indexOf(midden_fitness[0])]);
        final_res.push(key_map[ratio_group.indexOf(midden_fitness[1])]);
        break;
      case 1:
        final_res.push(key_map[midden_fit[0]]);
        break;
    }
  }

  return_txt = "";
  if (final_res.length == 0) {
    // return_txt = '職業傾向不明確';
    return_txt = "無限可能";
  } else {
    final_res.forEach((el) => {
      return_txt = return_txt + el;
    });
  }
  return return_txt;
};

/**
 * UI: 表格格式
 * @param {Object} target_dom
 */
const highlightRatioDom = (target_dom) => {
  target_dom.classList.remove("ratio-high");
  target_dom.classList.remove("ratio-midden");
  target_dom.classList.remove("ratio-low");
  let target_value = parseFloat(target_dom.value);
  if (target_value > 66.0) {
    target_dom.classList.add("ratio-high");
  } else if (target_value > 50.0 && target_value <= 66.0) {
    target_dom.classList.add("ratio-midden");
  } else if (target_value > 33.0 && target_value <= 50.0) {
  } else {
    target_dom.classList.add("ratio-low");
  }
};

/**
 * UI: Job 職業選擇改變圖形與文字
 */
const handlerJobOptionChange = () => {
  if (Job1_Select.value != "") {
    Ratio_Job1_Label.innerHTML = JobOption[Job1_Select.value].name;
  }
  if (Job2_Select.value != "") {
    Ratio_Job2_Label.innerHTML = JobOption[Job2_Select.value].name;
  }
  if (Job3_Select.value != "") {
    Ratio_Job3_Label.innerHTML = JobOption[Job3_Select.value].name;
  }
  myChart.data = generateRadarFigureData();
  myChart.update();
};
JobOptionGroup.forEach((ev) => ev.addEventListener("change", handlerJobOptionChange));

/**
 * Save Input to JSON string.
 * @returns
 */
const saveResToJson = () => {
  let res = Object();
  res.goal = {
    R: Input_IGoal_R.value,
    I: Input_IGoal_I.value,
    A: Input_IGoal_A.value,
    S: Input_IGoal_S.value,
    E: Input_IGoal_E.value,
    C: Input_IGoal_C.value,
  };
  res.care = {
    R: Input_ICare_R.value,
    I: Input_ICare_I.value,
    A: Input_ICare_A.value,
    S: Input_ICare_S.value,
    E: Input_ICare_E.value,
    C: Input_ICare_C.value,
  };
  res.like = {
    R: Input_ILike_R.value,
    I: Input_ILike_I.value,
    A: Input_ILike_A.value,
    S: Input_ILike_S.value,
    E: Input_ILike_E.value,
    C: Input_ILike_C.value,
  };
  res.can = {
    R: Input_ICan_R.value,
    I: Input_ICan_I.value,
    A: Input_ICan_A.value,
    S: Input_ICan_S.value,
    E: Input_ICan_E.value,
    C: Input_ICan_C.value,
  };

  res.job = {
    j1: {
      opt: Job1_Select.value,
      care: Job1_ICare.value,
      like: Job1_ILike.value,
      can: Job1_ICan.value,
    },
    j2: {
      opt: Job2_Select.value,
      care: Job2_ICare.value,
      like: Job2_ILike.value,
      can: Job2_ICan.value,
    },
    j3: {
      opt: Job3_Select.value,
      care: Job3_ICare.value,
      like: Job3_ILike.value,
      can: Job3_ICan.value,
    },
  };

  return JSON.stringify(res);
};

/**
 * Load data from JSON string and calculate results.
 * @param {string} json_res
 */
const loadResFromJson = (json_res) => {
  let res = JSON.parse(json_res);
  Input_IGoal_R.value = res.goal.R;
  Input_IGoal_I.value = res.goal.I;
  Input_IGoal_A.value = res.goal.A;
  Input_IGoal_S.value = res.goal.S;
  Input_IGoal_E.value = res.goal.E;
  Input_IGoal_C.value = res.goal.C;
  Input_ICare_R.value = res.care.R;
  Input_ICare_I.value = res.care.I;
  Input_ICare_A.value = res.care.A;
  Input_ICare_S.value = res.care.S;
  Input_ICare_E.value = res.care.E;
  Input_ICare_C.value = res.care.C;
  Input_ILike_R.value = res.like.R;
  Input_ILike_I.value = res.like.I;
  Input_ILike_A.value = res.like.A;
  Input_ILike_S.value = res.like.S;
  Input_ILike_E.value = res.like.E;
  Input_ILike_C.value = res.like.C;
  Input_ICan_R.value = res.can.R;
  Input_ICan_I.value = res.can.I;
  Input_ICan_A.value = res.can.A;
  Input_ICan_S.value = res.can.S;
  Input_ICan_E.value = res.can.E;
  Input_ICan_C.value = res.can.C;

  try {
    Job1_Select.value = res.job.j1.opt;
    Job1_ICare.value = res.job.j1.care;
    Job1_ILike.value = res.job.j1.like;
    Job1_ICan.value = res.job.j1.can;
    Job2_Select.value = res.job.j2.opt;
    Job2_ICare.value = res.job.j2.care;
    Job2_ILike.value = res.job.j2.like;
    Job2_ICan.value = res.job.j2.can;
    Job3_Select.value = res.job.j3.opt;
    Job3_ICare.value = res.job.j3.care;
    Job3_ILike.value = res.job.j3.like;
    Job3_ICan.value = res.job.j3.can;
  } catch (error) {}

  sumOfInput();
  sumOfJobInput();
  handlerJobOptionChange();
};

/**
 {"goal":{"R":"","I":"","A":"","S":"","E":"","C":""},"care":{"R":"","I":"","A":"","S":"","E":"","C":""},"like":{"R":"","I":"","A":"","S":"","E":"","C":""},"can":{"R":"","I":"","A":"","S":"","E":"","C":""},"job":{"j1":{"opt":"0002","care":"","like":"","can":""},"j2":{"opt":"0005","care":"","like":"","can":""},"j3":{"opt":"0007","care":"","like":"","can":""}}}
 */

/**
 * UI
 */
ShowReportBtn.addEventListener("click", () => {
  TextareaOutputReport.value = saveResToJson();
});

VisualReportBtn.addEventListener("click", () => {
  if (TextareaInputReport.value != "") {
    try {
      loadResFromJson(TextareaInputReport.value);
      TextareaInputReport.value = "";
    } catch (error) {
      console.error(error);
    }
  }
});

CopyReportJsonBtn.addEventListener("click", () => {
  const range = document.createRange();
  range.selectNode(TextareaOutputReport);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand("copy");
  selection.removeAllRanges();
});

ResetAllCalBtn.addEventListener("click", () => {
  loadResFromJson(InitStatus);
});

/**
 * Test Code Setion
 */
// 文鴻
let case0 = '{"goal":{"R":"10","I":"2","A":"4","S":"10","E":"10","C":"2"},"care":{"R":"5","I":"1","A":"4","S":"11","E":"1","C":"1"},"like":{"R":"6","I":"3","A":"3","S":"8","E":"3","C":"1"},"can":{"R":"3","I":"1","A":"2","S":"7","E":"2","C":"5"},"job":{"j1":{"opt":"","care":"10","like":"16","can":"7"},"j2":{"opt":"","care":"5","like":"7","can":"8"},"j3":{"opt":"","care":"8","like":"1","can":"5"}}}';
// 嘉惠
let case1 = '{"goal":{"R":"0","I":"3","A":"0","S":"5","E":"5","C":"3"},"care":{"R":"2","I":"6","A":"3","S":"12","E":"6","C":"8"},"like":{"R":"7","I":"6","A":"5","S":"9","E":"10","C":"7"},"can":{"R":"4","I":"7","A":"3","S":"8","E":"7","C":"10"}}';
// 玉臻
let case2 = '{"goal":{"R":"14","I":"13","A":"15","S":"11","E":"31","C":"9"},"care":{"R":"6","I":"9","A":"11","S":"15","E":"7","C":"10"},"like":{"R":"5","I":"6","A":"7","S":"9","E":"5","C":"6"},"can":{"R":"9","I":"8","A":"8","S":"10","E":"8","C":"8"}}';
// loadResFromJson(case1);
