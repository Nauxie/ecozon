let defineNewElement = (o)=>{
    if(customElements){
      customElements.define(o.tagname,
        class extends HTMLElement {
          constructor() {
            super();
          }
          connectedCallback(){
            o.init(this);
          }
          
        })
  
    }else{
      let n_tag = document.registerElement(o.tagname,      
        class extends HTMLElement {
          constructor() {
            super();
          }
          connectedCallback(){
            o.init(this);
          }
        }
      );
      
    }
  }
  defineNewElement({
    tagname:"env-star",
    init: (ele)=>{
      let ce = document.createElement("img");
      ce.src="img/stars.png";
      if(ele.dataset.value){
      ce.style.backgroundImage = "url(img/bar.png)";
      ce.style.backgroundPositionX = `${100-ele.dataset.value}%`;
      }else{
        ce.style.backgroundColor = "red";
      }
      ele.appendChild(ce);
    }
  })