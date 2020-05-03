//网页内执行的代码

//获取代码并执行
chrome.extension.sendRequest({action:"getcode"},function(d){
    // console.log(d);
    if(d.config&&d.config.is_gesture==1){
        set_gesture();
    }
    if(d.config&&d.config.is_code==1){
        // var fn=new Function(code);
        // fn();
        if(d.code){
            eval(d.code);
        }
    }
})

//刷新页面
chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {
        console.log("contentjs:",request);
        if(request.action=="reload"){
            location.reload();
        }
})

//鼠标手势
function set_gesture(){
    var bg = new BrowserGesture()
    bg.chrome_totop=()=>{
        $("body,html").animate({
            scrollTop:0
        },100)
    }
    bg.chrome_tobottom=()=>{
        $("body,html").animate({
            scrollTop:$("body").height(),
        },100)
    }
    bg.chrome_toback=()=>{
        history.back();
    }
    bg.chrome_close=()=>{
        // window.location.href="about:blank"; //有一定概率打开这个空白页面后并没有关闭
        // window.close(); 使用下面的方法，可以解决上述bug
        chrome.extension.sendRequest({action:"close"},d=>{
            console.log("close.back:",d);
        })
    }
}


