auto();
function MyClick(str,index){
    index = index | 0 ;
    var meButton = text(str).findOnce(index);
    if (meButton != undefined){
        if(meButton.clickable() && meButton.enabled()){
            meButton.click();
            return true;
        }
        console.log("父级控件-1")
        meButton = meButton.parent();
        if(meButton.clickable() && meButton.enabled()){
            meButton.click();
            return true;
        }
        console.log("父级控件-2")
        meButton = meButton.parent();
        if(meButton.clickable() && meButton.enabled()){
            meButton.click();
            return true;
        }
        console.log("父级控件-3")
        meButton = meButton.parent();
        if(meButton.clickable() && meButton.enabled()){
            meButton.click();
            return true;
        }
        console.log("父级控件-4")
        meButton = meButton.parent();
        if(meButton.clickable() && meButton.enabled()){
            meButton.click();
            return true;
        }
        console.log("父级控件没找到可以点击的")
        return false;
    }else{
        console.log("没有找到："+str);
        return false;
    }
}

home()

if (launchApp("起点读书")){
    toastLog("启动成功")
}else{
    toastLog("启动失败")
}
sleep(4000)

//找到我 
MyClick("我")
sleep(4000)
MyClick("福利中心")
sleep(4000)
//看视频
for(let index = 1;index<9;index++){
    if(!MyClick("看第"+index+"个视频")){
        continue;
    }
    sleep(3500);
    if(!MyClick("我知道了")){
        continue;
    }
    sleep(5500)
}

//限时活动
Swipe(566,1835,566,535)
sleep(1000)
//三次看视频
let success = 0;
let videoNum = 3;
let bookNum = 5;
for(let index = 0;index<videoNum;index++){
    if(MyClick("看视频")){
        sleep(4000)
        success++;
    }
}
if(success == videoNum){
    MyClick("我知道了")
    sleep(2000)
    console.log("三次视频奖励领取成功")
}else{
    console.log("三次视频奖励 好像领取失败了")
}
success = 0
//看小说
if(MyClick("去完成",2)){
    for (let index = 0; index < bookNum; index++) {
       //点击小说
        if(MyClick("阅读",index)){
            sleep(1000 * 32);
            //模拟翻页
            Swipe(600,900,500,900);
            sleep(1500);
            Swipe(600,900,500,900);
            sleep(1000 * 32);
            back();
            sleep(1500);
            //不放入书架
            if(MyClick("取消")){
                sleep(1500);
                success++;
            }
        }
    }
    if(success == bookNum){
        back();
        sleep(2000);
        //领取点币
        MyClick("领奖励");
        sleep(2000)
        MyClick("我知道了")
        console.log("看小说奖励领取完成");
    }else{
        console.log("看小说奖励 领取失败");
    } 
}