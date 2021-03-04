helper.isDirectory = function(DIRECTORY)
{
	return fs.lstatSync(DIRECTORY).isDirectory();
};
