import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js'
import { defineComponent } from 'vue'
import { Bar } from 'vue-chartjs'
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ChartDataLabels)
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
export default defineComponent({
  name: 'BarChart',
  props: {
    chartId: {
      type: String,
      default: 'bar-chart',
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 400,
    },
    cssClasses: {
      default: '',
      type: String,
    },
    styles: {
      type: Object,
      default: () => ({}),
    },
    plugins: {
      type: Array,
      default: () => ([]),
    },
    chartData: {
      type: Object,
      default: () => ({}),
    },
    chartOptions: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    return () => h(h(Bar), {
      chartData: props.chartData,
      chartOptions: props.chartOptions,
      chartId: props.chartId,
      width: props.width,
      height: props.height,
      cssClasses: props.cssClasses,
      styles: props.styles,
      plugins: props.plugins,
    })
  },
})
