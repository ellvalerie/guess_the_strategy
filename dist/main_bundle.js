/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main_page.js":
/*!**************************!*\
  !*** ./src/main_page.js ***!
  \**************************/
/***/ (() => {

eval("var double_table_buttn = document.getElementById(\"button-double-table\");\nvar triple_table_buttn = document.getElementById(\"button-triple-table\");\nvar double_table_cont = document.getElementById(\"double-table-container\");\nvar triple_table_cont = document.getElementById(\"triple-table-container\");\nvar double_strat_buttn = document.getElementById(\"button-double-strategies\");\nvar triple_strat_buttn = document.getElementById(\"button-triple-strategies\");\nvar double_strat_cont = document.getElementById(\"table-for-double-strategies\");\nvar triple_stat_cont = document.getElementById(\"table-for-triple-strategies\");\nvar jackson_img_buttn = document.getElementById(\"jackson-img-button\");\nvar jackson_img = document.getElementById(\"jackson-img\");\nfunction handleDTTButton(event) {\n  // Обработка клика на кнопки \"Показать таблицу\"\n  // В зависимости от id кнопки скрывает или показывает нужные таблицы\n  var table = event.target.id;\n  var table_cont = table == \"button-double-table\" ? double_table_cont : triple_table_cont;\n  var buttn = table == \"button-double-table\" ? double_table_buttn : triple_table_buttn;\n  if (table_cont.style.display == \"none\" || table_cont.style.display == \"\") {\n    buttn.textContent = \"Скрыть таблицу\"; // изменение текста кнопки \n    table_cont.style.display = \"inline\";\n  } else {\n    buttn.textContent = \"Показать таблицу\"; // изменение текста кнопки \n    table_cont.style.display = \"none\";\n  }\n}\ndouble_table_buttn.addEventListener(\"click\", handleDTTButton);\ntriple_table_buttn.addEventListener(\"click\", handleDTTButton);\nfunction handleDTStratButton(event) {\n  // Обработка клика на кнопки \"Показать стратегии\"\n  // В зависимости от id кнопки скрывает или показывает нужные стратегии\n  var model = event.target.id;\n  var strat_cont = model == \"button-double-strategies\" ? double_strat_cont : triple_stat_cont;\n  var buttn = model == \"button-double-strategies\" ? double_strat_buttn : triple_strat_buttn;\n  if (strat_cont.style.display == \"none\" || strat_cont.style.display == \"\") {\n    buttn.textContent = \"Скрыть описание всех стратегий\"; // изменение текста кнопки \n    strat_cont.style.display = \"inline\";\n  } else {\n    buttn.textContent = \"Показать описание всех стратегий\"; // изменение текста кнопки \n    strat_cont.style.display = \"none\";\n  }\n}\ndouble_strat_buttn.addEventListener(\"click\", handleDTStratButton);\ntriple_strat_buttn.addEventListener(\"click\", handleDTStratButton);\nfunction HandleImgButton() {\n  // Обработка клика на кнопки \"Показать картинку\", нужно для понятного описания стратегии с именем Jackson\n  if (jackson_img.style.display == \"none\" || jackson_img.style.display == \"\") {\n    jackson_img_buttn.textContent = \"Скрыть картинку\"; // изменение текста кнопки \n    jackson_img.style.display = \"inline\";\n  } else {\n    jackson_img_buttn.textContent = \"Показать картинку\"; // изменение текста кнопки \n    jackson_img.style.display = \"none\";\n  }\n}\njackson_img_buttn.addEventListener(\"click\", HandleImgButton);\n\n//# sourceURL=webpack://mama/./src/main_page.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/main_page.js"]();
/******/ 	
/******/ })()
;