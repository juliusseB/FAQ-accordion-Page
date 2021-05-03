class Question{
    constructor(arrow,p,){
        this.arrow=arrow;
        this.p=p;
        this.shown=false;
    }
    buttonClicked(){
        if (this.shown=== false){
            this.p.style.fontSize= "12px";
            this.arrow.style.transform= "rotate(180deg)";
            this.shown= true;
        }
        else if(this.shown===true){
            this.p.style.fontSize= "0px";
            this.arrow.style.transform= "rotate(0deg)";
            this.shown=false;
        }
    }
}
var firstQuestion = new Question(document.querySelector(".firstQuestion .arrow"),document.querySelector(".firstQuestion p"));
var secondQuestion = new Question(document.querySelector(".secondQuestion .arrow"),document.querySelector(".secondQuestion p"));
var thirdQuestion = new Question(document.querySelector(".thirdQuestion .arrow"),document.querySelector(".thirdQuestion p"));
var fourthQuestion = new Question(document.querySelector(".fourthQuestion .arrow"),document.querySelector(".fourthQuestion p"));
var fifthQuestion = new Question(document.querySelector(".fifthQuestion .arrow"),document.querySelector(".fifthQuestion p"));
function firstButtonClicked(){
    firstQuestion.buttonClicked();
}
function secondButtonClicked(){
    secondQuestion.buttonClicked();
}
function thirdButtonClicked(){
    thirdQuestion.buttonClicked();
}
function fourthButtonClicked(){
    fourthQuestion.buttonClicked();
}
function fifthButtonClicked(){
    fifthQuestion.buttonClicked();
}