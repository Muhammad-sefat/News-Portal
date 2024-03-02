const getCategory = async () =>{
    const response = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await response.json();
    const allData = data.data.news_category;
    const showButton = document.getElementById('show-button');
    allData.forEach((item)=>{
        console.log(item);
      const button = document.createElement('button');
      button.className = "bg-lime-500 py-2 px-5 rounded-lg ml-5 font-semibold";
      button.innerText = item.category_name;
      showButton.appendChild(button);
    })
}

const getCardProduct = async () =>{
    const response = await fetch("")
}

getCategory();