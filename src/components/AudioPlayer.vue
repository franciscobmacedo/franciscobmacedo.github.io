<template>
  <div class="flex flex-col items-center justify-center">
    <div id="player" class="relative cursor-pointer text-center">
      <svg
        viewBox="0 0 200 200"
        @click="changeAudioPosition"
        class="w-32 h-32 md:w-64 md:h-64 lg:w-96 lg:h-96 mr-0 ml-20 md:ml-0"
      >
        <path class="fill-primary-200" d="" ref="border"></path>
        <path
          class="stroke-secondary"
          ref="progress"
          :stroke-dasharray="progressMax"
          :stroke-dashoffset="progressMax"
          :stroke-width="(exteriorRadius - interiorRadius) * 2"
          d=""
        ></path>
        <path
          class="fill-primary-500"
          d=""
          fill="blue"
          ref="inner"
          @click="playPauseAudio"
        ></path>
      </svg>
      <PlayButton
        v-if="!isPlaying"
        @click="playPauseAudio"
        class="cursor-pointer absolute top-14 left-14 ml-20 pl-1 md:pl-0 md:top-28 md:left-28 md:ml-2 lg:top-44 lg:left-40 lg:ml-4"
      />
      <PauseButton
        v-else
        @click="playPauseAudio"
        class="cursor-pointer absolute top-14 left-14 ml-20 pl-1 md:pl-0 md:top-28 md:left-28 md:ml-2 lg:top-44 lg:left-40 lg:ml-4"
      />
      <span
        class="text-gray-100 text-2xs md:text-sm absolute mt-3 md:mt-0 top-16 md:top-40 left-24 md:left-24 ml-7 md:ml-5 lg:ml-0 lg:top-56 lg:left-40 w-fit"
        v-if="audioLoaded"
        >{{ `${fmtMSS(currentTime)} / ${fmtMSS(audioDuration)}` }}</span
      >
      <span
        v-if="name"
        class="text-sm lg:text-base"
        :class="isPlaying ? 'text-primary-500' : ''"
        >{{ name }}</span
      >
    </div>
  </div>
</template>

<script setup>
import SimplexNoise from "simplex-noise";

import spline from "../spline.js";
import PlayButton from "../components/Icons/PlayButton.vue";
import PauseButton from "../components/Icons/PauseButton.vue";
import { onMounted, ref, computed, watch, onBeforeUnmount } from "vue";

const props = defineProps({
  src: String,

  speed: {
    type: Number,
    default: 3,
  },
  wiggle: {
    type: Number,
    default: 10,
  },
  interiorRadius: {
    type: Number,
    default: 70,
  },
  name: {
    type: String,
    default: null,
  },
  pause: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["play"]);

const simplex = new SimplexNoise();
let requestAnimationFrameID;
let progressInterval;

const audioLoaded = ref(false);
const isPlaying = ref(false);

const audio = ref(null);
const border = ref(null);
const inner = ref(null);
const progress = ref(null);
const currentTime = ref(0);

const audioDuration = computed(() => {
  return audio.value != null ? audio.value.duration : 0;
});

const exteriorRadius = computed(() => props.interiorRadius * 1.2);
const progressMax = computed(() => 2 * Math.PI * exteriorRadius.value);
const playPauseAudio = () => {
  if (isPlaying.value) {
    pauseAudio();
  } else {
    playAudio();
  }
};

watch(
  () => props.pause,
  (newPause) => {
    if (newPause) {
      pauseAudio();
    }
  }
);

watch(
  () => props.src,
  (newSrc) => {
    if (newSrc) {
      audioLoaded.value = false;
      stopAudio();
      setupAudio();
      playAudio();
    }
  }
);

const playAudio = () => {
  console.log("playing audio");
  emit("play");
  isPlaying.value = true;
  audio.value.play();
  startAnimation(points.value);
  progressInterval = setInterval(() => {
    currentTime.value = audio.value.currentTime;
    let strokeProgress =
      progressMax.value -
      ((currentTime.value * progressMax.value) / audioDuration.value) * 0.82;
    // console.log(currentTime.value, strokeProgress);

    if (currentTime.value >= audioDuration.value) {
      stopAudio();
      return;
    }
    progress.value.setAttribute("stroke-dashoffset", strokeProgress);
  }, 500);
};
const pauseAudio = () => {
  console.log("audio paused");
  isPlaying.value = false;
  audio.value.pause();
  cancelAnimationFrame(requestAnimationFrameID);
  clearInterval(progressInterval);
};

const stopAudio = () => {
  console.log("stopping audio");
  pauseAudio();

  progress.value.setAttribute("stroke-dashoffset", progressMax);
  audio.value.currentTime = 0;
};

const changeAudioPosition = (e) => {
  // TODO: make this work
  if (e.target === border.value || e.target === progress.value) {
    // console.log(e.layerX, e.layerY);
    console.log(e);
  }
};

const points = computed(() => createPoints());

onMounted(() => {
  setupAudio();
});
onBeforeUnmount(() => {
  stopAudio();
});

function getAudioURL(src) {
  return new URL(`../assets/audio/${src}`, import.meta.url);
}
const setupAudio = () => {
  const audioSrc = getAudioURL(props.src);
  audio.value = new Audio(audioSrc);
  audio.value.onloadedmetadata = () => {
    audioLoaded.value = true;
  };

  border.value.setAttribute("d", spline(points.value[0], 1, true));
  inner.value.setAttribute("d", spline(points.value[1], 1, true));
  progress.value.setAttribute("d", spline(points.value[1], 1, true));
};

function noise(x, y) {
  return simplex.noise2D(x, y);
}
function map(n, start1, end1, start2, end2) {
  return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
}

function startAnimation(points) {
  animate();
  function animate() {
    border.value.setAttribute("d", spline(points[0], 1, true));
    inner.value.setAttribute("d", spline(points[1], 1, true));
    progress.value.setAttribute("d", spline(points[1], 1, true));

    // for every point...
    for (let i = 0; i < points[0].length; i++) {
      const point = points[0][i];
      const point2 = points[1][i];

      // return a pseudo random value between -1 / 1 based on this point's current x, y positions in "time"
      const nX = noise(point.noiseOffsetX, point.noiseOffsetX);
      const nY = noise(point.noiseOffsetY, point.noiseOffsetY);

      // map this noise value to a new value, somewhere between it's original location -20 and it's original location + 20
      const x = map(
        nX,
        -1,
        1,
        point.originX - props.wiggle,
        point.originX + props.wiggle
      );
      const x2 = map(
        nX,
        -1,
        1,
        point2.originX - props.wiggle,
        point2.originX + props.wiggle
      );
      const y = map(
        nY,
        -1,
        1,
        point.originY - props.wiggle,
        point.originY + props.wiggle
      );
      const y2 = map(
        nY,
        -1,
        1,
        point2.originY - props.wiggle,
        point2.originY + props.wiggle
      );

      // update the point's current coordinates
      point.x = x;
      point.y = y;

      point2.x = x2;
      point2.y = y2;

      // progress the point's x, y values through "time"
      point.noiseOffsetX += props.speed / 1000;
      point.noiseOffsetY += props.speed / 1000;
      point2.noiseOffsetX += props.speed / 1000;
      point2.noiseOffsetY += props.speed / 1000;
    }

    requestAnimationFrameID = requestAnimationFrame(animate);
  }
}

function createPoints() {
  const points = [];
  const points2 = [];
  // how many points do we need
  const numPoints = 6;
  // used to equally space each point around the circle
  const angleStep = (Math.PI * 2) / numPoints;
  // the radius of the circle
  //   const rad = 85;
  //   const rad2 = 70;

  for (let i = 1; i <= numPoints; i++) {
    // x & y coordinates of the current point
    const theta = i * angleStep;

    const x = 100 + Math.cos(theta) * exteriorRadius.value;
    const y = 100 + Math.sin(theta) * exteriorRadius.value;

    const x2 = 100 + Math.cos(theta) * props.interiorRadius;
    const y2 = 100 + Math.sin(theta) * props.interiorRadius;
    const noiseOffsetX = Math.random() * 1000;
    const noiseOffsetY = Math.random() * 1000;
    // store the point's position
    points.push({
      x: x,
      y: y,
      // we need to keep a reference to the point's original point for when we modulate the values later
      originX: x,
      originY: y,
      // more on this in a moment!
      noiseOffsetX: noiseOffsetX,
      noiseOffsetY: noiseOffsetY,
    });
    points2.push({
      x: x2,
      y: y2,
      // we need to keep a reference to the point's original point for when we modulate the values later
      originX: x2,
      originY: y2,
      // more on this in a moment!
      noiseOffsetX: noiseOffsetX,
      noiseOffsetY: noiseOffsetY,
    });
  }

  return [points, points2];
}

const fmtMSS = (s) => {
  s = Math.floor(s);
  return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s;
};
</script>
<style>
/* #player svg {
  position: absolute;
} */

#player > #details {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translateX(-50%);
}
/* 
#pause {
  top: 40%;
  left: 46%;
  fill: rgb(242, 219, 114);
}
#play {
  top: 40%;
  left: 44%;
  fill: rgb(242, 219, 114);
} */
.hide {
  display: none;
}
#border {
  fill: rgb(241, 136, 136);
}
#inner {
  fill: rgb(234, 59, 59);
}

#progress {
  stroke: rgb(242, 219, 114);
}
</style>
