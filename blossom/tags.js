function createElement(tag, ...innerHTML){
    let element = document.createElement(tag);

    element.setEvents = function(eventType, listener, options) {
        if (eventType && listener && typeof listener === 'function') {
            this.addEventListener(eventType, listener, options);
        }
        return this; // Return the element for method chaining
    };

    element.setID = function(id){
        if (id && typeof id === 'string') {
            this.id = id;
        }
        return this; // Return the element for method chaining
    }

    element.setClasses = function(...classes) {
        if (classes && Array.isArray(classes)) {
            this.classList.add(...classes);
        } else if (classes && typeof classes === 'string') {
            this.classList.add(classes);
        }
        return this; // Return the element for method chaining
    };
    element.setStyles = function(...styles) {
      if (styles.length > 0) {
          styles.forEach(style => {
              if (style && typeof style === 'object') {
                  Object.assign(this.style, style);
              }
          });
      }
      return this; // Return the element for method chaining
  };
  

    if(innerHTML.length === 1 && (typeof innerHTML[0] == "string" || typeof innerHTML[0] == "number")){
      element.innerHTML = innerHTML[0];
        return element;
    }
    innerHTML.forEach(item => element.appendChild(item));
    return element;
}

export function div(...innerHTML){
  return createElement("div", ...innerHTML);
}

export function ul(...innerHTML){
  return createElement("ul", ...innerHTML);
}

export function ol(...innerHTML){
  return createElement("ol", ...innerHTML);
}

export function li(...innerHTML){
  return createElement("li", ...innerHTML);
}

export function span(text){
  return createElement("span", text);
}

export function h1(text){
  return createElement("h1", text);
}

export function h2(text){
  return createElement("h2", text);
}

export function h3(text){
  return createElement("h3", text);
}

export function h4(text){
  return createElement("h4", text);
}

export function h5(text){
  return createElement("h5", text);
}

export function h6(text){
  return createElement("h6", text);
}

export function a(text, href){
  let elem = createElement("a", text);
  elem.href = href;
  return elem;
}

export function p(text){
  return createElement("p", text);
}

export function button(text){
  return createElement("button", text);
}

export function textField(value, type, placeholder, name) {
  let elem = createElement("input");
  elem.type = type;
  elem.placeholder = placeholder;
  elem.name = name;
  elem.value = value;

  return elem;
}
