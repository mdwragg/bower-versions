var fs = require('fs'),
    path = require('path'),
    _ = require('underscore');

var componentFolders;

fs.readdir(path.join(__dirname, '../components/'), function(err,stats){
  componentFolders = stats;
  _.each(stats, function(folder){
    var file = path.join(__dirname, '..', 'components', folder, 'bower.json');
    fs.readFile(file, function(err, fileObj){
      if (fileObj){
        var bowerInfo = JSON.parse(fileObj);
        console.log(bowerInfo.name, '  ', bowerInfo.version);
      }
    });
  });


})
