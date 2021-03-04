helper.isString = function(STRING,OPTIONS = {})
{
	const options = {strict: true,...OPTIONS};
	return (typeof STRING === "string") && (!options.strict || (STRING.length > 0));
};
