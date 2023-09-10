const model = require('./model')

module.exports = {
  GET: async (_, res) => {
    try {
      const list = await model.extrasList()

      if (list) {
        return res.json({
          status: 200,
          message: "Success",
          data: list
        })
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

  POST: async (req, res) => {
    try {
      const { title_en, title_fr, title_gr, title_sw, title_sp, title_ru, title_pl } = req.body
      const addOther = await model.addExtra(title_en, title_fr, title_gr, title_sw, title_sp, title_ru, title_pl)

      if (addOther) {
        return res.json({
          status: 200,
          message: "Success"
        })
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

  PUT: async (req, res) => {
    try {
      const { id, title_en, title_fr, title_gr, title_sw, title_sp, title_ru, title_pl } = req.body
      const editOther = await model.editExtra(id, title_en, title_fr, title_gr, title_sw, title_sp, title_ru, title_pl)

      if (editOther) {
        return res.json({
          status: 200,
          message: "Success"
        })
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

  DELETE: async (req, res) => {
    try {
      const { id } = req.body
      const deleteOther = await model.deleteExtra(id)

      if (deleteOther) {
        return res.json({
          status: 200,
          message: "Success"
        })
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