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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: \"poppins\", sans-serif;\r\n  background-color: #000;\r\n  color: #fff;\r\n  width: 100%;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.nav-section {\r\n  background-color: #8b0000;\r\n  color: #fff;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 85px;\r\n}\r\n\r\n.movie-logo {\r\n  background-color: #000;\r\n  padding: 2px;\r\n  border-radius: 8px;\r\n}\r\n\r\n.movie-logo:hover {\r\n  padding: 2px;\r\n  transition-duration: 2s;\r\n  cursor: pointer;\r\n}\r\n\r\n.nav-section a {\r\n  color: #fff;\r\n  text-decoration: none;\r\n  font-size: 14px;\r\n  font-weight: 200;\r\n}\r\n\r\n.list-group-nav {\r\n  display: flex;\r\n  gap: 24px;\r\n  margin-right: 12%;\r\n  list-style-type: none;\r\n  text-decoration: none;\r\n}\r\n\r\n.list-group-nav li a {\r\n  text-decoration: none;\r\n}\r\n\r\n.list-items1 {\r\n  font-size: 14px;\r\n  font-weight: 200;\r\n}\r\n\r\n.watchlist {\r\n  width: 100%;\r\n  display: flex;\r\n}\r\n\r\n.card-image1 {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n}\r\n\r\n.title {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  font-size: 15px;\r\n  font-weight: 200;\r\n  width: 80%;\r\n  background-color: #000;\r\n}\r\n\r\n.card-image {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-end;\r\n  position: relative;\r\n  width: 100%;\r\n  height: 80vh;\r\n}\r\n\r\n.show-image {\r\n  position: absolute;\r\n  top: 2%;\r\n  left: 0;\r\n  z-index: -1;\r\n  width: 80%;\r\n  height: 80%;\r\n}\r\n\r\n.mobile-display {\r\n  margin: auto;\r\n}\r\n\r\n.fa-heart,\r\n.comments {\r\n  cursor: pointer;\r\n}\r\n\r\n.comments {\r\n  background-color: #8b0000;\r\n  color: #fff;\r\n  text-align: center;\r\n  width: 80%;\r\n  padding: 10px;\r\n}\r\n\r\n.close-button {\r\n  margin-top: 0;\r\n  text-align: end;\r\n  width: 100%;\r\n  cursor: pointer;\r\n  font-size: 2.25rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.image-header {\r\n  margin: auto;\r\n}\r\n\r\n.image-header img {\r\n  object-fit: cover;\r\n  width: 100%;\r\n  height: 80vh;\r\n}\r\n\r\n.series-details {\r\n  display: none;\r\n  font-size: 14px;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background-color: #8b0000;\r\n  border-radius: 10px;\r\n  color: #fff;\r\n  font-weight: 400;\r\n  opacity: 0.9;\r\n}\r\n\r\n.series-details h4 {\r\n  font-size: 20px;\r\n}\r\n\r\n.series-details p {\r\n  padding: 0 3% 0 3%;\r\n}\r\n\r\n.series-attributes {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 10px;\r\n  border: 1px solid #8b0000;\r\n  border-radius: 10px;\r\n  padding: 12px;\r\n  margin: 3% 10% 2% 10%;\r\n}\r\n\r\n.comment-popup {\r\n  position: fixed;\r\n  overflow-y: scroll;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  border: 1px solid #8b0000;\r\n  border-radius: 10px;\r\n  max-width: 80%;\r\n  max-height: 80%;\r\n  padding: 12px;\r\n  background-color: #fff;\r\n  color: #000;\r\n}\r\n\r\n.popup-headers {\r\n  padding: 10px 15px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding-top: 4%;\r\n}\r\n\r\n.comment-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 16px;\r\n}\r\n\r\n.user-name {\r\n  width: 210px;\r\n  background: none;\r\n  height: 40px;\r\n  padding: 20px;\r\n  border-radius: 8px;\r\n}\r\n\r\n.user-comment {\r\n  width: 210px;\r\n  height: 80px;\r\n  background: none;\r\n  padding: 20px;\r\n  border-radius: 8px;\r\n  outline: none;\r\n}\r\n\r\n.comment-box {\r\n  background-color: #8b0000;\r\n  color: #fff;\r\n  padding: 12px;\r\n  border-radius: 8px;\r\n  cursor: pointer;\r\n}\r\n\r\n.series-footer {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: #8b0000;\r\n  color: #fff;\r\n  font-style: oblique;\r\n  width: 100%;\r\n  height: 67px;\r\n}\r\n\r\n.series-footer p {\r\n  margin-left: 24px;\r\n}\r\n\r\n.logo {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-repeat: no-repeat;\r\n  background-size: 100%;\r\n  width: 50px;\r\n  height: 50px;\r\n}\r\n\r\n.comment-placeholder {\r\n  margin: auto;\r\n  gap: 16px;\r\n  width: 400px;\r\n  background: transparent;\r\n  border: 1px solid #000;\r\n  border-radius: 10px;\r\n  padding: 24px;\r\n  margin-bottom: 2%;\r\n}\r\n\r\n.comment-placeholder p {\r\n  text-align: center;\r\n  line-height: 40px;\r\n  font-weight: bold;\r\n}\r\n\r\n.comments-holder {\r\n  list-style-type: none;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .nav-section {\r\n    background-color: #8b0000;\r\n    color: #fff;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    width: 100%;\r\n    height: 85px;\r\n  }\r\n\r\n  .movie-logo {\r\n    margin-left: 67px;\r\n    border: 1px solid #fff;\r\n    background-color: #000;\r\n    padding: 16px;\r\n    border-radius: 8px;\r\n  }\r\n\r\n  .movie-logo:hover {\r\n    padding: 12px;\r\n    transition-duration: 2s;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .nav-section a {\r\n    color: #fff;\r\n    text-decoration: none;\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n  }\r\n\r\n  .list-group-nav {\r\n    display: flex;\r\n    gap: 24px;\r\n    margin-right: 12%;\r\n    list-style-type: none;\r\n    text-decoration: none;\r\n  }\r\n\r\n  .list-items1 {\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n  }\r\n\r\n  .card-image1 {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr;\r\n    gap: 10px 15px;\r\n    margin-left: 0;\r\n  }\r\n\r\n  .card-image {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-end;\r\n    position: relative;\r\n    width: 100%;\r\n    height: 400px;\r\n  }\r\n\r\n  .show-image {\r\n    position: absolute;\r\n    top: 2%;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n\r\n  .title {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    font-size: 15px;\r\n    font-weight: 200;\r\n    width: 100%;\r\n  }\r\n\r\n  .fa-heart,\r\n  .comments {\r\n    cursor: pointer;\r\n  }\r\n\r\n  .comments {\r\n    background-color: #8b0000;\r\n    color: #fff;\r\n    border: 2px solid #000;\r\n    text-align: center;\r\n    width: 100%;\r\n    padding: 10px;\r\n  }\r\n\r\n  .image-header img {\r\n    object-fit: cover;\r\n    margin: auto;\r\n  }\r\n\r\n  .series-details {\r\n    font-size: 14px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    background-color: #8b0000;\r\n    border-radius: 10px;\r\n    color: #fff;\r\n    font-weight: 400;\r\n    opacity: 0.9;\r\n  }\r\n\r\n  .series-details h4 {\r\n    font-size: 20px;\r\n  }\r\n\r\n  .series-details p {\r\n    padding: 0 3% 0 3%;\r\n  }\r\n\r\n  .series-attributes {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 10px;\r\n    border: 1px solid #8b0000;\r\n    border-radius: 10px;\r\n    padding: 12px;\r\n    margin: 3% 10% 2% 10%;\r\n  }\r\n\r\n  .popup-headers {\r\n    padding: 10px 15px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding-top: 4%;\r\n  }\r\n\r\n  .comment-section {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 16px;\r\n  }\r\n\r\n  .user-name {\r\n    width: 210px;\r\n    background: none;\r\n    height: 40px;\r\n    padding: 20px;\r\n    border-radius: 8px;\r\n  }\r\n\r\n  .user-comment {\r\n    width: 210px;\r\n    height: 80px;\r\n    background: none;\r\n    padding: 20px;\r\n    border-radius: 8px;\r\n    outline: none;\r\n  }\r\n\r\n  .comment-box {\r\n    background-color: #8b0000;\r\n    color: #fff;\r\n    padding: 12px;\r\n    border-radius: 8px;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .series-footer {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: #8b0000;\r\n    color: #fff;\r\n    font-style: oblique;\r\n    width: 100%;\r\n    height: 67px;\r\n  }\r\n\r\n  .series-footer p {\r\n    margin-left: 24px;\r\n  }\r\n\r\n  .logo {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n    width: 50px;\r\n    height: 50px;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: \"poppins\", sans-serif;\r\n  background-color: #000;\r\n  color: #fff;\r\n  width: 100%;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.nav-section {\r\n  background-color: #8b0000;\r\n  color: #fff;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 85px;\r\n}\r\n\r\n.movie-logo {\r\n  background-color: #000;\r\n  padding: 2px;\r\n  border-radius: 8px;\r\n}\r\n\r\n.movie-logo:hover {\r\n  padding: 2px;\r\n  transition-duration: 2s;\r\n  cursor: pointer;\r\n}\r\n\r\n.nav-section a {\r\n  color: #fff;\r\n  text-decoration: none;\r\n  font-size: 14px;\r\n  font-weight: 200;\r\n}\r\n\r\n.list-group-nav {\r\n  display: flex;\r\n  gap: 24px;\r\n  margin-right: 12%;\r\n  list-style-type: none;\r\n  text-decoration: none;\r\n}\r\n\r\n.list-group-nav li a {\r\n  text-decoration: none;\r\n}\r\n\r\n.list-items1 {\r\n  font-size: 14px;\r\n  font-weight: 200;\r\n}\r\n\r\n.watchlist {\r\n  width: 100%;\r\n  display: flex;\r\n}\r\n\r\n.card-image1 {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n}\r\n\r\n.title {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  font-size: 15px;\r\n  font-weight: 200;\r\n  width: 80%;\r\n  background-color: #000;\r\n}\r\n\r\n.card-image {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-end;\r\n  position: relative;\r\n  width: 100%;\r\n  height: 80vh;\r\n}\r\n\r\n.show-image {\r\n  position: absolute;\r\n  top: 2%;\r\n  left: 0;\r\n  z-index: -1;\r\n  width: 80%;\r\n  height: 80%;\r\n}\r\n\r\n.mobile-display {\r\n  margin: auto;\r\n}\r\n\r\n.fa-heart,\r\n.comments {\r\n  cursor: pointer;\r\n}\r\n\r\n.comments {\r\n  background-color: #8b0000;\r\n  color: #fff;\r\n  text-align: center;\r\n  width: 80%;\r\n  padding: 10px;\r\n}\r\n\r\n.close-button {\r\n  margin-top: 0;\r\n  text-align: end;\r\n  width: 100%;\r\n  cursor: pointer;\r\n  font-size: 2.25rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.image-header {\r\n  margin: auto;\r\n}\r\n\r\n.image-header img {\r\n  object-fit: cover;\r\n  width: 100%;\r\n  height: 80vh;\r\n}\r\n\r\n.series-details {\r\n  display: none;\r\n  font-size: 14px;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background-color: #8b0000;\r\n  border-radius: 10px;\r\n  color: #fff;\r\n  font-weight: 400;\r\n  opacity: 0.9;\r\n}\r\n\r\n.series-details h4 {\r\n  font-size: 20px;\r\n}\r\n\r\n.series-details p {\r\n  padding: 0 3% 0 3%;\r\n}\r\n\r\n.series-attributes {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 10px;\r\n  border: 1px solid #8b0000;\r\n  border-radius: 10px;\r\n  padding: 12px;\r\n  margin: 3% 10% 2% 10%;\r\n}\r\n\r\n.comment-popup {\r\n  position: fixed;\r\n  overflow-y: scroll;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  border: 1px solid #8b0000;\r\n  border-radius: 10px;\r\n  max-width: 80%;\r\n  max-height: 80%;\r\n  padding: 12px;\r\n  background-color: #fff;\r\n  color: #000;\r\n}\r\n\r\n.popup-headers {\r\n  padding: 10px 15px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding-top: 4%;\r\n}\r\n\r\n.comment-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 16px;\r\n}\r\n\r\n.user-name {\r\n  width: 210px;\r\n  background: none;\r\n  height: 40px;\r\n  padding: 20px;\r\n  border-radius: 8px;\r\n}\r\n\r\n.user-comment {\r\n  width: 210px;\r\n  height: 80px;\r\n  background: none;\r\n  padding: 20px;\r\n  border-radius: 8px;\r\n  outline: none;\r\n}\r\n\r\n.comment-box {\r\n  background-color: #8b0000;\r\n  color: #fff;\r\n  padding: 12px;\r\n  border-radius: 8px;\r\n  cursor: pointer;\r\n}\r\n\r\n.series-footer {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: #8b0000;\r\n  color: #fff;\r\n  font-style: oblique;\r\n  width: 100%;\r\n  height: 67px;\r\n}\r\n\r\n.series-footer p {\r\n  margin-left: 24px;\r\n}\r\n\r\n.logo {\r\n  background-image: url(\"./images/c-s.jpg\");\r\n  background-repeat: no-repeat;\r\n  background-size: 100%;\r\n  width: 50px;\r\n  height: 50px;\r\n}\r\n\r\n.comment-placeholder {\r\n  margin: auto;\r\n  gap: 16px;\r\n  width: 400px;\r\n  background: transparent;\r\n  border: 1px solid #000;\r\n  border-radius: 10px;\r\n  padding: 24px;\r\n  margin-bottom: 2%;\r\n}\r\n\r\n.comment-placeholder p {\r\n  text-align: center;\r\n  line-height: 40px;\r\n  font-weight: bold;\r\n}\r\n\r\n.comments-holder {\r\n  list-style-type: none;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .nav-section {\r\n    background-color: #8b0000;\r\n    color: #fff;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    width: 100%;\r\n    height: 85px;\r\n  }\r\n\r\n  .movie-logo {\r\n    margin-left: 67px;\r\n    border: 1px solid #fff;\r\n    background-color: #000;\r\n    padding: 16px;\r\n    border-radius: 8px;\r\n  }\r\n\r\n  .movie-logo:hover {\r\n    padding: 12px;\r\n    transition-duration: 2s;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .nav-section a {\r\n    color: #fff;\r\n    text-decoration: none;\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n  }\r\n\r\n  .list-group-nav {\r\n    display: flex;\r\n    gap: 24px;\r\n    margin-right: 12%;\r\n    list-style-type: none;\r\n    text-decoration: none;\r\n  }\r\n\r\n  .list-items1 {\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n  }\r\n\r\n  .card-image1 {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr;\r\n    gap: 10px 15px;\r\n    margin-left: 0;\r\n  }\r\n\r\n  .card-image {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-end;\r\n    position: relative;\r\n    width: 100%;\r\n    height: 400px;\r\n  }\r\n\r\n  .show-image {\r\n    position: absolute;\r\n    top: 2%;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n\r\n  .title {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    font-size: 15px;\r\n    font-weight: 200;\r\n    width: 100%;\r\n  }\r\n\r\n  .fa-heart,\r\n  .comments {\r\n    cursor: pointer;\r\n  }\r\n\r\n  .comments {\r\n    background-color: #8b0000;\r\n    color: #fff;\r\n    border: 2px solid #000;\r\n    text-align: center;\r\n    width: 100%;\r\n    padding: 10px;\r\n  }\r\n\r\n  .image-header img {\r\n    object-fit: cover;\r\n    margin: auto;\r\n  }\r\n\r\n  .series-details {\r\n    font-size: 14px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    background-color: #8b0000;\r\n    border-radius: 10px;\r\n    color: #fff;\r\n    font-weight: 400;\r\n    opacity: 0.9;\r\n  }\r\n\r\n  .series-details h4 {\r\n    font-size: 20px;\r\n  }\r\n\r\n  .series-details p {\r\n    padding: 0 3% 0 3%;\r\n  }\r\n\r\n  .series-attributes {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 10px;\r\n    border: 1px solid #8b0000;\r\n    border-radius: 10px;\r\n    padding: 12px;\r\n    margin: 3% 10% 2% 10%;\r\n  }\r\n\r\n  .popup-headers {\r\n    padding: 10px 15px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding-top: 4%;\r\n  }\r\n\r\n  .comment-section {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 16px;\r\n  }\r\n\r\n  .user-name {\r\n    width: 210px;\r\n    background: none;\r\n    height: 40px;\r\n    padding: 20px;\r\n    border-radius: 8px;\r\n  }\r\n\r\n  .user-comment {\r\n    width: 210px;\r\n    height: 80px;\r\n    background: none;\r\n    padding: 20px;\r\n    border-radius: 8px;\r\n    outline: none;\r\n  }\r\n\r\n  .comment-box {\r\n    background-color: #8b0000;\r\n    color: #fff;\r\n    padding: 12px;\r\n    border-radius: 8px;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .series-footer {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: #8b0000;\r\n    color: #fff;\r\n    font-style: oblique;\r\n    width: 100%;\r\n    height: 67px;\r\n  }\r\n\r\n  .series-footer p {\r\n    margin-left: 24px;\r\n  }\r\n\r\n  .logo {\r\n    background-image: url(\"./images/c-s.jpg\");\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n    width: 50px;\r\n    height: 50px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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



(0,_modules_showitem_js__WEBPACK_IMPORTED_MODULE_1__.showSeriesList)();


/***/ }),

/***/ "./src/modules/comment-counter.js":
/*!****************************************!*\
  !*** ./src/modules/comment-counter.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const commentCounter = (counts) => counts.length;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentCounter);


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
/* harmony import */ var _comment_counter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comment-counter.js */ "./src/modules/comment-counter.js");



// eslint-disable-next-line consistent-return
const countItems = (items) => {
  if (Array.isArray(items)) {
    return items.length;
  }
};

// Loading API images in the DOM
const showSeriesList = async () => {
  const seriesResults = await (0,_showlist_js__WEBPACK_IMPORTED_MODULE_0__.fetchList)();
  const displaySeries = document.querySelector('.watchlist');
  const seriesEntries = seriesResults.slice(73, 93);
  const displayItem = document.createElement('div');
  for (let entry = 0; entry < seriesEntries.length; entry += 1) {
    displayItem.classList.add('card-image1');
    displayItem.innerHTML += `
      <div class="card-image" id= ${seriesEntries[entry].id}>
      <img class="show-image" src="${seriesEntries[entry].image.original}" alt="${seriesEntries[entry].name}">
      <p class="title">${seriesEntries[entry].name}  <i class="fa fa-heart"><span class="display" data-index="${seriesEntries[entry].index}" data-id="${seriesEntries[entry].id}">0</span></i></p>
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
      e.target.childNodes[0].textContent = parseInt(e.target.childNodes[0].textContent, 10) + 1;
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
    <p class="close-button close">&times;</p>
    <div class='image-header'>
    <img src= ${result.image.original}></div>
    <div class='series-details'>
    <h4>${result.name}</h4>
    <p>${result.summary}</p>
    </div>
    <div class='series-attributes'>
    <p>Genre: (${result.genres})</p>
    <p>Premiered on: ${result.premiered}</p>
    <p>Ratings(${result.rating.average})</p>
    </div>
    <div class='comment-placeholder'>
    <p>Comments<span class='comment-title'></span></p>
    <ul class="comments-holder"></ul>
    </div>
    <form class='comment-section' id='comment-form'>
    <input type='text' class='user-name' id='user-name' placeholder='Your name'>
    <textarea type='text' class='user-comment' id='add-comment' placeholder='Your insights'></textarea>
    <button class='comment-box' id=${id} type='submit'>Comment</button>
    </form>
    `;
    body.append(popupList);
    // Close button
    const close = document.querySelector('.close');
    close.addEventListener('click', () => {
      displaySeries.style.filter = 'blur(0)';
      const body = document.querySelector('body');
      body.removeChild(body.lastChild);
    });

    // Posting Comments Space
    const createComment = (comments) => {
      const testCounter = (0,_comment_counter_js__WEBPACK_IMPORTED_MODULE_1__["default"])(comments);
      const commentCount = document.querySelector('.comment-title');
      commentCount.innerHTML = `(${testCounter})`;
      const commentList = document.querySelector('.comments-holder');
      commentList.innerHTML = '';
      comments.forEach((comment) => {
        commentList.innerHTML += `<li>${comment.creation_date}: ${comment.username}: ${comment.comment}</li>`;
      });
    };

    const apiCommentURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6Rsc5dWsUkxFOihStX7m/comments';

    const fetchComments = async (id) => {
      const request = new Request(`${apiCommentURL}?item_id=${id}`);
      const response = await fetch(request);
      if (!response.ok) {
        throw new Error('No comments added for this movie');
      }
      const getComment = await response.json();
      createComment(getComment);
    };

    // ************************************

    const displayComment = async (e) => {
      e.preventDefault();
      const movieID = e.target;

      const name = document.getElementById('user-name').value.trim();
      const addComment = document.getElementById('add-comment').value.trim();
      const commentForm = document.getElementById('comment-form');

      if (name && addComment) {
        const result = await fetch(apiCommentURL, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
          body: JSON.stringify({
            item_id: `${movieID.id}`,
            username: `${name}`,
            comment: `${addComment}`,
          }),
        });
        commentForm.reset();
        await result.text();
        fetchComments(movieID.id);
      }
    };
    fetchComments(id);
    const submitComment = document.querySelector('.comment-box');
    submitComment.addEventListener('click', displayComment);
  };
  // Comment eventlisters
  const commentBtns = document.querySelectorAll('.comments');
  commentBtns.forEach((button) => {
    button.addEventListener('click', (e) => {
      getPopup(e.target.parentNode.id);
      displaySeries.style.filter = 'blur(12px)';
    });
  });

  // Posting comments
};

// eslint-disable-next-line consistent-return


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlB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LGNBQWMsV0FBVyxHQUFHO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DLFdBQVc7QUFDWDtBQUNBLHdCQUF3QixXQUFXO0FBQ25DLHlCQUF5QixLQUFLO0FBQzlCLHdCQUF3QixXQUFXO0FBQ25DLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDc0M7QUFDdEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLDJCQUEyQixZQUFZLEdBQUcsR0FBRztBQUM3QyxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNnQyIsInNvdXJjZXMiOlsid2VicGFjazovL21vdmllLWNhcHN0b25lLWFwaS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbW92aWUtY2Fwc3RvbmUtYXBpLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9tb3ZpZS1jYXBzdG9uZS1hcGkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL21vdmllLWNhcHN0b25lLWFwaS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL21vdmllLWNhcHN0b25lLWFwaS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9tb3ZpZS1jYXBzdG9uZS1hcGkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbW92aWUtY2Fwc3RvbmUtYXBpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9tb3ZpZS1jYXBzdG9uZS1hcGkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbW92aWUtY2Fwc3RvbmUtYXBpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL21vdmllLWNhcHN0b25lLWFwaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL21vdmllLWNhcHN0b25lLWFwaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL21vdmllLWNhcHN0b25lLWFwaS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9tb3ZpZS1jYXBzdG9uZS1hcGkvLi9zcmMvbW9kdWxlcy9jb21tZW50LWNvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vbW92aWUtY2Fwc3RvbmUtYXBpLy4vc3JjL21vZHVsZXMvc2hvd2l0ZW0uanMiLCJ3ZWJwYWNrOi8vbW92aWUtY2Fwc3RvbmUtYXBpLy4vc3JjL21vZHVsZXMvc2hvd2xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2Mtcy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwicG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1zZWN0aW9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4YjAwMDA7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiA4NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtbG9nbyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcclxcbiAgcGFkZGluZzogMnB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtbG9nbzpob3ZlciB7XFxyXFxuICBwYWRkaW5nOiAycHg7XFxyXFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAycztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1zZWN0aW9uIGEge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBmb250LXdlaWdodDogMjAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1ncm91cC1uYXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMjRweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTIlO1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1ncm91cC1uYXYgbGkgYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWl0ZW1zMSB7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBmb250LXdlaWdodDogMjAwO1xcclxcbn1cXHJcXG5cXHJcXG4ud2F0Y2hsaXN0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtaW1hZ2UxIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1pbWFnZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogODB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLnNob3ctaW1hZ2Uge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAyJTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB6LWluZGV4OiAtMTtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBoZWlnaHQ6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vYmlsZS1kaXNwbGF5IHtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWhlYXJ0LFxcclxcbi5jb21tZW50cyB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGIwMDAwO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLWJ1dHRvbiB7XFxyXFxuICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgdGV4dC1hbGlnbjogZW5kO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LXNpemU6IDIuMjVyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlLWhlYWRlciB7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5pbWFnZS1oZWFkZXIgaW1nIHtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDgwdmg7XFxyXFxufVxcclxcblxcclxcbi5zZXJpZXMtZGV0YWlscyB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGIwMDAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIG9wYWNpdHk6IDAuOTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlcmllcy1kZXRhaWxzIGg0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlcmllcy1kZXRhaWxzIHAge1xcclxcbiAgcGFkZGluZzogMCAzJSAwIDMlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VyaWVzLWF0dHJpYnV0ZXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzhiMDAwMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiAxMnB4O1xcclxcbiAgbWFyZ2luOiAzJSAxMCUgMiUgMTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1wb3B1cCB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzhiMDAwMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBtYXgtd2lkdGg6IDgwJTtcXHJcXG4gIG1heC1oZWlnaHQ6IDgwJTtcXHJcXG4gIHBhZGRpbmc6IDEycHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1oZWFkZXJzIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZy10b3A6IDQlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1zZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXItbmFtZSB7XFxyXFxuICB3aWR0aDogMjEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXItY29tbWVudCB7XFxyXFxuICB3aWR0aDogMjEwcHg7XFxyXFxuICBoZWlnaHQ6IDgwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWJveCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGIwMDAwO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBwYWRkaW5nOiAxMnB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VyaWVzLWZvb3RlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4YjAwMDA7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNjdweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlcmllcy1mb290ZXIgcCB7XFxyXFxuICBtYXJnaW4tbGVmdDogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtcGxhY2Vob2xkZXIge1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgZ2FwOiAxNnB4O1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDI0cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtcGxhY2Vob2xkZXIgcCB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBsaW5lLWhlaWdodDogNDBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudHMtaG9sZGVyIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5uYXYtc2VjdGlvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4YjAwMDA7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDg1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW92aWUtbG9nbyB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA2N3B4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcclxcbiAgICBwYWRkaW5nOiAxNnB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW92aWUtbG9nbzpob3ZlciB7XFxyXFxuICAgIHBhZGRpbmc6IDEycHg7XFxyXFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDJzO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2LXNlY3Rpb24gYSB7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5saXN0LWdyb3VwLW5hdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMjRweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMiU7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxpc3QtaXRlbXMxIHtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNhcmQtaW1hZ2UxIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxyXFxuICAgIGdhcDogMTBweCAxNXB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXJkLWltYWdlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA0MDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zaG93LWltYWdlIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDIlO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRpdGxlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBmb250LXNpemU6IDE1cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZhLWhlYXJ0LFxcclxcbiAgLmNvbW1lbnRzIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbW1lbnRzIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhiMDAwMDtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaW1hZ2UtaGVhZGVyIGltZyB7XFxyXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2VyaWVzLWRldGFpbHMge1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4YjAwMDA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBvcGFjaXR5OiAwLjk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2VyaWVzLWRldGFpbHMgaDQge1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2VyaWVzLWRldGFpbHMgcCB7XFxyXFxuICAgIHBhZGRpbmc6IDAgMyUgMCAzJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zZXJpZXMtYXR0cmlidXRlcyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4YjAwMDA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEycHg7XFxyXFxuICAgIG1hcmdpbjogMyUgMTAlIDIlIDEwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wb3B1cC1oZWFkZXJzIHtcXHJcXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmctdG9wOiA0JTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb21tZW50LXNlY3Rpb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDE2cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudXNlci1uYW1lIHtcXHJcXG4gICAgd2lkdGg6IDIxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC51c2VyLWNvbW1lbnQge1xcclxcbiAgICB3aWR0aDogMjEwcHg7XFxyXFxuICAgIGhlaWdodDogODBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbW1lbnQtYm94IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhiMDAwMDtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIHBhZGRpbmc6IDEycHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNlcmllcy1mb290ZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhiMDAwMDtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG9ibGlxdWU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDY3cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2VyaWVzLWZvb3RlciBwIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDI0cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubG9nbyB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE9BQU87RUFDUCxXQUFXO0VBQ1gsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGVBQWU7RUFDZixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlEQUF5QztFQUN6Qyw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osU0FBUztFQUNULFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRTtJQUNFLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsU0FBUztJQUNULGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsY0FBYztJQUNkLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsV0FBVztFQUNiOztFQUVBOztJQUVFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGFBQWE7RUFDZjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSx5REFBeUM7SUFDekMsNEJBQTRCO0lBQzVCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtFQUNkO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcInBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5uYXYtc2VjdGlvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGIwMDAwO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogODVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWxvZ28ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXHJcXG4gIHBhZGRpbmc6IDJweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWxvZ286aG92ZXIge1xcclxcbiAgcGFkZGluZzogMnB4O1xcclxcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMnM7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uYXYtc2VjdGlvbiBhIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtZ3JvdXAtbmF2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDI0cHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEyJTtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtZ3JvdXAtbmF2IGxpIGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1pdGVtczEge1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXHJcXG59XFxyXFxuXFxyXFxuLndhdGNobGlzdCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWltYWdlMSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtaW1hZ2Uge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDgwdmg7XFxyXFxufVxcclxcblxcclxcbi5zaG93LWltYWdlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMiU7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgei1pbmRleDogLTE7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgaGVpZ2h0OiA4MCU7XFxyXFxufVxcclxcblxcclxcbi5tb2JpbGUtZGlzcGxheSB7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5mYS1oZWFydCxcXHJcXG4uY29tbWVudHMge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudHMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhiMDAwMDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1idXR0b24ge1xcclxcbiAgbWFyZ2luLXRvcDogMDtcXHJcXG4gIHRleHQtYWxpZ246IGVuZDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1zaXplOiAyLjI1cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5pbWFnZS1oZWFkZXIge1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2UtaGVhZGVyIGltZyB7XFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA4MHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VyaWVzLWRldGFpbHMge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhiMDAwMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBvcGFjaXR5OiAwLjk7XFxyXFxufVxcclxcblxcclxcbi5zZXJpZXMtZGV0YWlscyBoNCB7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5zZXJpZXMtZGV0YWlscyBwIHtcXHJcXG4gIHBhZGRpbmc6IDAgMyUgMCAzJTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlcmllcy1hdHRyaWJ1dGVzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4YjAwMDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgcGFkZGluZzogMTJweDtcXHJcXG4gIG1hcmdpbjogMyUgMTAlIDIlIDEwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtcG9wdXAge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4YjAwMDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgbWF4LXdpZHRoOiA4MCU7XFxyXFxuICBtYXgtaGVpZ2h0OiA4MCU7XFxyXFxuICBwYWRkaW5nOiAxMnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtaGVhZGVycyB7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctdG9wOiA0JTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi51c2VyLW5hbWUge1xcclxcbiAgd2lkdGg6IDIxMHB4O1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi51c2VyLWNvbW1lbnQge1xcclxcbiAgd2lkdGg6IDIxMHB4O1xcclxcbiAgaGVpZ2h0OiA4MHB4O1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1ib3gge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhiMDAwMDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgcGFkZGluZzogMTJweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlcmllcy1mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGIwMDAwO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LXN0eWxlOiBvYmxpcXVlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDY3cHg7XFxyXFxufVxcclxcblxcclxcbi5zZXJpZXMtZm9vdGVyIHAge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9pbWFnZXMvYy1zLmpwZ1xcXCIpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1wbGFjZWhvbGRlciB7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBnYXA6IDE2cHg7XFxyXFxuICB3aWR0aDogNDAwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgcGFkZGluZzogMjRweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1wbGFjZWhvbGRlciBwIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cy1ob2xkZXIge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgLm5hdi1zZWN0aW9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhiMDAwMDtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogODVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb3ZpZS1sb2dvIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDY3cHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxuICAgIHBhZGRpbmc6IDE2cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb3ZpZS1sb2dvOmhvdmVyIHtcXHJcXG4gICAgcGFkZGluZzogMTJweDtcXHJcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMnM7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXYtc2VjdGlvbiBhIHtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxpc3QtZ3JvdXAtbmF2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAyNHB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDEyJTtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubGlzdC1pdGVtczEge1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2FyZC1pbWFnZTEge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcXHJcXG4gICAgZ2FwOiAxMHB4IDE1cHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNhcmQtaW1hZ2Uge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDQwMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNob3ctaW1hZ2Uge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMiU7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudGl0bGUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZmEtaGVhcnQsXFxyXFxuICAuY29tbWVudHMge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29tbWVudHMge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGIwMDAwO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5pbWFnZS1oZWFkZXIgaW1nIHtcXHJcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zZXJpZXMtZGV0YWlscyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhiMDAwMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIG9wYWNpdHk6IDAuOTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zZXJpZXMtZGV0YWlscyBoNCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zZXJpZXMtZGV0YWlscyBwIHtcXHJcXG4gICAgcGFkZGluZzogMCAzJSAwIDMlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNlcmllcy1hdHRyaWJ1dGVzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzhiMDAwMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgcGFkZGluZzogMTJweDtcXHJcXG4gICAgbWFyZ2luOiAzJSAxMCUgMiUgMTAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBvcHVwLWhlYWRlcnMge1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZy10b3A6IDQlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbW1lbnQtc2VjdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTZweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC51c2VyLW5hbWUge1xcclxcbiAgICB3aWR0aDogMjEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnVzZXItY29tbWVudCB7XFxyXFxuICAgIHdpZHRoOiAyMTBweDtcXHJcXG4gICAgaGVpZ2h0OiA4MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29tbWVudC1ib3gge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGIwMDAwO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgcGFkZGluZzogMTJweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2VyaWVzLWZvb3RlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGIwMDAwO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNjdweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zZXJpZXMtZm9vdGVyIHAge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMjRweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5sb2dvIHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ltYWdlcy9jLXMuanBnXFxcIik7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyBzaG93U2VyaWVzTGlzdCB9IGZyb20gJy4vbW9kdWxlcy9zaG93aXRlbS5qcyc7XHJcblxyXG5zaG93U2VyaWVzTGlzdCgpO1xyXG4iLCJjb25zdCBjb21tZW50Q291bnRlciA9IChjb3VudHMpID0+IGNvdW50cy5sZW5ndGg7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21tZW50Q291bnRlcjtcclxuIiwiaW1wb3J0IHsgZmV0Y2hMaXN0LCBwb3N0TGlrZXMgfSBmcm9tICcuL3Nob3dsaXN0LmpzJztcclxuaW1wb3J0IGNvbW1lbnRDb3VudGVyIGZyb20gJy4vY29tbWVudC1jb3VudGVyLmpzJztcclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxyXG5jb25zdCBjb3VudEl0ZW1zID0gKGl0ZW1zKSA9PiB7XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbXMpKSB7XHJcbiAgICByZXR1cm4gaXRlbXMubGVuZ3RoO1xyXG4gIH1cclxufTtcclxuXHJcbi8vIExvYWRpbmcgQVBJIGltYWdlcyBpbiB0aGUgRE9NXHJcbmNvbnN0IHNob3dTZXJpZXNMaXN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHNlcmllc1Jlc3VsdHMgPSBhd2FpdCBmZXRjaExpc3QoKTtcclxuICBjb25zdCBkaXNwbGF5U2VyaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndhdGNobGlzdCcpO1xyXG4gIGNvbnN0IHNlcmllc0VudHJpZXMgPSBzZXJpZXNSZXN1bHRzLnNsaWNlKDczLCA5Myk7XHJcbiAgY29uc3QgZGlzcGxheUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBmb3IgKGxldCBlbnRyeSA9IDA7IGVudHJ5IDwgc2VyaWVzRW50cmllcy5sZW5ndGg7IGVudHJ5ICs9IDEpIHtcclxuICAgIGRpc3BsYXlJdGVtLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaW1hZ2UxJyk7XHJcbiAgICBkaXNwbGF5SXRlbS5pbm5lckhUTUwgKz0gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1pbWFnZVwiIGlkPSAke3Nlcmllc0VudHJpZXNbZW50cnldLmlkfT5cclxuICAgICAgPGltZyBjbGFzcz1cInNob3ctaW1hZ2VcIiBzcmM9XCIke3Nlcmllc0VudHJpZXNbZW50cnldLmltYWdlLm9yaWdpbmFsfVwiIGFsdD1cIiR7c2VyaWVzRW50cmllc1tlbnRyeV0ubmFtZX1cIj5cclxuICAgICAgPHAgY2xhc3M9XCJ0aXRsZVwiPiR7c2VyaWVzRW50cmllc1tlbnRyeV0ubmFtZX0gIDxpIGNsYXNzPVwiZmEgZmEtaGVhcnRcIj48c3BhbiBjbGFzcz1cImRpc3BsYXlcIiBkYXRhLWluZGV4PVwiJHtzZXJpZXNFbnRyaWVzW2VudHJ5XS5pbmRleH1cIiBkYXRhLWlkPVwiJHtzZXJpZXNFbnRyaWVzW2VudHJ5XS5pZH1cIj4wPC9zcGFuPjwvaT48L3A+XHJcbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiY29tbWVudHNcIj5Db21tZW50czwvYnV0dG9uPiBcclxuICAgICAgPC9kaXY+IFxyXG4gICAgYDtcclxuICAgIGRpc3BsYXlTZXJpZXMuYXBwZW5kKGRpc3BsYXlJdGVtKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGRpc3BsYXlJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LWl0ZW1zMScpO1xyXG4gIGNvbnN0IGxlbmd0aCA9IGNvdW50SXRlbXMoc2VyaWVzRW50cmllcyk7XHJcbiAgZGlzcGxheUl0ZW1zLnRleHRDb250ZW50ID0gYEFsbCBNb3ZpZXMgKCR7bGVuZ3RofSlgO1xyXG5cclxuICBjb25zdCBkaXNwbGF5TGlrZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmEtaGVhcnQnKTtcclxuICBkaXNwbGF5TGlrZXMuZm9yRWFjaCgobGlrZSkgPT4ge1xyXG4gICAgbGlrZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIHBvc3RMaWtlcyhlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWQpO1xyXG4gICAgICBlLnRhcmdldC5jaGlsZE5vZGVzWzBdLnRleHRDb250ZW50ID0gcGFyc2VJbnQoZS50YXJnZXQuY2hpbGROb2Rlc1swXS50ZXh0Q29udGVudCwgMTApICsgMTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIGNvbnN0IGxpa2VJdGVtcyA9IGF3YWl0IGZldGNoKCdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9JZ0tEZDhFd1FpOVhmM2ZnZVFsRi9saWtlcycpO1xyXG4gIGNvbnN0IGl0ZW1MaXN0ID0gYXdhaXQgbGlrZUl0ZW1zLmpzb24oKTtcclxuICBpdGVtTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBjb25zdCBsaWtlSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkID0gJyR7aXRlbS5pdGVtX2lkfSddYCk7XHJcbiAgICBsaWtlSXRlbS5pbm5lckhUTUwgPSBgJHtpdGVtLmxpa2VzfWA7XHJcbiAgfSk7XHJcblxyXG4gIC8vIGRpc3BsYXlpbmcgdGhlIHBvcHVwIHdpbmRvd1xyXG4gIGNvbnN0IGdldFBvcHVwID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS50dm1hemUuY29tL3Nob3dzLyR7aWR9YCk7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBjb25zdCBwb3B1cExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHBvcHVwTGlzdC5jbGFzc0xpc3QuYWRkKCdjb21tZW50LXBvcHVwJyk7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgcG9wdXBMaXN0LmlubmVySFRNTCA9IGBcclxuICAgIDxwIGNsYXNzPVwiY2xvc2UtYnV0dG9uIGNsb3NlXCI+JnRpbWVzOzwvcD5cclxuICAgIDxkaXYgY2xhc3M9J2ltYWdlLWhlYWRlcic+XHJcbiAgICA8aW1nIHNyYz0gJHtyZXN1bHQuaW1hZ2Uub3JpZ2luYWx9PjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz0nc2VyaWVzLWRldGFpbHMnPlxyXG4gICAgPGg0PiR7cmVzdWx0Lm5hbWV9PC9oND5cclxuICAgIDxwPiR7cmVzdWx0LnN1bW1hcnl9PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPSdzZXJpZXMtYXR0cmlidXRlcyc+XHJcbiAgICA8cD5HZW5yZTogKCR7cmVzdWx0LmdlbnJlc30pPC9wPlxyXG4gICAgPHA+UHJlbWllcmVkIG9uOiAke3Jlc3VsdC5wcmVtaWVyZWR9PC9wPlxyXG4gICAgPHA+UmF0aW5ncygke3Jlc3VsdC5yYXRpbmcuYXZlcmFnZX0pPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPSdjb21tZW50LXBsYWNlaG9sZGVyJz5cclxuICAgIDxwPkNvbW1lbnRzPHNwYW4gY2xhc3M9J2NvbW1lbnQtdGl0bGUnPjwvc3Bhbj48L3A+XHJcbiAgICA8dWwgY2xhc3M9XCJjb21tZW50cy1ob2xkZXJcIj48L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8Zm9ybSBjbGFzcz0nY29tbWVudC1zZWN0aW9uJyBpZD0nY29tbWVudC1mb3JtJz5cclxuICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzcz0ndXNlci1uYW1lJyBpZD0ndXNlci1uYW1lJyBwbGFjZWhvbGRlcj0nWW91ciBuYW1lJz5cclxuICAgIDx0ZXh0YXJlYSB0eXBlPSd0ZXh0JyBjbGFzcz0ndXNlci1jb21tZW50JyBpZD0nYWRkLWNvbW1lbnQnIHBsYWNlaG9sZGVyPSdZb3VyIGluc2lnaHRzJz48L3RleHRhcmVhPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz0nY29tbWVudC1ib3gnIGlkPSR7aWR9IHR5cGU9J3N1Ym1pdCc+Q29tbWVudDwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG4gICAgYDtcclxuICAgIGJvZHkuYXBwZW5kKHBvcHVwTGlzdCk7XHJcbiAgICAvLyBDbG9zZSBidXR0b25cclxuICAgIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlJyk7XHJcbiAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgZGlzcGxheVNlcmllcy5zdHlsZS5maWx0ZXIgPSAnYmx1cigwKSc7XHJcbiAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgICAgIGJvZHkucmVtb3ZlQ2hpbGQoYm9keS5sYXN0Q2hpbGQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gUG9zdGluZyBDb21tZW50cyBTcGFjZVxyXG4gICAgY29uc3QgY3JlYXRlQ29tbWVudCA9IChjb21tZW50cykgPT4ge1xyXG4gICAgICBjb25zdCB0ZXN0Q291bnRlciA9IGNvbW1lbnRDb3VudGVyKGNvbW1lbnRzKTtcclxuICAgICAgY29uc3QgY29tbWVudENvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtdGl0bGUnKTtcclxuICAgICAgY29tbWVudENvdW50LmlubmVySFRNTCA9IGAoJHt0ZXN0Q291bnRlcn0pYDtcclxuICAgICAgY29uc3QgY29tbWVudExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudHMtaG9sZGVyJyk7XHJcbiAgICAgIGNvbW1lbnRMaXN0LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICBjb21tZW50cy5mb3JFYWNoKChjb21tZW50KSA9PiB7XHJcbiAgICAgICAgY29tbWVudExpc3QuaW5uZXJIVE1MICs9IGA8bGk+JHtjb21tZW50LmNyZWF0aW9uX2RhdGV9OiAke2NvbW1lbnQudXNlcm5hbWV9OiAke2NvbW1lbnQuY29tbWVudH08L2xpPmA7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBhcGlDb21tZW50VVJMID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLzZSc2M1ZFdzVWt4Rk9paFN0WDdtL2NvbW1lbnRzJztcclxuXHJcbiAgICBjb25zdCBmZXRjaENvbW1lbnRzID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdChgJHthcGlDb21tZW50VVJMfT9pdGVtX2lkPSR7aWR9YCk7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVxdWVzdCk7XHJcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGNvbW1lbnRzIGFkZGVkIGZvciB0aGlzIG1vdmllJyk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZ2V0Q29tbWVudCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgY3JlYXRlQ29tbWVudChnZXRDb21tZW50KTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG4gICAgY29uc3QgZGlzcGxheUNvbW1lbnQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGNvbnN0IG1vdmllSUQgPSBlLnRhcmdldDtcclxuXHJcbiAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlci1uYW1lJykudmFsdWUudHJpbSgpO1xyXG4gICAgICBjb25zdCBhZGRDb21tZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1jb21tZW50JykudmFsdWUudHJpbSgpO1xyXG4gICAgICBjb25zdCBjb21tZW50Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50LWZvcm0nKTtcclxuXHJcbiAgICAgIGlmIChuYW1lICYmIGFkZENvbW1lbnQpIHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaChhcGlDb21tZW50VVJMLCB7XHJcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIGl0ZW1faWQ6IGAke21vdmllSUQuaWR9YCxcclxuICAgICAgICAgICAgdXNlcm5hbWU6IGAke25hbWV9YCxcclxuICAgICAgICAgICAgY29tbWVudDogYCR7YWRkQ29tbWVudH1gLFxyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29tbWVudEZvcm0ucmVzZXQoKTtcclxuICAgICAgICBhd2FpdCByZXN1bHQudGV4dCgpO1xyXG4gICAgICAgIGZldGNoQ29tbWVudHMobW92aWVJRC5pZCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBmZXRjaENvbW1lbnRzKGlkKTtcclxuICAgIGNvbnN0IHN1Ym1pdENvbW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudC1ib3gnKTtcclxuICAgIHN1Ym1pdENvbW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5Q29tbWVudCk7XHJcbiAgfTtcclxuICAvLyBDb21tZW50IGV2ZW50bGlzdGVyc1xyXG4gIGNvbnN0IGNvbW1lbnRCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbW1lbnRzJyk7XHJcbiAgY29tbWVudEJ0bnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBnZXRQb3B1cChlLnRhcmdldC5wYXJlbnROb2RlLmlkKTtcclxuICAgICAgZGlzcGxheVNlcmllcy5zdHlsZS5maWx0ZXIgPSAnYmx1cigxMnB4KSc7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgLy8gUG9zdGluZyBjb21tZW50c1xyXG59O1xyXG5leHBvcnQgeyBzaG93U2VyaWVzTGlzdCwgY291bnRJdGVtcyB9O1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cclxuIiwiLy8gRmV0Y2hpbmcgdGhlIGJhc2UgQVBJXG5jb25zdCBhcGlCYXNlVXJsID0gJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2hvd3MnO1xuY29uc3QgZmV0Y2hMaXN0ID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaUJhc2VVcmwpO1xuICBjb25zdCBzZXJpZXNMaXN0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gc2VyaWVzTGlzdDtcbn07XG5cbmNvbnN0IGFwaUludm9sdmVtZW50VXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL0lnS0RkOEV3UWk5WGYzZmdlUWxGL2xpa2VzJztcbmNvbnN0IHBvc3RMaWtlcyA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaUludm9sdmVtZW50VXJsLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgaXRlbV9pZDogYCR7aWR9YCB9KSxcbiAgfSk7XG4gIGNvbnN0IHBvc3RlZExpa2VzID0gYXdhaXQgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShyZXNwb25zZSkpO1xuXG4gIHJldHVybiBwb3N0ZWRMaWtlcztcbn07XG5leHBvcnQgeyBmZXRjaExpc3QsIHBvc3RMaWtlcyB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9