// 轮播图
var lb=document.querySelector("#lb");
var index=0;
var points=document.querySelectorAll(".lbo_dot li a");
function change(){
    index++;
    lb.style.transition='all 0.5s';
    lb.style.transform='translateX('+(-index*1220)+'px)';
}
var ti=setInterval(change,2000);
lb.onmouseenter=function(){
    clearInterval(ti);
}
lb.onmouseleave=function(){
    ti=setInterval(change,2000);
}
lb.addEventListener('transitionend',function(){
    if(index>=3){
        index=0;
        lb.style.transition='none';
        lb.style.transform='translateX('+(-index*1220)+'px)';
    }
    setpoint();
})
points[0].classList.add('now');
function setpoint(){
    for(var i=0;i<points.length;i++){
        points[i].classList.remove('now');
    }
    points[index].classList.add('now');
}
lb.onmouseenter=function(){
    clearInterval(ti);
}
lb.onmouseleave=function(){
    ti=setInterval(change,2000);
}
function removedot(){
    for(var item of points){
        item.classList.remove('now')
    }
}
points[0].onclick=function(e){
    e.preventDefault();
    lb.style.transition='all 0.5s';
    removedot()
    points[0].classList.add('now');
    lb.style.transform='translateX('+(0)+'px)';
}
points[1].onclick=function(e){
    e.preventDefault();
    lb.style.transition='all 0.5s';
    removedot()
    points[1].classList.add('now');
    lb.style.transform='translateX('+(-1220)+'px)';
}
points[2].onclick=function(e){
    e.preventDefault();
    lb.style.transition='all 0.5s';
    removedot()
    points[2].classList.add('now');
    lb.style.transform='translateX('+(-2440)+'px)';
}
// 控制头部隐藏区域
var hiden=document.querySelector(".index_include_hidden");
var aHidden=document.querySelectorAll(".index_center ul li a");
var header=document.querySelector("header");
var cont=document.querySelector(".cont_hidden");
var hidd=[{src:"img/hidd/hidd1.webp",h6:"坚果 R1",span:"￥3299.00"},{src:"img/hidd/hidd2.webp",h6:"坚果 R1",span:"￥3299.00"},{src:"img/hidd/hidd3.webp",h6:"坚果 Pro 2S",span:"￥1798.00"},{src:"img/hidd/hidd4.webp",h6:"坚果 3",span:"￥1299.00"}];

var hidde=[{src:"img/hidd/hidde1.webp.jpg",h6:"坚果 R1“足迹”系列保护套 《惊魂记》在美国首演",span:"￥99.00"},{src:"img/hidd/hidde2.webp.jpg",h6:"坚果 R1“足迹”系列保护套 《小王子》作者出生",span:"￥99.00"},{src:"img/hidd/hidde3.webp.jpg",h6:"坚果 R1“足迹”系列保护套 电子游戏《俄罗斯方块》发布",span:"￥98.00"},{src:"img/hidd/hidde4.webp.jpg",h6:"坚果 R1“足迹”系列保护套 人类首次登上月球",span:"￥1299.00"},{src:"img/hidd/hidde5.webp.jpg",h6:"坚果 R1“足迹”系列保护套 人类首次登顶珠峰",span:"￥99.00"},{src:"img/hidd/hidde6.webp.jpg",h6:"坚果 3",span:"￥99.00"}];
for(var i=0;i<6;i++){
    if(i==1){
        aHidden[i].onmouseenter=function () {
        hiden.style.visibility="visible";
        hiden.style.height="300px";
        hiden.innerHTML="";
            var ul=document.createElement("ul");
            hiden.appendChild(ul);
            ul.style.width="1220px";
            for(var j=0;j<hidd.length;j++){
                var li=document.createElement("li");
                ul.appendChild(li);
                li.style.marginLeft="50px";
                var a=document.createElement("a");
                li.appendChild(a);
                a.style.width="126px";
                a.href="#";
                var table=document.createElement("table");
                a.appendChild(table);
                var img=document.createElement("img");
                a.appendChild(img);
                img.src=hidd[j].src;
                img.style.width="126px";
                img.style.height="126px";
                var h6=document.createElement("h6");
                a.appendChild(h6);
                h6.innerHTML=hidd[j].h6;
                var span=document.createElement("span");
                a.appendChild(span);
                span.innerHTML=hidd[j].span;
            }
        }
    }
    if(i==2){
        aHidden[i].onmouseenter=function () {
            hiden.style.visibility="visible";
            hiden.style.height="300px";
            hiden.innerHTML="";
            var ul=document.createElement("ul");
            hiden.appendChild(ul);
            ul.style.width="1220px";
            for(var j=0;j<hidde.length;j++){
                var li=document.createElement("li");
                ul.appendChild(li);
                li.style.marginLeft="50px";
                var a=document.createElement("a");
                li.appendChild(a);
                a.style.width="126px";
                a.href="#";
                var table=document.createElement("table");
                a.appendChild(table);
                var img=document.createElement("img");
                a.appendChild(img);
                img.src=hidde[j].src;
                img.style.width="126px";
                img.style.height="126px";
                var h6=document.createElement("h6");
                a.appendChild(h6);
                h6.innerHTML=hidde[j].h6;
                var span=document.createElement("span");
                a.appendChild(span);
                span.innerHTML=hidde[j].span;
            }
        }
    }

}
header.onmouseenter=function(){
        hiden.innerHTML="";
        hiden.style.visibility="hidden";
        hiden.style.height="0px";
}
cont.onmouseenter=function(){
        hiden.innerHTML="";
        hiden.style.visibility="hidden";
        hiden.style.height="0px";
}
var headbar=document.querySelector(".index_include");
window.onscroll = function () {
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    if(t>=64){
        headbar.style.position="fixed";
        headbar.style.top="0px";
        headbar.style.zIndex="999999";
        hiden.style.position="fixed";
        hiden.style.top="50px";
    }else{
        headbar.style.position="";
        hiden.style.position="absolute";
        hiden.style.top="99px";
    }
}
// 一楼右侧控制展示区域
var dotLeft=document.querySelector("#yilou_right img:first-child");
var dotRight=document.querySelector("#yilou_right img:last-child");
var yilouBody=document.querySelector("#yilou_body>ul");
dotLeft.style.opacity="0.4";
dotRight.onclick=function(){
    yilouBody.style.transform='translateX('+(-1219)+'px)';
    yilouBody.style.transition='all 0.3s linear';
    dotLeft.style.opacity="";
    dotRight.style.opacity="0.4";
}
dotLeft.onclick=function(){
    yilouBody.style.transform='translateX('+(0)+'px)';
    yilouBody.style.transition='all 0.3s linear';
    dotLeft.style.opacity="0.4";
    dotRight.style.opacity="";
}
// 鼠标悬停显示详情
var yilou=document.querySelectorAll("#yilou_body>ul>li");
for(var item of yilou){
   item.onmouseenter=function(){
        var oldSpan=this.querySelector(".oldSpan");
        oldSpan.style.display="none";
        var button=document.createElement("button");
        button.style.border="1px solid #e1e1e1";
        button.style.borderRadius="4px";
        button.style.fontSize="12px";
        button.style.fontWeight="700";
        button.style.color="#646464";
        button.style.backgroundColor="#f9f9f9";
        button.style.width="100px";
        button.style.height="30px";
        button.innerHTML="查看详情";
        button.style.marginLeft="95px";
        oldSpan.parentNode.appendChild(button);
    }
    item.onmouseleave=function(){
        var oldSpan=this.querySelector(".oldSpan");
        var butto=this.querySelector("button");
        oldSpan.parentNode.removeChild(butto);
        oldSpan.style.display="block";
    }
}
$(function(){
    $.ajax({
        url: "http://127.0.0.1:3000/index",
        type: "get",
        dataType: "json",
        success: function (res) {
                var p=res[0];
                var {title,details,price,pic,href}=p;
                var html=`
                                <img src="${pic}" alt="" id="detail1">
                                <h4>${title}</h4>
                                <h6>${details}</h6>
                                <div class="yilou_dot">
                                    <ul id="dott1">
                                        <li id="dot1_one">
                                            <div>
                                                <img src="img/dott1.png" alt="">
                                            </div>
                                        </li>
                                        <li id="dot1_two">
                                            <div>
                                                <img src="img/dott2.png" alt="">
                                            </div>
                                        </li>
                                        <li id="dot1_three">
                                            <div>
                                                <img src="img/dott3.png" alt="">
                                            </div>
                                        </li>
                                        <li id="dot1_four">
                                            <div>
                                                <img src="img/dott4.png" alt="">
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                    <div id="price1">
                                        <span class="oldSpan">
                                            <i>￥</i>
                                            <span>${price}</span>
                                        </span>
                                    </div>
                           `;
                var div = document.querySelector("#yilou_one");
                div.innerHTML = html;
            var p=res[1];
            var {title,details,price,pic,href}=p;
            var html=`
                                <img src="${pic}" alt="" id="detail1">
                                <h4>${title}</h4>
                                <h6>${details}</h6>
                                <div class="yilou_dot">
                                    <ul id="dott1">
                                        <li id="dot1_one">
                                            <div>
                                                <img src="img/dott1.png" alt="">
                                            </div>
                                        </li>
                                        <li id="dot1_two">
                                            <div>
                                                <img src="img/dott2.png" alt="">
                                            </div>
                                        </li>
                                        <li id="dot1_three">
                                            <div>
                                                <img src="img/dott3.png" alt="">
                                            </div>
                                        </li>
                                        <li id="dot1_four">
                                            <div>
                                                <img src="img/dott4.png" alt="">
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                    <div id="price1">
                                        <span class="oldSpan">
                                            <i>￥</i>
                                            <span>${price}</span>
                                        </span>
                                    </div>
                           `;
            var div = document.querySelector("#yilou_two");
            div.innerHTML = html;
            var p=res[2];
            var {title,details,price,pic,href}=p;
            var html=`
                                <img src="${pic}" alt="" id="detail1">
                                <h4>${title}</h4>
                                <h6>${details}</h6>
                                <div class="yilou_dot">
                                    <ul id="dott1">
                                        <li id="dot1_one">
                                            <div>
                                                <img src="img/dott1.png" alt="">
                                            </div>
                                        </li>
                                        <li id="dot1_two">
                                            <div>
                                                <img src="img/dott2.png" alt="">
                                            </div>
                                        </li>
                                        <li id="dot1_three">
                                            <div>
                                                <img src="img/dott3.png" alt="">
                                            </div>
                                        </li>
                                        <li id="dot1_four">
                                            <div>
                                                <img src="img/dott4.png" alt="">
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                    <div id="price1">
                                        <span class="oldSpan">
                                            <i>￥</i>
                                            <span>${price}</span>
                                        </span>
                                    </div>
                           `;
            var div = document.querySelector("#yilou_three");
            div.innerHTML = html;

            var p=res[3];
            var {title,details,price,pic,href}=p;
            var html=`
                                <img src="${pic}" alt="" id="detail1">
                                <h4>${title}</h4>
                                <h6>${details}</h6>
                                <div class="yilou_dot">
                                    <ul id="dott1">
                                        <li id="dot1_one">
                                            <div>
                                                <img src="img/dott1.png" alt="">
                                            </div>
                                        </li>
                                        <li id="dot1_two">
                                            <div>
                                                <img src="img/dott2.png" alt="">
                                            </div>
                                        </li>
                                        <li id="dot1_three">
                                            <div>
                                                <img src="img/dott3.png" alt="">
                                            </div>
                                        </li>
                                        <li id="dot1_four">
                                            <div>
                                                <img src="img/dott4.png" alt="">
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                    <div id="price1">
                                        <span class="oldSpan">
                                            <i>￥</i>
                                            <span>${price}</span>
                                        </span>
                                    </div>
                           `;
            var div = document.querySelector("#yilou_four");
            div.innerHTML = html;
        }
    })
})

