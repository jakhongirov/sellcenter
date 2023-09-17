const model = require('./model')

module.exports = {
   GET_ADMIN: async (req, res) => {
      try {
         const { limit, offset } = req.query

         if (limit && offset) {
            const companiesListAdmin = await model.companiesListAdmin(limit, offset)

            if (companiesListAdmin) {
               return res.json({
                  status: 200,
                  message: "Success",
                  data: companiesListAdmin
               })
            } else {
               return res.json({
                  status: 404,
                  message: "Not found"
               })
            }

         } else {
            return res.json({
               status: 400,
               message: "Bad request"
            })
         }

      } catch (error) {
         console.log(error)
         res.json({
            status: 500,
            message: "Internal Server Error",
         })
      }
   },

   GET_USER_COMPANY: async (req, res) => {
      try {
         const { id } = req.params

         if (id) {
            const userCompany = await model.userCompany(id)

            if (userCompany) {
               return res.json({
                  status: 200,
                  message: "Success",
                  data: userCompany
               })
            } else {
               return res.json({
                  status: 404,
                  message: "Not found"
               })
            }

         } else {
            return res.json({
               status: 400,
               message: "Bad request"
            })
         }

      } catch (error) {
         console.log(error)
         res.json({
            status: 500,
            message: "Internal Server Error",
         })
      }
   },

   POST_COMPANY: async (req, res) => {
      try {
         const {
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
         } = req.body

         const foundUser = await model.foundUser(user_id)

         if (foundUser?.user_company == true) {
            const addCompany = await model.addCompany(
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

            if (addCompany) {
               return res.json({
                  status: 200,
                  message: "Success",
                  data: addCompany
               })
            } else {
               return res.json({
                  status: 400,
                  message: "Bad request"
               })
            }
         } else {
            return res.json({
               status: 400,
               message: "That user has not company"
            })
         }

      } catch (error) {
         console.log(error)
         res.json({
            status: 500,
            message: "Internal Server Error",
         })
      }
   },

   PUT_COMPANY: async (req, res) => {
      try {
         const {
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
         } = req.body
         const foundCompany = await model.foundCompany(company_id)

         if (foundCompany) {
            const editCompany = await model.editCompany(
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

            if (editCompany) {
               return res.json({
                  status: 200,
                  message: "Success",
                  data: editCompany
               })
            } else {
               return res.json({
                  status: 400,
                  message: "Bad request"
               })
            }
         } else {
            return res.json({
               status: 404,
               message: "Not found"
            })
         }

      } catch (error) {
         console.log(error)
         res.json({
            status: 500,
            message: "Internal Server Error",
         })
      }
   },

   DELETE_COMPANY: async (req, res) => {
      try {
         const { id } = req.params
         const foundCompany = await model.foundCompany(id)

         console.log(id);

         if (foundCompany) {
            const deleteCompany = await model.deleteCompany(id)

            if (deleteCompany) {
               return res.json({
                  status: 200,
                  message: "Success",
                  data: deleteCompany
               })
            } else {
               return res.json({
                  status: 400,
                  message: "Bad request"
               })
            }

         } else {
            return res.json({
               status: 404,
               message: "Not found"
            })
         }

      } catch (error) {
         console.log(error)
         res.json({
            status: 500,
            message: "Internal Server Error",
         })
      }
   }
}