<script setup>
import { onMounted, reactive } from "vue";

// let requestAnimationFrameID;
const elements = reactive(
  Array.from(Array(1000).keys()).map(() => {
    return {
      x: randomNumber(window.innerWidth),
      y: randomNumber(window.innerHeight),
      direction: chooseRandom([-1, 1]),
    };
  })
);

onMounted(() => {
  setInterval(updateY, 20);
  setInterval(updateX, 10);
  setInterval(updateDirection, 10000);
});

function updateY() {
  elements.forEach((element) => {
    if (element.y > window.innerHeight) {
      element.y = 0;
    } else {
      element.y += 1;
    }
  });
}

function updateX() {
  elements.forEach((element) => {
    if (element.x > window.innerWidth) {
      element.x = 0;
    } else {
      element.x += 0.5 * element.direction;
    }
  });
}

function updateDirection() {
  elements.forEach((element) => {
    element.direction = chooseRandom([-1, 1]);
  });
}
function randomNumber(max, min = 0) {
  // min and max included
  return Math.random() * (max - min) + min;
}

function chooseRandom(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}
</script>
<template>
  <div class="absolute z-0 min-w-full min-h-screen">
    <div class="relative min-w-full min-h-screen">
      <div
        v-for="el in elements"
        :key="el"
        class="absolute"
        :style="`top: ${el.y}px; left: ${el.x}px ;`"
      >
        a
      </div>
    </div>
  </div>
</template>
