const { fetch, fetchALL } = require("../../lib/postgres");

const LIST = `
   SELECT
      *
   FROM
      motorcycle_others
   ORDER BY
      id desc
`;

const ADD_OTHER = `
  INSERT INTO
    motorcycle_others (
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

const EDIT_OTHER = `
   UPDATE
      motorcycle_others
   SET
      title_en = $2,
      title_fr = $3,
      title_gr = $4,
      title_sw = $5,
      title_sp, = $6,
      title_ru = $7,
      title_pl = $8
   WHERE
      id = $1
   RETURNING *;
`;

const DELETE_OTHER = `
   DELETE FROM
      motorcycle_others
   WHERE
      id = $1
   RERURNING *;
`;

const othersList = () => fetchALL(LIST)
const addOther = (title_en, title_fr, title_gr, title_sw, title_sp, title_ru, title_pl) => fetch(ADD_OTHER, title_en, title_fr, title_gr, title_sw, title_sp, title_ru, title_pl)
const editOther = (id, title_en, title_fr, title_gr, title_sw, title_sp, title_ru, title_pl) => fetch(EDIT_OTHER, id, title_en, title_fr, title_gr, title_sw, title_sp, title_ru, title_pl)
const deleteOther = (id) => fetch(DELETE_OTHER, id)

module.exports = {
   othersList,
   addOther,
   editOther,
   deleteOther
}