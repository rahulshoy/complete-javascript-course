/************************
 * type coercion and variable mutation
 *  
 */
/*
var fisrtName = 'Rahul';
var age = 26;
console.log('hello ' + fisrtName + ' Your age is less than ' + age);
age = 'twenty six';
console.log(age + ' ' + fisrtName);
*/




/*************************
 *  other than console.log
 */
/*
 alert('beware of hackers !!!');

 var mailId=prompt("for security purpose...what's your mail id ");
 console.log( 'hi ' + mailId + ' You can enter');
 */



 /************************
  * Basic Operator
  * 
  */
/*
  var name;
  name = 25;
  var t= typeof(name);
  console.log(t);

  var x= 5,y=7;
  console.log(x,y);
  x++,y++;
  console.log(x,y,z=10,a=(7*2));

  var bills = [124,48,268];

  var person=new Object();
  person['name']='Rahul';
  person.age=21;
  person.status = 'married';
  console.log(person);


  /****************************
   * calculating bmi using object
   */

  /* var john = {
       'firstName' : 'John',
       'lastName'  : 'Cena',
       'mass' : 23,
       'height' : 1.69 ,
       'calBmi' : function(){
           this.bmi = (this.mass)/(this.height * this.height);
           return this.bmi;
       }

   }
    
   john.calBmi();
   var mark = {
    firstName : 'Mark',
    lastName  : 'Henry',
    mass : 63,
    height : 1.62 ,
    'calBmi' : function(){
        this.bmi = (this.mass)/(this.height * this.height);
        return this.bmi;
    }

}
mark.calBmi();

console.log(john);
console.log(mark);


/***
 *  loop and iteration
 */
/*
var num=[];
 for( var i=1;i<=20;i+=2){
     if(i%2)
     {

         console.log('even' , i%2 , i);
     }
     else{
         console.log('odd', i%2, i);
     }
     num.push(i);
 }

 for(var i=0;i<num.length;i++)
 {
     console.log(num[i]);
 }

*/
 /******
  *   john tip using object and array
  */

  var john ={

    bill: [124,48,268,180,42],
    tip : [],
    calTip : function (){
          var length = this.bill.length;
          for(var i=0;i<length;i++)
          {
              if(this.bill[i]<50)
              {
                  this.tip.push(this.bill[i] * .2);
              }
              else if(this.bill[i]<=200)
              {
                this.tip.push(this.bill[i] * .15);
              }
              else{
                this.tip.push(this.bill[i] * .1);
              }


          }

    }
  }

  john.calTip();
  console.log(john);
  var tip=[];
  var total=[];
  for(var i=0;i<john.bill.length;i++)
  {
      tip.push(john.tip[i]);
      total.push(john.tip[i]+ john.bill[i]);
  }

  console.log(tip,total);
