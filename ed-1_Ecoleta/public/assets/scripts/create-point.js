function populateUFs(){
    const ufSelect = document.querySelector("select[name=uf]")
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(res => res.json())
    .then( states => {

        for(const state of states) {
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }

    })
}

populateUFs()

function getCities(event){
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("select[name=state]")

    const ufValue = event.target.value
 
    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text
    

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/33/municipios`

    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelect.disabled = true

    fetch(url)
    .then(res => res.json())
    .then (cities => {
    
        for(const city of cities) {
            citySelect.innerHTML += <option value="{city.nome}">${city.nome}</option>
        }

        citySelect.disabled = false
    })
}


document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)

// Itens de coleta

// pegar todos os li

const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect) {
    item.addEventListener("click", handSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")

let selectedItems = [1, 2, 3, 4, 5, 6]

function handSelectedItem(event) {

    const itemLi = event.target
    //adicionar ou remover classe

    itemLi.classList.toogle("selected")
    const itemId = event.target.dataset.id

    /*verificar se existem itens selecionados se sim, pegar os selecionados */

    const alreadySelected = selectedItems.findIndex( item => {
        const itemFound = item == itemId
        return itemFound
    })

    //console.log(alreadySelected != -1)
    /*Se ja estiver selecionado */

     if(alreadySelected >= 0){
         //tirar da seleção 
        const filteredItems = selectedItems.filter (item => {
            const itemIsDiferent = item != itemId //false
            return itemIsDiferent
        })

        //console.log(filteredItems)

        selectedItems = filteredItems
      }else {
        /* Se não estiver selecionado */
        selectedItems.push(itemId)

      }

      //console.log(selectedItems)

    /* se atualizar o campo */
      collectedItems.value = selectedItems
    
}