const getButtonApi = () => {
    const inputField = document.getElementById('input-field')
    const inputText = inputField.value;
    inputField.value = ' ';
    fetch(`https://openapi.programming-hero.com/api/phones?search=${inputText}`)
        .then(res => res.json())
        .then(data => displayGadget(data.data))

}


// all gadget 

const displayGadget = datas => {
    const data = datas.slice(0, 20)

    if (datas.length == 0) {
        alert('please write something')

    }
    else {
        const searchResult = document.getElementById('search-result')
        searchResult.textContent = '';
        data.forEach(data => {
            const div = document.createElement('div')
            div.classList.add('col')
            div.innerHTML = `
            <div class="card h-100">
                        <img src="${data.image}" class="card-img-top w-75 mx-auto" alt="...">
                        <div class="card-body">
                        <h4 class="card-text">${data.phone_name}</h4>
                            <p class="card-title">${data.brand}</p>
                            
                            
                            <button class="style" onclick="showDetails('${data.slug}')">Show Details</button>
                        </div>
                    </div>
            `
            searchResult.appendChild(div)
        })
    }

}

const showDetails = sData => {
    fetch(`https://openapi.programming-hero.com/api/phone/${sData}`)
        .then(res => res.json())
        .then(data => showSingleDetails(data.data))

}
// show more details about gadget
const showSingleDetails = data => {
    console.log(data)
    const details = document.getElementById('details')
    details.textContent = '';
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
    <div class="card p-3" >
       <div class="row g-2">
          <div class="col-md-5 ">
            <img src="${data.image}" class="card-img-top imgMiddle" alt="...">
          </div>
            <div class="col-md-7">
                <div class="card-body">
                 <h1 class="card-title "><span>Name :</span>${data.name}</h1>
    
                 <p class="card-title mt-3"><strong>Release Date :</strong>${data.releaseDate}</p><p> 
                 
                 <strong> ${data.releaseDate ? data.releaseDate : 'No Release Date Found'} </strong> </p>
    
    
                 <h5 class="font-color">Main Feature :-</h5>
                 <P ><strong>chipSet:</strong>${data.mainFeatures.chipSet}</P>
                 <P><strong>Display Size:</strong>${data.mainFeatures.displaySize}</P>
                 <P><strong>Memory:</strong>${data.mainFeatures.memory}</P>
       
       
                 <h5 class="font-color">Other Information :-</h5>
                 <p><strong>Bluetooth</strong>:${data.others.Bluetooth}</p>
                 <p><strong>NFC</strong>:${data.others.NFC} </p>
                 <p><strong>GPS</strong>: ${data.others.GPS}</p>
                 <P><strong>USB</strong>: ${data.others.USB}</P>
                 <P><strong>WLAN</strong>:${data.others.WLAN}</P>
             
                 <h5 class="font-color">Sensors :-</h5>
                 <P ><strong>0 :</strong>${data.mainFeatures.sensors[0]}</P>
                 <P><strong>1 :</strong>${data.mainFeatures.sensors[1]}</P>
                 <P><strong>2 :</strong>${data.mainFeatures.sensors[2]}</P>
                 <P><strong>3 :</strong>${data.mainFeatures.sensors[3]}</P>
                 <P><strong>4 :</strong>${data.mainFeatures.sensors[4]}</P>
          
                </div>
            </div>
        </div>
    </div>
    `
    details.appendChild(div)
}