

document.addEventListener('DOMContentLoaded', () => {

document.querySelector('#one').onclick= function(){

    alert("button clicked clicked");
    document.body.innerHTML= "clicked";
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
        document.querySelector('#display').innerHTML += "<br><strong>"+this.question +"</strong><br>";
        var i=0;
       this.options.forEach(element => {
            document.querySelector('div').innerHTML += "<input type= checkbox name ="+"q" + " value= " + i + ">"
            + element +"<br>";
            i++;         ;            
        });
    }


}

q1 = new Question('asdf?',['asdf', 'two'],[1,2]);
q2 = new Question("5 * 10",["2","4","10"], [3]);
q3 = new Question('Burkina Fasso', ['Kampala','Ouagadougou','Lusaka'],[1]);
q4 = new Question ("למי יש 3? ",["רבוע","משולש"], [2] );
console.log(questions.length);


q1.show();
q2.show();
q3.show(    );
q4.show();


});
