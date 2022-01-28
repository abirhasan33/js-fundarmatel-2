var tableLength = 12;
var tourDestintions = ['coxbazar', 'nepal', 'vutan', 'pwris'];

tourDestintions.indexOf('vutan');

var fourthDestination = tourDestintions[3];

tourDestintions[1] = 'srilanka';
tourDestintions.push('london');
tourDestintions.pop();

if(tourDestintions[1]== 'nepal'){
    console.log('phare ahare ahare');
}
else if(tourDestintions[1]== 'china'){
    console.log('china tor cache jabo na');
}
else if(tourDestintions.length== 4){
    console.log('aro taka ache beshi gurmu')
}
else{
    console.log('kothy jamona bashay mosha marmu');
}

var eggPrice = 32;
var myBudeget =32;
if(eggPrice <= myBudeget){
    console.log('ami dim khamu')
}
if(eggPrice>= myBudeget){
    console.log('lebu diye vat khabo')
}

