document.write('<div id="prv-billboard"></div>


<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
a {
  text-decoration: none;
}
a:hover {
  background-color: brown;
}







body {
  font-family: Arial, Helvetica, sans-serif;
  margin-left: 3px;
  margin-right: 3px;
  margin-top: 0px;
  margin-bottom: 1px;
  width: 99%;
}

.navbar {
  overflow: hidden;
  background-color: #333; 
  width: 100%;
  margin-top: -1em; }

.navbar a {
  float: left;
  font-size: 16px;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.subnav {
  float: left;
  overflow: hidden;
}

.subnav .subnavbtn {
  font-size: 16px;  
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

.navbar a:hover, .subnav:hover .subnavbtn {
  background-color: red;
}

.subnav-content {
  display: none;
  position: absolute;
  left: 0;
  background-color: red;
  width: 100%;
  z-index: 1;
}

.subnav-content a {
  float: left;
  color: white;
  text-decoration: none;
}

.subnav-content a:hover {
  background-color: yellow;
  color: black;
}

.subnav:hover .subnav-content {
  display: block;
}


.navbar a.active {
  background-color: #4CAF50;
  color: red;
}



div.panel12 {
  width: 100%;
  overflow:auto;
  word-wrap: break-word;
}






div.panel10 {
width:95%;

min-width:350px;
max-width:70%;

background-color: #002030;
border: 2px solid black;
filter:alpha(opacity=60);
opacity:0.7;
-moz-opacity:0.7;
}
div.panel10 p {
margin: 4px 4px 4px 4px;

}





</style>







<div class="navbar">
  <a href="polmax.php" class="active">HOME</a>
  <a href="polmax.php">POLMAX</a>
  <a href="polmax2.php">Polmax2</a>
  <a href="polmax3.php">Polmax3</a>
  <a href="misiek.php">Misiek</a>
  <a href="aniolek.php">Aniołek</a>
  <a href="zabawa.php">Zabawa</a>
  <a href="radio5.php">Radyjko5</a>
  <a href="http://polmax.66ghz.com/wimpy/player.html">Player</a>


  <div class="subnav">
    <button class="subnavbtn">Stacje<i class="fa fa-caret-down"></i></button>
    <div class="subnav-content">
      <a href="http://stream.zeno.fm/favya1hd8yzuv">Polmax3</a>
      <a href="radio5.php">Radio5</a>
      <a href="polmax-koledy.php">Polmax Kolędy</a>
      <a href="http://polmaxfm.epizy.com/batflat/ftb">FTB</a>
      <a href="http://polmaxfm.epizy.com/batflat/discoparty">Discoparty</a>
      <a href="http://polmaxfm.epizy.com/batflat/discoradio">Disco Radio</a>

      <a href="#company">Company</a>
      <a href="#team">Team</a>
      <a href="#careers">Careers</a>
    </div>
  </div> 


  <div class="subnav">
    <button class="subnavbtn">Services <i class="fa fa-caret-down"></i></button>
    <div class="subnav-content">
      <a href="https://polmaxfm.ga/wordpress/">Polmax wordpress</a>
      <a href="http://polmax.epizy.com/pliki/lista-radiowa.m3u">Lista Radiowa m3u</a>
      <a href="http://polmax.66ghz.com/wimpy/stacje-radiowe.html">Stacje Radiowe</a>
      <a href="#express">Express</a>
    </div>
  </div> 

  <div class="subnav">
    <button class="subnavbtn">Partners <i class="fa fa-caret-down"></i></button>
    <div class="subnav-content">
      <a href="#link1">Link 1</a>
      <a href="#link2">Link 2</a>
      <a href="#link3">Link 3</a>
      <a href="#link4">Link 4</a>
    </div>
  </div>

<div class="subnav">
    <button class="subnavbtn">menu5<i class="fa fa-caret-down"></i></button>
    <div class="subnav-content">
      <a href="#link1">test1</a>
      <a href="#link2">Link 2</a>
      <a href="#link3">Link 3</a>
      <a href="#link4">Link 4</a>
      <a href="#link4">Link 4</a>
      <a href="#link4">Link 4</a>
      <a href="#link1">test1</a>
      <a href="#link2">Link 2</a>
      <a href="#link3">Link 3</a>
      <a href="#link4">Link 4</a>
      <a href="#link4">Link 4</a>
      <a href="#link4">Link 4</a>
    </div>
  </div>

  <a href="#contact">Contact</a>
</div>

})();
