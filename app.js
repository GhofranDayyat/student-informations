'use strict';
 
//hulpper function
function getRandomInt(age) {
    return Math.floor(Math.random() * Math.floor(age));
  }
var form=document.getElementById('Students-list');
const hedderArr=['id','Email','Mobile','Age','Tuition']
const mainSec=document.getElementById('tabel-saction');
const tabelEl=document.createElement('tabel');
mainSec.appendChild(tabelEl);
var headerRowEl=document.createElement('tr');
tabelEl.appendChild(headerRowEl);
for (let i = 0; i < hedderArr.length; i++) {
    const thEl=document.createElement('th');
    headerRowEl.appendChild(thEl);
    thEl.textContent=hedderArr[i];
}

Submtit.all=[];
function Submtit(email,mobile,tuition){
    this.email=email;
    this.mobile=mobile;
    this.tuition=tuition;
    // this.name=
    // this.age=age;
    Submtit.all.push(this);
}
console.log(Submtit.all)
// Submtit.prototype.getRandomInt=function(){
//     this.age=getRandomInt();
//     console.log(this.age)
// }
Submtit.prototype.render=function(){
    const dataRowEl=document.createElement('tr');
    tabelEl.appendChild(dataRowEl);
    const tdEl=document.createElement('td');
    dataRowEl.appendChild(tdEl)
    tdEl.textContent=this.age;
    for (let i = 0; i < Submtit.all.length; i++) {
        const tdEl=document.createElement('td');
        dataRowEl.appendChild(tdEl)
        tdEl.textContent=Submtit.all[i];
    }
}

form.addEventListener('submit',handelSubmit);
function handelSubmit (e){
e.preventDefault();
var emailU=e.target.email.value;
var mobileU=e.target.mobile.value;
var tuitionU=e.target.myList.value;
var newSub =new Submtit(emailU,mobileU,tuitionU);
console.log(new Submtit(emailU,mobileU,tuitionU));
newSub.render();
}
