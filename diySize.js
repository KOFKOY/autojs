var sh = new Shell(true);
sh.setCallback({
    onNewLine: function(line){
        //有新的一行输出时打印到控制台
        console.log(line)
    }
})
//默认 //1080x2340 440
sh.exec("wm size 1000x2340");//分辨率
sh.exec("wm density 380");//显示密度   显示密度值越大，屏幕显示的文字越大
sh.exitAndWaitFor()