helper.isNotFile = function(FILE)
{
	return !fs.lstatSync(FILE).isFile();
};
