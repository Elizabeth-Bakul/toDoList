/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 278:
/***/ (() => {



const todoControl = document.querySelector(".list-form"),
  listInputValue = document.querySelector(".list-input"),
  createTodoButton = document.querySelector(".list-button"),
  filterItems = document.querySelectorAll(".submenu li"),
  activeFilter = document.querySelector(".list-nav__text"),
  todoList = document.querySelector(".todo-list");
let todoData = [];
const download = function () {
  for (let i = 1; i < 6; i++) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${i}`)
      .then((response) => response.json())
      .then((json) => {
        const newToDo = {
          value: json.title,
          completed: false,
        };
        let flag = false;
        let i = 0;
        while (!flag && i < todoData.length) {

          let el = todoData[i];
          if (newToDo.value == el.value) {
            flag = true;
          }

          i++;
        }
         if (!flag) {

           todoData.push(newToDo);
           localStorage.listData = JSON.stringify(todoData);
           render();
         }
      });
  }
};
const filter=function(attrib){
  
  switch (attrib){
    case 'work': {
      const itemList = document.querySelectorAll(".todo-item--dnone");
      itemList.forEach(function (item) {
        item.classList.remove("todo-item--dnone");
      });
      const doneItem = document.querySelectorAll(".todo-item--active");
      console.log(doneItem);
      doneItem.forEach(function(item){
        item.classList.add("todo-item--dnone");
      })
      break;
    }
    case 'done':{
      const itemList = document.querySelectorAll(".todo-item");
      itemList.forEach(function (item) {
        item.classList.add("todo-item--dnone");
      });
      const doneItem = document.querySelectorAll(".todo-item--active");
      doneItem.forEach(function (item) {
        item.classList.remove("todo-item--dnone");
      });
      break;
    }
    default: {
      const doneItem = document.querySelectorAll(".todo-item--dnone");
      doneItem.forEach(function(item){
        item.classList.remove("todo-item--dnone");
      })
      break;
    }
  }
}
const render = function () {
  // check the first init of document
  todoData =
    localStorage.getItem("listData") === null
      ? todoData
      : JSON.parse(localStorage.listData);

  todoList.textContent = "";
  todoData.forEach(function (item) {
    const li = document.createElement("li");
    li.classList.add("todo-item");

    li.innerHTML =
      `<div class="todo-span">
                <div class="todo-check"></div>
                <span class="todo-text done">${item.value}</span>` +
      "</div>" +
      '<button class="todo-remove"></button>';
    todoList.append(li);
    if (item.completed) {
      li.classList.add("todo-item--active");
    } else {
      li.classList.remove("todo-item--active");
    }

    li.addEventListener("click", function (e) {
      let target = e.target;
      let elemBut = target.closest(".todo-remove");
      if (target == elemBut) {
         li.remove();
         todoData = todoData.filter((element) => element !== item);
         localStorage.listData = JSON.stringify(todoData);
      } else {
        item.completed = !item.completed;
        if (item.completed) {
          li.classList.add("todo-item--active");
        } else {
          li.classList.remove("todo-item--active");
        }
        
        localStorage.listData = JSON.stringify(todoData);
        filter(activeFilter.getAttribute("data-attr"))
      }

    });
    filter(activeFilter.getAttribute("data-attr"));
  });
};



todoControl.addEventListener("submit", function (e) {
  e.preventDefault();

  // not empty input validation
  if (listInputValue.value !== "") {
    // create new task
    const newToDo = {
      value: listInputValue.value,
      completed: false,
    };

    // clean input
    listInputValue.value = "";

    todoData.push(newToDo);
    localStorage.listData = JSON.stringify(todoData); // refresh localStorage
    render();
  }
});
render();
download();

filterItems.forEach(function (item){
  item.addEventListener('click',function(e){
    filterItems.forEach(function (allI){
      allI.classList.remove("active");
    })
    let acEl = e.target;
    acEl.classList.add("active");
    console.log(acEl.textContent);
    activeFilter.textContent = acEl.textContent;
    let attr=acEl.getAttribute('data-attr');
    activeFilter.setAttribute("data-attr", attr);
    filter(attr);
  })
})


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/* harmony import */ var _js_test_1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(278);
/* harmony import */ var _js_test_1_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_test_1_js__WEBPACK_IMPORTED_MODULE_0__);


})();

/******/ })()
;