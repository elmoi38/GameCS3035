//Google Chrome
var board = 
[
    ["W", "W", "W", "W", "W", "W", "W", "W"],
    ["W", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", "W"],
    ["W", "W", "W", "W", "W", "W", "W", "W"]
];

board[2][3] = "W";
board[4][1] = "W";
board[5][6] = "W";
board[6][3] = "W";
board[3][5] = "W";
board[4][4] = "W";
board[1][0] = "W";


var prize1 = 
{
    p1: "P1",
    key1: " Gold Key 1 "

};

var prize2 = 
{
    p2: "P2",
    key2: " Golden Key 2 "
};

board[1][4] = prize1.p1;
board[5][3] = prize2.p2;
board[4][6] = "G";

var challenge1 = 
{   c: "C1",
    monsterName1: "Goliath",
    life1: 30,
    attack1: 20,
    prize1: " Sword ", 
    challenges1: function(){
    
      
            
            player.lifePoint = player.lifePoint - challenge1.attack1;
            document.getElementById("lifePoints").innerHTML = "Player Life Points: " + player.lifePoint;
            challenge1.life1 = challenge1.life1 - player.attack; 
            document.getElementById("challenge").innerHTML = "Challenge: Monster Goliath life points: " + challenge1.life1;

        if(player.lifePoint == 0){
                document.write("<h1>You die</h1>");
                document.write("Refresh to play again");
            }

        if(challenge1.life1 == 0){
                document.getElementById("challenge").innerHTML = "Challenge: <b>Monster die. Move player</b>";
                player.bag.push(challenge1.prize1);
                document.getElementById("bag").innerHTML = "Bag: " + player.bag;
                 return false; 
            }
         
        }
 
}

var challenge2 =
{   c: "C2",
    monsterName2: "Zoom",
    life2: 30,
    attack2: 20,
    prize2: " Armor ",
    challenges2: function(){
       
       
            
            player.lifePoint = player.lifePoint - challenge2.attack2;
             document.getElementById("lifePoints").innerHTML = "Player Life Points: " + player.lifePoint;
            challenge2.life2 = challenge2.life2 - player.attack; 
            document.getElementById("challenge").innerHTML = "Challenge: Monster Zoom life points: " + challenge2.life2;

        if(player.lifePoint == 0){
                document.write("<h1>You die</h1>");
                document.write("Refresh to play again");
            }

        if(challenge2.life2 == 0){
                document.getElementById("challenge").innerHTML = "Challenge: <b>Monster die. Move player</b>";
                player.bag.push(challenge2.prize2);
                document.getElementById("bag").innerHTML = "Bag: " + player.bag;
                 return false; 
            }
         
        }
}

var challenge3 =
{   c: "C3",
    monsterName3: "Fang",
    life3: 30,
    attack3: 10,
    prize3: " Knife ", 
    challenges3: function(){
 
        
            
            player.lifePoint = player.lifePoint - challenge3.attack3;
             document.getElementById("lifePoints").innerHTML = "Player Life Points: " + player.lifePoint;
            challenge3.life3 = challenge3.life3 - player.attack; 
            document.getElementById("challenge").innerHTML = "Challenge: Monster Fang life points: " + challenge3.life3;

        if(player.lifePoint == 0){
                document.write("<h1>You die</h1>");
                document.write("Refresh to play again"); 

            }

        if(challenge3.life3 == 0){
                document.getElementById("challenge").innerHTML = "Challenge: <b>Monster die. Move player</b>";
                player.bag.push(challenge3.prize3);
                document.getElementById("bag").innerHTML = "Bag: " + player.bag;
                 return false; 
            }
         
        }
        
}

var challenge4 =
{   c: "C4",
    monsterName4: "Cyclops",
    life4: 30,
    attack4: 10,
    prize4: " Food ",
    challenges4: function(){

          
            
            player.lifePoint = player.lifePoint - challenge4.attack4;
            document.getElementById("lifePoints").innerHTML = "Player Life Points: "  + player.lifePoint;
            challenge4.life4 = challenge4.life4 - player.attack; 
            document.getElementById("challenge").innerHTML = "Challenge: Monster Cyclops life points: " + challenge4.life4;

        if(player.lifePoint == 0){
                 document.write("<h1>You die</h1>");
                document.write("Refresh to play again");
            }

        if(challenge4.life4 == 0){
                document.getElementById("challenge").innerHTML = "Challenge: <b>Monster die. Move player</b>";
                player.bag.push(challenge4.prize4);
                document.getElementById("bag").innerHTML = "Bag: " + player.bag;
                return false; 
            }
                
    }
}

var challenge5 = 
{   c: "C5",
    monsterName5: "Ruth",
    life5:  30,
    attack5: 20,
    prize5: " Sword2 ",
    challenges5: function(){
        
         
           
            player.lifePoint = player.lifePoint - challenge5.attack5;
            document.getElementById("lifePoints").innerHTML = "Player Life Points: " + player.lifePoint;
            challenge5.life5 = challenge5.life5 - player.attack; 
            document.getElementById("challenge").innerHTML = "Challenge: Monster Ruth life points: " + challenge5.life5;

        if(player.lifePoint == 0){
                document.write("<h1>You die</h1>");
                document.write("Refresh to play again");
                
            }

        if(challenge5.life5 == 0){
                document.getElementById("challenge").innerHTML = "Challenge: <b>Monster die. Move player</b>";
                player.bag.push(challenge5.prize5);
                document.getElementById("bag").innerHTML = "Bag: " + player.bag;
                 return false; 
            }
         
        }    
}



board[1][1] = challenge1.c;
board[6][1] = challenge2.c;
board[3][3] = challenge3.c;
board[3][6] = challenge4.c;
board[4][2] = challenge5.c;


var i;
var j

    document.write("<table id = maze border = 1 width = 50%  height = 300 cellspacing = 0>");
    
    for( i = 0; i < board.length; i++){
        document.write("<tr>");
        for( j = 0; j < board[i].length; j++){
            document.write("<td>" + board[i][j] + "</td>");

        }
        document.write("</tr>");

    }
     
    document.write("</table>");
 
    var r = Math.floor(Math.random()*i);
    var c = Math.floor(Math.random()*j);


var player = {
    lifePoint: 100,
    attack: 15,
    currentPosition: "[" + r + "]" + "[" + c + "]",
    bag: []

};

  function start() {
     
        if(board[r][c] == " ")
        {
               
                document.getElementsByTagName("tr")[r].getElementsByTagName("td")[c].style.backgroundColor = "blue"; 
                
        }
        else if(board[r][c] == "W" || board[r][c] == "C1" || board[r][c] == "C2" || board[r][c] == "C3" || board[r][c] == "C4"
            || board[r][c] == "C5" || board[r][c] == "P1" || board[r][c] == "P2" || board[r][c] == "G")
        {
                r = Math.floor(Math.random()* i);
                c = Math.floor(Math.random()* j);
                start();
                
        }
     
    }


player.currentPosition = start();  
 
function Prize1(){
            player.bag.push(prize1.key1);
            document.getElementById("bag").innerHTML = "Bag: " + player.bag;  
            

};

function Prize2(){
            
            player.bag.push(prize2.key2);
            document.getElementById("bag").innerHTML = "Bag: " + player.bag; 

};


function Challenge(){
 
    document.getElementById("challenge").innerHTML = "Challenge: Would you like to accpet the challenge?"; 

    switch(board[r][c]) {
        
        case "C1": 
            document.getElementById("UpButton").disabled = true;
            document.getElementById("DownButton").disabled = true;
            document.getElementById("LeftButton").disabled = true;
            document.getElementById("RightButton").disabled = true;

            document.getElementById("BattleButton").onclick = function() {
                challenge1.challenges1();
                if(challenge1.life1 == 0){
                    document.getElementById("UpButton").disabled = false;
                    document.getElementById("DownButton").disabled = false;
                    document.getElementById("LeftButton").disabled = false;
                    document.getElementById("RightButton").disabled = false;

                }
            }

            document.getElementById("NoButton").onclick = function() {
                document.getElementById("challenge").innerHTML = "Challenge: You ran away"; 

                document.getElementById("UpButton").disabled = false;
                document.getElementById("DownButton").disabled = false;
                document.getElementById("LeftButton").disabled = false;
                document.getElementById("RightButton").disabled = false;

            }
           
            break; 

        case "C2": 
            document.getElementById("UpButton").disabled = true;
            document.getElementById("DownButton").disabled = true;
            document.getElementById("LeftButton").disabled = true;
            document.getElementById("RightButton").disabled = true;

            document.getElementById("BattleButton").onclick = function() {
                challenge2.challenges2();
                if(challenge2.life2 == 0){
                    document.getElementById("UpButton").disabled = false;
                    document.getElementById("DownButton").disabled = false;
                    document.getElementById("LeftButton").disabled = false;
                    document.getElementById("RightButton").disabled = false;

                }

            }

            document.getElementById("NoButton").onclick = function() {

                document.getElementById("challenge").innerHTML = "Challenge: You ran away"; 

                document.getElementById("UpButton").disabled = false;
                document.getElementById("DownButton").disabled = false;
                document.getElementById("LeftButton").disabled = false;
                document.getElementById("RightButton").disabled = false;

            }
            break; 

        case "C3": 
       
              document.getElementById("UpButton").disabled = true;
            document.getElementById("DownButton").disabled = true;
            document.getElementById("LeftButton").disabled = true;
            document.getElementById("RightButton").disabled = true;

            document.getElementById("BattleButton").onclick = function() {
                challenge3.challenges3();
                if(challenge3.life3 == 0){
                    document.getElementById("UpButton").disabled = false;
                    document.getElementById("DownButton").disabled = false;
                    document.getElementById("LeftButton").disabled = false;
                    document.getElementById("RightButton").disabled = false;

                }

            }

            document.getElementById("NoButton").onclick = function() {
                document.getElementById("challenge").innerHTML = "Challenge: You ran away"; 

                document.getElementById("UpButton").disabled = false;
                document.getElementById("DownButton").disabled = false;
                document.getElementById("LeftButton").disabled = false;
                document.getElementById("RightButton").disabled = false;

            }
            break; 

        case "C4": 
        
              document.getElementById("UpButton").disabled = true;
            document.getElementById("DownButton").disabled = true;
            document.getElementById("LeftButton").disabled = true;
            document.getElementById("RightButton").disabled = true;

            document.getElementById("BattleButton").onclick = function() {
                challenge4.challenges4();
                if(challenge4.life4 == 0){
                    document.getElementById("UpButton").disabled = false;
                    document.getElementById("DownButton").disabled = false;
                    document.getElementById("LeftButton").disabled = false;
                    document.getElementById("RightButton").disabled = false;

                }

            }

            document.getElementById("NoButton").onclick = function() {
                document.getElementById("challenge").innerHTML = "Challenge: You ran away"; 

                document.getElementById("UpButton").disabled = false;
                document.getElementById("DownButton").disabled = false;
                document.getElementById("LeftButton").disabled = false;
                document.getElementById("RightButton").disabled = false;

            }
            break; 

        case "C5": 
       
              document.getElementById("UpButton").disabled = true;
            document.getElementById("DownButton").disabled = true;
            document.getElementById("LeftButton").disabled = true;
            document.getElementById("RightButton").disabled = true;

            document.getElementById("BattleButton").onclick = function() {
                challenge5.challenges5();
                if(challenge5.life5 == 0){
                    document.getElementById("UpButton").disabled = false;
                    document.getElementById("DownButton").disabled = false;
                    document.getElementById("LeftButton").disabled = false;
                    document.getElementById("RightButton").disabled = false;

                }
            }

            document.getElementById("NoButton").onclick = function() {
                document.getElementById("challenge").innerHTML = "Challenge: You ran away"; 

                document.getElementById("UpButton").disabled = false;
                document.getElementById("DownButton").disabled = false;
                document.getElementById("LeftButton").disabled = false;
                document.getElementById("RightButton").disabled = false;

            }
            break;  
    }  
};

document.write("<h2>Move Player</h2>");

window.onload = function() {

document.getElementById("DownButton").onclick = function() {
      r++; 
      if(board[r][c] == "W"){
            wallCell();
            r--;
         
        } else if(board[r][c] == "P1"){
            Prize1();
        

        } else if(board[r][c] == "P2"){

            Prize2();

        } else if(board[r][c] == "C1" || board[r][c] == "C2" || board[r][c] == "C3" || board[r][c] == "C4"  || board[r][c] == "C5" ){
            
            Challenge();

        } else if(board[r][c] == board[4][6]){
           document.write("<h1>You won the game</h1>");
           document.write("Refresh to play again");

        }
        board[r][c] = cellColor();  
        document.getElementById("current").innerHTML = "Current position: " + "[" + r + "]" + "[" + c + "]"; 

  };

  document.getElementById("UpButton").onclick = function() {

     r--; 
        if(board[r][c] == "W"){
            wallCell();
            r++;
            
        } else if(board[r][c] == "P1"){

            Prize1();
        

        } else if(board[r][c] == "P2"){

            Prize2();

        } else if(board[r][c] == "C1" || board[r][c] == "C2" || board[r][c] == "C3" || board[r][c] == "C4"  || board[r][c] == "C5" ){
           
            Challenge();

        } else if(board[r][c] == board[4][6]){
             document.write("<h1>You won the game</h1>");
           document.write("Refresh to play again");

        }
        board[r][c] = cellColor();
        document.getElementById("current").innerHTML = "Current position: " + "[" + r + "]" + "[" + c + "]"; 

  };

  document.getElementById("RightButton").onclick = function() {
     
    c++; 
        if(board[r][c] == "W"){
            wallCell();
            c--;
         
        }  else if(board[r][c] == "P1"){

            Prize1();
        

        } else if(board[r][c] == "P2"){

            Prize2();

        } else if(board[r][c] == "C1" || board[r][c] == "C2" || board[r][c] == "C3" || board[r][c] == "C4"  || board[r][c] == "C5" ){
          
            Challenge();

        } else if(board[r][c] == board[4][6]){
           document.write("<h1>You won the game</h1>");
           document.write("Refresh to play again");
        }

        board[r][c] = cellColor();  
        document.getElementById("current").innerHTML = "Current position: " + "[" + r + "]" + "[" + c + "]"; 

  };

  document.getElementById("LeftButton").onclick = function() {

     c--; 
    
        if(board[r][c] == "W"){
            wallCell();
            c++;
          
        } else if(board[r][c] == "P1"){

       
            Prize1();
            

        } else if(board[r][c] == "P2"){

            Prize2();
             
        } else if(board[r][c] == "C1" || board[r][c] == "C2" || board[r][c] == "C3" || board[r][c] == "C4"  || board[r][c] == "C5" ){
           
            Challenge();

        } else if(board[r][c] == board[4][6]){
             document.write("<h1>You won the game</h1>");
           document.write("Refresh to play again");

        }

        board[r][c] = cellColor(); 
        document.getElementById("current").innerHTML = "Current position: " + "[" + r + "]" + "[" + c + "]"; 
}

};


function wallCell(){
    document.getElementsByTagName("tr")[r].getElementsByTagName("td")[c].style.backgroundColor = "red";
}

function cellColor(){ 
    var y = document.getElementsByTagName("tr")[r].getElementsByTagName("td")[c].style.backgroundColor = "white";
 
}

function color(){
    document.getElementById("maze").style.backgroundColor = "black";
}

color(); 



