

document.addEventListener('DOMContentLoaded', () => {

document.querySelector('#one').onclick= function(){
    qman.display();

}


var qindex;
var questions=[];
class Question{
    constructor(question,options,right, tags){
       this.question= question;
       this.options=options;
       this.right=right; 
       this.tags=tags;
       questions.push(this);

    }
    show(){
        document.querySelector('#display').innerHTML= "<fieldset id='fs'> </fieldset>";
         
        document.querySelector('#fs').innerHTML += "<br><strong>"+this.question +"</strong><br>";
        var i=0;
       this.options.forEach(element => {
            document.querySelector('#fs').innerHTML += "<input type= 'checkbox' name ="+"q"+" class ='qc' "+ " value= " + i + ">"
            + element +"<br>";
            i++;         ;            
        });
        document.querySelector('#fs').innerHTML += "<button onclick= 'qman.evaluate()'> submit </button>"
    }



}

class Qmanager {
    constructor (questions){
        this.questions=questions;
    }

    display(){

        qindex = parseInt(document.querySelector('#number').innerHTML);  
        if (qindex< this.questions.length){
            this.questions[qindex].show();

            document.querySelector('#number').innerHTML= qindex +1;
        }//if
    }//display
    evaluate(){

        var answerArr = new Array ;
        var optionsGiven =  (document.getElementsByClassName('qc'));
        for (var i = 0 ; i < optionsGiven.length; i++){
            if (optionsGiven[i].checked)
                answerArr.push(1);
            else 
                answerArr.push(0);
        console.log(answerArr[i]);
        }
                                 
        
        
        document.querySelector('#resPanel').innerHTML=(answerArr+ "  " + questions[qindex].right);
        document.querySelector('#resPanel').innerHTML+=this.compareArr(answerArr, questions[qindex].right);
    }

    compareArr(ans, quest){
        var response = true;
        for ( var i = 0 ; i < ans.length; i ++)
            {
                if (ans[i]!= quest[i]           ){
                    response = false;
                    break;
                }
            }
            return response;

    }
    }//Qmanager


q1 = new Question('asdf?',['asdf', 'two'],[0,1]);
q2 = new Question("5 * 10",["2","4","20"], [0,0,1]);
q3 = new Question('Burkina Fasso', ['Kampala','Ouagadougou','Lusaka'],[0,1,0], ['geo']);
q4 = new Question ("למי יש 3? ",["רבוע","משולש"], [2] );


qman= new Qmanager(questions);

//document.querySelector('#formy').onsubmit = qman.evaluate();

});
