const { fetch, fetchALL } = require("../../lib/postgres");

const LIST = `
  SELECT
    *
  FROM
    car_extras
  ORDER BY
    id desc
`;

const ADD_EXTRA = `
  INSERT INTO
      car_extras (
      title_en,
      title_fr,
      title_gr,
      title_sw,
      title_sp,
      title_ru,
      title_pl
    )
    VALUES (
      $1,
      $2,
      $3,
      $4,
      $5,
      $6,
      $7
    ) RETURNING *;
`;

const EDIT_EXTRA = `
  UPDATE
      car_extras
  SET
    title_en = $2,
    title_fr = $3,
    title_gr = $4,
    title_sw = $5,
    title_sp = $6,
    title_ru = $7,
    title_pl = $8
  WHERE
    id = $1
  RETURNING *;
`;

const DELETE_EXTRA = `
  DELETE FROM
      car_extras
  WHERE
    id = $1
  RERURNING *;
`;

const extrasList = () => fetchALL(LIST)
const addExtra = (title_en, title_fr, title_gr, title_sw, title_sp, title_ru, title_pl) => fetch(ADD_EXTRA, title_en, title_fr, title_gr, title_sw, title_sp, title_ru, title_pl)
const editExtra = (id, title_en, title_fr, title_gr, title_sw, title_sp, title_ru, title_pl) => fetch(EDIT_EXTRA, id, title_en, title_fr, title_gr, title_sw, title_sp, title_ru, title_pl)
const deleteExtra = (id) => fetch(DELETE_EXTRA, id)

module.exports = {
  extrasList,
  addExtra,
  editExtra,
  deleteExtra
}