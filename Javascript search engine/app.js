const search = () => {
  const searchBox = document.getElementById("search-item").value.toUpperCase();
  console.log(searchBox);

  const storeItems = document.getElementById("product-list")
  console.log(storeItems);

  const product = document.querySelectorAll(".product")
  console.log(product);

  const productName = storeItems.getElementsByTagName("h2")
  console.log(productName);

  for(var i=0;i<productName.length;i++){
    let match = product[i].getElementsByTagName('h2')[0];
    console.log(match);
    if(match){

      let textValue=match.textContent || match.innerHTML
      console.log(textValue);

      if(textValue.toUpperCase().indexOf(searchBox)>-1){
        product[i].style.display="";
      }
      else{
        product[i].style.display='none';
      }
    }
  }
}