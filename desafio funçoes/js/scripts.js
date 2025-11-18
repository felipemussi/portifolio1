         //Seleciona o elemento no HTML
        const btnFilter = document.getElementById('btn-filter');
        const btnForeach = document.getElementById('btn-foreach');
        const btnReduce = document.getElementById('btn-reduce');
        const btnMap = document.getElementById('btn-map');
        const listaHtml = document.getElementById('lista-produtos');

        // Itera sobre o array usando forEach e cria os elementos HTML
         function btnClickForeach(items = menuOptions) {
             btnClickClear(); // Limpa a lista antes de adicionar novos itens
                items.forEach(item => {
            const listItem = document.createElement('li');
            const itemImage = document.createElement('img');
            const itemName = document.createElement('h2');
           
            const itemPrice = document.createElement('p'); 
            itemImage.src = item.src; 
            itemName.textContent = item.name;
            itemImage.alt = item.name;
            itemPrice.textContent = `R$ ${item.price.toFixed(2)}`;
            console.log(item);
            listItem.appendChild(itemImage);
            listItem.appendChild(itemName);
            listItem.appendChild(itemPrice);
            listaHtml.appendChild(listItem);
        })};
          
       function btnClickReduce() {
        btnClickClear();
        const totalPrice = menuOptions.reduce((acc, item) => acc + item.price, 0);
    listaHtml.innerHTML = ` <h2 style="border: 2px solid #fff;
     width:300px; padding: 10px;">Preço Total: R$ ${totalPrice},00 </h2>`;

        
    }

    function btnClickFilter() {
        btnClickClear();
        const veganItems = menuOptions.filter(item => item.vegan);
        veganItems.forEach(item => {
            listaHtml.innerHTML += ` <li>
            <img src="${item.src}" alt="${item.name}">
            <h2>${item.name}</h2>
            <p>R$ ${item.price},00</p>
        </li>`;
        })};

        function btnClickMap() {
            btnClickClear();
        const desconto = menuOptions.map(item => item.price * 0.9); 
        const precosComDesconto = menuOptions.map((item, index) => {
            return {
                name: item.name,
                price: desconto[index],
                vegan: item.vegan,
                src: item.src
            };
        });
        console.log(precosComDesconto);
        btnClickForeach(precosComDesconto);

            };
      
        //Função para limpar o display
        function btnClickClear() {
            listaHtml.innerHTML = '';
        }

    // Usar wrappers para evitar que o Event seja passado como primeiro argumento
    btnForeach.addEventListener('click', () => btnClickForeach());
    btnReduce.addEventListener('click', () => btnClickReduce());
    btnFilter.addEventListener('click', () => btnClickFilter());
    btnMap.addEventListener('click', () => btnClickMap());