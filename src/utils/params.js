module.exports = function (params, required) {
		let missingRequiredParams = 0;
		required.forEach(function(elem){
			if (params[elem] === undefined) {
				console.log(`Error: ${elem} required, see ClickUp documentation`);
				missingRequiredParams++;
			}
		});

		if (missingRequiredParams !== 0){
			return;
		}

		let queryString = '';
		let paramsName = Object.keys(params);
    if (paramsName.length === required.length){
      return queryString;
    }
    
		for (let paramName in paramsName){
			queryString += `${paramsName[paramName]}=${params[paramsName[paramName]]}&`;
		}
		queryString = queryString.slice(0,-1);
		queryString = encodeURI(queryString);

		return queryString;
}