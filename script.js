//Object 1: Weapons
var Weapons = {
    Knives: 5,
    Guns: 2,
    Baseballbats: 2,
    Brassknuckles: 8,
    Grenades: 10,
    calcTotalWep: function(){
    alert('You have 27 weapons');},
 
    addtoTotal: function(a){ 
     return a + this.Knives;
     }
};
    console.log(Weapons);

//Object 2: Food
var Food = {
    Chicken: 8,
    Waterbottles: 12,
    Cannedsoup: 6,
    Bread: 13,
    Cannedbeans: 5, 
    
    calcTotalFood: function(){
    return this.Chicken + this.Waterbottles + this.Cannedsoup + this.Bread ;
    },
    
    addtoTotal: function(a){
    return a + this.Waterbottles;    
        }
    };
    //console.log(Food.calcTotalFood());

//Object 3: Medicine
var Medicine = {
    BandAids: 20,
    Hydrogenperoxide: 3,
    Antidotes: 3,
    Painkillers: 7,
    Gauze: 8,

    calcTotalMed: function(){
    return this.BandAids + this.Hydrogenperoxide + this.Antidotes + this.Painkillers + this.Gauze; 
    },
    
    addtoTotal: function(a){
    return a + this.BandAids;}
    };
//console.log(Medicine.calcTotalMed());

//first click function
var drop1;
var dropval1;
document.getElementById('btn1').addEventListener('click', function(){
drop1 = document.getElementById('dropval');
dropval1 = drop1.options[drop1.selectedIndex].text;
//console.log(dropval1);


switch(dropval1){
  case 'Weapons': console.log(Weapons.calcTotalWep());
  break;  
  case 'Food': alert('You have' + ' ' + Food.calcTotalFood() + ' ' + 'food items');
  break;
  case 'Medicine': alert('You have' + ' ' + Medicine.calcTotalMed() + ' ' + 'medicine items');
  break;
  default: console.log("error 404");
    }
});

//Second click function


var ipt;
var drop2;
var dropval2;
document.getElementById('btn2').addEventListener('click',function(){
drop2 = document.getElementById('dropval');
dropval2 = drop2.options[drop2.selectedIndex].text;
ipt= document.querySelector('.iptval').value;
var parseipt= parseInt(ipt);
console.log(parseipt);



switch(dropval2){
    case 'Weapons': alert( 'You have' + ' ' + Weapons.addtoTotal(parseipt) + ' ' + 'weapon items' );
    break;
    case 'Food': alert( 'You have' + ' ' + Food.addtoTotal(parseipt) + ' ' + 'food items');
    break;
    case 'Medicine': alert( 'You have' + ' ' + Medicine.addtoTotal(parseipt) + ' ' + 'medicine items');
    break;
    }
    });
    