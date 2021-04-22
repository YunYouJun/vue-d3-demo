interface NameValue {
  /**
   * 字符名
   */
  name: string;
  /**
   * 出现频率
   */
  value: number;
}

export interface FormState {
  chartData: Array<NameValue>;
}

const state = () =>
  <FormState>{
    chartData: [
      {
        name: "A",
        value: 0.08167,
      },
      {
        name: "B",
        value: 0.08, //1492,
      },
      {
        name: "C",
        value: 0.02782,
      },
      {
        name: "D",
        value: 0.04253,
      },
      {
        name: "E",
        value: 0.12702,
      },
    ],
  };

const mutations = {
  setData(state: FormState, chartData: Array<NameValue>) {
    state.chartData = chartData;
  },
  addItem(state: FormState, nameValue: NameValue) {
    const index = state.chartData.findIndex(
      (char) => char.name === nameValue.name
    );
    if (index !== -1) {
      state.chartData[index].value = nameValue.value;
    } else {
      state.chartData.push(nameValue);
    }
  },
};

const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
