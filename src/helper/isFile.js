helper.isFile = function(FILE)
{
	return fs.lstatSync(FILE).isFile();
};
