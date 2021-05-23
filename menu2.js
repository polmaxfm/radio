<html>   

<style>



      /* ------------------------CZĘŚĆ-GÓRNA-MENU------------------------ */

      /* wygląd głównego elementu - ol */
      ol {
        list-style-type:none;
        padding:0;
        margin:0;
        background-color:black;
        font-size:26px;
        height:2em;
        line-height:        
        height:2em;
        line-height:2em;
        text-align:center;
        position: fixed;
        top: 0;
        display: block;
        width:100%;
        transition: top 0.3s;
     }

      /* wygląd wszystkich elementów - a - znajdujących się w elemencie - ol */
      ol a {
        display:block;
        text-decoration:none;
        color:white;
        padding:0 5px;
        top: 0;
        display: block;
      }

      /* wygląd elementów - li - wszystkich dzieci elementu - ol */
      ol > li {
        float:left;
        margin-left:1px;
        background-color:#333;
        width:150px;
        height:2em;
        top: 0;
        display: block;
      }

      /* wygląd elementu - li - pierwszego dziecka elementu - ol */
      ol > li:first-child {
        margin-left:0;
      }

      /* wygląd elementów - li - wszystkich dzieci elementu - ol - po najechaniu kursorem myszki na element - li */
      ol > li:hover {
        background-color:red;
      }

      /* wygląd elementu - a - dziecka elementu - li - będącego dzieckiem elementu - ol - po najechaniu kursorem myszki na element - li */
      ol > li:hover > a {
        color:yellow;
      }

      /* wygląd elementu - ul - dziecka elementu - li - będącego dzieckiem elementu - ol - po najechaniu kursorem myszki na element - li */
      ol > li:hover > ul {
        display:block;
      }

      /* ------------------------CZĘŚĆ-ROZWIJANA-MENU------------------------ */

      /* wygląd głównych rozwijanych elementów - ul */
      ol > li > ul {
        display:none;
        list-style-type:none;
        padding:0;
        margin:0;
      }

      /* wygląd elementu - li - w części rozwijanej */
      ol > li > ul > li {
        position:relative;
        background-color:blue;
      }

      /* wygląd elementu - a - w części rozwijanej */
      ol > li > ul > li > a {
        border-top:1px solid #FFF;
      }

      /* wygląd elementu - li - w części rozwijanej, po najechaniu kursorem myszki na dany element - li */
      ol > li > ul > li:hover {
        background-color:yellow;
      }

      /* wygląd elementu - a - w części rozwijanej, po najechaniu kursorem myszki na element - li */
      ol > li > ul > li:hover > a {
        color:red;
      }


div.panel12 {
  width: 100%;
  overflow:auto;
  word-wrap: break-word;
}

    </style>
















 <ol>

      <li><a href="#">link - 1</a></li>



      <li><a href="#">link - 2</a></li>



      <li><a href="#">dział - 1</a>
        <ul>
          <li><a href="#">link - 1</a></li>
          <li><a href="#">link - 2</a></li>
          <li><a href="#">link - 3</a></li>
          <li><a href="#">link - 4</a></li>
          <li><a href="#">link - 5</a></li>
        </ul>
      </li>

      <li><a href="#">dział - 2</a>
        <ul>
          <li><a href="#">link - 1</a></li>
          <li><a href="#">link - 2</a></li>
          <li><a href="#">link - 3</a></li>
        </ul>
      </li>


      <li><a href="#">dział - 4</a>
        <ul>
          <li><a href="#">link - 1</a></li>
          <li><a href="#">link - 2</a></li>
          <li><a href="#">link - 3</a></li>
          <li><a href="#">link - 4</a></li>
        </ul>
      </li>

      <li><a href="#">dział - 5</a>
        <ul>
          <li><a href="#">link - 1</a></li>
          <li><a href="#">link - 2</a></li>
          <li><a href="#">link - 3</a></li>
          <li><a href="#">link - 4</a></li>
        </ul>
      </li>


      <li><a href="#">dział - 6</a>
        <ul>
          <li><a href="#">link - 1</a></li>
          <li><a href="#">link - 2</a></li>
          <li><a href="#">link - 3</a></li>
          <li><a href="#">link - 4</a></li>
        </ul>
      </li>


      <li><a href="#">dział - 7</a>
        <ul>
          <li><a href="#">link - 1</a></li>
          <li><a href="#">link - 2</a></li>
          <li><a href="#">link - 3</a></li>
          <li><a href="#">link - 4</a></li>
        </ul>
      </li>

    </ol>

</html>
