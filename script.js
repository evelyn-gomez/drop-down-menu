class DropDownMenu{
  /**
   * 
   * @param {string} name 
   * 
   */
  constructor(name, options = []){
    this.name = name; 
    this.options = options;
  }
  
  dropDownElements;  
  optionsElems = []; 
  id = 0; 
  /**
   * 
   * @param {string} option
   */
  addOption(option){
    this.options.push(option); 
  }

  /**
   * 
   * @param {Element} container - element to append to
   */
  setIn(container){
    const containerChildren = container.children; 
    const dropDownParent = document.createElement("div"); 
    const dropDownOptions = document.createElement("div");
    const dropDownPseudoBtn = document.createElement("div"); 
    dropDownParent.classList.add("drop-down-parent"); 
    dropDownPseudoBtn.classList.add("drop-down-pseudo-btn"); 
    dropDownOptions.classList.add("drop-down-list"); 
    dropDownOptions.classList.add("hidden"); 
    dropDownPseudoBtn.textContent = this.name

    this.dropDownElements = {
      parent: dropDownParent,
      pseduoBtn: dropDownPseudoBtn,
      options: dropDownOptions
    }

    for(const option of this.options){
      const div = document.createElement("div"); 
      div.id = this.id; 
      div.textContent = option; 
      this.optionsElems.push(div); 
      dropDownOptions.appendChild(div); 

      div.addEventListener("touchstart", ()=>{
        const currentedSelected = this.optionsElems.find(elem => elem.classList.contains("selected"));
        if(currentedSelected === undefined){
          div.classList.add("selected"); 
        }else{
          currentedSelected.classList.remove("selected"); 
          div.classList.add("selected"); 
        }
      })

      this.id = this.id+1; 
    }

    dropDownPseudoBtn.addEventListener("mouseover", ()=>{
      dropDownPseudoBtn.classList.add("active"); 
      dropDownOptions.classList.remove("hidden"); 
    }); 

    dropDownOptions.addEventListener("mouseleave",  ()=>{
      dropDownPseudoBtn.classList.remove("active");
      dropDownOptions.classList.add("hidden"); 
      this.optionsElems.forEach(elem => {
        if(elem.classList.contains("selected")){
          elem.classList.remove("selected"); 
        }
      })
    })

    dropDownParent.appendChild(dropDownPseudoBtn); 
    dropDownParent.appendChild(dropDownOptions); 
    container.appendChild(dropDownParent); 
  }
}

const menu = document.querySelector(".menu");
const seasons = [ "spring", "summer", "fall", "winter"];
const primaryColors = [ "red", "yellow", "blue"]; 
const shapes = ["rectangle", "square", "circle", "triangle"]; 
const seasonsMenu = new DropDownMenu("seasons", seasons);
const primaryColorsMenu = new DropDownMenu("primary colors", primaryColors);
const shapesMenu = new DropDownMenu("shapes", shapes);

seasonsMenu.setIn(menu); 
primaryColorsMenu.setIn(menu); 
shapesMenu.setIn(menu); 
