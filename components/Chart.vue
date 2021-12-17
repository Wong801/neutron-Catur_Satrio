<template>
  <div>
    <highcharts :constructor-type="'stockChart'" :options="chartOptions"></highcharts>
  </div>
</template>

<script>
export default {
  props: {
    chartOptions: {
			type: Object,
			default() {
				return {
					series: [
						{
							data: []
						}
					]
				}
			}
		}
  },
};
</script>

<style>
.highcharts-navigator-mask-inside{
	fill: rgba(209, 250, 229, 0.3)
}
</style>
