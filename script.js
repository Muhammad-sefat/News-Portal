let selectedId = '01';
const getCategory = async () =>{
    const response = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await response.json();
    const allData = data.data.news_category;
    const showButton = document.getElementById('show-button');
    allData.forEach((item)=>{
      const button = document.createElement('button');
      button.className = "bg-lime-500 py-2 px-5 rounded-lg ml-5 font-semibold";
      button.innerText = item.category_name;
      button.addEventListener("click",()=>{
        getCardProduct(item.category_id);
        console.log('clicked');
      })
      showButton.appendChild(button);
    })
}

const getCardProduct = async (categoryId) =>{
    selectedId = categoryId;
    const response = await fetch(`https://openapi.programming-hero.com/api/news/category/${categoryId}`);
    const data = await response.json();
    const allData = data.data;
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    allData.forEach((item)=>{
        console.log(item);
        const cardDiv = document.createElement("div");
        cardDiv.innerHTML = `
        <div class="card card-side bg-base-100 shadow-xl my-5 flex">
                <figure class="w-[35%]"><img src="${item.image_url}"/></figure>
                <div class="card-body w-[65%]">
                  <h2 class="card-title">${item.title}</h2>
                  <p>${item.details.slice(0,300)}</p>
                  <div class="flex justify-between items-center">
                    <div class="flex items-center gap-4">
                        <img class="w-[14%] rounded-full" src="${item.author.img}">
                        <div>
                            <h3 class="text-xl text-gray-600 font-semibold">${item.author.name}</h3>
                            <p class="text-lg text-gray-600">${item.author.published_date}</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        <i class="fa-regular fa-eye"></i>
                        <p class="text-lg font-medium">${item.rating.number}</p>
                    </div>
                    <div>
                        <div class="rating">
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400"  />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked/>
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                          </div>
                    </div>
                    <i class="fa-solid fa-arrow-right text-orange-500 text-xl"></i>
                  </div>

                </div>
              </div>
        `;
        cardContainer.appendChild(cardDiv);
    })
}
getCardProduct(selectedId);
getCategory();