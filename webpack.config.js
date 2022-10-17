const path = require("path");
const jsPath = "/src/scripts";
const cssPath = "/src/scss"


module.exports={
    mode:'development',
    entry:{
        app:path.join(__dirname,jsPath,"/app/app.js"),
        index:path.join(__dirname,jsPath,"/index.js"),
        arrFile:{
            import:path.join(__dirname,jsPath,"/app/file1.js"),
            filename:"file/[name][contenthash].js",
            dependOn:"app",
        }
        // main:path.join(__dirname,cssPath,"/main.scss")
    },
    output:{
        filename:'[name][contenthash].js',
        clean:true,
    }
}