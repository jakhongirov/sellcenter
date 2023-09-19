"use strict";

var _require = require("../../lib/postgres"),
    fetch = _require.fetch,
    fetchALL = _require.fetchALL;

var FOUND_NEWS = "\n   SELECT\n      *\n   FROM\n      news\n   WHERE\n      news_id = $1;\n";
var UPDATE_NEWS = "\n   UPDATE\n      news\n   SET\n      news_title = $2,\n      news_lang = $3,\n      news_desc = $4,\n      news_image_url = $5,\n      news_image_name = $6\n   WHERE\n      news_id = $1\n   RETURNING *;\n";
var DELETE_NEWS = "\n   DELETE FROM\n      news\n   WHERE\n      news_id = $1\n   RETURNING *;\n";
var UPDATE_STATUS = "\n   UPDATE\n      news\n   SET\n      news_active = $2\n   WHERE\n      news_id = $1\n   RETURNING *;\n";
var ADD_NEWS = "\n   INSERT INTO\n      news (\n         news_title,\n         news_lang,\n         news_desc,\n         news_image_url,\n         news_image_name\n      ) VALUES (\n         $1,\n         $2,\n         $3,\n         $4,\n         $5\n      ) RETURNING *;\n";

var newsAdminList = function newsAdminList(limit, offset) {
  var list = "\n      SELECT\n         *\n      FROM\n         news\n      ORDER BY\n         news_id\n      LIMIT ".concat(limit, "\n      OFFSET ").concat(offset, "\n   ");
  return fetchALL(list);
};

var newsList = function newsList(limit, offset) {
  var list = "\n      SELECT\n         *\n      FROM\n         news\n      WHERE\n         news_active = true\n      ORDER BY\n         news_id\n      LIMIT ".concat(limit, "\n      OFFSET ").concat(offset, "\n   ");
  return fetchALL(list);
};

var newsById = function newsById(id) {
  return fetch(FOUND_NEWS, id);
};

var addNews = function addNews(title, news_lang, news_desc, news_img_url, news_img_name) {
  return fetch(ADD_NEWS, title, news_lang, news_desc, news_img_url, news_img_name);
};

var updateNews = function updateNews(id, title, news_lang, news_desc, news_img_url, news_img_name) {
  return fetch(UPDATE_NEWS, id, title, news_lang, news_desc, news_img_url, news_img_name);
};

var updateStatus = function updateStatus(id, status) {
  return fetch(UPDATE_STATUS, id, status);
};

var deleteNews = function deleteNews(id) {
  return fetch(DELETE_NEWS, id);
};

module.exports = {
  newsAdminList: newsAdminList,
  newsList: newsList,
  newsById: newsById,
  addNews: addNews,
  updateNews: updateNews,
  updateStatus: updateStatus,
  deleteNews: deleteNews
};