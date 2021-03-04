helper.isNotObject = function(OBJECT,OPTIONS = {})
{
	const options = {strict: true,...OPTIONS};
	return (typeof OBJECT !== "object") || (OBJECT === undefined) || (OBJECT === null) || (options.strict && (Object.keys(OBJECT).length === 0));
};
