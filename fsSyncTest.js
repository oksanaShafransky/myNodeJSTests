var fs = require('fs');

/*if(fs.existsSync('temp')) {
    console.log('Directory exissts, removing....');
    
    if(fs.existsSync('temp/new.txt')) {
        fs.unlinkSync('temp/new.txt');
    }
    fs.rmdirSync('temp');
}

fs.mkdirSync('temp');*/

/*if(fs.existsSync('temp')) {
    process.chdir('temp');
    fs.writeFileSync('test.txt', 'This is sometest text for the file');
    fs.renameSync('test.txt', 'new.txt');
    console.log('File size is ' + fs.statSync('new.txt').size + ' bytes');
    console.log('File content is ' + fs.readFileSync('new.txt').toString());
}*/

fs.mkdir('temp2', function(err) {
    fs.exists('temp2', function(exists) {
        if(exists) {
            process.chdir('temp2');
            fs.writeFile('test2.txt', 'This is sometest text for the file2', function(err) {
                fs.rename('test2.txt', 'new2.txt', function(err) {
                    fs.stat('new2.txt', function(err, stats) {
                        console.log('File size is ' + stats.size + ' bytes');
                        fs.readFile('new2.txt', function(err, data) {
                           console.log('File content: ' + data.toString()); 
                        });
                    });
                });
            });
        }
    });
});