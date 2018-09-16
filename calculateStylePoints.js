const calculateStylePoints = (styleNotes) => {

	if (styleNotes.length > 5) {
    	styleNotes.length = 5;
  	}
  	const allNotes = styleNotes.map(e => {
  		if(Number.isInteger(e) === false) {
  			return Math.floor(e) + 0.5;
  		}
  		
  		 if(e > 20) {
      		return 20
    	}

    	return e;
  	});

  	const pointedNotes = allNotes.sort((a, b) => a - b).slice(1, allNotes.length-1);

    return pointedNotes.reduce((a, b) => a + b, 0)
};

module.exports = calculateStylePoints;