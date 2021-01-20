/*
*
* Author  : Sumit
*
* Title   : SleepTime 😴
*
*/

var space = "\u00a0";
var ap=new Array();
function s(){
document.getElementById("text").innerText="You should try to fall asleep at one of the following time :";
document.getElementById("btn").remove();
document.getElementById("bt2").remove();
document.getElementById("tt").remove();
$('br').remove();
var calh=new Array();
var calm=new Array();
var j=0;
var t=tym.value;
if(t=="")
{alert("Incorrect Time 🕒");
window.location.reload();
}
t=t.split(':');
var h=0;
h=t[0];
var m=0;
m=t[1];
var i;
for(i=0;i<6;i++)
{h=h-1;
m=m-30;
if(m<0)
{m=-m;
m=60-m;
h=h-1;}
if(h<=0)
{h=-h;
h=24-h;
}
if(m>=60)
{h=h+1;
m=60-m;}
if(i>1){
calh[j]=h;
calm[j]=m;
if(h>12 && h<24){
ap[j]="PM";
}
else if(h<12){
ap[j]="AM";
}
else if(h==24){
ap[j]="AM";
}
else if(h==12){
ap[j]="PM";
}
j++;
}}

for(i=0;i<4;i++){
if(calh[i]>12)
calh[i]=calh[i]-12;
if(calm[i]==0)
{calm[i]=calm[i]+"0";
}
if(calm[i]<10 && calm[i]!=0){
calm[i]="0"+calm[i];
}
if(calh[i]<10){
calh[i]="0"+calh[i];
}
}
document.getElementById("t1").innerText=calh[3]+":"+calm[3]+space+ap[3]+space+space+space+space+"😉"; 
document.getElementById("o").innerText="OR";
document.getElementById("t2").innerText=calh[2]+":"+calm[2]+space+ap[2]+space+space+space+space+"🙂";
document.getElementById("o1").innerText="OR";
document.getElementById("t3").innerText=calh[1]+":"+calm[1]+space+ap[1]+space+space+space+space+"😐";
document.getElementById("o2").innerText="OR";
document.getElementById("t4").innerText=calh[0]+":"+calm[0]+space+ap[0]+space+space+space+space+"😴";
document.getElementById("tym").remove();
}

function zzz(){
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
document.getElementById("text").innerText="It takes average human 14min to fall asleep.\nIf you head to bed right now, you should try to wake up at one of the following times :";
document.getElementById("btn").remove();
document.getElementById("bt2").remove();
document.getElementById("tt").remove();
$('br').remove();
var calh=new Array();
var calm=new Array();
var j=0;
var i;
for(i=0;i<6;i++)
{h=h-1;
m=m-30;
if(m<0)
{m=-m;
m=60-m;
h=h-1;}
if(h<=0)
{h=-h;
h=24-h;
}
if(m>=60)
{h=h+1;
m=60-m;}
if(i>1){
calh[j]=h;
calm[j]=m;
if(h>12 && h<24){
ap[j]="AM";
}
else if(h<12){
ap[j]="PM";
}
else if(h==24){
ap[j]="PM";
}
else if(h==12){
ap[j]="AM";
}
j++;
}}
for(i=0;i<4;i++){
calm[i]=calm[i]+14;
if(calm[i]>=60){
calh[i]=calh[i]+1;
calm[i]=calm[i]-60;
}
}
for(i=0;i<4;i++){
if(calh[i]>12)
calh[i]=calh[i]-12;
if(calm[i]==0)
{calm[i]=calm[i]+"0";
}
if(calm[i]<10 && calm[i]!=0){
calm[i]="0"+calm[i];
}
if(calh[i]<10){
calh[i]="0"+calh[i];
}
}
document.getElementById("t1").innerText=calh[0]+":"+calm[0]+space+ap[0]+space+space+space+space+"😉";
document.getElementById("o").innerText="OR";
document.getElementById("t2").innerText=calh[1]+":"+calm[1]+space+ap[1]+space+space+space+space+"🙂";
document.getElementById("o1").innerText="OR";
document.getElementById("t3").innerText=calh[2]+":"+calm[2]+space+ap[2]+space+space+space+space+"😐";
document.getElementById("o2").innerText="OR";
document.getElementById("t4").innerText=calh[3]+":"+calm[3]+space+ap[3]+space+space+space+space+"😴";
document.getElementById("tym").remove();
}
