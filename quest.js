

document.addEventListener('DOMContentLoaded', () => {

document.querySelector('#one').onclick= function(){

    alert("button clicked clicked");
    document.body.innerHTML= "clicked";
}




class Question{
    constructor(options,right){
       this.options=options;
       this.right=right; 
    }
    show(){
        document.querySelector('#display').innerHTML=("here  " + " <h3>" +this.options+" </h3>");
        this.options.forEach(element => {
            document.querySelector('div').innerHTML += "<li>" + element +"</li>";            
        });
    }


}
q = new Question(['asdf', 'two'],[1,2]);
q.show();



});
