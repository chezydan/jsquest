

document.addEventListener('DOMContentLoaded', () => {

document.querySelector('#one').onclick= function(){
    qman.display();

}



var questions=[];
class Question{
    constructor(question,options,right){
       this.question= question;
       this.options=options;
       this.right=right; 
       questions.push(this);
    }
    show(){
        document.querySelector('#display').innerHTML= "<form id='formy' onsubmit= 'qman.evaluate();' > ";
         
        document.querySelector('#formy').innerHTML += "<br><strong>"+this.question +"</strong><br>";
        var i=0;
       this.options.forEach(element => {
            document.querySelector('#formy').innerHTML += "<input type= checkbox name ="+"q" + " value= " + i + ">"
            + element +"<br>";
            i++;         ;            
        });
        document.querySelector('#formy').innerHTML += "<button > submit </button>"
    }
    evaluate(){
        var answerArr = Array[this.questions.length]
        alert(anserArr.length);
        return true;
    }


}

class Qmanager {
    constructor (questions){
        this.questions=questions;
    }

    display(){

        var i = parseInt(document.querySelector('#number').innerHTML);  
        if (i< this.questions.length){
            this.questions[i].show();

            document.querySelector('#number').innerHTML= i +1;
        }//if
    }//display
    evaluate(){
        var answerArr = new Array (this.questions.length);
        alert(answerArr .length);
    }
    }//Qmanager


q1 = new Question('asdf?',['asdf', 'two'],[1,2]);
q2 = new Question("5 * 10",["2","4","10"], [3]);
q3 = new Question('Burkina Fasso', ['Kampala','Ouagadougou','Lusaka'],[1]);
q4 = new Question ("למי יש 3? ",["רבוע","משולש"], [2] );
console.log(questions.length);
console.log(document.querySelector('#number').innerHTML)

qman= new Qmanager(questions);

//document.querySelector('#formy').onsubmit = qman.evaluate();

});
