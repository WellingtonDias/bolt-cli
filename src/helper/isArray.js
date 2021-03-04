helper.isArray = function(ARRAY,OPTIONS = {})
{
	const options = {strict: true,...OPTIONS};
	return Array.isArray(ARRAY) && (!options.strict || (ARRAY.length > 0));
};
