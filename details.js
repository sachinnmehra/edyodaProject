var productImage =document.querySelector("#product-preview");
var productTitle= document.querySelector("#product-title");
var productBrand=document.querySelector("#product-brand");
var productPrice=document.querySelector("#product-price");
var productDescription=document.querySelector("#description");
var productPreview=document.querySelector("#product-images");






        fetch('https://5d76bf96515d1a0014085cf9.mockapi.io/product/1')
    .then((res)=>{
        return res.json();
    }).then((data)=>{
            productImage.setAttribute("src",data.preview);
            productTitle.innerText=data.name;
            productBrand.innerText=data.brand;
            productPrice.innerText=data.price;
            productDescription.innerText=data.description;
            for(let i=0;i<5;i++){
                const productPhoto= document.createElement("IMG");
                productPreview.appendChild(productPhoto);
                productPhoto.setAttribute("src",data.photos[i])
            
        }
        }
        

    )
    






























































   



