<template lang="pug">
.cube-area(@click="changePosition")
  .rotate-x
    .rotate-y
      .rotate-z
        .cube
          .cube-face(
            v-for="side, index in cubeCompleted",
            :key="index",
            :class="index"
          )
            .cube-item(
              v-for="color, itemIndex of side",
              :key="itemIndex",
              :style="{'background-color' : color}"
            )
</template>

<script>
import CubeMoves from '../services/cube'

export default {
  name: 'Cube',
  data () {
    return {
      cube: {
        front: [
          '#ff6400', 'yellow', 'white',
          '#ff6400', 'blue', 'white',
          '#ff6400', 'blue', '#8b0000'
        ],
        back: [
          'green', '#8b0000', 'yellow',
          'green', 'green', 'yellow',
          'green', 'blue', 'green'
        ],
        right: [
          'green', 'green', '#ff6400',
          '#ff6400', '#8b0000', '#8b0000',
          'white', '#8b0000', 'yellow'
        ],
        left: [
          'blue', 'yellow', 'yellow',
          '#ff6400', '#ff6400', 'blue',
          'yellow', 'white', 'white'
        ],
        top: [
          '#8b0000', 'yellow', 'white',
          'green', 'yellow', '#ff6400',
          'blue', 'blue', '#8b0000',
        ],
        bottom: [
          'blue', '#8b0000', 'blue',
          'green', 'white', 'white',
          '#ff6400', 'white', '#8b0000'
        ],
      },
      cubeCompleted: {
        front: [
          '#8b0000', '#8b0000', '#8b0000',
          '#8b0000', '#8b0000', '#8b0000',
          '#8b0000', '#8b0000', '#8b0000'
        ],
        back: [
          '#ff6400', '#ff6400', '#ff6400',
          '#ff6400', '#ff6400', '#ff6400',
          '#ff6400', '#ff6400', '#ff6400'
        ],
        right: [
          'green', 'green', 'green',
          'green', 'green', 'green',
          'green', 'green', 'green'
        ],
        left: [
          'blue', 'blue', 'blue',
          'blue', 'blue', 'blue',
          'blue', 'blue', 'blue'
        ],
        top: [
          'yellow', 'yellow', 'yellow',
          'yellow', 'yellow', 'yellow',
          'yellow', 'yellow', 'yellow',
        ],
        bottom: [
          'white', 'white', 'white',
          'white', 'white', 'white',
          'white', 'white', 'white'
        ],
      }
    }
  },
  methods: {
    changePosition () {
      const cubeMoves = new CubeMoves()

      this.cubeCompleted = cubeMoves.BAH(this.cubeCompleted)
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes rotateX{
	from{transform: rotateX(0deg);}
	to{transform: rotateX(360deg);}
}

@keyframes rotateY{
	from{transform: rotateY(0deg);}
	to{transform: rotateY(360deg);}
}
@keyframes rotateZ{
	from{transform: rotateZ(0deg);}
	to{transform: rotateZ(360deg);}
}

.cube-area {
  background-color: black;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .rotate-x {
    // animation: rotateX 20s linear infinite;
    transform-style: preserve-3d;
    width: 50vh;
    height: 50vh;
    .rotate-y {
      animation: rotateY 20s linear infinite;
      transform-style: preserve-3d;
      width: 100%;
      height: 100%;
      .rotate-z {
        // animation: rotateZ 20s linear infinite;
        transform-style: preserve-3d;
        width: 100%;
        height: 100%;
        .cube {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          transform: rotateX(-25deg) rotateY(-25deg) rotateX(-25deg);
          transition: 0.3s ease all;
          background-color: black;
          .cube-face {
            width: 100%;
            height: 100%;
            border-radius: 16px;
            background-color: black;
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            left: 0;
            right: 0;
            position: absolute;
      
            &.front {
              transform: rotateZ(360deg) translateZ(25vh);
            }
      
            &.back {
              transform: rotateZ(180deg) translateZ(-25vh) scaleY(-1);
            }
            
            &.right {
              transform: rotateY(90deg) translateZ(25vh);
            }
      
            &.left {
              transform: rotateY(90deg) translateZ(-25vh) scaleX(-1);
            }
      
            &.top {
              transform: rotateX(90deg) translateZ(25vh);
            }
      
            &.bottom {
              transform: rotateX(90deg) translateZ(-25vh) scaleY(-1);
            }
      
            .cube-item {
              width: calc(16.7vh - 11px);
              height: calc(16.7vh - 11px);
              box-sizing: border-box;
              background-color: #8b0000;
              &:nth-child(2), &:nth-child(5), &:nth-child(8) {
                margin: 0 16px
              }
      
              &:nth-child(4), &:nth-child(5), &:nth-child(6) {
                margin-top: 16px;
                margin-bottom: 16px;
              }
            }
          }
        }
      }
    }
  }
}
</style>