"use strict";

var _require = require("../../lib/postgres"),
    fetch = _require.fetch,
    fetchALL = _require.fetchALL;

var FOUND_SLIDER = "\n   SELECT\n      *\n   FROM\n      sliders\n   WHERE\n      slider_id = $1;\n";
var UPDATE_SLIDER = "\n   UPDATE\n      sliders\n   SET\n      slider_title = $2,\n      slider_link = $3,\n      slider_image_url = $4,\n      slider_image_name = $5\n   WHERE\n      slider_id = $1\n   RETURNING *;\n";
var UPDATE_STATUS = "\n   UPDATE\n      sliders\n   SET\n      slider_active = $2\n   WHERE\n      slider_id = $1\n   RETURNING *;\n";
var DELETE_SLIDER = "\n   DELETE FROM\n      sliders\n   WHERE\n      slider_id = $1\n   RETURNING *;\n";
var ADD_SLIDER = "\n   INSERT INTO\n      sliders (\n         slider_title,\n         slider_link,\n         slider_image_url,\n         slider_image_name\n      ) VALUES (\n         $1,\n         $2,\n         $3,\n         $4\n      )\n   RETURNING *;\n";

var sliderListAdmin = function sliderListAdmin(limit, offset) {
  var LIST = "\n      SELECT\n         *\n      FROM\n         sliders\n      LIMIT ".concat(limit, "\n      OFFSET ").concat(offset, ";\n   ");
  return fetchALL(LIST);
};

var sliderList = function sliderList(limit, offset) {
  var LIST = "\n      SELECT\n         *\n      FROM\n         sliders\n      WHERE\n         slider_active = true\n      LIMIT ".concat(limit, "\n      OFFSET ").concat(offset, ";\n   ");
  return fetchALL(LIST);
};

var addSlider = function addSlider(slider_title, slider_link, slider_img_url, slider_img_name) {
  return fetch(ADD_SLIDER, slider_title, slider_link, slider_img_url, slider_img_name);
};

var updateSlider = function updateSlider(id, slider_title, slider_link, slider_img_url, slider_img_name) {
  return fetch(UPDATE_SLIDER, id, slider_title, slider_link, slider_img_url, slider_img_name);
};

var updateStatus = function updateStatus(id, status) {
  return fetch(UPDATE_STATUS, id, status);
};

var deleteSlider = function deleteSlider(id) {
  return fetch(DELETE_SLIDER, id);
};

var sliderById = function sliderById(id) {
  return fetch(FOUND_SLIDER, id);
};

module.exports = {
  sliderListAdmin: sliderListAdmin,
  sliderList: sliderList,
  addSlider: addSlider,
  updateSlider: updateSlider,
  updateStatus: updateStatus,
  deleteSlider: deleteSlider,
  sliderById: sliderById
};