export default class DropDownMenu{
  /**
   * 
   * @param {string} name 
   * @param { options?: [] } options
   */
  constructor(name, {options = []} = {}){
    this.name = name; 
    this.options = options;  
    this.dropDownParent = document.createElement("div"); 
    this.dropDownOptions = document.createElement("div");
    this.dropDownOnHover = document.createElement("div"); 
    this.se
  }

  /**
   * 
   * @param {string} option
   */
  addOption(option){
    this.options.push(option); 
  }
  
  setOptions(){
    this.dropDownParent.classList.add("drop-down-container"); 
    this.dropDownOnHover.classList.add("drop-down-on-hover"); 
    this.dropDownOptions.classList.add("drop-down-list"); 

    this.dropDownOptions.textContent = ""; 
    this.dropDownOnHover.textContent = this.name
    
    let id = 0; 
    const optionsElem = []; 

    this.dropDownOptions.classList.add("hidden"); 

    for(const option of this.options){
      const div = document.createElement("div"); 
      div.id = id; 
      div.textContent = option; 
      optionsElem.push(div);
      this.dropDownOptions.appendChild(div); 
      id = id+1; 
    }

    this.dropDownOnHover.addEventListener("mouseover", ()=>{
      this.dropDownOnHover.classList.add("active"); 
      this.dropDownOptions.classList.remove("hidden"); 
    }); 

    this.dropDownOptions.addEventListener("mouseleave",  ()=>{
      this.dropDownOnHover.classList.remove("active"); 
      this.dropDownOptions.classList.add("hidden"); 
    })
    
    this.dropDownParent.appendChild(this.dropDownOnHover); 
    this.dropDownParent.appendChild(this.dropDownOptions); 

    
  }
}
