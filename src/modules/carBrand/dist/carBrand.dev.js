"use strict";

var model = require('./model');

module.exports = {
  GET_MARKS: function GET_MARKS(_, res) {
    var marksList;
    return regeneratorRuntime.async(function GET_MARKS$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap(model.marksList());

          case 3:
            marksList = _context.sent;

            if (!marksList) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return", res.json({
              status: 200,
              message: "Success",
              data: marksList
            }));

          case 8:
            return _context.abrupt("return", res.json({
              status: 400,
              message: "Bad request"
            }));

          case 9:
            _context.next = 15;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.json({
              status: 500,
              message: "Internal Server Error"
            });

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 11]]);
  },
  GET_MODEL: function GET_MODEL(req, res) {
    var mark_id, modelList;
    return regeneratorRuntime.async(function GET_MODEL$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            mark_id = req.query.mark_id;

            if (!mark_id) {
              _context2.next = 13;
              break;
            }

            _context2.next = 5;
            return regeneratorRuntime.awrap(model.modelList(mark_id));

          case 5:
            modelList = _context2.sent;

            if (!modelList) {
              _context2.next = 10;
              break;
            }

            return _context2.abrupt("return", res.json({
              status: 200,
              message: "Success",
              data: modelList
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
  POST_MARK: function POST_MARK(req, res) {
    var mark_name, addMark;
    return regeneratorRuntime.async(function POST_MARK$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            mark_name = req.body.mark_name;

            if (!mark_name) {
              _context3.next = 13;
              break;
            }

            _context3.next = 5;
            return regeneratorRuntime.awrap(model.addMark(mark_name));

          case 5:
            addMark = _context3.sent;

            if (!addMark) {
              _context3.next = 10;
              break;
            }

            return _context3.abrupt("return", res.json({
              status: 200,
              message: "Success",
              data: addMark
            }));

          case 10:
            return _context3.abrupt("return", res.json({
              status: 400,
              message: "Bad request"
            }));

          case 11:
            _context3.next = 14;
            break;

          case 13:
            return _context3.abrupt("return", res.json({
              status: 400,
              message: "Bad request"
            }));

          case 14:
            _context3.next = 20;
            break;

          case 16:
            _context3.prev = 16;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            res.json({
              status: 500,
              message: "Internal Server Error"
            });

          case 20:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 16]]);
  },
  POST_MODEL: function POST_MODEL(req, res) {
    var _req$body, mark_id, model_name, foundMark, addModel;

    return regeneratorRuntime.async(function POST_MODEL$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _req$body = req.body, mark_id = _req$body.mark_id, model_name = _req$body.model_name;
            _context4.next = 4;
            return regeneratorRuntime.awrap(model.foundMark(mark_id));

          case 4:
            foundMark = _context4.sent;

            if (!foundMark) {
              _context4.next = 16;
              break;
            }

            _context4.next = 8;
            return regeneratorRuntime.awrap(model.addModel(mark_id, model_name));

          case 8:
            addModel = _context4.sent;

            if (!addModel) {
              _context4.next = 13;
              break;
            }

            return _context4.abrupt("return", res.json({
              status: 200,
              message: "Success",
              data: addModel
            }));

          case 13:
            return _context4.abrupt("return", res.json({
              status: 400,
              message: "Bad request"
            }));

          case 14:
            _context4.next = 17;
            break;

          case 16:
            return _context4.abrupt("return", res.json({
              status: 404,
              message: "Not found mark"
            }));

          case 17:
            _context4.next = 23;
            break;

          case 19:
            _context4.prev = 19;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);
            res.json({
              status: 500,
              message: "Internal Server Error"
            });

          case 23:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[0, 19]]);
  },
  PUT_MARK: function PUT_MARK(req, res) {
    var _req$body2, mark_id, mark_name, foundMark, updateMark;

    return regeneratorRuntime.async(function PUT_MARK$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _req$body2 = req.body, mark_id = _req$body2.mark_id, mark_name = _req$body2.mark_name;
            _context5.next = 4;
            return regeneratorRuntime.awrap(model.foundMark(mark_id));

          case 4:
            foundMark = _context5.sent;

            if (!foundMark) {
              _context5.next = 16;
              break;
            }

            _context5.next = 8;
            return regeneratorRuntime.awrap(model.updateMark(mark_id, mark_name));

          case 8:
            updateMark = _context5.sent;

            if (!updateMark) {
              _context5.next = 13;
              break;
            }

            return _context5.abrupt("return", res.json({
              status: 200,
              message: "Success",
              data: updateMark
            }));

          case 13:
            return _context5.abrupt("return", res.json({
              status: 400,
              message: "Bad request"
            }));

          case 14:
            _context5.next = 17;
            break;

          case 16:
            return _context5.abrupt("return", res.json({
              status: 404,
              message: "Not found"
            }));

          case 17:
            _context5.next = 23;
            break;

          case 19:
            _context5.prev = 19;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);
            res.json({
              status: 500,
              message: "Internal Server Error"
            });

          case 23:
          case "end":
            return _context5.stop();
        }
      }
    }, null, null, [[0, 19]]);
  },
  PUT_MODEL: function PUT_MODEL(req, res) {
    var _req$body3, model_id, mark_id, model_name, foundMark, foundModel, updateModel;

    return regeneratorRuntime.async(function PUT_MODEL$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _req$body3 = req.body, model_id = _req$body3.model_id, mark_id = _req$body3.mark_id, model_name = _req$body3.model_name;
            _context6.next = 4;
            return regeneratorRuntime.awrap(model.foundMark(mark_id));

          case 4:
            foundMark = _context6.sent;
            _context6.next = 7;
            return regeneratorRuntime.awrap(model.foundModel(model_id));

          case 7:
            foundModel = _context6.sent;

            if (!(foundMark && foundModel)) {
              _context6.next = 19;
              break;
            }

            _context6.next = 11;
            return regeneratorRuntime.awrap(model.updateModel(model_id, mark_id, model_name));

          case 11:
            updateModel = _context6.sent;

            if (!updateModel) {
              _context6.next = 16;
              break;
            }

            return _context6.abrupt("return", res.json({
              status: 200,
              message: "Success",
              data: updateModel
            }));

          case 16:
            return _context6.abrupt("return", res.json({
              status: 400,
              message: "Bad request"
            }));

          case 17:
            _context6.next = 21;
            break;

          case 19:
            "";
            return _context6.abrupt("return", res.json({
              status: 404,
              message: "Not found"
            }));

          case 21:
            _context6.next = 27;
            break;

          case 23:
            _context6.prev = 23;
            _context6.t0 = _context6["catch"](0);
            console.log(_context6.t0);
            res.json({
              status: 500,
              message: "Internal Server Error"
            });

          case 27:
          case "end":
            return _context6.stop();
        }
      }
    }, null, null, [[0, 23]]);
  },
  DELETE_MARK: function DELETE_MARK(req, res) {
    var mark_id, deleteMark;
    return regeneratorRuntime.async(function DELETE_MARK$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            mark_id = req.body.mark_id;
            _context7.next = 4;
            return regeneratorRuntime.awrap(model.deleteMark(mark_id));

          case 4:
            deleteMark = _context7.sent;
            console.log(deleteMark, mark_id);
            console.log(req.body);

            if (!deleteMark) {
              _context7.next = 11;
              break;
            }

            return _context7.abrupt("return", res.json({
              status: 200,
              message: "Success",
              data: deleteMark
            }));

          case 11:
            return _context7.abrupt("return", res.json({
              status: 400,
              message: "Bad request"
            }));

          case 12:
            _context7.next = 18;
            break;

          case 14:
            _context7.prev = 14;
            _context7.t0 = _context7["catch"](0);
            console.log(_context7.t0);
            res.json({
              status: 500,
              message: "Internal Server Error"
            });

          case 18:
          case "end":
            return _context7.stop();
        }
      }
    }, null, null, [[0, 14]]);
  },
  DELETE_MODEL: function DELETE_MODEL(req, res) {
    var model_id, deleteModel;
    return regeneratorRuntime.async(function DELETE_MODEL$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            model_id = req.body.model_id;
            _context8.next = 4;
            return regeneratorRuntime.awrap(model.deleteModel(model_id));

          case 4:
            deleteModel = _context8.sent;

            if (!deleteModel) {
              _context8.next = 9;
              break;
            }

            return _context8.abrupt("return", res.json({
              status: 200,
              message: "Success",
              data: deleteModel
            }));

          case 9:
            return _context8.abrupt("return", res.json({
              status: 400,
              message: "Bad request"
            }));

          case 10:
            _context8.next = 16;
            break;

          case 12:
            _context8.prev = 12;
            _context8.t0 = _context8["catch"](0);
            console.log(_context8.t0);
            res.json({
              status: 500,
              message: "Internal Server Error"
            });

          case 16:
          case "end":
            return _context8.stop();
        }
      }
    }, null, null, [[0, 12]]);
  }
};