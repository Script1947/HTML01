// Creat a bussiness name grnerator by combining list of adjectives and shop name and another word
/*

adjective:
 crazy
Amazing
Fire

Shop Name:
Engine 
Food
Garments

Another word :
Bros
Limited
hub


*/
let first , second , third;
let random = Math.random()


//let generate the first word
if(random<0.33){
    first ="crazy"
}
else if(random>=0.33 && random <0.66){
    first ="amazing"
}
else{
    first ="fire"
}
 random = Math.random()
 if(random<0.33){
second="Engine"
}
else if(random>=0.33 && random <0.66){
   second ="Food"
}
else{
    second ="Garments"
}
 random = Math.random()
 if(random<0.33){
    third="bros"
    }
    else if(random>=0.33 && random <0.66){
       third ="limited"
    }
    else{
        third ="Hub"
    }



    console.log( first , second , third)