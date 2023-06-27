//重置默认分辨率 显示密度
var sh = new Shell(true);
sh.setCallback({
    onNewLine: function(line){
        //有新的一行输出时打印到控制台
        console.log(line)
    }
})
sh.exec("wm size 1080x2340");
sh.exec("wm density 440")
sh.exitAndWaitFor()
//1080x2340 440