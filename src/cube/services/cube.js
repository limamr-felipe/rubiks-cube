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
    const newCube = {}

    newCube.front = [
      cube.bottom[0], cube.front[1], cube.front[2],
      cube.bottom[3], cube.front[4], cube.front[5],
      cube.bottom[6], cube.front[7], cube.front[8],
    ]
    
    newCube.top = [
      cube.front[0], cube.top[1], cube.top[2],
      cube.front[3], cube.top[4], cube.top[5],
      cube.front[6], cube.top[7], cube.top[8],
    ]

    newCube.back = [
      cube.top[0], cube.back[1], cube.back[2],
      cube.top[3], cube.back[4], cube.back[5],
      cube.top[6], cube.back[7], cube.back[8],
    ]

    newCube.bottom = [
      cube.back[0], cube.bottom[1], cube.bottom[2],
      cube.back[3], cube.bottom[4], cube.bottom[5],
      cube.back[6], cube.bottom[7], cube.bottom[8],
    ]

    newCube.right = cube.right
    newCube.left = cube.left

    return newCube
  }
  
  LAH (cube) {
    const newCube = {}

    newCube.front = [
      cube.top[0], cube.front[1], cube.front[2],
      cube.top[3], cube.front[4], cube.front[5],
      cube.top[6], cube.front[7], cube.front[8],
    ]
    
    newCube.top = [
      cube.back[0], cube.top[1], cube.top[2],
      cube.back[3], cube.top[4], cube.top[5],
      cube.back[6], cube.top[7], cube.top[8],
    ]

    newCube.back = [
      cube.bottom[0], cube.back[1], cube.back[2],
      cube.bottom[3], cube.back[4], cube.back[5],
      cube.bottom[6], cube.back[7], cube.back[8],
    ]

    newCube.bottom = [
      cube.front[0], cube.bottom[1], cube.bottom[2],
      cube.front[3], cube.bottom[4], cube.bottom[5],
      cube.front[6], cube.bottom[7], cube.bottom[8],
    ]

    newCube.right = cube.right
    newCube.left = cube.left

    return newCube
  }
  
  TH (cube) {
    const newCube = {}

    newCube.front = [
      cube.right[0], cube.right[1], cube.right[2],
      cube.front[3], cube.front[4], cube.front[5],
      cube.front[6], cube.front[7], cube.front[8],
    ]
    
    newCube.right = [
      cube.back[0], cube.back[1], cube.back[2],
      cube.right[3], cube.right[4], cube.right[5],
      cube.right[6], cube.right[7], cube.right[8],
    ]

    newCube.back = [
      cube.left[0], cube.left[1], cube.left[2],
      cube.back[3], cube.back[4], cube.back[5],
      cube.back[6], cube.back[7], cube.back[8],
    ]

    newCube.left = [
      cube.front[0], cube.front[1], cube.front[2],
      cube.left[3], cube.left[4], cube.left[5],
      cube.left[6], cube.left[7], cube.left[8],
    ]

    newCube.top = cube.top
    newCube.bottom = cube.bottom

    return newCube
  }
  
  TAH (cube) {
    const newCube = {}

    newCube.front = [
      cube.left[0], cube.left[1], cube.left[2],
      cube.front[3], cube.front[4], cube.front[5],
      cube.front[6], cube.front[7], cube.front[8],
    ]
    
    newCube.right = [
      cube.front[0], cube.front[1], cube.front[2],
      cube.right[3], cube.right[4], cube.right[5],
      cube.right[6], cube.right[7], cube.right[8],
    ]

    newCube.back = [
      cube.right[0], cube.right[1], cube.right[2],
      cube.back[3], cube.back[4], cube.back[5],
      cube.back[6], cube.back[7], cube.back[8],
    ]

    newCube.left = [
      cube.back[0], cube.back[1], cube.back[2],
      cube.left[3], cube.left[4], cube.left[5],
      cube.left[6], cube.left[7], cube.left[8],
    ]

    newCube.top = cube.top
    newCube.bottom = cube.bottom

    return newCube
  }
  
  DH (cube) {
    const newCube = {}

    newCube.front = [
      cube.front[0], cube.front[1], cube.front[2],
      cube.front[3], cube.front[4], cube.front[5],
      cube.right[6], cube.right[7], cube.right[8],
    ]
    
    newCube.right = [
      cube.right[0], cube.right[1], cube.right[2],
      cube.right[3], cube.right[4], cube.right[5],
      cube.back[6], cube.back[7], cube.back[8],
    ]

    newCube.back = [
      cube.back[0], cube.back[1], cube.back[2],
      cube.back[3], cube.back[4], cube.back[5],
      cube.left[6], cube.left[7], cube.left[8],
    ]

    newCube.left = [
      cube.left[0], cube.left[1], cube.left[2],
      cube.left[3], cube.left[4], cube.left[5],
      cube.front[6], cube.front[7], cube.front[8],
    ]

    newCube.top = cube.top
    newCube.bottom = cube.bottom

    return newCube
  }
  
  DAH (cube) {
    const newCube = {}

    newCube.front = [
      cube.front[0], cube.front[1], cube.front[2],
      cube.front[3], cube.front[4], cube.front[5],
      cube.left[6], cube.left[7], cube.left[8],
    ]
    
    newCube.right = [
      cube.right[0], cube.right[1], cube.right[2],
      cube.right[3], cube.right[4], cube.right[5],
      cube.front[6], cube.front[7], cube.front[8],
    ]

    newCube.back = [
      cube.back[0], cube.back[1], cube.back[2],
      cube.back[3], cube.back[4], cube.back[5],
      cube.right[6], cube.right[7], cube.right[8],
    ]

    newCube.left = [
      cube.left[0], cube.left[1], cube.left[2],
      cube.left[3], cube.left[4], cube.left[5],
      cube.back[6], cube.back[7], cube.back[8],
    ]

    newCube.top = cube.top
    newCube.bottom = cube.bottom

    return newCube
  }
  
  FH (cube) {
    const newCube = {}

    newCube.top = [
      cube.top[0], cube.top[1], cube.top[2],
      cube.top[3], cube.top[4], cube.top[5],
      cube.left[2], cube.left[5], cube.left[8],
    ]
    
    newCube.right = [
      cube.top[6], cube.right[1], cube.right[2],
      cube.top[7], cube.right[4], cube.right[5],
      cube.top[8], cube.right[7], cube.right[8],
    ]

    newCube.bottom = [
      cube.right[0], cube.right[3], cube.right[6],
      cube.bottom[3], cube.bottom[4], cube.bottom[5],
      cube.bottom[6], cube.bottom[7], cube.bottom[8],
    ]

    newCube.left = [
      cube.left[0], cube.left[1], cube.bottom[0],
      cube.left[3], cube.left[4], cube.bottom[1],
      cube.left[6], cube.left[7], cube.bottom[2],
    ]

    newCube.front = cube.front
    newCube.back = cube.back

    return newCube
  }
  
  FAH (cube) {
    const newCube = {}

    newCube.top = [
      cube.top[0], cube.top[1], cube.top[2],
      cube.top[3], cube.top[4], cube.top[5],
      cube.right[0], cube.right[3], cube.right[6],
    ]
    
    newCube.right = [
      cube.bottom[2], cube.right[1], cube.right[2],
      cube.bottom[1], cube.right[4], cube.right[5],
      cube.bottom[0], cube.right[7], cube.right[8],
    ]

    newCube.bottom = [
      cube.left[2], cube.left[5], cube.left[8],
      cube.bottom[3], cube.bottom[4], cube.bottom[5],
      cube.bottom[8], cube.bottom[7], cube.bottom[8],
    ]

    newCube.left = [
      cube.left[0], cube.left[1], cube.top[8],
      cube.left[3], cube.left[4], cube.top[7],
      cube.left[6], cube.left[7], cube.top[6],
    ]

    newCube.front = cube.front
    newCube.back = cube.back

    return newCube
  }
  
  BH (cube) {
    const newCube = {}

    newCube.top = [
      cube.left[6], cube.left[3], cube.left[0],
      cube.top[3], cube.top[4], cube.top[5],
      cube.top[6], cube.top[7], cube.top[8],
    ]
    
    newCube.right = [
      cube.right[0], cube.right[1], cube.top[0],
      cube.right[3], cube.right[4], cube.top[1],
      cube.right[6], cube.right[7], cube.top[2],
    ]

    newCube.bottom = [
      cube.bottom[0], cube.bottom[1], cube.bottom[2],
      cube.bottom[3], cube.bottom[4], cube.bottom[5],
      cube.right[8], cube.right[5], cube.right[2],
    ]

    newCube.left = [
      cube.bottom[6], cube.left[1], cube.left[2],
      cube.bottom[7], cube.left[4], cube.left[5],
      cube.bottom[8], cube.left[7], cube.left[8],
    ]

    newCube.front = cube.front
    newCube.back = cube.back

    return newCube
  }
  
  BAH (cube) {
    const newCube = {}

    newCube.top = [
      cube.right[2], cube.right[5], cube.right[8],
      cube.top[3], cube.top[4], cube.top[5],
      cube.top[6], cube.top[7], cube.top[8],
    ]
    
    newCube.right = [
      cube.right[0], cube.right[1], cube.bottom[8],
      cube.right[3], cube.right[4], cube.bottom[7],
      cube.right[6], cube.right[7], cube.bottom[6],
    ]

    newCube.bottom = [
      cube.bottom[0], cube.bottom[1], cube.bottom[2],
      cube.bottom[3], cube.bottom[4], cube.bottom[5],
      cube.left[0], cube.left[3], cube.left[6],
    ]

    newCube.left = [
      cube.top[2], cube.left[1], cube.left[2],
      cube.top[1], cube.left[4], cube.left[5],
      cube.top[0], cube.left[7], cube.left[8],
    ]

    newCube.front = cube.front
    newCube.back = cube.back

    return newCube
  }
}