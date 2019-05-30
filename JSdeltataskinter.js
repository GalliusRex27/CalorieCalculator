var a=[]; var b=[]; var c=[]; var d=[]; var e1=[]; var f=[]; var g=[];
function CheckLimit(){
if(localStorage.getItem("limit1")){
document.getElementById("CalLim").innerHTML="Calorie limit is "+localStorage.getItem("limit1")+ "cals";
document.getElementById("WatLim").innerHTML="Water limit is "+localStorage.getItem("limit2")+ "L";
document.getElementById("ILim").innerHTML="Iron limit is "+localStorage.getItem("limit3")+" mg";
document.getElementById("ProLim").innerHTML="Protein limit is "+localStorage.getItem("limit4")+ "g";
document.getElementById("CalcLim").innerHTML="Calcium limit is "+localStorage.getItem("limit5")+" mg";
document.getElementById("FatLim").innerHTML="Fat limit is "+localStorage.getItem("limit6")/localStorage.getItem("limit1")*100+" % of calories";}}
function ClickMe(){
document.getElementById("pital").innerHTML="Get it? The Dialect is Italian and so is the font styling. Yea, Bad Joke";}
function SetLimit(){
if(localStorage.getItem("limit1")){
var x=prompt("Limit already exists. To reenter limit press Y ");
if(x!='Y'&&x!='y'){
return;}
else{
localStorage.removeItem("fname");
localStorage.removeItem("fcal");
localStorage.removeItem("fwat");
localStorage.removeItem("firon");
localStorage.removeItem("fpro");
localStorage.removeItem("fcalc");
localStorage.removeItem("ffat");
a=[];b=[];c=[];d=[]; e1=[]; f=[]; g=[];
document.getElementById("CalFin").innerHTML="";
document.getElementById("WatFin").innerHTML="";
document.getElementById("IFin").innerHTML="";
document.getElementById("ProFin").innerHTML="";
document.getElementById("CalcFin").innerHTML="";
document.getElementById("FatFin").innerHTML="";}}
var sh=screen.height;
var q=parseInt(prompt("Enter you age"));
var w=parseInt(prompt("Enter you height in cms"));
var e=parseInt(prompt("Enter you weight in kgs"));
var r=prompt("Enter you gender, either M or F");
var dia=prompt("Enter Y/y if you are diabetic, any other key for no");
if(r=='M'||r=='m'){
var limit1=10*e+6.25*w-5*q+5;
var limit2=3;
var limit3=20;
var limit4=52;
var limit5=1000;
if(dia=='Y'||dia=='y'){
var limit6=limit1*0.5;}
else{
var limit6=limit1;}}
else if(r=='F'||r=='f'){
var limit1=10*e+6.25*w-5*q-161;
var limit2=2;
var limit3=18;
var limit4=46;
var limit5=1000;
if(dia=='Y'||dia=='y'){
var limit6=limit1*0.5;}
else{
var limit6=limit1;}}
if(q<6){
var limit2=1;
var limit3=16;
var limit4=19;}
else if(q<13){
var limit2=2;
var limit3=14;
var limit4=26;}
if(q>50&&r=='f'||q>50&&r=='F'){
var limit5=1200;}
if(q>70&&r=='m'||q>70&&r=='M'){
var limit5=1200;}
if(r!='m'&&r!='M'&&r!='f'&&r!='F'){
alert("The info you entered is incorrect");}
localStorage.setItem("limit1",parseInt(limit1));
localStorage.setItem("limit2",parseInt(limit2));
localStorage.setItem("limit3",parseInt(limit3));
localStorage.setItem("limit4",parseInt(limit4));
localStorage.setItem("limit5",parseInt(limit5));
localStorage.setItem("limit6",parseInt(limit6));
console.log(localStorage.getItem("limit1"));
console.log(localStorage.getItem("limit2"));
console.log(localStorage.getItem("limit3"));
console.log(localStorage.getItem("limit4"));
console.log(localStorage.getItem("limit5"));
console.log(localStorage.getItem("limit6"));
document.getElementById("CalLim").innerHTML="Calorie limit is "+localStorage.getItem("limit1")+ "cals";
document.getElementById("WatLim").innerHTML="Water limit is "+localStorage.getItem("limit2")+ "L";
document.getElementById("ILim").innerHTML="Iron limit is "+localStorage.getItem("limit3")+" mg";
document.getElementById("ProLim").innerHTML="Protein limit is "+localStorage.getItem("limit4")+ "g";
document.getElementById("CalcLim").innerHTML="Calcium limit is "+localStorage.getItem("limit5")+" mg";
document.getElementById("FatLim").innerHTML="Fat limit is "+localStorage.getItem("limit6")/localStorage.getItem("limit1")*100 +" % of calories";}
function save(){
var x=document.getElementById("FoodName").value;
a.push(x);
document.getElementById("FoodName").value="";}
function save1(){
var x=document.getElementById("Calories").value;
b.push(x);}
function save2(){
var x=document.getElementById("Water").value;
c.push(x);
document.getElementById("Water").value="";}
function save3(){
var x=document.getElementById("Iron").value;
d.push(x);
document.getElementById("Iron").value="";}
function save4(){
var x=document.getElementById("Protein").value;
e1.push(x);
document.getElementById("Protein").value="";}
function save5(){
var x=document.getElementById("Calcium").value;
f.push(x);
document.getElementById("Calcium").value="";}
function save6(){
if(document.getElementById("diayes").checked){
var x=document.getElementById("Calories").value;
g.push(x);}
document.getElementById("Calories").value="";}
function add(){
localStorage.setItem("fname", JSON.stringify(a));
localStorage.setItem("fcal", JSON.stringify(b));
localStorage.setItem("fwat", JSON.stringify(c));
localStorage.setItem("firon", JSON.stringify(d));
localStorage.setItem("fpro", JSON.stringify(e1));
localStorage.setItem("fcalc", JSON.stringify(f));
localStorage.setItem("ffat", JSON.stringify(g));
var x=JSON.parse(localStorage.getItem("fcal"));
var y=JSON.parse(localStorage.getItem("fwat"));
var z=JSON.parse(localStorage.getItem("firon"));
var s=JSON.parse(localStorage.getItem("fpro"));
var t=JSON.parse(localStorage.getItem("fcalc"));
var l=JSON.parse(localStorage.getItem("ffat"));
var sum1=0,sum2=0,sum3=0,sum4=0,sum5=0,sum6=0;
for(var i=0;i<x.length;i++){
sum1+=parseInt(x[i]);
sum2+=parseInt(y[i]);
sum3+=parseInt(z[i]);
sum4+=parseInt(s[i]);
sum5+=parseInt(t[i]);}
for(var i=0;i<l.length;i++){
sum6+=parseInt(l[i]);}
console.log(sum1);
console.log(x);
console.log(localStorage.getItem("limit1"));
console.log(sum6);
if(localStorage.getItem("limit1")){
if(sum1<localStorage.getItem("limit1")){
document.getElementById("CalFin").innerHTML="Calorie limit is short of "+(localStorage.getItem("limit1")-sum1)+ "cal(s)";}
if(sum1>localStorage.getItem("limit1")){
document.getElementById("CalFin").innerHTML="Calorie limit is exceeded by "+(sum1-localStorage.getItem("limit1"))+ "cal(s)";}
if(sum1==localStorage.getItem("limit1")){
document.getElementById("CalFin").innerHTML="Calorie limit is perfectly hit";}
if(sum2<localStorage.getItem("limit2")){
document.getElementById("WatFin").innerHTML="Water limit is short of "+(localStorage.getItem("limit2")-sum2)+ " litre(s)";}
if(sum2>localStorage.getItem("limit2")){
document.getElementById("WatFin").innerHTML="Water limit is exceeded by "+(sum2-localStorage.getItem("limit2"))+ " litre(s)";}
if(sum2==localStorage.getItem("limit2")){
document.getElementById("WatFin").innerHTML="Water limit is perfectly hit";}
if(sum3<localStorage.getItem("limit3")){
document.getElementById("IFin").innerHTML="Iron limit is short of "+(localStorage.getItem("limit3")-sum3)+ " mg";}
if(sum3>localStorage.getItem("limit3")){
document.getElementById("IFin").innerHTML="Iron limit is exceeded by "+(sum3-localStorage.getItem("limit3"))+ " mg";}
if(sum3==localStorage.getItem("limit3")){
document.getElementById("IFin").innerHTML="Iron limit is perfectly hit";}
if(sum4<localStorage.getItem("limit4")){
document.getElementById("ProFin").innerHTML="Protein limit is short of "+(localStorage.getItem("limit4")-sum4)+ " g";}
if(sum4>localStorage.getItem("limit4")){
document.getElementById("ProFin").innerHTML="Protein limit is exceeded by "+(sum4-localStorage.getItem("limit4"))+ " g";}
if(sum4==localStorage.getItem("limit4")){
document.getElementById("ProFin").innerHTML="Protein limit is perfectly hit";}
if(sum5<localStorage.getItem("limit5")){
document.getElementById("CalcFin").innerHTML="Calcium limit is short of "+(localStorage.getItem("limit5")-sum5)+ " mg";}
if(sum5>localStorage.getItem("limit5")){
document.getElementById("CalcFin").innerHTML="Calcium limit is exceeded by "+(sum5-localStorage.getItem("limit5"))+ " mg";}
if(sum5==localStorage.getItem("limit5")){
document.getElementById("CalcFin").innerHTML="Iron limit is perfectly hit";}
if(sum6/sum1<=localStorage.getItem("limit6")/localStorage.getItem("limit1")){
document.getElementById("FatFin").innerHTML="Fat content is "+(sum6/sum1)*100+ " %";}
if(sum6/sum1>localStorage.getItem("limit6")/localStorage.getItem("limit1")){
document.getElementById("FatFin").innerHTML="Fat content is "+(sum6/sum1)*100+ " %";
var y=sum6/sum1-localStorage.getItem("limit6")/localStorage.getItem("limit1");
alert("You are over the fat limit by "+y*100+" %");}}}