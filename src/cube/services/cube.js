export default class CubeMoves {
  RH (cube) {
    const newCube = {}

    newCube.front = [
      cube.front[0], cube.front[1], cube.bottom[2],
      cube.front[3], cube.front[4], cube.bottom[5],
      cube.front[6], cube.front[7], cube.bottom[8],
    ]
    
    newCube.top = [
      cube.top[0], cube.top[1], cube.front[2],
      cube.top[3], cube.top[4], cube.front[5],
      cube.top[6], cube.top[7], cube.front[8],
    ]

    newCube.back = [
      cube.back[0], cube.back[1], cube.top[2],
      cube.back[3], cube.back[4], cube.top[5],
      cube.back[6], cube.back[7], cube.top[8],
    ]

    newCube.bottom = [
      cube.bottom[0], cube.bottom[1], cube.back[2],
      cube.bottom[3], cube.bottom[4], cube.back[5],
      cube.bottom[6], cube.bottom[7], cube.back[8],
    ]

    newCube.right = cube.right
    newCube.left = cube.left

    return newCube
  }
  
  RAH (cube) {
    const newCube = {}

    newCube.front = [
      cube.front[0], cube.front[1], cube.top[2],
      cube.front[3], cube.front[4], cube.top[5],
      cube.front[6], cube.front[7], cube.top[8],
    ]
    
    newCube.top = [
      cube.top[0], cube.top[1], cube.back[2],
      cube.top[3], cube.top[4], cube.back[5],
      cube.top[6], cube.top[7], cube.back[8],
    ]

    newCube.back = [
      cube.back[0], cube.back[1], cube.bottom[2],
      cube.back[3], cube.back[4], cube.bottom[5],
      cube.back[6], cube.back[7], cube.bottom[8],
    ]

    newCube.bottom = [
      cube.bottom[0], cube.bottom[1], cube.front[2],
      cube.bottom[3], cube.bottom[4], cube.front[5],
      cube.bottom[6], cube.bottom[7], cube.front[8],
    ]

    newCube.right = cube.right
    newCube.left = cube.left

    return newCube
  }
  
  LH (cube) {
    
  }
  
  LAH (cube) {
    
  }
  
  UH (cube) {
    
  }
  
  UAH (cube) {
    
  }
  
  DH (cube) {
    
  }
  
  DAH (cube) {
    
  }
  
  FH (cube) {
    
  }
  
  FAH (cube) {
    
  }
  
  BH (cube) {
    
  }
  
  BAH (cube) {
    
  }
}