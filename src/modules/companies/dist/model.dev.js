"use strict";

var _require = require("../../lib/postgres"),
    fetch = _require.fetch,
    fetchALL = _require.fetchALL;

var FOUND_USER_COMPANY = "\n   SELECT\n      *\n   FROM\n      user_companies\n   WHERE\n      user_id = $1;\n";
var FOUND_USER = "\n   SELECT\n      *\n   FROM\n      users\n   WHERE\n      user_id = $1;\n";
var FOUND_COMPANY = "\n   SELECT\n      *\n   FROM\n      user_companies\n   WHERE\n      company_id = $1;\n";
var UPDATE_COMPANY = "\n   UPDATE\n      user_companies\n   SET\n      company_name = $2,\n      company_mail = $3,\n      company_address_street = $4,\n      company_address_nr = $5,\n      company_address_zip = $6,\n      company_address_city = $7,\n      company_address_country = $8,\n      company_address_radius = $9,\n      company_country_code = $10,\n      company_number_prefix = $11,\n      company_phone_number = $12,\n      user_id = $13\n   WHERE\n      company_id = $1\n   RETURNING *;\n";
var DELETE_COMPANY = "\n   DELETE FROM\n      user_companies\n   WHERE\n      company_id = $1\n   RETURNING *; \n";
var ADD_COMPANY = "\n   INSERT INTO\n      user_companies (\n         company_name,\n         company_mail,\n         company_address_street,\n         company_address_nr,\n         company_address_zip,\n         company_address_city,\n         company_address_country,\n         company_address_radius,\n         company_country_code,\n         company_number_prefix,\n         company_phone_number,\n         user_id\n      ) VALUES (\n         $1,\n         $2,\n         $3,\n         $4,\n         $5,\n         $6,\n         $7,\n         $8,\n         $9,\n         $10,\n         $11,\n         $12\n      )\n   RETURNING *;\n";

var companiesListAdmin = function companiesListAdmin(limit, offset) {
  var LIST = "\n      SELECT\n         *\n      FROM\n         user_companies\n      ORDER BY\n         company_id DESC\n      LIMIT ".concat(limit, "\n      OFFSET ").concat(offset, ";\n   ");
  return fetchALL(LIST);
};

var userCompany = function userCompany(id) {
  return fetch(FOUND_USER_COMPANY, id);
};

var foundUser = function foundUser(user_id) {
  return fetch(FOUND_USER, user_id);
};

var foundCompany = function foundCompany(company_id) {
  return fetch(FOUND_COMPANY, company_id);
};

var addCompany = function addCompany(company_name, company_mail, company_address_street, company_address_nr, company_address_zip, company_address_city, company_address_country, company_address_radius, company_country_code, company_number_prefix, company_phone_number, user_id) {
  return fetch(ADD_COMPANY, company_name, company_mail, company_address_street, company_address_nr, company_address_zip, company_address_city, company_address_country, company_address_radius, company_country_code, company_number_prefix, company_phone_number, user_id);
};

var editCompany = function editCompany(company_id, company_name, company_mail, company_address_street, company_address_nr, company_address_zip, company_address_city, company_address_country, company_address_radius, company_country_code, company_number_prefix, company_phone_number, user_id) {
  return fetch(UPDATE_COMPANY, company_id, company_name, company_mail, company_address_street, company_address_nr, company_address_zip, company_address_city, company_address_country, company_address_radius, company_country_code, company_number_prefix, company_phone_number, user_id);
};

var deleteCompany = function deleteCompany(company_id) {
  return fetch(DELETE_COMPANY, company_id);
};

module.exports = {
  companiesListAdmin: companiesListAdmin,
  userCompany: userCompany,
  addCompany: addCompany,
  editCompany: editCompany,
  foundUser: foundUser,
  foundCompany: foundCompany,
  deleteCompany: deleteCompany
};