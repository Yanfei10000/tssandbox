/* var myname:string = "John";
var score1:number = 50;
var score2:number = 42.50;
var sum = score1 + score2 ;
console.log("name "+ myname) ;
console.log("first score: "+score1) ;
console.log("second score: "+score2) ;
console.log("sum of the scores: "+sum);

var str = '1'
var str2:number = <number> <any> str   //str is now of type number
console.log(typeof(str2)) */
/* var global_num = 12          //global variable
class Numbers {
   num_val = 13;             //class variable
   static sval = 10;         //static field
   
   storeNum():void {
      var local_num = 14;    //local variable
   }
}
console.log("Global num: "+global_num)
console.log(Numbers.sval)   //static variable
var obj = new Numbers();
console.log("Global num: "+obj.num_val)  */
/* var x:number = 4
var y = -x;
console.log("value of x: ",x);   //outputs 4
console.log("value of y: ",y);   //outputs -4

var msg:string = "hello"+" world"
console.log(msg) */
/* var num:number = -2
var result = num > 0 ?"positive":"non-positive"
console.log(result) */
/* var num = 12
console.log(typeof num);   //output: number */
var n = 5;
while (n > 5) {
    console.log("Entered while");
}
do {
    console.log("Entered do…while");
} while (n > 5);
