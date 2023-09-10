"use strict";

var _require = require("../../lib/postgres"),
    fetch = _require.fetch,
    fetchALL = _require.fetchALL;

var MARK_LIST = "\n   SELECT\n      *\n   FROM\n      car_makes\n   ORDER BY\n      car_make_name;\n";
var MODEL_LIST = "\n   SELECT\n     *\n   FROM\n      car_models a\n   INNER JOIN\n      car_makes b\n   ON\n      a.car_make_id = b.car_make_id\n   WHERE\n      car_make_name = $1\n   ORDER BY\n      car_model_name;\n";
var ADD_MARK = "\n   INSERT INTO\n      car_makes (\n         car_make_name\n      ) VALUES (\n         $1\n      )\n   RETURNING *;\n";
var ADD_MODEL = "\n   INSERT INTO\n      car_models (\n         car_make_id,\n         car_model_name\n      ) VALUES (\n         $1,\n         $2\n      )\n   RETURNING *;\n";
var FOUND_MARK = "\n   SELECT\n      *\n   FROM\n      car_makes\n   WHERE\n      car_make_id = $1;\n";
var UPDATE_MARK = "\n   UPDATE\n      car_makes\n   SET\n      car_make_name = $2\n   WHERE\n      car_make_id = $1\n   RETURNING *;\n";
var FOUND_MODEL = "\n   SELECT\n      *\n   FROM\n      car_models\n   WHERE\n      car_model_id = $1;\n";
var UPDATE_MODEL = "\n   UPDATE\n      car_models\n   SET\n      car_make_id = $2,\n      car_model_name = $3\n   WHERE\n      car_model_id = $1\n   RETURNING *;\n";
var DELETE_MARK = "\n   DELETE FROM\n      car_makes\n   WHERE\n      car_make_id = $1\n   RETURNING *;\n";
var DELETE_MODEL = "\n   DELETE FROM\n      car_models\n   WHERE\n      car_model_id = $1\n   RETURNING *;\n";

var marksList = function marksList() {
  return fetchALL(MARK_LIST);
};

var modelList = function modelList(mark_id) {
  return fetchALL(MODEL_LIST, mark_id);
};

var addMark = function addMark(mark_name) {
  return fetch(ADD_MARK, mark_name);
};

var foundMark = function foundMark(mark_id) {
  return fetch(FOUND_MARK, mark_id);
};

var addModel = function addModel(mark_id, model_name) {
  return fetch(ADD_MODEL, mark_id, model_name);
};

var updateMark = function updateMark(mark_id, mark_name) {
  return fetch(UPDATE_MARK, mark_id, mark_name);
};

var foundModel = function foundModel(model_id) {
  return fetch(FOUND_MODEL, model_id);
};

var updateModel = function updateModel(model_id, mark_id, model_name) {
  return fetch(UPDATE_MODEL, model_id, mark_id, model_name);
};

var deleteMark = function deleteMark(mark_id) {
  return fetch(DELETE_MARK, mark_id);
};

var deleteModel = function deleteModel(model_id) {
  return fetch(DELETE_MODEL, model_id);
};

module.exports = {
  marksList: marksList,
  modelList: modelList,
  addMark: addMark,
  addModel: addModel,
  foundMark: foundMark,
  updateMark: updateMark,
  foundModel: foundModel,
  updateModel: updateModel,
  deleteMark: deleteMark,
  deleteModel: deleteModel
};