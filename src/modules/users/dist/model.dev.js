"use strict";

var _require = require("../../lib/postgres"),
    fetch = _require.fetch,
    fetchALL = _require.fetchALL;

var CHECK_USER = "\n   SELECT\n      *\n   FROM\n      users\n   WHERE\n      user_email = $1;\n";
var USER_REGISTER = "\n   INSERT INTO\n      users(\n         user_email,\n         user_password,\n         user_company\n      )\n      VALUES (\n         $1,\n         $2,\n         $3\n      ) RETURNING *;\n";
var FOUND_USER = "\n   SELECT\n      *\n   FROM\n      users\n   WHERE\n      user_email = $1;\n";
var FOUND_USER_BY_ID = "\n   SELECT\n      *\n   FROM\n      users\n   WHERE\n      user_id = $1;\n";
var DELETE_USER = "\n   DELETE FROM\n      users\n   WHERE\n      user_id = $1\n   RETURNING *;\n";
var EDIT_USER_EMAIL = "\n   UPDATE\n      users\n   SET\n      user_email = $2,\n      user_password = $3\n   WHERE\n      user_id = $1\n   RETURNING *;\n";
var EDIT_USER_NAME = "\n   UPDATE\n      users\n   SET\n      user_gender = $2,\n      user_first_name = $3,\n      user_last_name = $4\n   WHERE\n      user_id = $1\n   RETURNING *;\n";
var EDIT_USER_ADDRESS = "\n   UPDATE\n      users\n   SET\n      user_address_street = $2,\n      user_address_nr = $3,\n      user_address_zip = $4,\n      user_address_country = $5,\n      user_address_city = $6\n   WHERE\n      user_id = $1\n   RETURNING *;\n";
var EDIT_USER_PHONE = "\n   UPDATE\n      users\n   SET\n      user_country_code = $2,\n      user_number_prefix = $3,\n      user_phone_number = $4\n   WHERE\n      user_id = $1\n   RETURNING *;\n";
var EDIT_PHOTO = "\n   UPDATE\n      users\n   SET\n      user_image_url = $2,\n      user_image_name = $3\n   WHERE\n      user_id = $1\n   RETURNING *;\n";
var EDIT_BALANCE = "\n   UPDATE\n      users\n   SET\n      user_balance = user_balance + $2,\n   WHERE\n      user_id = $1\n   RETURNING *;\n";

var checkUser = function checkUser(user_email) {
  return fetch(CHECK_USER, user_email);
};

var registerUser = function registerUser(user_email, pass_hash, user_company) {
  return fetch(USER_REGISTER, user_email, pass_hash, user_company);
};

var foundUser = function foundUser(user_email) {
  return fetch(FOUND_USER, user_email);
};

var foundUserById = function foundUserById(user_id) {
  return fetch(FOUND_USER_BY_ID, user_id);
};

var deleteUser = function deleteUser(user_id) {
  return fetch(DELETE_USER, user_id);
};

var updateUserEmail = function updateUserEmail(user_id, user_email, pass_hash) {
  return fetch(EDIT_USER_EMAIL, user_id, user_email, pass_hash);
};

var editUserName = function editUserName(user_id, gender, first_name, last_name) {
  return fetch(EDIT_USER_NAME, user_id, gender, first_name, last_name);
};

var editUserAddress = function editUserAddress(user_id, street, near, zip, country, city) {
  return fetch(EDIT_USER_ADDRESS, user_id, street, near, zip, country, city);
};

var editUserPhone = function editUserPhone(user_id, country_code, prefix, phone_number) {
  return fetch(EDIT_USER_PHONE, user_id, country_code, prefix, phone_number);
};

var editBalance = function editBalance(id, balance) {
  return fetch(EDIT_BALANCE, id, balance);
};

var usersList = function usersList(limit, offset) {
  var USER_LIST = "\n      SELECT\n         *\n      FROM\n         users\n      ORDER BY\n         user_id\n      LIMIT ".concat(limit, "\n      OFFSET ").concat(offset, ";\n   ");
  return fetchALL(USER_LIST);
};

var editPhoto = function editPhoto(id, user_img_url, user_img_name) {
  return fetch(EDIT_PHOTO, id, user_img_url, user_img_name);
};

module.exports = {
  checkUser: checkUser,
  registerUser: registerUser,
  foundUser: foundUser,
  foundUserById: foundUserById,
  deleteUser: deleteUser,
  updateUserEmail: updateUserEmail,
  editUserName: editUserName,
  editUserAddress: editUserAddress,
  editUserPhone: editUserPhone,
  editBalance: editBalance,
  usersList: usersList,
  editPhoto: editPhoto
};