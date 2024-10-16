<template>
	<Teleport to="body" v-if="!isEnd">
		<div ref="elRef"
			class="media-player-component"
			:style="{
				left: isNumber(domPosition.left) ? domPosition.left + 'px' : '',
				top: isNumber(domPosition.top) ? domPosition.top + 'px' : '',
				width: isNumber(domPosition.width) ? domPosition.width + 'px' : '',
				height: isNumber(domPosition.height) ? domPosition.height + 'px' : '',
				zIndex: domPosition.z,
				backgroundColor: isLocal && props.backgroundColor
					? convertColorFormat(props.backgroundColor)
					: ''
			}">
		</div>
	</Teleport>
</template>

<script setup lang="ts">
	import { isLocal } from '@lib/env';
	import Bridge from '@lib/bridge';
	import { MediaPlayer, PlayerType } from '@lib/bridge/MediaPlayer';
	import { isNumber } from 'lodash-es';

	const props = withDefaults(defineProps<{
		source: string;
		full?: boolean;
		type?: PlayerType;
		loop?: boolean;
		z?: number;
		round?: number;
		backgroundColor?: string;
	}>(), {
		type: 'vap',
		loop: true,
		z: 50,
		backgroundColor: '#00000000',
	});

	const emits = defineEmits<{
		(e: 'canplay'): void;
		(e: 'playing'): void;
		(e: 'pause'): void;
		(e: 'end'): void;
		(e: 'round_end'): void;
		(e: 'destory'): void;
	}>();

	let isEnd = ref(false);

	function convertColorFormat(color: string) {
		// 检查输入是否为有效的 #aarrggbb 格式
		if (!/^#[0-9A-Fa-f]{8}$/.test(color)) {
			throw new Error('Invalid color format. Expected #aarrggbb');
		}

		// 提取各个颜色分量
		const alpha = color.slice(1, 3);
		const red = color.slice(3, 5);
		const green = color.slice(5, 7);
		const blue = color.slice(7, 9);

		// 重新组合为 #rrggbbaa 格式
		return `#${red}${green}${blue}${alpha}`;
	}

	let elRef = ref<HTMLElement>();
	let player: MediaPlayer | null = null;
	let domPosition = reactive<{
		top?: number;
		left?: number;
		width?: number;
		height?: number;
		z?: number;
	}>({});

	onMounted(() => {
		if (props.full) {
			player = Bridge.addFullVapMediaPlayer({
				source: props.source,
				loop: props.loop,
				z: props.z,
				round: props.round,
				backgroundColor: props.backgroundColor,
			});
			domPosition.top = 0;
			domPosition.left = 0;
			domPosition.width = window.innerWidth;
			domPosition.height = window.innerHeight;
			domPosition.z = props.z;
		} else {
			let el = elRef.value;
			let rect = el!.getBoundingClientRect();
			let position = {
				top: rect.top,
				left: rect.left,
				width: rect.width,
				height: rect.height,
			};
			player = Bridge.addMediaPlayer({
				type: props.type,
				source: props.source,
				position,
				loop: props.loop,
				z: props.z,
				round: props.round,
				backgroundColor: props.backgroundColor,
			});
			Object.assign(domPosition, {
				...position,
				z: props.z
			});
		}
		player.on('canplay', () => {
			emits('canplay');
		});
		player.on('playing', () => {
			emits('playing');
		});
		player.on('pause', () => {
			emits('pause');
		});
		player.on('end', () => {
			player?.destory();
			isEnd.value = true;
			emits('end');
		});
		player.on('round_end', () => {
			emits('round_end');
		});
	});

	onBeforeUnmount(() => {
		if (player) {
			player.destory();
			emits('destory');
		}
	});
</script>

<style lang="scss" scoped>
	.media-player-component {
		position: fixed;
	}
</style>