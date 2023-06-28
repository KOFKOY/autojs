var sh = new Shell(true);
sh.setCallback({
    onNewLine: function(line){
        //有新的一行输出时打印到控制台
        console.log(line)
    }
})
sh.exec("setprop service.adb.tcp.port  5555");//设置端口为5555
sh.exec("stop adbd");//停止服务
sh.exec("start adbd");//重启服务
//以上操作相当于usb连接手机后  adb tcpip 5555
//成功后使用 adb connect ip:5555 连接
sh.exitAndWaitFor()
