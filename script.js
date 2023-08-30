

function start() {
    var girl = document.getElementById('gname').value;
    var boy = document.getElementById('bname').value;
    // remove space 
    var f="flames"
    var tgirl=girl.split(" ").join("");
    var tboy=boy.split(" ").join("");
    var common=0;
    var girlArray=tgirl.split("");
    var boyArray=tboy.split("");
    if (girl === "" || boy === "") {
        alert("Both names are required.");
        return false; // Prevent form submission
      }

    
    for(i=0;i<girlArray.length;i++){
        for (j=0;j<boyArray.length;j++){
            if(girlArray[i]==boyArray[j]){
                boyArray[j]="-";
                common++;
                break;

            }
        }
        
    }
    console.log(tgirl)
    var size=girlArray.length+boyArray.length;
    var count=size-(2*common);
    while(f.length>1){
        var remove=count%f.length;
        var s=remove-1;
        if(s>=0){
            var left=f.substring(0,s);
            var right=f.substring(s+1,f.length);
            f=right+""+left;
        }
        else{
            f=f.substring(0,f.length-1)
        }
    }
  
    console.log(count);
    console.log(f);
    
    result.innerHTML = "";
    result.innerHTML += "<h3>" + girl + "  &  " + boy + "</h3>";
    if(f=='f'){
        result.innerHTML += "<h4>friends</h4><br>";
        result.innerHTML +="  <div class=\"photo\"><div class=\"wrapper\"><div class=\"box\"><img src=\"img/friend.jpg\" ></div> <div class=\"box\"><img src=\"img/stranger-things.jpg\"></div><div class=\"box\"><img src=\"img/friends.jpg\"></div></div></div>";
        
        result.innerHTML+="<h3>Just for fun😄 </h3><br>";

    }
    else if(f=='l'){
        result.innerHTML += "<h4>Love </h4><br>";
        result.innerHTML +="  <div class=\"photo\"><div class=\"wrapper\"><div class=\"box\"><img src=\"img/steve-peggy.jpg\"></div> <div class=\"box\"><img src=\"img/dil.jpg\"></div><div class=\"box\"><img src=\"img/rain.jpg\"></div></div></div>";
        result.innerHTML+="<h3>Just for fun😄 </h3><br>";

    }
    else if(f=='a'){
        result.innerHTML += "<h4>Affection </h4><br>";
        result.innerHTML +="  <div class=\"photo\"><div class=\"wrapper\"><div class=\"box\"><img src=\"img/ruby.jpg\" ></div> <div class=\"box\"><img src=\"img/affection.jpg\"></div><div class=\"box\"><img src=\"img/affection2.jpg\"></div></div></div>";
    
        result.innerHTML+="<h3>Just for fun😄 </h3><br>";

    }
    else if (f=='m') {
        result.innerHTML += "<h4>Marriage</h4>";
        result.innerHTML +="  <div class=\"photo\"><div class=\"wrapper\"><div class=\"box\"><video  controls autoplay><source src=\"img/marry-me.mp4\" type=\"video/mp4\"> Your browser does not support the video tag.</video></div><div class=\"box\"><img src=\"img/marriage_propose.jpg\"></div><div class=\"box\"><img src=\"img/together.jpg\" ></div><div class=\"box\"><img src=\"img/family-marriage.jpg\" ></div> </div></div>";
        result.innerHTML+="<h3>Just for fun😄 </h3><br>";
      
      } 
    else if(f=='e'){
        result.innerHTML += "<h4>Enemies </h4><br>";
        result.innerHTML +="  <div class=\"photo\"><div class=\"wrapper\"><div class=\"box\"><img src=\"img/enemy.jpg\" ></div> <div class=\"box\"><img src=\"img/dark.jpg\"></div><div class=\"box\"><img src=\"img/wed.jpg\"></div></div></div>";
    
        result.innerHTML+="<h3>Just for fun😄 </h3><br>";
    }
    else  {
      
        result.innerHTML += "<h4>Siblings</h4><br>";
        result.innerHTML +="  <div class=\"photo\"><div class=\"wrapper\"><div class=\"box\"><img src=\"img/sibling.jpg\" ></div> <div class=\"box\"><img src=\"img/sister.jpg\"></div><div class=\"box\"><img src=\"img/gv.jpg\"></div></div></div>";
    
        result.innerHTML+="<h3>Just for fun😄 </h3><br>";
    }
   
    document.getElementById('result').scrollIntoView();
    
    return false;
}
