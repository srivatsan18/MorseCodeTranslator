var inputtxt=document.querySelector("#txt");
var out=document.querySelector("#outti");
var btntranslate=document.querySelector("#btn-translate");
var url="https://api.funtranslations.com/translate/morse.json";
out.innerText="Zazooooooooooo......................."
function urlgetter(text){
  return url+ "?"+"text="+ text;

}
function errorhandler(error){
  console.log("error occured",error);
}
function clickhandler()
{
   var textt=inputtxt.value;
  fetch(urlgetter(textt))
  .then(response => response.json())
  .then(json =>{
    var outtext=json.contents.translated;
    out.innerText=outtext;

  })
  .catch(errorhandler)
}
btntranslate.addEventListener("click", clickhandler)




