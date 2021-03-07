const clothingGrid= document.querySelector("#clothing-grid");
const accessoriesGrid= document.querySelector("#accessory-grid");

fetch('https://5d76bf96515d1a0014085cf9.mockapi.io/product')
.then((res)=>{
    return res.json();
}).then((data)=>{


    for(let i=0;i<=9;i++){
        if(i<5){
            
            const productDiv= document.createElement('div');
            clothingGrid.appendChild(productDiv);
            productDiv.classList.add('clothing-items');
            const productLink= document.createElement("a");
            const img= document.createElement('IMG');
            const h4= document.createElement('h4');
            const h5=document.createElement('h5');
            const p=document.createElement('p');
            productDiv.appendChild(productLink);
            productLink.appendChild(img);
            productDiv.appendChild(h4);
            productDiv.appendChild(h5);
            productDiv.appendChild(p);
            h4.innerText=data[i].name;
            h5.innerText=data[i].brand;
            p.innerText="Rs " + data[i].price;  
            img.setAttribute("src",data[i].preview); 
            img.setAttribute("width","100%") ;
            productLink.href="/details.html";
            productLink.classList.add('product-links');
            productLink.setAttribute('id',i+1);

            


        }else{
            const productDiv= document.createElement('div');
            accessoriesGrid.appendChild(productDiv);
            productDiv.classList.add('clothing-items');
            const productLink= document.createElement("a");
            const img= document.createElement('IMG');
            const h4= document.createElement('h4');
            const h5=document.createElement('h5');
            const p=document.createElement('p');
            productDiv.appendChild(productLink);
            productLink.append(img);
            productDiv.appendChild(h4);
            productDiv.appendChild(h5);
            productDiv.appendChild(p);
            h4.innerText=data[i].name;
            h5.innerText=data[i].brand;
            p.innerText="Rs " + data[i].price;  
            img.setAttribute("src",data[i].preview); 
            img.setAttribute("width","100%") ;
            productLink.classList.add('product-links');
            productLink.href="/details.html";
            productLink.setAttribute('id',i+1); 
        }
    }

    
})









