fetch('https://mariolino.herokuapp.com/pizza')
    .then(res => res.json())
    .then(json => {
        var RH = document.getElementById("RH")
        var OriginalContent = `<tr>
        <td><span>pizza</span></td>
        <td><span>price</span></td>
    </tr>
    <tr>
        <td>ingridients</td>
    </tr>`

        for(var i = 0; i < 5; i++) 
        {
            var MyContent = document.createElement('table')
            var CustomisedContent = OriginalContent
            CustomisedContent = CustomisedContent.replace('pizza', json[i].PIZZA)
            CustomisedContent = CustomisedContent.replace('price', json[i].PRICE)
            CustomisedContent = CustomisedContent.replace('ingridients', json[i].INGRIDIENTS)
            MyContent.innerHTML = CustomisedContent
            RH.appendChild(MyContent)
        }
    })

    fetch('https://mariolino.herokuapp.com/pizza')
    .then(res => res.json())
    .then(json => {
        var RH1 = document.getElementById("RH1")
        var OriginalContent = `<tr>
        <td><span>pizza</span></td>
        <td><span>price</price></td>
    </tr>
    <tr>
        <td>ingridients</td>
    </tr>`

        for(var i = 5; i < 10; i++) 
        {
            var MyContent = document.createElement('table')
            var CustomisedContent = OriginalContent
            CustomisedContent = CustomisedContent.replace('pizza', json[i].PIZZA)
            CustomisedContent = CustomisedContent.replace('price', json[i].PRICE)
            CustomisedContent = CustomisedContent.replace('ingridients', json[i].INGRIDIENTS)
            MyContent.innerHTML = CustomisedContent
            RH1.appendChild(MyContent)
        }
    })




    fetch('https://mariolino.herokuapp.com/desserts')
    .then(res => res.json())
    .then(json => {
        var RH2 = document.getElementById("RH2")
        var OriginalContent = `<tr>
        <td><span>desserts</span></td>
        <td><span>price</span></td>
    </tr>
    <tr>
        <td>ingridients</td>
    </tr>`

        for(var i = 0; i < 3; i++) 
        {
            var MyContent = document.createElement('table')
            var CustomisedContent = OriginalContent
            CustomisedContent = CustomisedContent.replace('desserts', json[i].DESSERTS)
            CustomisedContent = CustomisedContent.replace('price', json[i].PRICE)
            CustomisedContent = CustomisedContent.replace('ingridients', json[i].INGRIDIENTS)
            MyContent.innerHTML = CustomisedContent
            RH2.appendChild(MyContent)
        }
    })

    fetch('https://mariolino.herokuapp.com/desserts')
    .then(res => res.json())
    .then(json => {
        var RH3 = document.getElementById("RH3")
        var OriginalContent = `<tr>
        <td><span>desserts</span></td>
        <td><span>price</span></td>
    </tr>
    <tr>
        <td>ingridients</td>
    </tr>`

        for(var i = 3; i < 5; i++) 
        {
            var MyContent = document.createElement('table')
            var CustomisedContent = OriginalContent
            CustomisedContent = CustomisedContent.replace('desserts', json[i].DESSERTS)
            CustomisedContent = CustomisedContent.replace('price', json[i].PRICE)
            CustomisedContent = CustomisedContent.replace('ingridients', json[i].INGRIDIENTS)
            MyContent.innerHTML = CustomisedContent
            RH3.appendChild(MyContent)
        }
    })



    fetch('https://mariolino.herokuapp.com/drinks')
    .then(res => res.json())
    .then(json => {
        var RH4 = document.getElementById("RH4")
        var OriginalContent = `<tr>
        <td><span>drinks</span></td>
        <td><span>price</span></td>
    </tr>
    <tr>
        <td>ingridients</td>
    </tr>`

        for(var i = 0; i < 5; i++) 
        {
            var MyContent = document.createElement('table')
            var CustomisedContent = OriginalContent
            CustomisedContent = CustomisedContent.replace('drinks', json[i].DRINKS)
            CustomisedContent = CustomisedContent.replace('price', json[i].PRICE)
            CustomisedContent = CustomisedContent.replace('ingridients', json[i].INGRIDIENTS)
            MyContent.innerHTML = CustomisedContent
            RH4.appendChild(MyContent)
        }
    })

    fetch('https://mariolino.herokuapp.com/drinks')
    .then(res => res.json())
    .then(json => {
        var RH5 = document.getElementById("RH5")
        var OriginalContent = `<tr>
        <td><span>drinks</span></td>
        <td><span>price</span></td>
    </tr>
    <tr>
        <td>ingridients</td>
    </tr>`

        for(var i = 5; i < 9; i++) 
        {
            var MyContent = document.createElement('table')
            var CustomisedContent = OriginalContent
            CustomisedContent = CustomisedContent.replace('drinks', json[i].DRINKS)
            CustomisedContent = CustomisedContent.replace('price', json[i].PRICE)
            CustomisedContent = CustomisedContent.replace('ingridients', json[i].INGRIDIENTS)
            MyContent.innerHTML = CustomisedContent
            RH5.appendChild(MyContent)
        }
    })