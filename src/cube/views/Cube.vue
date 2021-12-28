<template lang="pug">
.cube-area
  .rotate-x
    .rotate-y
      .rotate-z
        .cube
          .cube-face(
            v-for="side, index in cube",
            :class="index"
          )
            template(v-for="row in side")
              .cube-item(
                v-for="color of row",
                :style="{'background-color' : color}"
              )
</template>

<script>
export default {
  name: 'Cube',
  data () {
    return {
      cube: {
        front: {
          top: ['blue', 'blue', 'blue'],
          middle: ['blue', 'blue', 'blue'],
          bottom: ['blue', 'blue', 'blue'],
        },
        back: {
          top: ['red', 'red', 'red'],
          middle: ['red', 'red', 'red'],
          bottom: ['red', 'red', 'red'],
        },
        right: {
          top: ['green', 'green', 'green'],
          middle: ['green', 'green', 'green'],
          bottom: ['green', 'green', 'green'],
        },
        left: {
          top: ['orange', 'orange', 'orange'],
          middle: ['orange', 'orange', 'orange'],
          bottom: ['orange', 'orange', 'orange'],
        },
        top: {
          top: ['yellow', 'yellow', 'yellow'],
          middle: ['yellow', 'yellow', 'yellow'],
          bottom: ['yellow', 'yellow', 'yellow'],
        },
        bottom: {
          top: ['white', 'white', 'white'],
          middle: ['white', 'white', 'white'],
          bottom: ['white', 'white', 'white'],
        },
      }
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
    animation: rotateZ 20s linear infinite;
    transform-style: preserve-3d;
    width: 450px;
    height: 450px;
    .rotate-y {
      animation: rotateZ 20s linear infinite;
      transform-style: preserve-3d;
      width: 100%;
      height: 100%;
      .rotate-z {
        animation: rotateY 20s linear infinite;
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
              transform: rotateZ(90deg) translateZ(225px);
            }
      
            &.back {
              transform: rotateZ(90deg) translateZ(-225px);
            }
            
            &.right {
              transform: rotateY(90deg) translateZ(225px);
            }
      
            &.left {
              transform: rotateY(90deg) translateZ(-225px);
            }
      
            &.top {
              transform: rotateX(90deg) translateZ(225px);
            }
      
            &.bottom {
              transform: rotateX(90deg) translateZ(-225px);
            }
      
            .cube-item {
              width: calc(150px - 11px);
              height: calc(150px - 11px);
              box-sizing: border-box;
              background-color: red;
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