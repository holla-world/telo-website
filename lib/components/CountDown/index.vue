<template>
  <div
    class="countdown-component"
    part="countdown"
    :style="{
      backgroundColor: props.backgroundColor,
      color: props.textColor,
      fontSize: `${props.fontSize}px`
    }"
  >
    <div v-if="props.format">
      <template v-if="props.format === 'HH:mm:ss'"> {{ text.hour }}:{{ text.minute }}:{{ text.second }} </template>
      <template v-else> {{ text.hour }}时{{ text.minute }}分{{ text.second }}秒 </template>
    </div>
    <i18n-tr v-else path="countdown_time">
      <span>{{ text.date }}</span>
      <span>{{ text.hour }}</span>
      <span>{{ text.minute }}</span>
      <span>{{ text.second }}</span>
    </i18n-tr>
  </div>
</template>

<script setup lang="ts">
import moment from 'moment'
import i18nTr from './i18n-tr.vue';
const props = withDefaults(
  defineProps<{
    datetext?: string
    format?: string
    fontSize?: number
    theme?: string
    backgroundColor?: string
    textColor?: string
    seconds?: number
  }>(),
  {
    datetext: '',
    fontSize: 14,
    theme: '',
    backgroundColor: '',
    textColor: ''
  }
)
const emits = defineEmits<{
  (e: 'finish'): void
}>()
let endTimestamp = ref(
  props.datetext
    ? moment.utc(props.datetext, 'YYYY-MM-DD HH:mm:ss').valueOf()
    : props.seconds
    ? moment.utc().valueOf() + props.seconds * 1000
    : 0
)
let now = Date.now()

function explain(seconds: number) {
  if (seconds <= 0) {
    return {
      date: '00',
      hour: '00',
      minute: '00',
      second: '00'
    }
  }
  let isIgnoreDay = props.format && props.format === 'HH:mm:ss'

  let dateValue = Math.floor(seconds / 60 / 60 / 24) // 天
  let hourValue = isIgnoreDay
    ? Math.floor(seconds / 60 / 60) // 时
    : Math.floor((seconds / 60 / 60) % 24) // 时
  let minuteValue = Math.floor((seconds / 60) % 60) // 分
  let secondValue = Math.floor(seconds % 60) // 秒
  const checkNum = (num: number) => (num < 10 ? `0${num}` : num)
  const date = checkNum(dateValue)
  const hour = checkNum(hourValue)
  const minute = checkNum(minuteValue)
  const second = checkNum(secondValue)

  return {
    date,
    hour,
    minute,
    second
  }
}

let timer = setInterval(() => {
  let val = endTimestamp.value - 1000
  if (val <= 0) {
    clearInterval(timer)
    emits('finish')
  } else {
    endTimestamp.value = val
  }
}, 1000)

onBeforeUnmount(() => {
  clearInterval(timer)
})

let text = computed(() => {
  let seconds = (endTimestamp.value - now) / 1000
  seconds = parseInt(seconds.toString())

  let duration = explain(seconds)
  return duration
})
</script>

<style scoped lang="scss">
.countdown-component {
  text-align: center;
  padding: 4px 0;
}
</style>
