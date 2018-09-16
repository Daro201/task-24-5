const calculateDistancePoints = (distance, hillSize, kPoint) => {
  if (hillSize === 'normal') {
	 return (distance - kPoint)*2 + 60;
  }
  else if (hillSize === 'large') {
    return (distance - kPoint)*1.8 + 60;
  }
  else if (hillSize === 'mammoth') {
    return (distance - kPoint)*1.2 + 120;
  }
  else {
    return 'the data are incorrect, please try again';
  }
};

module.exports = calculateDistancePoints;