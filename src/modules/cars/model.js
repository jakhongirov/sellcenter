const { fetch, fetchALL } = require("../../lib/postgres");

const ADD_CAR = `
   INSERT INTO
      cars (
         user_id,
         car_make,
         car_model,
         car_description,
         car_variant,
         car_body,
         car_number_seats,
         car_number_door,
         car_silding_door,
         car_condition,
         car_type,
         car_payment_type,
         car_price,
         car_firt_date,
         car_firt_date_year,
         car_mileage,
         car_hu_valid_until,
         car_previous_owners,
         car_full_service_history,
         car_roadworthy,
         car_country,
         car_city_zipcode,
         car_radius,
         car_fuel_type,
         car_power,
         car_cubic_capacity,
         car_transmission,
         car_fuel_consumption,
         car_emissions_sticker,
         car_emission_class,
         car_exterior_colour,
         car_trailer_coupling,
         car_parking_sensors,
         car_cruise_control,
         car_interior_colour,
         car_interior_material,
         car_airbags,
         car_air_conditioning,
         extras,
         others,
         car_vendor,
         car_dealer_rating,
         car_discount_offers,
         car_non_smoker,
         car_taxi,
         car_vat,
         car_warranty,
         car_environmental_bonus,
         car_damaged,
         car_commercial,
         car_programme,
         car_images_url,
         car_images_name,
         car_vide_link,
         user_phone,
         user_email
      )
   VALUES (
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
      $12,
      $13,
      $14,
      $15,
      $16,
      $17,
      $18,
      $19,
      $20,
      $21,
      $22,
      $23,
      $24,
      $25,
      $26,
      $27,
      $28,
      $29,
      $30,
      $31,
      $32,
      $33,
      $34,
      $35,
      $36,
      $37,
      $38,
      $39,
      $40,
      $41,
      $42,
      $43,
      $44,
      $45,
      $46,
      $47,
      $48,
      $49,
      $50,
      $51,
      $52,
      $53,
      $54,
      $55,
      $56,
      $57
   )
   RETURNING *;
`;

const UPDATE_CAR = `
   UPDATE
      cars
   SET
      car_id = $2,
      user_id = $3,
      car_make = $4,
      car_model = $5,
      car_description = $6,
      car_variant = $7,
      car_body = $8,
      car_number_seats = $9,
      car_number_door = $10,
      car_silding_door = $11,
      car_condition = $12,
      car_type = $13,
      car_payment_type = $14,
      car_price = $15,
      car_firt_date = $16,
      car_firt_date_year = $17,
      car_mileage = $18,
      car_hu_valid_until = $19,
      car_previous_owners = $20,
      car_full_service_history = $21,
      car_roadworthy = $22,
      car_country = $23,
      car_city_zipcode = $24,
      car_radius = $25,
      car_fuel_type = $26,
      car_power = $27,
      car_cubic_capacity = $28,
      car_transmission = $29,
      car_fuel_consumption = $30,
      car_emissions_sticker = $31,
      car_emission_class = $32,
      car_exterior_colour = $33,
      car_trailer_coupling = $34,
      car_parking_sensors = $35,
      car_cruise_control = $36,
      car_interior_colour = $37,
      car_interior_material = $38,
      car_airbags = $39,
      car_air_conditioning = $40,
      extras = $41,
      others = $42,
      car_vendor = $43,
      car_dealer_rating = $44,
      car_discount_offers = $45,
      car_non_smoker = $46,
      car_taxi = $47,
      car_vat = $48,
      car_warranty = $49,
      car_environmental_bonus = $50,
      car_damaged = $51,
      car_commercial = $52,
      car_programme = $53,
      car_images_url = $54,
      car_images_name = $55,
      car_vide_link = $56,
      user_phone = $57,
      user_email = $58
   WHERE
      car_id = $1
   RETURNING *;
`;

const FOUND_CAR = `
   SELECT
      car_id,
      car_images_url,
      car_images_name
   FROM
      cars
   WHERE
      car_id = $1;
`;

const DELETE_CAR = `
   DELETE FROM
      cars
   WHERE
      car_id = $1
   RETURNING *;
`;

const FOUND_CAR_BY_ID = `
   SELECT
      *
   FROM
      cars
   WHERE
      car_id = $1
`;


const carsList = (limit, offset) => {
   const CARS_LIST = `
      SELECT
         *
      FROM
         cars
      ORDER BY
         car_id DESC
      LIMIT ${limit}
      OFFSET ${offset};
   `;

   return fetchALL(CARS_LIST)
}
const foundCarsList = (
   car_make,
   car_model,
   car_description,
   car_variant,
   bodyArr,
   car_number_seats,
   car_number_door,
   car_silding_door,
   car_condition,
   typeArr,
   car_payment_type,
   car_price_from,
   car_price_up_to,
   car_firt_date_year_from,
   car_firt_date_year_up_to,
   car_mileage_from,
   car_mileage_up_to,
   car_hu_valid_until,
   car_previous_owners,
   car_full_service_history,
   car_roadworthy,
   car_country,
   car_city,
   zipcode,
   car_radius,
   fuelArr,
   car_power_from,
   car_power_up_to,
   car_cubic_capacity_from,
   car_cubic_capacity_to,
   transmissionArr,
   car_fuel_consumption,
   car_emissions_sticker,
   car_emission_class,
   colorArr,
   car_trailer_coupling,
   parkingArr,
   car_cruise_control,
   interiorColourgArr,
   interiorMaterialgArr,
   car_airbags,
   car_air_conditioning,
   extrasId,
   othersId,
   car_vendor,
   car_dealer_rating,
   car_discount_offers,
   car_non_smoker,
   car_taxi,
   car_vat,
   car_warranty,
   car_environmental_bonus,
   car_damaged,
   car_commercial,
   car_programme,
   video,
   picture,
   days,
   offset,
   limit
) => {
   const FOUND_CARS_LIST = `
      SELECT 
         car_make,
         car_model,
         car_images_url,
         car_body,
         car_transmission,
         car_fuel_consumption,
         car_number_seats,
         car_number_door,
         car_firt_date,
         car_mileage,
         car_hu_valid_until,
         car_price,
         user_phone,
         user_email
      FROM
         cars
      WHERE
         car_active = true
         ${car_make ? `and car_make = '${car_make}'` : ""}
         ${car_model ? `and car_model = '${car_model}'` : ""}
         ${car_description ? `and car_description ilike '%${car_description}%'` : ""}
         ${car_variant ? `and car_variant = '${car_variant}'` : ""}
         ${bodyArr?.length > 0 ? `and ARRAY[car_body] @> ${bodyArr}` : ''}
         ${car_number_seats ? `and car_number_seats = ${car_number_seats}` : ""}
         ${car_number_door ? `and car_number_door = ${car_number_door}` : ""}
         ${car_silding_door ? `and car_silding_door = '${car_silding_door}'` : ""}
         ${car_condition ? `and car_condition = '${car_condition}'` : ""}
         ${typeArr?.length > 0 ? `and ARRAY[car_type] @> ${typeArr}` : ''}
         ${car_payment_type ? `and car_payment_type = '${car_payment_type}'` : ""}
         ${car_price_from ? `and car_price >= ${car_price_from}` : ""}
         ${car_price_up_to ? `and car_price =< ${car_price_up_to}` : ""}
         ${car_firt_date_year_from ? `and car_firt_date_year >= ${car_firt_date_year_from}` : ""}
         ${car_firt_date_year_up_to ? `and car_firt_date_year =< ${car_firt_date_year_up_to}` : ""}
         ${car_mileage_from ? `and car_mileage >= ${car_mileage_from}` : ""}
         ${car_mileage_up_to ? `and car_mileage =< ${car_mileage_up_to}` : ""}
         ${car_hu_valid_until ? `and car_hu_valid_until = '${car_hu_valid_until}'` : ""}
         ${car_previous_owners ? `and car_previous_owners = ${car_previous_owners}` : ""}
         ${car_full_service_history ? `and car_full_service_history = '${car_full_service_history}'` : ""}
         ${car_roadworthy ? `and car_roadworthy = '${car_roadworthy}'` : ""}
         ${car_country ? `and car_country = '${car_country}'` : ""}
         ${car_city?.length > 0 ? `and ${car_city} @> ARRAY[car_city_zipcode]` : ""}
         ${zipcode ? `and car_city_zipcode ilike '%${zipcode}%'` : ""}
         ${car_radius ? `and car_radius = ${car_radius}` : ""}
         ${fuelArr?.length > 0 ? `and ARRAY[car_fuel_type]@> ${fuelArr}` : ''}
         ${car_power_from ? `and car_power >= ${car_power_from}` : ""}
         ${car_power_up_to ? `and car_power =< ${car_power_up_to}` : ""}
         ${car_cubic_capacity_from ? `and car_cubic_capacity >= ${car_cubic_capacity_from}` : ""}
         ${car_cubic_capacity_to ? `and car_cubic_capacity =< ${car_cubic_capacity_to}` : ""}
         ${transmissionArr?.length > 0 ? `and ARRAY[car_transmission] @> ${transmissionArr}` : ''}
         ${car_fuel_consumption ? `and car_fuel_consumption = ${car_fuel_consumption}` : ""}
         ${car_emissions_sticker ? `and car_emissions_sticker = '${car_emissions_sticker}'` : ""}
         ${car_emission_class ? `and car_emission_class = '${car_emission_class}'` : ""}
         ${colorArr?.length > 0 ? `and ARRAY[car_exterior_colour] @> ${colorArr}` : ''}
         ${car_trailer_coupling ? `and car_trailer_coupling = '${car_trailer_coupling}'` : ""}
         ${parkingArr?.length > 0 ? `and ARRAY[car_parking_sensors] @> ${parkingArr} ` : ''}
         ${car_cruise_control ? `and car_cruise_control = '${car_cruise_control}'` : ""}
         ${interiorColourgArr?.length > 0 ? `and ${interiorColourgArr} @> ARRAY[car_interior_colour]` : ''}
         ${interiorMaterialgArr?.length > 0 ? `and ${interiorMaterialgArr} @> ARRAY[car_interior_material]` : ''}
         ${car_airbags ? `and car_airbags = '${car_airbags}'` : ""}
         ${car_air_conditioning ? `and car_air_conditioning = '${car_air_conditioning}'` : ""}
         ${car_vendor ? `and car_vendor = '${car_vendor}'` : ""}
         ${car_dealer_rating ? `and car_dealer_rating >= ${car_dealer_rating}` : ""}
         ${car_discount_offers == true ? `and car_discount_offers = ${car_discount_offers}` : ""}
         ${car_non_smoker == true ? `and car_non_smoker = ${car_non_smoker}` : ""}
         ${car_taxi == true ? `and car_taxi = ${car_taxi}` : ""}
         ${car_vat == true ? `and car_vat = ${car_vat}` : ""}
         ${car_warranty == true ? `and car_warranty = ${car_warranty}` : ""}
         ${car_environmental_bonus == true ? `and car_environmental_bonus = ${car_environmental_bonus}` : ""}
         ${car_damaged ? `and car_damaged = '${car_damaged}'` : ""}
         ${car_commercial ? `and car_commercial = '${car_commercial}'` : ""}
         ${car_programme ? `and car_programme = '${car_programme}'` : ""}
         ${extrasId.length ? `and extras @> ${extrasId}` : ""}
         ${othersId.length ? `and others @> ${othersId}` : ""}
         ${picture == true ? `and Array_Length(car_images_url, 1) > 0` : ""}
         ${video == true ? `and car_vide_link != '' ` : ""}
         ${days ? `and car_ad_create_at > current_date - interval '${days} days'` : ""}
      ORDER BY
         car_id desc
      LIMIT ${limit}
      OFFSET ${offset};
   `;

   return fetchALL(FOUND_CARS_LIST)
}
const foundCarsCount = (
   car_make,
   car_model,
   car_description,
   car_variant,
   bodyArr,
   car_number_seats,
   car_number_door,
   car_silding_door,
   car_condition,
   typeArr,
   car_payment_type,
   car_price_from,
   car_price_up_to,
   car_firt_date_year_from,
   car_firt_date_year_up_to,
   car_mileage_from,
   car_mileage_up_to,
   car_hu_valid_until,
   car_previous_owners,
   car_full_service_history,
   car_roadworthy,
   car_country,
   car_city,
   zipcode,
   car_radius,
   fuelArr,
   car_power_from,
   car_power_up_to,
   car_cubic_capacity_from,
   car_cubic_capacity_to,
   transmissionArr,
   car_fuel_consumption,
   car_emissions_sticker,
   car_emission_class,
   colorArr,
   car_trailer_coupling,
   parkingArr,
   car_cruise_control,
   interiorColourgArr,
   interiorMaterialgArr,
   car_airbags,
   car_air_conditioning,
   extrasId,
   othersId,
   car_vendor,
   car_dealer_rating,
   car_discount_offers,
   car_non_smoker,
   car_taxi,
   car_vat,
   car_warranty,
   car_environmental_bonus,
   car_damaged,
   car_commercial,
   car_programme,
   video,
   picture,
   days
) => {
   const FOUND_CARS_COUNT = `
   SELECT 
      count(car_id)
   FROM
      cars
   WHERE
      car_active = true
      ${car_make ? `and car_make = '${car_make}'` : ""}
      ${car_model ? `and car_model = '${car_model}'` : ""}
      ${car_description ? `and car_description ilike '%${car_description}%'` : ""}
      ${car_variant ? `and car_variant = '${car_variant}'` : ""}
      ${bodyArr?.length > 0 ? `and ${bodyArr} @> ARRAY[car_body]` : ''}
      ${car_number_seats ? `and car_number_seats = ${car_number_seats}` : ""}
      ${car_number_door ? `and car_number_door = ${car_number_door}` : ""}
      ${car_silding_door ? `and car_silding_door = '${car_silding_door}'` : ""}
      ${car_condition ? `and car_condition = '${car_condition}'` : ""}
      ${typeArr?.length > 0 ? `and ${typeArr} @> ARRAY[car_type]` : ''}
      ${car_payment_type ? `and car_payment_type = '${car_payment_type}'` : ""}
      ${car_price_from ? `and car_price >= ${car_price_from}` : ""}
      ${car_price_up_to ? `and car_price =< ${car_price_up_to}` : ""}
      ${car_firt_date_year_from ? `and car_firt_date_year >= ${car_firt_date_year_from}` : ""}
      ${car_firt_date_year_up_to ? `and car_firt_date_year =< ${car_firt_date_year_up_to}` : ""}
      ${car_mileage_from ? `and car_mileage >= ${car_mileage_from}` : ""}
      ${car_mileage_up_to ? `and car_mileage =< ${car_mileage_up_to}` : ""}
      ${car_hu_valid_until ? `and car_hu_valid_until = '${car_hu_valid_until}'` : ""}
      ${car_previous_owners ? `and car_previous_owners = ${car_previous_owners}` : ""}
      ${car_full_service_history ? `and car_full_service_history = '${car_full_service_history}'` : ""}
      ${car_roadworthy ? `and car_roadworthy = '${car_roadworthy}'` : ""}
      ${car_country ? `and car_country = '${car_country}'` : ""}
      ${car_city?.length > 0 ? `and ${car_city} @> ARRAY[car_city_zipcode]` : ""}
      ${zipcode ? `and car_city_zipcode ilike '%${zipcode}%'` : ""}
      ${car_radius ? `and car_radius = ${car_radius}` : ""}
      ${fuelArr?.length > 0 ? `and ${fuelArr} @> ARRAY[car_fuel_type]` : ''}
      ${car_power_from ? `and car_power >= ${car_power_from}` : ""}
      ${car_power_up_to ? `and car_power =< ${car_power_up_to}` : ""}
      ${car_cubic_capacity_from ? `and car_cubic_capacity >= ${car_cubic_capacity_from}` : ""}
      ${car_cubic_capacity_to ? `and car_cubic_capacity =< ${car_cubic_capacity_to}` : ""}
      ${transmissionArr?.length > 0 ? `and ${transmissionArr} @> ARRAY[car_transmission]` : ''}
      ${car_fuel_consumption ? `and car_fuel_consumption = ${car_fuel_consumption}` : ""}
      ${car_emissions_sticker ? `and car_emissions_sticker = '${car_emissions_sticker}'` : ""}
      ${car_emission_class ? `and car_emission_class = '${car_emission_class}'` : ""}
      ${colorArr?.length > 0 ? `and ${colorArr} @> ARRAY[car_exterior_colour]` : ''}
      ${car_trailer_coupling ? `and car_trailer_coupling = '${car_trailer_coupling}'` : ""}
      ${parkingArr?.length > 0 ? `and ${parkingArr} @> ARRAY[car_parking_sensors]` : ''}
      ${car_cruise_control ? `and car_cruise_control = '${car_cruise_control}'` : ""}
      ${interiorColourgArr?.length > 0 ? `and ${interiorColourgArr} @> ARRAY[car_interior_colour]` : ''}
      ${interiorMaterialgArr?.length > 0 ? `and ${interiorMaterialgArr} @> ARRAY[car_interior_material]` : ''}
      ${car_airbags ? `and car_airbags = '${car_airbags}'` : ""}
      ${car_air_conditioning ? `and car_air_conditioning = '${car_air_conditioning}'` : ""}
      ${car_vendor ? `and car_vendor = '${car_vendor}'` : ""}
      ${car_dealer_rating ? `and car_dealer_rating >= ${car_dealer_rating}` : ""}
      ${car_discount_offers == true ? `and car_discount_offers = ${car_discount_offers}` : ""}
      ${car_non_smoker == true ? `and car_non_smoker = ${car_non_smoker}` : ""}
      ${car_taxi == true ? `and car_taxi = ${car_taxi}` : ""}
      ${car_vat == true ? `and car_vat = ${car_vat}` : ""}
      ${car_warranty == true ? `and car_warranty = ${car_warranty}` : ""}
      ${car_environmental_bonus == true ? `and car_environmental_bonus = ${car_environmental_bonus}` : ""}
      ${car_damaged ? `and car_damaged = '${car_damaged}'` : ""}
      ${car_commercial ? `and car_commercial = '${car_commercial}'` : ""}
      ${car_programme ? `and car_programme = '${car_programme}'` : ""}
      ${extrasId.length ? `and extras @> ${extrasId}` : ""}
      ${othersId.length ? `and extras @> ${othersId}` : ""}
      ${picture == true ? `and Array_Length(car_images_url, 1) > 0` : ""}
      ${video == true ? `and car_vide_link != '' ` : ""}
      ${days ? `and car_ad_create_at > current_date - interval '${days} days'` : ""};
`;

   return fetch(FOUND_CARS_COUNT)
}
const foundCarById = (id) => fetch(FOUND_CAR_BY_ID, id)
const foundCar = (car_id) => fetch(FOUND_CAR, car_id)
const addCar = (
   user_id,
   car_make,
   car_model,
   car_description,
   car_variant,
   car_body,
   car_number_seats,
   car_number_door,
   car_silding_door,
   car_condition,
   car_type,
   car_payment_type,
   car_price,
   car_firt_date,
   car_firt_date_year,
   car_mileage,
   car_hu_valid_until,
   car_previous_owners,
   car_full_service_history,
   car_roadworthy,
   car_country,
   car_city_zipcode,
   car_radius,
   car_fuel_type,
   car_power,
   car_cubic_capacity,
   car_transmission,
   car_fuel_consumption,
   car_emissions_sticker,
   car_emission_class,
   car_exterior_colour,
   car_trailer_coupling,
   car_parking_sensors,
   car_cruise_control,
   car_interior_colour,
   car_interior_material,
   car_airbags,
   car_air_conditioning,
   extrasId,
   othersId,
   car_vendor,
   car_dealer_rating,
   car_discount_offers,
   car_non_smoker,
   car_taxi,
   car_vat,
   car_warranty,
   car_environmental_bonus,
   car_damaged,
   car_commercial,
   car_programme,
   car_img,
   car_img_name,
   car_vide_link,
   user_phone,
   user_email
) => fetch(
   ADD_CAR,
   user_id,
   car_make,
   car_model,
   car_description,
   car_variant,
   car_body,
   car_number_seats,
   car_number_door,
   car_silding_door,
   car_condition,
   car_type,
   car_payment_type,
   car_price,
   car_firt_date,
   car_firt_date_year,
   car_mileage,
   car_hu_valid_until,
   car_previous_owners,
   car_full_service_history,
   car_roadworthy,
   car_country,
   car_city_zipcode,
   car_radius,
   car_fuel_type,
   car_power,
   car_cubic_capacity,
   car_transmission,
   car_fuel_consumption,
   car_emissions_sticker,
   car_emission_class,
   car_exterior_colour,
   car_trailer_coupling,
   car_parking_sensors,
   car_cruise_control,
   car_interior_colour,
   car_interior_material,
   car_airbags,
   car_air_conditioning,
   extrasId,
   othersId,
   car_vendor,
   car_dealer_rating,
   car_discount_offers,
   car_non_smoker,
   car_taxi,
   car_vat,
   car_warranty,
   car_environmental_bonus,
   car_damaged,
   car_commercial,
   car_programme,
   car_img,
   car_img_name,
   car_vide_link,
   user_phone,
   user_email
)
const updateCar = (
   car_id,
   user_id,
   car_make,
   car_model,
   car_description,
   car_variant,
   car_body,
   car_number_seats,
   car_number_door,
   car_silding_door,
   car_condition,
   car_type,
   car_payment_type,
   car_price,
   car_firt_date,
   car_firt_date_year,
   car_mileage,
   car_hu_valid_until,
   car_previous_owners,
   car_full_service_history,
   car_roadworthy,
   car_country,
   car_city_zipcode,
   car_radius,
   car_fuel_type,
   car_power,
   car_cubic_capacity,
   car_transmission,
   car_fuel_consumption,
   car_emissions_sticker,
   car_emission_class,
   car_exterior_colour,
   car_trailer_coupling,
   car_parking_sensors,
   car_cruise_control,
   car_interior_colour,
   car_interior_material,
   car_airbags,
   car_air_conditioning,
   extrasId,
   othersId,
   car_vendor,
   car_dealer_rating,
   car_discount_offers,
   car_non_smoker,
   car_taxi,
   car_vat,
   car_warranty,
   car_environmental_bonus,
   car_damaged,
   car_commercial,
   car_programme,
   car_img,
   car_img_name,
   car_vide_link,
   user_phone,
   user_email
) => fetch(
   UPDATE_CAR,
   car_id,
   user_id,
   car_make,
   car_model,
   car_description,
   car_variant,
   car_body,
   car_number_seats,
   car_number_door,
   car_silding_door,
   car_condition,
   car_type,
   car_payment_type,
   car_price,
   car_firt_date,
   car_firt_date_year,
   car_mileage,
   car_hu_valid_until,
   car_previous_owners,
   car_full_service_history,
   car_roadworthy,
   car_country,
   car_city_zipcode,
   car_radius,
   car_fuel_type,
   car_power,
   car_cubic_capacity,
   car_transmission,
   car_fuel_consumption,
   car_emissions_sticker,
   car_emission_class,
   car_exterior_colour,
   car_trailer_coupling,
   car_parking_sensors,
   car_cruise_control,
   car_interior_colour,
   car_interior_material,
   car_airbags,
   car_air_conditioning,
   extrasId,
   othersId,
   car_vendor,
   car_dealer_rating,
   car_discount_offers,
   car_non_smoker,
   car_taxi,
   car_vat,
   car_warranty,
   car_environmental_bonus,
   car_damaged,
   car_commercial,
   car_programme,
   car_img,
   car_img_name,
   car_vide_link,
   user_phone,
   user_email
)
const deleteCar = (car_id) => fetch(DELETE_CAR, car_id)

module.exports = {
   carsList,
   foundCarsList,
   foundCarsCount,
   addCar,
   updateCar,
   foundCar,
   foundCarById,
   deleteCar
}