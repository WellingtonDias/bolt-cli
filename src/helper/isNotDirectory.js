helper.isNotDirectory = function(DIRECTORY)
{
	return !fs.lstatSync(DIRECTORY).isDirectory();
};
