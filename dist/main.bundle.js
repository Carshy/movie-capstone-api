"use strict";
(self["webpackChunkmovie_capstone_api"] = self["webpackChunkmovie_capstone_api"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/c-s.jpg */ "./src/images/c-s.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: 'poppins', sans-serif;\r\n  background-color: #000;\r\n  color: #fff;\r\n}\r\n\r\n.nav-section {\r\n  background-color: #8b0000;\r\n  color: #fff;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 85px;\r\n}\r\n\r\n.movie-logo {\r\n  margin-left: 67px;\r\n  border: 1px solid #fff;\r\n  background-color: #000;\r\n  padding: 16px;\r\n  border-radius: 8px;\r\n}\r\n\r\n.movie-logo:hover {\r\n  padding: 12px;\r\n  transition-duration: 2s;\r\n  cursor: pointer;\r\n}\r\n\r\n.nav-section a {\r\n  color: #fff;\r\n  text-decoration: none;\r\n  font-size: 18px;\r\n  font-weight: 600;\r\n}\r\n\r\n.list-group-nav {\r\n  display: flex;\r\n  gap: 24px;\r\n  margin-right: 12%;\r\n  list-style-type: none;\r\n  text-decoration: none;\r\n}\r\n\r\n.list-group-nav li a {\r\n  text-decoration: none;\r\n}\r\n\r\n.list-items1 {\r\n  font-size: 18px;\r\n  font-weight: 600;\r\n}\r\n\r\n.card-image1 {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 30px 0;\r\n  margin-left: 3%;\r\n}\r\n\r\n.title {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  font-size: 15px;\r\n  font-weight: 200;\r\n  width: 60%;\r\n  margin-left: 15%;\r\n}\r\n\r\n.show-image {\r\n  margin-left: 15%;\r\n}\r\n\r\n.fa-heart,\r\n.comments {\r\n  cursor: pointer;\r\n}\r\n\r\n.comments {\r\n  background-color: #8b0000;\r\n  color: #fff;\r\n  border: 2px solid #000;\r\n  text-align: center;\r\n  width: 60%;\r\n  padding: 10px;\r\n  margin-left: 15%;\r\n}\r\n\r\n.close-button {\r\n  margin-top: 0;\r\n  margin-left: 90%;\r\n\r\n  /* border: none;\r\n  outline: none;\r\n  background: none; */\r\n  cursor: pointer;\r\n  font-size: 2.25rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.image-header {\r\n  margin: auto;\r\n}\r\n\r\n.image-header img {\r\n  object-fit: cover;\r\n  width: 100%;\r\n  height: 60vh;\r\n}\r\n\r\n.series-details {\r\n  display: none;\r\n  font-size: 14px;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background-color: #8b0000;\r\n  border-radius: 10px;\r\n  color: #fff;\r\n  font-weight: 400;\r\n  opacity: 0.8;\r\n}\r\n\r\n.series-details h4 {\r\n  font-size: 20px;\r\n}\r\n\r\n.series-details p {\r\n  padding: 0 3% 0 3%;\r\n}\r\n\r\n.series-attributes {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 10px;\r\n  border: 1px solid #8b0000;\r\n  border-radius: 10px;\r\n  padding: 12px;\r\n  margin: 3% 10% 2% 10%;\r\n}\r\n\r\n.comment-popup {\r\n  position: fixed;\r\n  overflow-y: scroll;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  border: 1px solid #8b0000;\r\n  border-radius: 10px;\r\n  max-width: 80%;\r\n  max-height: 80%;\r\n  padding: 12px;\r\n  background-color: #fff;\r\n  color: #000;\r\n}\r\n\r\n.popup-headers {\r\n  padding: 10px 15px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding-top: 4%;\r\n}\r\n\r\n.comment-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 16px;\r\n}\r\n\r\n.user-name {\r\n  width: 210px;\r\n  background: none;\r\n  height: 40px;\r\n  padding: 20px;\r\n  border-radius: 8px;\r\n}\r\n\r\n.user-comment {\r\n  width: 210px;\r\n  height: 80px;\r\n  background: none;\r\n  padding: 20px;\r\n  border-radius: 8px;\r\n  outline: none;\r\n}\r\n\r\n.comment-box {\r\n  background-color: #8b0000;\r\n  color: #fff;\r\n  padding: 12px;\r\n  border-radius: 8px;\r\n  cursor: pointer;\r\n}\r\n\r\n.series-footer {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: #8b0000;\r\n  color: #fff;\r\n  font-style: oblique;\r\n  width: 100%;\r\n  height: 67px;\r\n}\r\n\r\n.series-footer p {\r\n  margin-left: 24px;\r\n}\r\n\r\n.logo {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-repeat: no-repeat;\r\n  background-size: 100%;\r\n  width: 50px;\r\n  height: 50px;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .nav-section {\r\n    background-color: #8b0000;\r\n    color: #fff;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    width: 100%;\r\n    height: 85px;\r\n  }\r\n\r\n  .movie-logo {\r\n    margin-left: 67px;\r\n    border: 1px solid #fff;\r\n    background-color: #000;\r\n    padding: 16px;\r\n    border-radius: 8px;\r\n  }\r\n\r\n  .movie-logo:hover {\r\n    padding: 12px;\r\n    transition-duration: 2s;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .nav-section a {\r\n    color: #fff;\r\n    text-decoration: none;\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n  }\r\n\r\n  .list-group-nav {\r\n    display: flex;\r\n    gap: 24px;\r\n    margin-right: 12%;\r\n    list-style-type: none;\r\n    text-decoration: none;\r\n  }\r\n\r\n  .card-image1 {\r\n    display: grid;\r\n    grid-template-columns: 25% 25% 25% 25%;\r\n    gap: 30px 10px;\r\n    margin-left: 3%;\r\n  }\r\n\r\n  .title {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    font-size: 15px;\r\n    font-weight: 200;\r\n    width: 65%;\r\n  }\r\n\r\n  .fa-heart,\r\n  .comments {\r\n    cursor: pointer;\r\n  }\r\n\r\n  .comments {\r\n    background-color: #8b0000;\r\n    color: #fff;\r\n    border: 2px solid #000;\r\n    text-align: center;\r\n    width: 65%;\r\n    padding: 10px;\r\n  }\r\n\r\n  .image-header {\r\n    margin: auto;\r\n  }\r\n\r\n  .image-header img {\r\n    object-fit: cover;\r\n    width: 300px;\r\n  }\r\n\r\n  .series-details {\r\n    font-size: 14px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    background-color: #8b0000;\r\n    border-radius: 10px;\r\n    color: #fff;\r\n    font-weight: 400;\r\n    opacity: 0.8;\r\n  }\r\n\r\n  .series-details h4 {\r\n    font-size: 20px;\r\n  }\r\n\r\n  .series-details p {\r\n    padding: 0 3% 0 3%;\r\n  }\r\n\r\n  .series-attributes {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 10px;\r\n    border: 1px solid #8b0000;\r\n    border-radius: 10px;\r\n    padding: 12px;\r\n    margin: 3% 10% 2% 10%;\r\n  }\r\n\r\n  .comment-popup {\r\n    position: absolute;\r\n    overflow-y: scroll;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    border: 1px solid #000;\r\n    border-radius: 10px;\r\n    z-index: 10;\r\n    width: 800px;\r\n    max-width: 80%;\r\n    padding: 12px;\r\n    background-color: #fff;\r\n    color: #000;\r\n  }\r\n\r\n  .popup-headers {\r\n    padding: 10px 15px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding-top: 4%;\r\n  }\r\n\r\n  .comment-section {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 16px;\r\n  }\r\n\r\n  .user-name {\r\n    width: 210px;\r\n    background: none;\r\n    height: 40px;\r\n    padding: 20px;\r\n    border-radius: 8px;\r\n  }\r\n\r\n  .user-comment {\r\n    width: 210px;\r\n    height: 80px;\r\n    background: none;\r\n    padding: 20px;\r\n    border-radius: 8px;\r\n    outline: none;\r\n  }\r\n\r\n  .comment-box {\r\n    background-color: #8b0000;\r\n    color: #fff;\r\n    padding: 12px;\r\n    border-radius: 8px;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .series-footer {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: #8b0000;\r\n    color: #fff;\r\n    font-style: oblique;\r\n    width: 100%;\r\n    height: 67px;\r\n  }\r\n\r\n  .series-footer p {\r\n    margin-left: 24px;\r\n  }\r\n\r\n  .logo {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n    width: 50px;\r\n    height: 50px;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: 'poppins', sans-serif;\r\n  background-color: #000;\r\n  color: #fff;\r\n}\r\n\r\n.nav-section {\r\n  background-color: #8b0000;\r\n  color: #fff;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 85px;\r\n}\r\n\r\n.movie-logo {\r\n  margin-left: 67px;\r\n  border: 1px solid #fff;\r\n  background-color: #000;\r\n  padding: 16px;\r\n  border-radius: 8px;\r\n}\r\n\r\n.movie-logo:hover {\r\n  padding: 12px;\r\n  transition-duration: 2s;\r\n  cursor: pointer;\r\n}\r\n\r\n.nav-section a {\r\n  color: #fff;\r\n  text-decoration: none;\r\n  font-size: 18px;\r\n  font-weight: 600;\r\n}\r\n\r\n.list-group-nav {\r\n  display: flex;\r\n  gap: 24px;\r\n  margin-right: 12%;\r\n  list-style-type: none;\r\n  text-decoration: none;\r\n}\r\n\r\n.list-group-nav li a {\r\n  text-decoration: none;\r\n}\r\n\r\n.list-items1 {\r\n  font-size: 18px;\r\n  font-weight: 600;\r\n}\r\n\r\n.card-image1 {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 30px 0;\r\n  margin-left: 3%;\r\n}\r\n\r\n.title {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  font-size: 15px;\r\n  font-weight: 200;\r\n  width: 60%;\r\n  margin-left: 15%;\r\n}\r\n\r\n.show-image {\r\n  margin-left: 15%;\r\n}\r\n\r\n.fa-heart,\r\n.comments {\r\n  cursor: pointer;\r\n}\r\n\r\n.comments {\r\n  background-color: #8b0000;\r\n  color: #fff;\r\n  border: 2px solid #000;\r\n  text-align: center;\r\n  width: 60%;\r\n  padding: 10px;\r\n  margin-left: 15%;\r\n}\r\n\r\n.close-button {\r\n  margin-top: 0;\r\n  margin-left: 90%;\r\n\r\n  /* border: none;\r\n  outline: none;\r\n  background: none; */\r\n  cursor: pointer;\r\n  font-size: 2.25rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.image-header {\r\n  margin: auto;\r\n}\r\n\r\n.image-header img {\r\n  object-fit: cover;\r\n  width: 100%;\r\n  height: 60vh;\r\n}\r\n\r\n.series-details {\r\n  display: none;\r\n  font-size: 14px;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background-color: #8b0000;\r\n  border-radius: 10px;\r\n  color: #fff;\r\n  font-weight: 400;\r\n  opacity: 0.8;\r\n}\r\n\r\n.series-details h4 {\r\n  font-size: 20px;\r\n}\r\n\r\n.series-details p {\r\n  padding: 0 3% 0 3%;\r\n}\r\n\r\n.series-attributes {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 10px;\r\n  border: 1px solid #8b0000;\r\n  border-radius: 10px;\r\n  padding: 12px;\r\n  margin: 3% 10% 2% 10%;\r\n}\r\n\r\n.comment-popup {\r\n  position: fixed;\r\n  overflow-y: scroll;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  border: 1px solid #8b0000;\r\n  border-radius: 10px;\r\n  max-width: 80%;\r\n  max-height: 80%;\r\n  padding: 12px;\r\n  background-color: #fff;\r\n  color: #000;\r\n}\r\n\r\n.popup-headers {\r\n  padding: 10px 15px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding-top: 4%;\r\n}\r\n\r\n.comment-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 16px;\r\n}\r\n\r\n.user-name {\r\n  width: 210px;\r\n  background: none;\r\n  height: 40px;\r\n  padding: 20px;\r\n  border-radius: 8px;\r\n}\r\n\r\n.user-comment {\r\n  width: 210px;\r\n  height: 80px;\r\n  background: none;\r\n  padding: 20px;\r\n  border-radius: 8px;\r\n  outline: none;\r\n}\r\n\r\n.comment-box {\r\n  background-color: #8b0000;\r\n  color: #fff;\r\n  padding: 12px;\r\n  border-radius: 8px;\r\n  cursor: pointer;\r\n}\r\n\r\n.series-footer {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: #8b0000;\r\n  color: #fff;\r\n  font-style: oblique;\r\n  width: 100%;\r\n  height: 67px;\r\n}\r\n\r\n.series-footer p {\r\n  margin-left: 24px;\r\n}\r\n\r\n.logo {\r\n  background-image: url('./images/c-s.jpg');\r\n  background-repeat: no-repeat;\r\n  background-size: 100%;\r\n  width: 50px;\r\n  height: 50px;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .nav-section {\r\n    background-color: #8b0000;\r\n    color: #fff;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    width: 100%;\r\n    height: 85px;\r\n  }\r\n\r\n  .movie-logo {\r\n    margin-left: 67px;\r\n    border: 1px solid #fff;\r\n    background-color: #000;\r\n    padding: 16px;\r\n    border-radius: 8px;\r\n  }\r\n\r\n  .movie-logo:hover {\r\n    padding: 12px;\r\n    transition-duration: 2s;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .nav-section a {\r\n    color: #fff;\r\n    text-decoration: none;\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n  }\r\n\r\n  .list-group-nav {\r\n    display: flex;\r\n    gap: 24px;\r\n    margin-right: 12%;\r\n    list-style-type: none;\r\n    text-decoration: none;\r\n  }\r\n\r\n  .card-image1 {\r\n    display: grid;\r\n    grid-template-columns: 25% 25% 25% 25%;\r\n    gap: 30px 10px;\r\n    margin-left: 3%;\r\n  }\r\n\r\n  .title {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    font-size: 15px;\r\n    font-weight: 200;\r\n    width: 65%;\r\n  }\r\n\r\n  .fa-heart,\r\n  .comments {\r\n    cursor: pointer;\r\n  }\r\n\r\n  .comments {\r\n    background-color: #8b0000;\r\n    color: #fff;\r\n    border: 2px solid #000;\r\n    text-align: center;\r\n    width: 65%;\r\n    padding: 10px;\r\n  }\r\n\r\n  .image-header {\r\n    margin: auto;\r\n  }\r\n\r\n  .image-header img {\r\n    object-fit: cover;\r\n    width: 300px;\r\n  }\r\n\r\n  .series-details {\r\n    font-size: 14px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    background-color: #8b0000;\r\n    border-radius: 10px;\r\n    color: #fff;\r\n    font-weight: 400;\r\n    opacity: 0.8;\r\n  }\r\n\r\n  .series-details h4 {\r\n    font-size: 20px;\r\n  }\r\n\r\n  .series-details p {\r\n    padding: 0 3% 0 3%;\r\n  }\r\n\r\n  .series-attributes {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 10px;\r\n    border: 1px solid #8b0000;\r\n    border-radius: 10px;\r\n    padding: 12px;\r\n    margin: 3% 10% 2% 10%;\r\n  }\r\n\r\n  .comment-popup {\r\n    position: absolute;\r\n    overflow-y: scroll;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    border: 1px solid #000;\r\n    border-radius: 10px;\r\n    z-index: 10;\r\n    width: 800px;\r\n    max-width: 80%;\r\n    padding: 12px;\r\n    background-color: #fff;\r\n    color: #000;\r\n  }\r\n\r\n  .popup-headers {\r\n    padding: 10px 15px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding-top: 4%;\r\n  }\r\n\r\n  .comment-section {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 16px;\r\n  }\r\n\r\n  .user-name {\r\n    width: 210px;\r\n    background: none;\r\n    height: 40px;\r\n    padding: 20px;\r\n    border-radius: 8px;\r\n  }\r\n\r\n  .user-comment {\r\n    width: 210px;\r\n    height: 80px;\r\n    background: none;\r\n    padding: 20px;\r\n    border-radius: 8px;\r\n    outline: none;\r\n  }\r\n\r\n  .comment-box {\r\n    background-color: #8b0000;\r\n    color: #fff;\r\n    padding: 12px;\r\n    border-radius: 8px;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .series-footer {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: #8b0000;\r\n    color: #fff;\r\n    font-style: oblique;\r\n    width: 100%;\r\n    height: 67px;\r\n  }\r\n\r\n  .series-footer p {\r\n    margin-left: 24px;\r\n  }\r\n\r\n  .logo {\r\n    background-image: url('./images/c-s.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n    width: 50px;\r\n    height: 50px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_showitem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/showitem.js */ "./src/modules/showitem.js");



document.addEventListener('DOMContentLoaded', _modules_showitem_js__WEBPACK_IMPORTED_MODULE_1__.showSeriesList);


/***/ }),

/***/ "./src/modules/showitem.js":
/*!*********************************!*\
  !*** ./src/modules/showitem.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "countItems": () => (/* binding */ countItems),
/* harmony export */   "showSeriesList": () => (/* binding */ showSeriesList)
/* harmony export */ });
/* harmony import */ var _showlist_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showlist.js */ "./src/modules/showlist.js");


const countItems = (items) => {
  if (Array.isArray(items)) {
    return items.length;
  }
};

// Loading API images in the DOM
const showSeriesList = async () => {
  const seriesResults = await (0,_showlist_js__WEBPACK_IMPORTED_MODULE_0__.fetchList)();
  const displaySeries = document.querySelector('.watchlist');
  const seriesEntries = seriesResults.slice(49, 73);
  const displayItem = document.createElement('div');
  for (let entry = 0; entry < seriesEntries.length; entry += 1) {
    displayItem.classList.add('card-image1');
    displayItem.innerHTML += `
      <div class="card-image" id= ${seriesEntries[entry].id}>
      <img class="show-image" src="${seriesEntries[entry].image.medium}" alt="${seriesEntries[entry].name}">
      <p class="title">${seriesEntries[entry].name}  <i class="fa fa-heart"></i><span class="display" data-index="${seriesEntries[entry].index}" data-id="${seriesEntries[entry].id}">0</span></p>
      <button type="submit" class="comments">Comments</button> 
      </div> 
    `;
    displaySeries.append(displayItem);
  }

  const displayItems = document.querySelector('.list-items1');
  const length = countItems(seriesEntries);
  displayItems.textContent = `All Movies (${length})`;

  const displayLikes = document.querySelectorAll('.fa-heart');
  displayLikes.forEach((like) => {
    like.addEventListener('click', (e) => {
      (0,_showlist_js__WEBPACK_IMPORTED_MODULE_0__.postLikes)(e.target.parentNode.parentNode.id);
      e.target.nextSibling.textContent = parseInt(e.target.nextSibling.textContent, 10) + 1;
    });
  });
  const likeItems = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IgKDd8EwQi9Xf3fgeQlF/likes');
  const itemList = await likeItems.json();
  itemList.forEach((item) => {
    const likeItem = document.querySelector(`[data-id = '${item.item_id}']`);
    likeItem.innerHTML = `${item.likes}`;
  });

  // displaying the popup window
  const getPopup = async (id) => {
    const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const result = await response.json();
    const popupList = document.createElement('div');
    popupList.classList.add('comment-popup');
    const body = document.querySelector('body');
    popupList.innerHTML = `
    <div class='popup-headers'>
    </div>
    <span class="close-button close">&times;</span>
    </div>
    <div class='image-header'>
    <img src= ${result.image.medium}>
    <div class='series-details'>
    <h4>${result.name}</h4>
    <p>${result.summary}</p>
    </div>
    <div class='series-attributes'>
    <p>Genre: (${result.genres})</p>
    <p>Premiered on: ${result.premiered}</p>
    <p>Ratings(${result.rating.average})</p>
    </div>
    <div class='comment-section'>
    <input type='text' class='user-name' placeholder='Your name'>
    <textarea type='text' class='user-comment' placeholder='Your insights'></textarea>
    <button class='comment-box' type='submit'>Comment</button>
    </div>
    `;
    body.append(popupList);
    // Close button
    const close = document.querySelector('.close');
    close.addEventListener('click', () => {
      displaySeries.style.filter = 'blur(0)';
      const body = document.querySelector('body');
      body.removeChild(body.lastChild);
    });
  };
  // Comment eventlisters
  const commentBtns = document.querySelectorAll('.comments');
  commentBtns.forEach((button) => {
    button.addEventListener('click', (e) => {
      getPopup(e.target.parentNode.id);
      displaySeries.style.filter = 'blur(12px)';
    });
  });
};



/***/ }),

/***/ "./src/modules/showlist.js":
/*!*********************************!*\
  !*** ./src/modules/showlist.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchList": () => (/* binding */ fetchList),
/* harmony export */   "postLikes": () => (/* binding */ postLikes)
/* harmony export */ });
// Fetching the base API
const apiBaseUrl = 'https://api.tvmaze.com/shows';
const fetchList = async () => {
  const response = await fetch(apiBaseUrl);
  const seriesList = await response.json();
  return seriesList;
};

const apiInvolvementUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IgKDd8EwQi9Xf3fgeQlF/likes';
const postLikes = async (id) => {
  const response = await fetch(apiInvolvementUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: `${id}` }),
  });
  const postedLikes = await JSON.parse(JSON.stringify(response));

  return postedLikes;
};



/***/ }),

/***/ "./src/images/c-s.jpg":
/*!****************************!*\
  !*** ./src/images/c-s.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1b7b1e6c0da30eea9e42.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLGFBQWEsT0FBTyxPQUFPLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEs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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNzQzs7Ozs7Ozs7Ozs7Ozs7OztBQzNGdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLDJCQUEyQixZQUFZLEdBQUcsR0FBRztBQUM3QyxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNnQyIsInNvdXJjZXMiOlsid2VicGFjazovL21vdmllLWNhcHN0b25lLWFwaS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbW92aWUtY2Fwc3RvbmUtYXBpLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9tb3ZpZS1jYXBzdG9uZS1hcGkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL21vdmllLWNhcHN0b25lLWFwaS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL21vdmllLWNhcHN0b25lLWFwaS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9tb3ZpZS1jYXBzdG9uZS1hcGkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbW92aWUtY2Fwc3RvbmUtYXBpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9tb3ZpZS1jYXBzdG9uZS1hcGkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbW92aWUtY2Fwc3RvbmUtYXBpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL21vdmllLWNhcHN0b25lLWFwaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL21vdmllLWNhcHN0b25lLWFwaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL21vdmllLWNhcHN0b25lLWFwaS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9tb3ZpZS1jYXBzdG9uZS1hcGkvLi9zcmMvbW9kdWxlcy9zaG93aXRlbS5qcyIsIndlYnBhY2s6Ly9tb3ZpZS1jYXBzdG9uZS1hcGkvLi9zcmMvbW9kdWxlcy9zaG93bGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvYy1zLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6ICdwb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1zZWN0aW9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4YjAwMDA7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDg1cHg7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1sb2dvIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA2N3B4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxuICBwYWRkaW5nOiAxNnB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtbG9nbzpob3ZlciB7XFxyXFxuICBwYWRkaW5nOiAxMnB4O1xcclxcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMnM7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uYXYtc2VjdGlvbiBhIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtZ3JvdXAtbmF2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDI0cHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEyJTtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtZ3JvdXAtbmF2IGxpIGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1pdGVtczEge1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtaW1hZ2UxIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAzMHB4IDA7XFxyXFxuICBtYXJnaW4tbGVmdDogMyU7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxuICBtYXJnaW4tbGVmdDogMTUlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdy1pbWFnZSB7XFxyXFxuICBtYXJnaW4tbGVmdDogMTUlO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtaGVhcnQsXFxyXFxuLmNvbW1lbnRzIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4YjAwMDA7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxNSU7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1idXR0b24ge1xcclxcbiAgbWFyZ2luLXRvcDogMDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA5MCU7XFxyXFxuXFxyXFxuICAvKiBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTsgKi9cXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMi4yNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2UtaGVhZGVyIHtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlLWhlYWRlciBpbWcge1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNjB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlcmllcy1kZXRhaWxzIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4YjAwMDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgb3BhY2l0eTogMC44O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VyaWVzLWRldGFpbHMgaDQge1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VyaWVzLWRldGFpbHMgcCB7XFxyXFxuICBwYWRkaW5nOiAwIDMlIDAgMyU7XFxyXFxufVxcclxcblxcclxcbi5zZXJpZXMtYXR0cmlidXRlcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjOGIwMDAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDEycHg7XFxyXFxuICBtYXJnaW46IDMlIDEwJSAyJSAxMCU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LXBvcHVwIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjOGIwMDAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIG1heC13aWR0aDogODAlO1xcclxcbiAgbWF4LWhlaWdodDogODAlO1xcclxcbiAgcGFkZGluZzogMTJweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWhlYWRlcnMge1xcclxcbiAgcGFkZGluZzogMTBweCAxNXB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLXRvcDogNCU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LXNlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4udXNlci1uYW1lIHtcXHJcXG4gIHdpZHRoOiAyMTBweDtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udXNlci1jb21tZW50IHtcXHJcXG4gIHdpZHRoOiAyMTBweDtcXHJcXG4gIGhlaWdodDogODBweDtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtYm94IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4YjAwMDA7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHBhZGRpbmc6IDEycHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zZXJpZXMtZm9vdGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhiMDAwMDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA2N3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VyaWVzLWZvb3RlciBwIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgLm5hdi1zZWN0aW9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhiMDAwMDtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogODVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb3ZpZS1sb2dvIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDY3cHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxuICAgIHBhZGRpbmc6IDE2cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb3ZpZS1sb2dvOmhvdmVyIHtcXHJcXG4gICAgcGFkZGluZzogMTJweDtcXHJcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMnM7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXYtc2VjdGlvbiBhIHtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxpc3QtZ3JvdXAtbmF2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAyNHB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDEyJTtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2FyZC1pbWFnZTEge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1JSAyNSUgMjUlIDI1JTtcXHJcXG4gICAgZ2FwOiAzMHB4IDEwcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAzJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50aXRsZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICBmb250LXdlaWdodDogMjAwO1xcclxcbiAgICB3aWR0aDogNjUlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZhLWhlYXJ0LFxcclxcbiAgLmNvbW1lbnRzIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbW1lbnRzIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhiMDAwMDtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDY1JTtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5pbWFnZS1oZWFkZXIge1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaW1hZ2UtaGVhZGVyIGltZyB7XFxyXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2VyaWVzLWRldGFpbHMge1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4YjAwMDA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBvcGFjaXR5OiAwLjg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2VyaWVzLWRldGFpbHMgaDQge1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2VyaWVzLWRldGFpbHMgcCB7XFxyXFxuICAgIHBhZGRpbmc6IDAgMyUgMCAzJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zZXJpZXMtYXR0cmlidXRlcyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4YjAwMDA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEycHg7XFxyXFxuICAgIG1hcmdpbjogMyUgMTAlIDIlIDEwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb21tZW50LXBvcHVwIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICB6LWluZGV4OiAxMDtcXHJcXG4gICAgd2lkdGg6IDgwMHB4O1xcclxcbiAgICBtYXgtd2lkdGg6IDgwJTtcXHJcXG4gICAgcGFkZGluZzogMTJweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucG9wdXAtaGVhZGVycyB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nLXRvcDogNCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29tbWVudC1zZWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxNnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnVzZXItbmFtZSB7XFxyXFxuICAgIHdpZHRoOiAyMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudXNlci1jb21tZW50IHtcXHJcXG4gICAgd2lkdGg6IDIxMHB4O1xcclxcbiAgICBoZWlnaHQ6IDgwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb21tZW50LWJveCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4YjAwMDA7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBwYWRkaW5nOiAxMnB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zZXJpZXMtZm9vdGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4YjAwMDA7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBmb250LXN0eWxlOiBvYmxpcXVlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA2N3B4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNlcmllcy1mb290ZXIgcCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxvZ28ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiA1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFw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QjtJQUN6QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsU0FBUztFQUNYOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsYUFBYTtFQUNmOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLHlEQUF5QztJQUN6Qyw0QkFBNEI7SUFDNUIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAncG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5uYXYtc2VjdGlvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGIwMDAwO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA4NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtbG9nbyB7XFxyXFxuICBtYXJnaW4tbGVmdDogNjdweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcclxcbiAgcGFkZGluZzogMTZweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWxvZ286aG92ZXIge1xcclxcbiAgcGFkZGluZzogMTJweDtcXHJcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDJzO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LXNlY3Rpb24gYSB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWdyb3VwLW5hdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAyNHB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMiU7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWdyb3VwLW5hdiBsaSBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtaXRlbXMxIHtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWltYWdlMSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMzBweCAwO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDMlO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcXHJcXG59XFxyXFxuXFxyXFxuLnNob3ctaW1hZ2Uge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWhlYXJ0LFxcclxcbi5jb21tZW50cyB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGIwMDAwO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgd2lkdGg6IDYwJTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBtYXJnaW4tbGVmdDogMTUlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtYnV0dG9uIHtcXHJcXG4gIG1hcmdpbi10b3A6IDA7XFxyXFxuICBtYXJnaW4tbGVmdDogOTAlO1xcclxcblxcclxcbiAgLyogYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7ICovXFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LXNpemU6IDIuMjVyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlLWhlYWRlciB7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5pbWFnZS1oZWFkZXIgaW1nIHtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDYwdmg7XFxyXFxufVxcclxcblxcclxcbi5zZXJpZXMtZGV0YWlscyB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGIwMDAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIG9wYWNpdHk6IDAuODtcXHJcXG59XFxyXFxuXFxyXFxuLnNlcmllcy1kZXRhaWxzIGg0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlcmllcy1kZXRhaWxzIHAge1xcclxcbiAgcGFkZGluZzogMCAzJSAwIDMlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VyaWVzLWF0dHJpYnV0ZXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzhiMDAwMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiAxMnB4O1xcclxcbiAgbWFyZ2luOiAzJSAxMCUgMiUgMTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1wb3B1cCB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzhiMDAwMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBtYXgtd2lkdGg6IDgwJTtcXHJcXG4gIG1heC1oZWlnaHQ6IDgwJTtcXHJcXG4gIHBhZGRpbmc6IDEycHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1oZWFkZXJzIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZy10b3A6IDQlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1zZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXItbmFtZSB7XFxyXFxuICB3aWR0aDogMjEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXItY29tbWVudCB7XFxyXFxuICB3aWR0aDogMjEwcHg7XFxyXFxuICBoZWlnaHQ6IDgwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWJveCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGIwMDAwO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBwYWRkaW5nOiAxMnB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VyaWVzLWZvb3RlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4YjAwMDA7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNjdweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlcmllcy1mb290ZXIgcCB7XFxyXFxuICBtYXJnaW4tbGVmdDogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltYWdlcy9jLXMuanBnJyk7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcclxcbiAgd2lkdGg6IDUwcHg7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICAubmF2LXNlY3Rpb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGIwMDAwO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA4NXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1vdmllLWxvZ28ge1xcclxcbiAgICBtYXJnaW4tbGVmdDogNjdweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXHJcXG4gICAgcGFkZGluZzogMTZweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1vdmllLWxvZ286aG92ZXIge1xcclxcbiAgICBwYWRkaW5nOiAxMnB4O1xcclxcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAycztcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdi1zZWN0aW9uIGEge1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubGlzdC1ncm91cC1uYXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDI0cHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTIlO1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXJkLWltYWdlMSB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUlIDI1JSAyNSUgMjUlO1xcclxcbiAgICBnYXA6IDMwcHggMTBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRpdGxlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBmb250LXNpemU6IDE1cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxyXFxuICAgIHdpZHRoOiA2NSU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZmEtaGVhcnQsXFxyXFxuICAuY29tbWVudHMge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29tbWVudHMge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGIwMDAwO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB3aWR0aDogNjUlO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmltYWdlLWhlYWRlciB7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5pbWFnZS1oZWFkZXIgaW1nIHtcXHJcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zZXJpZXMtZGV0YWlscyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhiMDAwMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIG9wYWNpdHk6IDAuODtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zZXJpZXMtZGV0YWlscyBoNCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zZXJpZXMtZGV0YWlscyBwIHtcXHJcXG4gICAgcGFkZGluZzogMCAzJSAwIDMlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNlcmllcy1hdHRyaWJ1dGVzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzhiMDAwMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgcGFkZGluZzogMTJweDtcXHJcXG4gICAgbWFyZ2luOiAzJSAxMCUgMiUgMTAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbW1lbnQtcG9wdXAge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIHotaW5kZXg6IDEwO1xcclxcbiAgICB3aWR0aDogODAwcHg7XFxyXFxuICAgIG1heC13aWR0aDogODAlO1xcclxcbiAgICBwYWRkaW5nOiAxMnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wb3B1cC1oZWFkZXJzIHtcXHJcXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmctdG9wOiA0JTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb21tZW50LXNlY3Rpb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDE2cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudXNlci1uYW1lIHtcXHJcXG4gICAgd2lkdGg6IDIxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC51c2VyLWNvbW1lbnQge1xcclxcbiAgICB3aWR0aDogMjEwcHg7XFxyXFxuICAgIGhlaWdodDogODBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbW1lbnQtYm94IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhiMDAwMDtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIHBhZGRpbmc6IDEycHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNlcmllcy1mb290ZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhiMDAwMDtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG9ibGlxdWU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDY3cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2VyaWVzLWZvb3RlciBwIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDI0cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubG9nbyB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWFnZXMvYy1zLmpwZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiA1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IHNob3dTZXJpZXNMaXN0IH0gZnJvbSAnLi9tb2R1bGVzL3Nob3dpdGVtLmpzJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHNob3dTZXJpZXNMaXN0KTtcbiIsImltcG9ydCB7IGZldGNoTGlzdCwgcG9zdExpa2VzIH0gZnJvbSAnLi9zaG93bGlzdC5qcyc7XG5cbmNvbnN0IGNvdW50SXRlbXMgPSAoaXRlbXMpID0+IHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbXMpKSB7XG4gICAgcmV0dXJuIGl0ZW1zLmxlbmd0aDtcbiAgfVxufTtcblxuLy8gTG9hZGluZyBBUEkgaW1hZ2VzIGluIHRoZSBET01cbmNvbnN0IHNob3dTZXJpZXNMaXN0ID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBzZXJpZXNSZXN1bHRzID0gYXdhaXQgZmV0Y2hMaXN0KCk7XG4gIGNvbnN0IGRpc3BsYXlTZXJpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2F0Y2hsaXN0Jyk7XG4gIGNvbnN0IHNlcmllc0VudHJpZXMgPSBzZXJpZXNSZXN1bHRzLnNsaWNlKDQ5LCA3Myk7XG4gIGNvbnN0IGRpc3BsYXlJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvciAobGV0IGVudHJ5ID0gMDsgZW50cnkgPCBzZXJpZXNFbnRyaWVzLmxlbmd0aDsgZW50cnkgKz0gMSkge1xuICAgIGRpc3BsYXlJdGVtLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaW1hZ2UxJyk7XG4gICAgZGlzcGxheUl0ZW0uaW5uZXJIVE1MICs9IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWltYWdlXCIgaWQ9ICR7c2VyaWVzRW50cmllc1tlbnRyeV0uaWR9PlxuICAgICAgPGltZyBjbGFzcz1cInNob3ctaW1hZ2VcIiBzcmM9XCIke3Nlcmllc0VudHJpZXNbZW50cnldLmltYWdlLm1lZGl1bX1cIiBhbHQ9XCIke3Nlcmllc0VudHJpZXNbZW50cnldLm5hbWV9XCI+XG4gICAgICA8cCBjbGFzcz1cInRpdGxlXCI+JHtzZXJpZXNFbnRyaWVzW2VudHJ5XS5uYW1lfSAgPGkgY2xhc3M9XCJmYSBmYS1oZWFydFwiPjwvaT48c3BhbiBjbGFzcz1cImRpc3BsYXlcIiBkYXRhLWluZGV4PVwiJHtzZXJpZXNFbnRyaWVzW2VudHJ5XS5pbmRleH1cIiBkYXRhLWlkPVwiJHtzZXJpZXNFbnRyaWVzW2VudHJ5XS5pZH1cIj4wPC9zcGFuPjwvcD5cbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiY29tbWVudHNcIj5Db21tZW50czwvYnV0dG9uPiBcbiAgICAgIDwvZGl2PiBcbiAgICBgO1xuICAgIGRpc3BsYXlTZXJpZXMuYXBwZW5kKGRpc3BsYXlJdGVtKTtcbiAgfVxuXG4gIGNvbnN0IGRpc3BsYXlJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LWl0ZW1zMScpO1xuICBjb25zdCBsZW5ndGggPSBjb3VudEl0ZW1zKHNlcmllc0VudHJpZXMpO1xuICBkaXNwbGF5SXRlbXMudGV4dENvbnRlbnQgPSBgQWxsIE1vdmllcyAoJHtsZW5ndGh9KWA7XG5cbiAgY29uc3QgZGlzcGxheUxpa2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhLWhlYXJ0Jyk7XG4gIGRpc3BsYXlMaWtlcy5mb3JFYWNoKChsaWtlKSA9PiB7XG4gICAgbGlrZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBwb3N0TGlrZXMoZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmlkKTtcbiAgICAgIGUudGFyZ2V0Lm5leHRTaWJsaW5nLnRleHRDb250ZW50ID0gcGFyc2VJbnQoZS50YXJnZXQubmV4dFNpYmxpbmcudGV4dENvbnRlbnQsIDEwKSArIDE7XG4gICAgfSk7XG4gIH0pO1xuICBjb25zdCBsaWtlSXRlbXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvSWdLRGQ4RXdRaTlYZjNmZ2VRbEYvbGlrZXMnKTtcbiAgY29uc3QgaXRlbUxpc3QgPSBhd2FpdCBsaWtlSXRlbXMuanNvbigpO1xuICBpdGVtTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3QgbGlrZUl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZCA9ICcke2l0ZW0uaXRlbV9pZH0nXWApO1xuICAgIGxpa2VJdGVtLmlubmVySFRNTCA9IGAke2l0ZW0ubGlrZXN9YDtcbiAgfSk7XG5cbiAgLy8gZGlzcGxheWluZyB0aGUgcG9wdXAgd2luZG93XG4gIGNvbnN0IGdldFBvcHVwID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cy8ke2lkfWApO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zdCBwb3B1cExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwb3B1cExpc3QuY2xhc3NMaXN0LmFkZCgnY29tbWVudC1wb3B1cCcpO1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgcG9wdXBMaXN0LmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPSdwb3B1cC1oZWFkZXJzJz5cbiAgICA8L2Rpdj5cbiAgICA8c3BhbiBjbGFzcz1cImNsb3NlLWJ1dHRvbiBjbG9zZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz0naW1hZ2UtaGVhZGVyJz5cbiAgICA8aW1nIHNyYz0gJHtyZXN1bHQuaW1hZ2UubWVkaXVtfT5cbiAgICA8ZGl2IGNsYXNzPSdzZXJpZXMtZGV0YWlscyc+XG4gICAgPGg0PiR7cmVzdWx0Lm5hbWV9PC9oND5cbiAgICA8cD4ke3Jlc3VsdC5zdW1tYXJ5fTwvcD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPSdzZXJpZXMtYXR0cmlidXRlcyc+XG4gICAgPHA+R2VucmU6ICgke3Jlc3VsdC5nZW5yZXN9KTwvcD5cbiAgICA8cD5QcmVtaWVyZWQgb246ICR7cmVzdWx0LnByZW1pZXJlZH08L3A+XG4gICAgPHA+UmF0aW5ncygke3Jlc3VsdC5yYXRpbmcuYXZlcmFnZX0pPC9wPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9J2NvbW1lbnQtc2VjdGlvbic+XG4gICAgPGlucHV0IHR5cGU9J3RleHQnIGNsYXNzPSd1c2VyLW5hbWUnIHBsYWNlaG9sZGVyPSdZb3VyIG5hbWUnPlxuICAgIDx0ZXh0YXJlYSB0eXBlPSd0ZXh0JyBjbGFzcz0ndXNlci1jb21tZW50JyBwbGFjZWhvbGRlcj0nWW91ciBpbnNpZ2h0cyc+PC90ZXh0YXJlYT5cbiAgICA8YnV0dG9uIGNsYXNzPSdjb21tZW50LWJveCcgdHlwZT0nc3VibWl0Jz5Db21tZW50PC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgYDtcbiAgICBib2R5LmFwcGVuZChwb3B1cExpc3QpO1xuICAgIC8vIENsb3NlIGJ1dHRvblxuICAgIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlJyk7XG4gICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBkaXNwbGF5U2VyaWVzLnN0eWxlLmZpbHRlciA9ICdibHVyKDApJztcbiAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICBib2R5LnJlbW92ZUNoaWxkKGJvZHkubGFzdENoaWxkKTtcbiAgICB9KTtcbiAgfTtcbiAgLy8gQ29tbWVudCBldmVudGxpc3RlcnNcbiAgY29uc3QgY29tbWVudEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tbWVudHMnKTtcbiAgY29tbWVudEJ0bnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGdldFBvcHVwKGUudGFyZ2V0LnBhcmVudE5vZGUuaWQpO1xuICAgICAgZGlzcGxheVNlcmllcy5zdHlsZS5maWx0ZXIgPSAnYmx1cigxMnB4KSc7XG4gICAgfSk7XG4gIH0pO1xufTtcbmV4cG9ydCB7IHNob3dTZXJpZXNMaXN0LCBjb3VudEl0ZW1zIH07XG4iLCIvLyBGZXRjaGluZyB0aGUgYmFzZSBBUElcbmNvbnN0IGFwaUJhc2VVcmwgPSAnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cyc7XG5jb25zdCBmZXRjaExpc3QgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYXBpQmFzZVVybCk7XG4gIGNvbnN0IHNlcmllc0xpc3QgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBzZXJpZXNMaXN0O1xufTtcblxuY29uc3QgYXBpSW52b2x2ZW1lbnRVcmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvSWdLRGQ4RXdRaTlYZjNmZ2VRbEYvbGlrZXMnO1xuY29uc3QgcG9zdExpa2VzID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYXBpSW52b2x2ZW1lbnRVcmwsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpdGVtX2lkOiBgJHtpZH1gIH0pLFxuICB9KTtcbiAgY29uc3QgcG9zdGVkTGlrZXMgPSBhd2FpdCBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKSk7XG5cbiAgcmV0dXJuIHBvc3RlZExpa2VzO1xufTtcbmV4cG9ydCB7IGZldGNoTGlzdCwgcG9zdExpa2VzIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=