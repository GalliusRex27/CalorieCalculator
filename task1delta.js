var a=[]; var b=[]; var c=[]; var d=[];
function CheckLimit(){
if(localStorage.getItem("limit1")){
document.getElementById("CalLim").innerHTML="Calorie limit is "+localStorage.getItem("limit1")+ "cals";
document.getElementById("WatLim").innerHTML="Water limit is "+localStorage.getItem("limit2")+ "L";
document.getElementById("ILim").innerHTML="Iron limit is "+localStorage.getItem("limit3")+" mg";}}
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
a=[];b=[];c=[];d=[];

document.getElementById("CalFin").innerHTML="";

document.getElementById("WatFin").innerHTML="";

document.getElementById("IFin").innerHTML="";}}
var sh=screen.height;
var q=parseInt(prompt("Enter you age"));
var w=parseInt(prompt("Enter you height in cms"));
var e=parseInt(prompt("Enter you weight in kgs"));
var r=prompt("Enter you gender, either M or F");
if(r=='M'||r=='m'){
var limit1=10*e+6.25*w-5*q+5;
var limit2=3;
var limit3=20;}
else if(r=='F'||r=='f'){
var limit1=10*e+6.25*w-5*q-161;
var limit2=2;
var limit3=18;}
if(q<6){
var limit2=1;
var limit3=16;}
else if(q<13){
var limit2=2;
var limit3=14;}
if(r!='m'&&r!='M'&&r!='f'&&r!='F'){
alert("The info you entered is incorrect");}
localStorage.setItem("limit1",parseInt(limit1));
localStorage.setItem("limit2",parseInt(limit2));
localStorage.setItem("limit3",parseInt(limit3));
console.log(localStorage.getItem("limit1"));
console.log(localStorage.getItem("limit2"));
console.log(localStorage.getItem("limit3"));
document.getElementById("CalLim").innerHTML="Calorie limit is "+localStorage.getItem("limit1")+ "cals";
document.getElementById("WatLim").innerHTML="Water limit is "+localStorage.getItem("limit2")+ "L";
document.getElementById("ILim").innerHTML="Iron limit is "+localStorage.getItem("limit3")+" mg";}
function save(){
var x=document.getElementById("FoodName").value;
a.push(x);
document.getElementById("FoodName").value="";}
function save1(){
var x=document.getElementById("Calories").value;
b.push(x);
document.getElementById("Calories").value="";}
function save2(){
var x=document.getElementById("Water").value;
c.push(x);
document.getElementById("Water").value="";}
function save3(){
var x=document.getElementById("Iron").value;
d.push(x);
document.getElementById("Iron").value="";}
function add(){
localStorage.setItem("fname", JSON.stringify(a));
localStorage.setItem("fcal", JSON.stringify(b));
localStorage.setItem("fwat", JSON.stringify(c));
localStorage.setItem("firon", JSON.stringify(d));
var x=JSON.parse(localStorage.getItem("fcal"));
var y=JSON.parse(localStorage.getItem("fwat"));
var z=JSON.parse(localStorage.getItem("firon"));
var sum1=0,sum2=0,sum3=0;
for(var i=0;i<x.length;i++){
sum1+=parseInt(x[i]);
sum2+=parseInt(y[i]);
sum3+=parseInt(z[i]);}
console.log(sum1);
console.log(x);
console.log(localStorage.getItem("limit1"));
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
document.getElementById("IFin").innerHTML="Iron limit is perfectly hit";}}}