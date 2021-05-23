<html>
<meta name="viewport" content="width=device-width, initial-scale=1">

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
}

.navbar {
  overflow: hidden;
  background-color: #333;
}

.navbar a {
  float: left;
  font-size: 16px;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.dropdown {
  float: left;
  overflow: hidden;
}

.dropdown .dropbtn {
  font-size: 16px;  
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

.navbar a:hover, .dropdown:hover .dropbtn {
  background-color: red;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}

div.panel12 {
  width: 100%;
  overflow:auto;
  word-wrap: break-word;
}



.navbar a.active {
  background-color: #4CAF50;
  color: red;
}
</style>







<div class="navbar" id="navbar">
  <a href="polmax.php" class="active">HOME</a>
  <a href="polmax.php">POLMAX</a>
  <a href="polmax2.php">Polmax2</a>
  <a href="misiek.php">Misiek</a>
  <a href="aniolek.php">Aniołek</a>
  <a href="zabawa.php">Zabawa</a>
  <a href="http://polmax.66ghz.com/wimpy/player.html">Player</a>



 <div class="dropdown">
    <button class="dropbtn">Stacje
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="radio5.php">Radio5</a>
      <a href="http://stream.zeno.fm/favya1hd8yzuv">Rad6</a>
      <a href="http://polmaxfm.epizy.com/batflat/ftb">FTB</a>
      <a href="http://polmaxfm.epizy.com/batflat/discoparty">Discoparty</a>
      <a href="http://polmaxfm.epizy.com/batflat/discoradio">Disco Radio</a>
     </div>
   </div>






<div class="dropdown">
    <button class="dropbtn">Dropdown 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
 </div>
</div>


</html>