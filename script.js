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

  #elements(){
    const dropDownParent = document.createElement("div"); 
    const dropDownOptions = document.createElement("div");
    const dropDownPseudoBtn = document.createElement("div"); 
    return {
      parent: dropDownParent, 
      pseudoBtn: dropDownPseudoBtn, 
      options: dropDownOptions,
    }; 
  }

  mobileOptions = []; 
  dpOptions = []; 

  #mobile(container){
    const dp = this.#elements(); 

    dp.parent.classList.add("drop-down-parent"); 
    dp.pseudoBtn.classList.add("drop-down-pseudo-btn"); 
    dp.options.classList.add("drop-down-list"); 
    dp.options.classList.add("hidden"); 
    dp.pseudoBtn.textContent = this.name; 

    let id = 0; 
    for( const option of this.options){
      const div = document.createElement("div"); 
      div.id = id
      div.textContent = option; 
      this.mobileOptions.push(div); 
      dp.options.appendChild(div); 

      div.addEventListener("touchstart", (e)=>{
        console.log(e);
         const currentedSelected = this.mobileOptions .find(elem => elem.classList.contains("selected"));
         if(currentedSelected === undefined){
           div.classList.add("selected"); 
         }else{
           currentedSelected.classList.remove("selected"); 
           div.classList.add("selected"); 
         }
      })
    
      id = id +1; 
    }

    dp.pseudoBtn.addEventListener("touchstart", (e)=>{
      console.log(e);
      dp.pseudoBtn.classList.add("active"); 
      dp.options.classList.remove("hidden"); 
    });
    
    dp.parent.appendChild(dp.pseudoBtn); 
    dp.parent.appendChild(dp.options); 
    container.appendChild(dp.parent); 
  }

  #desktop(container){
    const dp = this.#elements(); 

    dp.parent.classList.add("dt-drop-down-parent"); 
    dp.pseudoBtn.classList.add("dt-drop-down-pseudo-btn"); 
    dp.options.classList.add("dt-drop-down-list"); 
    dp.options.classList.add("dt-hidden"); 
    dp.pseudoBtn.textContent = this.name; 

    let id = 0; 
    for( const option of this.options){
      const div = document.createElement("div"); 
      div.id = id
      div.textContent = option; 
      this.dpOptions.push(div); 
      dp.options.appendChild(div);
    
      id = id +1; 
    }

    dp.pseudoBtn.addEventListener("mouseover", (e)=>{
      console.log(e);
      dp.pseudoBtn.classList.add("dt-active"); 
      dp.options.classList.remove("dt-hidden"); 
    });

    dp.options.addEventListener("mouseleave",  ()=>{
      dp.pseudoBtn.classList.remove("dt-active");
      dp.options.classList.add("dt-hidden"); 
      this.dpOptions.forEach(elem => {
        if(elem.classList.contains("dt-selected")){
          elem.classList.remove("dt-selected"); 
        }
      })
    })

    dp.parent.appendChild(dp.pseudoBtn); 
    dp.parent.appendChild(dp.options); 
    container.appendChild(dp.parent); 

  }
  /**
   * 
   * @param {Element} container - element to append to
   */
  setIn(container){
    this.#mobile(container); 
    this.#desktop(container); 
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


