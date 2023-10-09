require('dotenv').config();
const model = require('./model')
const stripe = require("stripe")(process.env.STRIPE_SECRET);

module.exports = {
   GET_ADMIN: async (req, res) => {
      try {
         const { limit, offset } = req.query

         if (limit && offset) {
            const priceListAdmin = await model.priceListAdmin(limit, offset)

            if (priceListAdmin) {
               return res.json({
                  status: 200,
                  message: "Success",
                  data: priceListAdmin
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

   GET: async (req, res) => {
      try {
         const { limit, offset, lang } = req.query

         if (limit && offset && lang) {
            const priceList = await model.priceList(limit, offset, lang)

            if (priceList) {
               return res.json({
                  status: 200,
                  message: "Success",
                  data: priceList
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

   PAYMENT: async (req, res) => {
      try {
         const { items } = req.body

         const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            line_items: items.map(item => {
               return {
                  price_data: {
                     currency: "usd",
                     product_data: {
                        name: item.price_item_title,
                     },
                     unit_amount: item.price_item_price,
                  },
               }
            }),
            automatic_payment_methods: {
               enabled: true,
            },
            success_url: `https://sell-center-dery.netlify.app/`,
            cancel_url: `https://sell-center-dery.netlify.app/about`,
         })

         res.json({ url: session.url })
      } catch (error) {
         console.log(error)
         res.json({
            status: 500,
            message: "Internal Server Error",
         })
      }
   },

   ADD_PRICE: async (req, res) => {
      try {
         const { title, desc, price, lang } = req.body

         if (title && desc && price && lang) {
            const addPriceItem = await model.addPriceItem(title, desc, price, lang)

            if (addPriceItem) {
               return res.json({
                  status: 200,
                  message: "Success",
                  data: addPriceItem
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

   UPDATE_PRICE: async (req, res) => {
      try {
         const { id, title, desc, price, lang } = req.body

         if (id && title && desc && price && lang) {
            const updatePriceItem = await model.updatePriceItem(id, title, desc, price, lang)

            if (updatePriceItem) {
               return res.json({
                  status: 200,
                  message: "Success",
                  data: updatePriceItem
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

   UPDATE_PRICE_STATUS: async (req, res) => {
      try {
         const { id, status } = req.body

         if (id) {
            const updateStatus = await model.updateStatus(id, status)

            if (updateStatus) {
               return res.json({
                  status: 200,
                  message: "Success",
                  data: updateStatus
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

   DELETE_PRICE: async (req, res) => {
      try {
         const { id } = req.body

         if (id) {
            const deletePrice = await model.deletePrice(id)

            if (deletePrice) {
               return res.json({
                  status: 200,
                  message: "Success",
                  data: deletePrice
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
   }

}