const { fetch, fetchALL } = require("../../lib/postgres");

const FOUND_USER_COMPANY = `
   SELECT
      *
   FROM
      user_companies
   WHERE
      user_id = $1;
`;

const FOUND_USER = `
   SELECT
      *
   FROM
      users
   WHERE
      user_id = $1;
`;

const FOUND_COMPANY = `
   SELECT
      *
   FROM
      user_companies
   WHERE
      company_id = $1;
`;

const UPDATE_COMPANY = `
   UPDATE
      user_companies
   SET
      company_name = $2,
      company_mail = $3,
      company_address_street = $4,
      company_address_nr = $5,
      company_address_zip = $6,
      company_address_city = $7,
      company_address_country = $8,
      company_address_radius = $9,
      company_country_code = $10,
      company_number_prefix = $11,
      company_phone_number = $12,
      user_id = $13
   WHERE
      company_id = $1
   RETURNING *;
`;

const DELETE_COMPANY = `
   DELETE FROM
      user_companies
   WHERE
      company_id = $1
   RETURNING *; 
`;

const ADD_COMPANY = `
   INSERT INTO
      user_companies (
         company_name,
         company_mail,
         company_address_street,
         company_address_nr,
         company_address_zip,
         company_address_city,
         company_address_country,
         company_address_radius,
         company_country_code,
         company_number_prefix,
         company_phone_number,
         user_id
      ) VALUES (
         $1,
         $2,
         $3,
         $4,
         $5,
         $6,
         $7,
         $8,
         $9,
         $10,
         $11,
         $12
      )
   RETURNING *;
`;

const companiesListAdmin = (limit, offset) => {
   const LIST = `
      SELECT
         *
      FROM
         user_companies
      ORDER BY
         company_id DESC
      LIMIT ${limit}
      OFFSET ${offset};
   `;

   return fetchALL(LIST)
}
const userCompany = (id) => fetch(FOUND_USER_COMPANY, id)
const foundUser = (user_id) => fetch(FOUND_USER, user_id)
const foundCompany = (company_id) => fetch(FOUND_COMPANY, company_id)
const addCompany = (
   company_name,
   company_mail,
   company_address_street,
   company_address_nr,
   company_address_zip,
   company_address_city,
   company_address_country,
   company_address_radius,
   company_country_code,
   company_number_prefix,
   company_phone_number,
   user_id
) => fetch(
   ADD_COMPANY,
   company_name,
   company_mail,
   company_address_street,
   company_address_nr,
   company_address_zip,
   company_address_city,
   company_address_country,
   company_address_radius,
   company_country_code,
   company_number_prefix,
   company_phone_number,
   user_id
)
const editCompany = (
   company_id,
   company_name,
   company_mail,
   company_address_street,
   company_address_nr,
   company_address_zip,
   company_address_city,
   company_address_country,
   company_address_radius,
   company_country_code,
   company_number_prefix,
   company_phone_number,
   user_id
) => fetch(
   UPDATE_COMPANY,
   company_id,
   company_name,
   company_mail,
   company_address_street,
   company_address_nr,
   company_address_zip,
   company_address_city,
   company_address_country,
   company_address_radius,
   company_country_code,
   company_number_prefix,
   company_phone_number,
   user_id
)
const deleteCompany = (company_id) => fetch(DELETE_COMPANY, company_id)

module.exports = {
   companiesListAdmin,
   userCompany,
   addCompany,
   editCompany,
   foundUser,
   foundCompany,
   deleteCompany
}