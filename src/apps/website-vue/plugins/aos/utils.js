const animations = {
  fade: [
    'fade-up',
    'fade-down',
    'fade-right',
    'fade-left',
    'fade-up-right',
    'fade-up-left',
    'fade-down-right',
    'fade-down-left'
  ],
  flip: [
    'flip-left',
    'flip-right',
    'flip-up',
    'flip-down'
  ],
  zoom: [
    'zoom-in',
    'zoom-in-up',
    'zoom-in-down',
    'zoom-in-left',
    'zoom-in-right',
    'zoom-out',
    'zoom-out-up',
    'zoom-out-down',
    'zoom-out-left',
    'zoom-out-right'
  ]
}

export default {
  /**
   * Method picking a random AOS class
   */
  randomAOSAnimation (type) {
    // If a type is specified, select a class for this type
    // else, select a random type
    if (type === undefined) {
      type = Object.keys(animations)[Math.floor(Math.random() * Object.keys(animations).length)]
    }
    return animations[type][Math.floor(Math.random() * animations[type].length)]
  }
}
