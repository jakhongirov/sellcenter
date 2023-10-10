"use strict";

require('dotenv').config();

var model = require('./model');

var stripe = require("stripe")(process.env.STRIPE_SECRET);

module.exports = {
  GET_ADMIN: function GET_ADMIN(req, res) {
    var _req$query, limit, offset, priceListAdmin;

    return regeneratorRuntime.async(function GET_ADMIN$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$query = req.query, limit = _req$query.limit, offset = _req$query.offset;

            if (!(limit && offset)) {
              _context.next = 13;
              break;
            }

            _context.next = 5;
            return regeneratorRuntime.awrap(model.priceListAdmin(limit, offset));

          case 5:
            priceListAdmin = _context.sent;

            if (!priceListAdmin) {
              _context.next = 10;
              break;
            }

            return _context.abrupt("return", res.json({
              status: 200,
              message: "Success",
              data: priceListAdmin
            }));

          case 10:
            return _context.abrupt("return", res.json({
              status: 404,
              message: "Not found"
            }));

          case 11:
            _context.next = 14;
            break;

          case 13:
            return _context.abrupt("return", res.json({
              status: 400,
              message: "Bad request"
            }));

          case 14:
            _context.next = 20;
            break;

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.json({
              status: 500,
              message: "Internal Server Error"
            });

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 16]]);
  },
  GET: function GET(req, res) {
    var _req$query2, limit, offset, lang, priceList;

    return regeneratorRuntime.async(function GET$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _req$query2 = req.query, limit = _req$query2.limit, offset = _req$query2.offset, lang = _req$query2.lang;

            if (!(limit && offset && lang)) {
              _context2.next = 13;
              break;
            }

            _context2.next = 5;
            return regeneratorRuntime.awrap(model.priceList(limit, offset, lang));

          case 5:
            priceList = _context2.sent;

            if (!priceList) {
              _context2.next = 10;
              break;
            }

            return _context2.abrupt("return", res.json({
              status: 200,
              message: "Success",
              data: priceList
            }));

          case 10:
            return _context2.abrupt("return", res.json({
              status: 404,
              message: "Not found"
            }));

          case 11:
            _context2.next = 14;
            break;

          case 13:
            return _context2.abrupt("return", res.json({
              status: 400,
              message: "Bad request"
            }));

          case 14:
            _context2.next = 20;
            break;

          case 16:
            _context2.prev = 16;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.json({
              status: 500,
              message: "Internal Server Error"
            });

          case 20:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 16]]);
  },
  PAYMENT: function PAYMENT(req, res) {
    var items, session;
    return regeneratorRuntime.async(function PAYMENT$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            items = req.body.items;
            _context3.next = 4;
            return regeneratorRuntime.awrap(stripe.checkout.sessions.create({
              payment_method_types: ["card"],
              mode: "payment",
              line_items: items.map(function (item) {
                return {
                  price_data: {
                    currency: "usd",
                    product_data: {
                      name: item.price_item_title
                    },
                    unit_amount: item.price_item_price
                  },
                  quantity: 1
                };
              }),
              success_url: "https://sell-center-dery.netlify.app/",
              cancel_url: "https://sell-center-dery.netlify.app/about"
            }));

          case 4:
            session = _context3.sent;
            res.json({
              url: session.url
            });
            _context3.next = 12;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            res.json({
              status: 500,
              message: "Internal Server Error"
            });

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 8]]);
  },
  ADD_PRICE: function ADD_PRICE(req, res) {
    var _req$body, title, desc, price, lang, addPriceItem;

    return regeneratorRuntime.async(function ADD_PRICE$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _req$body = req.body, title = _req$body.title, desc = _req$body.desc, price = _req$body.price, lang = _req$body.lang;
            _context4.next = 4;
            return regeneratorRuntime.awrap(model.addPriceItem(title, desc, price, lang));

          case 4:
            addPriceItem = _context4.sent;

            if (!addPriceItem) {
              _context4.next = 9;
              break;
            }

            return _context4.abrupt("return", res.json({
              status: 200,
              message: "Success",
              data: addPriceItem
            }));

          case 9:
            return _context4.abrupt("return", res.json({
              status: 400,
              message: "Bad request"
            }));

          case 10:
            _context4.next = 16;
            break;

          case 12:
            _context4.prev = 12;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);
            res.json({
              status: 500,
              message: "Internal Server Error"
            });

          case 16:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[0, 12]]);
  },
  UPDATE_PRICE: function UPDATE_PRICE(req, res) {
    var _req$body2, id, title, desc, price, lang, updatePriceItem;

    return regeneratorRuntime.async(function UPDATE_PRICE$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _req$body2 = req.body, id = _req$body2.id, title = _req$body2.title, desc = _req$body2.desc, price = _req$body2.price, lang = _req$body2.lang;
            _context5.next = 4;
            return regeneratorRuntime.awrap(model.updatePriceItem(id, title, desc, price, lang));

          case 4:
            updatePriceItem = _context5.sent;

            if (!updatePriceItem) {
              _context5.next = 9;
              break;
            }

            return _context5.abrupt("return", res.json({
              status: 200,
              message: "Success",
              data: updatePriceItem
            }));

          case 9:
            return _context5.abrupt("return", res.json({
              status: 400,
              message: "Bad request"
            }));

          case 10:
            _context5.next = 16;
            break;

          case 12:
            _context5.prev = 12;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);
            res.json({
              status: 500,
              message: "Internal Server Error"
            });

          case 16:
          case "end":
            return _context5.stop();
        }
      }
    }, null, null, [[0, 12]]);
  },
  UPDATE_PRICE_STATUS: function UPDATE_PRICE_STATUS(req, res) {
    var _req$body3, id, status, updateStatus;

    return regeneratorRuntime.async(function UPDATE_PRICE_STATUS$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _req$body3 = req.body, id = _req$body3.id, status = _req$body3.status;

            if (!id) {
              _context6.next = 13;
              break;
            }

            _context6.next = 5;
            return regeneratorRuntime.awrap(model.updateStatus(id, status));

          case 5:
            updateStatus = _context6.sent;

            if (!updateStatus) {
              _context6.next = 10;
              break;
            }

            return _context6.abrupt("return", res.json({
              status: 200,
              message: "Success",
              data: updateStatus
            }));

          case 10:
            return _context6.abrupt("return", res.json({
              status: 400,
              message: "Bad request"
            }));

          case 11:
            _context6.next = 14;
            break;

          case 13:
            return _context6.abrupt("return", res.json({
              status: 400,
              message: "Bad request"
            }));

          case 14:
            _context6.next = 20;
            break;

          case 16:
            _context6.prev = 16;
            _context6.t0 = _context6["catch"](0);
            console.log(_context6.t0);
            res.json({
              status: 500,
              message: "Internal Server Error"
            });

          case 20:
          case "end":
            return _context6.stop();
        }
      }
    }, null, null, [[0, 16]]);
  },
  DELETE_PRICE: function DELETE_PRICE(req, res) {
    var id, deletePrice;
    return regeneratorRuntime.async(function DELETE_PRICE$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            id = req.body.id;

            if (!id) {
              _context7.next = 13;
              break;
            }

            _context7.next = 5;
            return regeneratorRuntime.awrap(model.deletePrice(id));

          case 5:
            deletePrice = _context7.sent;

            if (!deletePrice) {
              _context7.next = 10;
              break;
            }

            return _context7.abrupt("return", res.json({
              status: 200,
              message: "Success",
              data: deletePrice
            }));

          case 10:
            return _context7.abrupt("return", res.json({
              status: 400,
              message: "Bad request"
            }));

          case 11:
            _context7.next = 14;
            break;

          case 13:
            return _context7.abrupt("return", res.json({
              status: 400,
              message: "Bad request"
            }));

          case 14:
            _context7.next = 20;
            break;

          case 16:
            _context7.prev = 16;
            _context7.t0 = _context7["catch"](0);
            console.log(_context7.t0);
            res.json({
              status: 500,
              message: "Internal Server Error"
            });

          case 20:
          case "end":
            return _context7.stop();
        }
      }
    }, null, null, [[0, 16]]);
  }
};