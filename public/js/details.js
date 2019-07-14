// 控制小圆点显示详情图片
var condot=document.querySelectorAll("#selector_dot_include li span i");
var img=document.querySelector(".detail_left img");
var imgs=[{name:"n1",src:"img/detail/detail1.webp"},{name:"n2",src:"img/detail/detail2.webp"},{name:"n3",src:"img/detail/detail3.webp"},{name:"n4",src:"img/detail/detail4.webp"}]
for(var item of condot){
    item.onclick=function() {
        for (var i = 0; i < condot.length; i++) {
            condot[i].style.border = "2px solid #e5e5e5";
        }
        this.style.border = "3px solid #999";
        for(var k=0;k<imgs.length;k++){
            if(imgs[k].name==this.className){
                img.src=imgs[k].src;
            }
        }
    }
}
var roms=document.querySelectorAll(".rom li");
for(var item of roms){
    item.onclick=function(){
        for(var i=0;i<roms.length;i++){
            roms[i].style.border="1px solid #e5e5e5";
        }
        this.style.border="1px solid #6a8fe6";
    }
}
// 控制保险对话框
var baoxin=document.querySelectorAll(".baoxin_detail>ul li");
for(var item of baoxin){
    item.onclick=function(){
        var style=getComputedStyle(this);
        if(style.border=="1px solid rgb(229, 229, 229)"){
            this.style.border="1px solid #6a8fe6"
        }else{
            this.style.border="1px solid rgb(229, 229, 229)"
        }
    }
}
var headbar=document.querySelector(".index_include");
var carshopp=document.querySelector(".gouwuche")
window.onscroll = function () {
    var m = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(m);
    if(m<9922){
        carshopp.style.position="";
        carshopp.style.position="fixed";
        carshopp.style.bottom="0";
        carshopp.style.top="";
    }else{
        carshopp.style.position="";
        carshopp.style.position="absolute";
        carshopp.style.top="10731px";
    }
}

