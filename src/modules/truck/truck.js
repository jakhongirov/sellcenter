require('dotenv').config();
const model = require('./model')
const FS = require('../../lib/fs/fs');
const path = require('path');

module.exports = {
   GET_ADMIN: async (req, res) => {
      try {
         const { limit, offset } = req.query

         if (limit && offset) {
            const truckListAdmin = await model.truckListAdmin(limit, offset)

            if (truckListAdmin) {
               return res.json({
                  status: 200,
                  message: "Success",
                  data: truckListAdmin
               })
            } else {
               return res.json({
                  status: 404,
                  message: 'Not found'
               })
            }

         } else {
            return res.json({
               status: 400,
               message: 'Bad request'
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

   GET_TRUCK_LIST: async (req, res) => {
      try {
         const { offset, limit } = req.query
         const {
            truck_condition,
            truck_category,
            truck_make,
            truck_model,
            truck_firt_date_year_from,
            truck_firt_date_year_to,
            truck_kilometre_from,
            truck_kilometre_to,
            truck_price_from,
            truck_price_to,
            truck_price_type,
            truck_vat,
            truck_power_from,
            truck_power_to,
            truck_country,
            truck_city_zipcode,
            truck_radius,
            fuel_type,
            transmission,
            truck_emission_class,
            truck_emissions_sticker,
            features,
            truck_air_conditioning,
            truck_axles,
            wheel_formula,
            truck_gvw_from,
            truck_gvw_to,
            truck_hydraulic_installation,
            truck_trailer_coupling_fix,
            truck_cruise_control,
            truck_driving_cab,
            interior_features,
            exterior_colour,
            day,
            truck_damaged,
            truck_full_service_history,
            truck_municipal,
            truck_new_hu,
            truck_renting_possible,
            truck_discount_offers,
            truck_vendor,
            truck_dealer_rating,
            picture,
            video
         } = req.body

         if (offset && limit) {
            const fuelArr = fuel_type ? fuel_type?.split(',') : ""
            const colorArr = exterior_colour ? exterior_colour?.split(',') : ""
            const transmissionArr = transmission ? transmission?.split(',') : ""
            const wheelformulaArr = wheel_formula ? wheel_formula?.split(',') : ""
            const featuresId = []
            const interiorFeaturesId = []

            if (features) {
               const featuresArr = features?.split(',')
               if (featuresArr?.length > 0) {
                  for (let i = 0; i < featuresArr.length; i++) {
                     featuresId.push(Number(featuresArr[i]))
                  }
               }
            }

            if (interior_features) {
               const interiorFeaturesArr = interior_features?.split(',')
               if (interiorFeaturesArr?.length > 0) {
                  for (let i = 0; i < interiorFeaturesArr.length; i++) {
                     interiorFeaturesId.push(Number(interiorFeaturesArr[i]))
                  }
               }
            }

            const truckList = await model.truckList(
               truck_condition,
               truck_category,
               truck_make,
               truck_model,
               truck_firt_date_year_from,
               truck_firt_date_year_to,
               truck_kilometre_from,
               truck_kilometre_to,
               truck_price_from,
               truck_price_to,
               truck_price_type,
               truck_vat,
               truck_power_from,
               truck_power_to,
               truck_country,
               truck_city_zipcode,
               truck_radius,
               fuelArr,
               transmissionArr,
               truck_emission_class,
               truck_emissions_sticker,
               featuresId,
               truck_air_conditioning,
               truck_axles,
               wheelformulaArr,
               truck_gvw_from,
               truck_gvw_to,
               truck_hydraulic_installation,
               truck_trailer_coupling_fix,
               truck_cruise_control,
               truck_driving_cab,
               interiorFeaturesId,
               colorArr,
               day,
               truck_damaged,
               truck_full_service_history,
               truck_municipal,
               truck_new_hu,
               truck_renting_possible,
               truck_discount_offers,
               truck_vendor,
               truck_dealer_rating,
               picture,
               video,
               limit,
               offset
            )

            if (truckList) {
               return res.json({
                  status: 200,
                  message: "Success",
                  data: truckList
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

   GET_TRUCK_COUNT: async (req, res) => {
      try {
         const {
            truck_condition,
            truck_category,
            truck_make,
            truck_model,
            truck_firt_date_year_from,
            truck_firt_date_year_to,
            truck_kilometre_from,
            truck_kilometre_to,
            truck_price_from,
            truck_price_to,
            truck_price_type,
            truck_vat,
            truck_power_from,
            truck_power_to,
            truck_country,
            truck_city_zipcode,
            truck_radius,
            fuel_type,
            transmission,
            truck_emission_class,
            truck_emissions_sticker,
            features,
            truck_air_conditioning,
            truck_axles,
            wheel_formula,
            truck_gvw_from,
            truck_gvw_to,
            truck_hydraulic_installation,
            truck_trailer_coupling_fix,
            truck_cruise_control,
            truck_driving_cab,
            interior_features,
            exterior_colour,
            day,
            truck_damaged,
            truck_full_service_history,
            truck_municipal,
            truck_new_hu,
            truck_renting_possible,
            truck_discount_offers,
            truck_vendor,
            truck_dealer_rating,
            picture,
            video
         } = req.body

         const fuelArr = fuel_type ? fuel_type?.split(',') : ""
         const colorArr = exterior_colour ? exterior_colour?.split(',') : ""
         const transmissionArr = transmission ? transmission?.split(',') : ""
         const wheelformulaArr = wheel_formula ? wheel_formula?.split(',') : ""
         const featuresId = []
         const interiorFeaturesId = []

         if (features) {
            const featuresArr = features?.split(',')
            if (featuresArr?.length > 0) {
               for (let i = 0; i < featuresArr.length; i++) {
                  featuresId.push(Number(featuresArr[i]))
               }
            }
         }

         if (interior_features) {
            const interiorFeaturesArr = interior_features?.split(',')
            if (interiorFeaturesArr?.length > 0) {
               for (let i = 0; i < interiorFeaturesArr.length; i++) {
                  interiorFeaturesId.push(Number(interiorFeaturesArr[i]))
               }
            }
         }

         const truckCount = await model.truckCount(
            truck_condition,
            truck_category,
            truck_make,
            truck_model,
            truck_firt_date_year_from,
            truck_firt_date_year_to,
            truck_kilometre_from,
            truck_kilometre_to,
            truck_price_from,
            truck_price_to,
            truck_price_type,
            truck_vat,
            truck_power_from,
            truck_power_to,
            truck_country,
            truck_city_zipcode,
            truck_radius,
            fuelArr,
            transmissionArr,
            truck_emission_class,
            truck_emissions_sticker,
            featuresId,
            truck_air_conditioning,
            truck_axles,
            wheelformulaArr,
            truck_gvw_from,
            truck_gvw_to,
            truck_hydraulic_installation,
            truck_trailer_coupling_fix,
            truck_cruise_control,
            truck_driving_cab,
            interiorFeaturesId,
            colorArr,
            day,
            truck_damaged,
            truck_full_service_history,
            truck_municipal,
            truck_new_hu,
            truck_renting_possible,
            truck_discount_offers,
            truck_vendor,
            truck_dealer_rating,
            picture,
            video
         )

         if (truckCount) {
            return res.json({
               status: 200,
               message: "Success",
               data: truckCount
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

   GET_TRUCK_ID: async (req, res) => {
      try {
         const { id } = req.params

         if (id) {
            const foundTruckById = await model.foundTruckById(id)

            if (foundTruckById) {
               return res.json({
                  status: 200,
                  message: "Success",
                  data: foundTruckById
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

   POST_TRUCK: async (req, res) => {
      try {
         const uploadPhoto = req.files;
         const {
            truck_make,
            truck_model,
            truck_describtion,
            truck_video_link,
            truck_condition,
            truck_category,
            truck_firt_date,
            truck_firt_date_year,
            truck_kilometre,
            truck_price,
            truck_price_type,
            truck_vat,
            truck_power,
            truck_country,
            truck_city_zipcode,
            truck_radius,
            truck_fuel_type,
            truck_transmission,
            truck_emission_class,
            truck_emissions_sticker,
            features,
            truck_air_conditioning,
            truck_axles,
            truck_wheel_formula,
            truck_gvw,
            truck_hydraulic_installation,
            truck_trailer_coupling_fix,
            truck_cruise_control,
            truck_driving_cab,
            interior_features,
            truck_exterior_colour,
            truck_damaged,
            truck_full_service_history,
            truck_municipal,
            truck_new_hu,
            truck_renting_possible,
            truck_discount_offers,
            truck_vendor,
            truck_dealer_rating,
            user_id,
            user_phone,
            user_email
         } = req.body

         const truck_img_name = [];
         const truck_img = [];
         const featuresArr = features?.split(',')
         const interiorFeaturesArr = interior_features?.split(',')
         const featuresId = []
         const interiorFeaturesId = []

         for (let i = 0; i < featuresArr.length; i++) {
            featuresId.push(Number(featuresArr[i]))
         }

         for (let i = 0; i < interiorFeaturesArr.length; i++) {
            interiorFeaturesId.push(Number(interiorFeaturesArr[i]))
         }

         uploadPhoto?.forEach((e) => {
            truck_img.push(
               `${process.env.BACKEND_URL}/${e.filename}`,
            );
            truck_img_name.push(e.filename);
         });

         const addTruck = await model.addTruck(
            truck_make,
            truck_model,
            truck_describtion,
            truck_video_link,
            truck_condition,
            truck_category,
            truck_firt_date,
            truck_firt_date_year,
            truck_kilometre,
            truck_price,
            truck_price_type,
            truck_vat,
            truck_power,
            truck_country,
            truck_city_zipcode,
            truck_radius,
            truck_fuel_type,
            truck_transmission,
            truck_emission_class,
            truck_emissions_sticker,
            featuresId,
            truck_air_conditioning,
            truck_axles,
            truck_wheel_formula,
            truck_gvw,
            truck_hydraulic_installation,
            truck_trailer_coupling_fix,
            truck_cruise_control,
            truck_driving_cab,
            interiorFeaturesId,
            truck_exterior_colour,
            truck_damaged,
            truck_full_service_history,
            truck_municipal,
            truck_new_hu,
            truck_renting_possible,
            truck_discount_offers,
            truck_vendor,
            truck_dealer_rating,
            truck_img,
            truck_img_name,
            user_id,
            user_phone,
            user_email
         )

         if (addTruck) {
            return res.json({
               status: 200,
               message: "Success",
               data: addTruck
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

   PUT_TRUCK: async (req, res) => {
      try {
         const uploadPhoto = req.files;
         const {
            id,
            truck_make,
            truck_model,
            truck_describtion,
            truck_video_link,
            truck_condition,
            truck_category,
            truck_firt_date,
            truck_firt_date_year,
            truck_kilometre,
            truck_price,
            truck_price_type,
            truck_vat,
            truck_power,
            truck_country,
            truck_city_zipcode,
            truck_radius,
            truck_fuel_type,
            truck_transmission,
            truck_emission_class,
            truck_emissions_sticker,
            features,
            truck_air_conditioning,
            truck_axles,
            truck_wheel_formula,
            truck_gvw,
            truck_hydraulic_installation,
            truck_trailer_coupling_fix,
            truck_cruise_control,
            truck_driving_cab,
            interior_features,
            truck_exterior_colour,
            truck_damaged,
            truck_full_service_history,
            truck_municipal,
            truck_new_hu,
            truck_renting_possible,
            truck_discount_offers,
            truck_vendor,
            truck_dealer_rating,
            user_id,
            user_phone,
            user_email
         } = req.body

         const foundTruck = await model.foundTruck(id)
         const truck_img_name = [];
         const truck_img = [];
         const featuresArr = features?.split(',')
         const interiorFeaturesArr = interior_features?.split(',')
         const featuresId = []
         const interiorFeaturesId = []

         for (let i = 0; i < featuresArr.length; i++) {
            featuresId.push(Number(featuresArr[i]))
         }

         for (let i = 0; i < interiorFeaturesArr.length; i++) {
            interiorFeaturesId.push(Number(interiorFeaturesArr[i]))
         }

         if (uploadPhoto.length) {
            foundTruck?.truck_images_name.forEach((e) => {
               new FS(
                  path.resolve(
                     __dirname,
                     '..',
                     '..',
                     '..',
                     'public',
                     'images',
                     `${e}`,
                  ),
               ).delete();
            });

            uploadPhoto?.forEach((e) => {
               truck_img.push(
                  `${process.env.BACKEND_URL}/${e.filename}`,
               );
               truck_img_name.push(e.filename);
            });
         } else {
            foundTruck?.truck_images_url.forEach((e) => {
               truck_img.push(e);
            });
            foundTruck?.truck_images_name.forEach((e) => {
               truck_img_name.push(e);
            });
         }

         const updateTruck = await model.updateTruck(
            id,
            truck_make,
            truck_model,
            truck_describtion,
            truck_video_link,
            truck_condition,
            truck_category,
            truck_firt_date,
            truck_firt_date_year,
            truck_kilometre,
            truck_price,
            truck_price_type,
            truck_vat,
            truck_power,
            truck_country,
            truck_city_zipcode,
            truck_radius,
            truck_fuel_type,
            truck_transmission,
            truck_emission_class,
            truck_emissions_sticker,
            featuresId,
            truck_air_conditioning,
            truck_axles,
            truck_wheel_formula,
            truck_gvw,
            truck_hydraulic_installation,
            truck_trailer_coupling_fix,
            truck_cruise_control,
            truck_driving_cab,
            interiorFeaturesId,
            truck_exterior_colour,
            truck_damaged,
            truck_full_service_history,
            truck_municipal,
            truck_new_hu,
            truck_renting_possible,
            truck_discount_offers,
            truck_vendor,
            truck_dealer_rating,
            truck_img,
            truck_img_name,
            user_id,
            user_phone,
            user_email
         )

         if (updateTruck) {
            return res.json({
               status: 200,
               message: "Success",
               data: updateTruck
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

   DELETE_TRUCK: async (req, res) => {
      try {
         const { id } = req.body
         const foundTruck = await model.foundTruck(id)

         if (foundTruck) {
            foundTruck?.truck_images_name.forEach((e) => {
               new FS(
                  path.resolv(
                     __dirname,
                     '..',
                     '..',
                     '..',
                     'public',
                     'images',
                     `${e}`,
                  ),
               ).delete();
            });

            const deleteTruck = await model.deleteTruck(id)

            if (deleteTruck) {
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