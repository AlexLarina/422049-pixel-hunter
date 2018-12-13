const resize = (frame, given) => {

  let multiplier = 0;

  switch (true) {
    case (given.width <= given.height):
      multiplier = given.height / frame.height;
      break;
    case (given.width >= given.height):
      multiplier = given.width / frame.width;
      break;
    case (given.width === given.height):
      multiplier = given.width / frame.width;
      break;
  }

  return {
    width: Math.floor(given.width / multiplier),
    height: Math.floor(given.height / multiplier)
  };
};

export {resize};
