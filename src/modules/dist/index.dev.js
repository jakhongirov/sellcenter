"use strict";

var express = require("express");

var router = express.Router(); //Middlawares

var _require = require('../middleware/auth'),
    AUTH = _require.AUTH;

var FileUpload = require('../middleware/multer'); // Admin file


var admin = require('./admin/admin'); // Users files


var users = require('./users/users');

var userAds = require('./userAd/userAd'); // Companies file


var companies = require('./companies/companies'); // ADS files


var adsCard = require('./adsCard/adsCard'); // Sliders file


var sliders = require('./slider/slider'); // News


var news = require('./news/news'); //Cars files


var carBrand = require('./carBrand/carBrand');

var cars = require('./cars/cars'); // Motorcycles files


var motorcycleBrand = require('./motorcycleBrand/motorcycleBrand');

var motorcycleTypes = require('./motorcycleType/motorcycleType');

var motorcycleOthers = require('./motorcycleOtherDetails/motorcycleOtherDetails');

var motorcycle = require('./motorcycle/motorcycle'); // Motor home files


var motorhomeBrand = require('./motorhomeBrand/motorhomeBrand');

var motorhomeTypes = require('./motorhomeType/motorhomeType');

var motorhomeFeatures = require('./motorhomeFeatures/motorhomeFeatures');

var motorhomeInteriorFeatures = require('./motorhomeInteriorFeatures/motorhomeInteriorFeatures');

var motorhomes = require('./motorhome/motorhome'); // Truck files


var truckBrand = require('./truckBrand/truckBrand');

var truckFeatures = require('./truckFeatures/truckFeatures');

var truckInteriorFeatures = require('./truckInteriorfeatures/truckInteriorfeatures');

var trucks = require('./truck/truck'); // Trailer files


var trailerBrand = require('./trailerBrand/trailerBrand');

var trailerFeatures = require('./trailerFeatures/trailerFeatures');

var trailers = require('./trailers/trailers'); // Van files


var vanBrand = require('./vanBrand/vanBrand');

var vanFeatures = require('./vanFeatures/vanFeatures');

var vanInteriorFeatures = require('./vanInteriorfeatures/vanInteriorfeatures');

var vans = require('./vans/vans'); // Semi trailer truck files


var semitruckBrand = require('./semitruckBrand/semitruckBrand');

var semitruckFeatures = require('./semitruckFeatures/semitruckFeatures');

var semitruckInteriorFeatures = require('./semitruckInteriorfeatures/semitruckInteriorfeatures');

var semitruck = require('./semitruck/semitruck'); // Semi trailer files


var semitrailerBrand = require('./semitrailerBrand/semitrailerBrand');

var semitrailerFeatures = require('./semitrailerFeatures/semitrailerFeatures');

var semitrailers = require('./semitrailers/semitrailers'); // Coache files


var coacheBrand = require('./coacheBrand/coacheBrand');

var coacheFeatures = require('./coacheFeatures/coacheFeatures');

var coacheInteriorFeatures = require('./coacheInteriorfeatures/coacheInteriorfeatures');

var coaches = require('./coaches/coaches'); // Agricultural vehicle files


var agriculturalBrand = require('./agriculturalBrand/agriculturalBrand');

var agriculturalFeatures = require('./agriculturalFeatures/agriculturalFeatures');

var agriculturalInteriorFeatures = require('./agriculturalInteriorfeatures/agriculturalInteriorfeatures');

var agriculturals = require('./agricultural/agricultural'); // Construction machine files


var constructionBrand = require('./constructionBrand/constructionBrand');

var constructionFeatures = require('./constructionFeatures/constructionFeatures');

var constructionSafety = require('./constructionSafety/constructionSafety');

var constructions = require('./constructions/constructions'); // Forklift trucks files


var forkliftBrand = require('./forkliftBrand/forkliftBrand');

var forkliftFeatures = require('./forkliftFeatures/forkliftFeatures');

var forklifts = require('./forklifts/forklifts');

router // Amin
.get('/admin/list', admin.GET_ADMIN).post('/admin/register', admin.REGISTER_ADMIN).post('/admin/login', admin.LOGIN_ADMIN).put('/admin/edit', admin.EDIT_ADMIN)["delete"]('/admin/delete', admin.DELETE_ADMIN) // Users
.get('/users/list', users.GET_USERS_LIST).get('/users', users.GET).post('/user/register', users.REGISTER_USER).post('/user/login', users.LOGIN).put('/user/edit/mail', users.EDIT_USER_EMAIL).put('/user/edit/name', users.EDIT_USER_NAME).put('/user/edit/address', users.EDIT_USER_ADDRESS).put('/user/edit/phone', users.EDIT_USER_PHONE_NUMBER).put('/user/edit/balance', users.EDIT_USER_BALANCE).put('/user/edit/photo', FileUpload.single("photo"), users.EDIT_PROFILE_IMAGE)["delete"]('/user/delete/:id', users.DELETE_USER) // User ads
.get('/user/cars/:id', userAds.GET_CARS).get('/user/motorcycles/:id', userAds.GET_MOTORCYCLES).get('/user/motorhomes/:id', userAds.GET_MOTOR_HOMES).get('/user/trucks/:id', userAds.GET_TRUCKS).get('/user/trailers/:id', userAds.GET_TRAILERS).get('/user/vans/:id', userAds.GET_VANS).get('/user/semitrucks/:id', userAds.GET_SEMI_TRUCKS).get('/user/semitrailers/:id', userAds.GET_SEMI_TRAILERS).get('/user/coaches/:id', userAds.GET_COACHES).get('/user/agriculturals/:id', userAds.GET_VEHICLES).get('/user/constructions/:id', userAds.GET_CONSTRUCTIONS).get('/user/forklifts/:id', userAds.GET_FORKLIFTS) // Companies
.get('/companies/admin/list', companies.GET_ADMIN).get('/company/:id', companies.GET_USER_COMPANY).post('/company/add', companies.POST_COMPANY).put('/company/edit', companies.PUT_COMPANY)["delete"]('/company/delete/:id', companies.DELETE_COMPANY) // ADS
.get('/ads/list', adsCard.GET_ADS_LIST).get('/ads/card', adsCard.GET_ADS).get('/ads/:id', adsCard.GET_ADS_ID).post('/ads/add', FileUpload.single("photo"), adsCard.POST_ADS).put('/ads/update', FileUpload.single("photo"), adsCard.PUT_ADS).put('/ads/update/status', adsCard.PUT_STATUS)["delete"]('/ads/delete', adsCard.DELETE_ADS) // Sliders
.get('/slider/admin/list', sliders.GET_ADMIN).get('/slider/list', sliders.GET).post('/slider/add', FileUpload.single("photo"), sliders.POST).put('/slider/update', FileUpload.single("photo"), sliders.PUT).put('/slider/update/status', sliders.PUT_STATUS)["delete"]('/slider/delete', sliders.DELETE) // NEWS
.get('/news/admin/list', news.GET_ADMIN).get('/news/list', news.GET).get('/news/:id', news.GET_ID).post('/news/add', FileUpload.single("photo"), news.POST).put('/news/update', FileUpload.single("photo"), news.PUT).put('/news/update/status', news.PUT_STATUS)["delete"]('/news/delete', news.DELETE) // Car makrs 
.get('/car/marks', carBrand.GET_MARKS).post('/car/add/mark', carBrand.POST_MARK).put('/car/update/mark', carBrand.PUT_MARK)["delete"]('/car/delete/mark', carBrand.DELETE_MARK) // Car model
.get('/car/model', carBrand.GET_MODEL).post('/car/add/model', carBrand.POST_MODEL).put('/car/update/model', carBrand.PUT_MODEL)["delete"]('/car/delete/model', carBrand.DELETE_MODEL) // Cars
.get('/cars/admin/list', cars.GET_ADMIN).post('/cars/list', cars.GET_CARS).post('/cars/count', cars.GET_CARS_COUNT).get('/car/:id', cars.GET_CAR_ID).post('/car/add', FileUpload.array("photos"), cars.POST_BASIC_DATA).put('/car/add/engine', cars.PUT_ENGINE).put('/car/add/interior', cars.PUT_INTERIOR).put('/car/update', FileUpload.array("photos"), cars.UPDATE_CAR)["delete"]('/car/delete', cars.DELETE_CAR) // Motorcycle marks
.get('/motorcycle/marks', motorcycleBrand.GET_MARKS).post('/motorcycle/add/mark', motorcycleBrand.POST_MARK).put('/motorcycle/update/mark', motorcycleBrand.PUT_MARK)["delete"]('/motorcycle/delete/mark', motorcycleBrand.DELETE_MARK) // Motorcycle model
.get('/motorcycle/model', motorcycleBrand.GET_MODEL).post('/motorcycle/add/model', motorcycleBrand.POST_MODEL).put('/motorcycle/update/model', motorcycleBrand.PUT_MODEL)["delete"]('/motorcycle/delete/model', motorcycleBrand.DELETE_MODEL) // Motorcycle types
.get('/motorcycle/types', motorcycleTypes.GET).post('/motorcycle/add/type', motorcycleTypes.POST).put('/motorcycle/update/type', motorcycleTypes.PUT)["delete"]('/motorcycle/delete/type', motorcycleTypes.DELETE) // Motorcycle others
.get('/motorcycle/others', motorcycleOthers.GET).post('/motorcycle/add/other', motorcycleOthers.POST).put('/motorcycle/update/other', motorcycleOthers.PUT)["delete"]('/motorcycle/delete/other', motorcycleOthers.DELETE) // Motorcycle
.get('/motorcycles/admin/list', motorcycle.GET_ADMIN).get('/motorcycles/list', motorcycle.GET_MOTORCYCLE).get('/motorcycles/count', motorcycle.GET_MOTORCYCLE_COUNT).get('/motorcycles/:id', motorcycle.GET_MOTORCYCLE_ID).post('/motorcycles/add', FileUpload.array("photos"), motorcycle.POST_MOTORCYCLE).put('/motorcycles/update', FileUpload.array("photos"), motorcycle.PUT_MOTORCYCLE)["delete"]('/motorcycles/delete', motorcycle.DELETE_MOTORCYCLE) // Motor home marks
.get('/motorhome/marks', motorhomeBrand.GET_MARKS).post('/motorhome/add/mark', motorhomeBrand.POST_MARK).put('/motorhome/update/mark', motorhomeBrand.PUT_MARK)["delete"]('/motorhome/delete/mark', motorhomeBrand.DELETE_MARK) // Motor home model
.get('/motorhome/model', motorhomeBrand.GET_MODEL).post('/motorhome/add/model', motorhomeBrand.POST_MODEL).put('/motorhome/update/model', motorhomeBrand.PUT_MODEL)["delete"]('/motorhome/delete/model', motorhomeBrand.DELETE_MODEL) // Motor home types
.get('/motorhome/types', motorhomeTypes.GET).post('/motorhome/add/type', motorhomeTypes.POST).put('/motorhome/update/type', motorhomeTypes.PUT)["delete"]('/motorhome/delete/type', motorhomeTypes.DELETE) // Motor home features
.get('/motorhome/features', motorhomeFeatures.GET).post('/motorhome/add/feature', motorhomeFeatures.POST).put('/motorhome/update/feature', motorhomeFeatures.PUT)["delete"]('/motorhome/delete/feature', motorhomeFeatures.DELETE) // Motor home interior features
.get('/motorhome/interiorfeatures', motorhomeInteriorFeatures.GET).post('/motorhome/add/interiorfeature', motorhomeInteriorFeatures.POST).put('/motorhome/update/interiorfeature', motorhomeInteriorFeatures.PUT)["delete"]('/motorhome/delete/interiorfeature', motorhomeInteriorFeatures.DELETE) // Motor homes
.get('/motorhomes/admin/list', motorhomes.GET_MOTOR_HOME).get('/motorhomes/list', motorhomes.GET_MOTOR_HOME).get('/motorhomes/count', motorhomes.GET_COUNT_MOTOR_HOME).get('/motorhomes/:id', motorhomes.GET_MOTORHOME_ID).post('/motorhomes/add', FileUpload.array("photos"), motorhomes.POST_MOTOR_HOME).put('/motorhomes/update', FileUpload.array("photos"), motorhomes.PUT_MOTOR_HOME)["delete"]('/motorhomes/delete', motorhomes.DELETE_MOTOR_HOME) // Truck makrs 
.get('/truck/marks', truckBrand.GET_MARKS).post('/truck/add/mark', truckBrand.POST_MARK).put('/truck/update/mark', truckBrand.PUT_MARK)["delete"]('/truck/delete/mark', truckBrand.DELETE_MARK) // Truck model
.get('/truck/model', truckBrand.GET_MODEL).post('/truck/add/model', truckBrand.POST_MODEL).put('/truck/update/model', truckBrand.PUT_MODEL)["delete"]('/truck/delete/model', truckBrand.DELETE_MODEL) // Truck features
.get('/truck/features', truckFeatures.GET).post('/truck/add/feature', truckFeatures.POST).put('/truck/update/feature', truckFeatures.PUT)["delete"]('/truck/delete/feature', truckFeatures.DELETE) // Truck interior features
.get('/truck/interiorfeatures', truckInteriorFeatures.GET).post('/truck/add/interiorfeature', truckInteriorFeatures.POST).put('/truck/update/interiorfeature', truckInteriorFeatures.PUT)["delete"]('/truck/delete/interiorfeature', truckInteriorFeatures.DELETE) // Trcuks
.get('/trucks/admin/list', trucks.GET_ADMIN).get('/trucks/list', trucks.GET_TRUCK_LIST).get('/trucks/count', trucks.GET_TRUCK_COUNT).get('/trucks/:id', trucks.GET_TRUCK_ID).post('/trucks/add', FileUpload.array("photos"), trucks.POST_TRUCK).put('/trucks/update', FileUpload.array("photos"), trucks.PUT_TRUCK)["delete"]('/trucks/delete', trucks.DELETE_TRUCK) // Trailer makrs 
.get('/trailer/marks', trailerBrand.GET_MARKS).post('/trailer/add/mark', trailerBrand.POST_MARK).put('/trailer/update/mark', trailerBrand.PUT_MARK)["delete"]('/trailer/delete/mark', trailerBrand.DELETE_MARK) // Trailer model
.get('/trailer/model', trailerBrand.GET_MODEL).post('/trailer/add/model', trailerBrand.POST_MODEL).put('/trailer/update/model', trailerBrand.PUT_MODEL)["delete"]('/trailer/delete/model', trailerBrand.DELETE_MODEL) // Trailer features
.get('/trailer/features', trailerFeatures.GET).post('/trailer/add/feature', trailerFeatures.POST).put('/trailer/update/feature', trailerFeatures.PUT)["delete"]('/trailer/delete/feature', trailerFeatures.DELETE) // Trailers
.get('/trailers/admin/list', trailers.GET_ADMIN).get('/trailers/list', trailers.GET_TRAILER_LIST).get('/trailers/count', trailers.GET_TRAILER_COUNT).get('/trailers/:id', trailers.GET_TRAILER_BY_ID).post('/trailers/add', FileUpload.array("photos"), trailers.POST_TRAILER).put('/trailers/update', FileUpload.array("photos"), trailers.PUT_TRAILER)["delete"]('/trailers/delete', trailers.DELETE_TRAILER) // Van makrs 
.get('/van/marks', vanBrand.GET_MARKS).post('/van/add/mark', vanBrand.POST_MARK).put('/van/update/mark', vanBrand.PUT_MARK)["delete"]('/van/delete/mark', vanBrand.DELETE_MARK) // Van model
.get('/van/model', vanBrand.GET_MODEL).post('/van/add/model', vanBrand.POST_MODEL).put('/van/update/model', vanBrand.PUT_MODEL)["delete"]('/van/delete/model', vanBrand.DELETE_MODEL) // Van features
.get('/van/features', vanFeatures.GET).post('/van/add/feature', vanFeatures.POST).put('/van/update/feature', vanFeatures.PUT)["delete"]('/van/delete/feature', vanFeatures.DELETE) // Van interior features
.get('/van/interiorfeatures', vanInteriorFeatures.GET).post('/van/add/interiorfeature', vanInteriorFeatures.POST).put('/van/update/interiorfeature', vanInteriorFeatures.PUT)["delete"]('/van/delete/interiorfeature', vanInteriorFeatures.DELETE) // Vans
.get('/vans/admin/list', vans.GET_ADMIN).get('/vans/list', vans.GET_VAN_LIST).get('/vans/count', vans.GET_VAN_COUNT).get('/vans/:id', vans.GET_VAN_ID).post('/vans/add', FileUpload.array("photos"), vans.POST_VAN).put('/vans/update', FileUpload.array("photos"), vans.PUT_VAN)["delete"]('/vans/delete', vans.DELETE_VAN) // Semi truck makrs 
.get('/semitruck/marks', semitruckBrand.GET_MARKS).post('/semitruck/add/mark', semitruckBrand.POST_MARK).put('/semitruck/update/mark', semitruckBrand.PUT_MARK)["delete"]('/semitruck/delete/mark', semitruckBrand.DELETE_MARK) // Semi truck model
.get('/semitruck/model', semitruckBrand.GET_MODEL).post('/semitruck/add/model', semitruckBrand.POST_MODEL).put('/semitruck/update/model', semitruckBrand.PUT_MODEL)["delete"]('/semitruck/delete/model', semitruckBrand.DELETE_MODEL) // Semi truck features
.get('/semitruck/features', semitruckFeatures.GET).post('/semitruck/add/feature', semitruckFeatures.POST).put('/semitruck/update/feature', semitruckFeatures.PUT)["delete"]('/semitruck/delete/feature', semitruckFeatures.DELETE) // Semi truck interior features
.get('/semitruck/interiorfeatures', semitruckInteriorFeatures.GET).post('/semitruck/add/interiorfeature', semitruckInteriorFeatures.POST).put('/semitruck/update/interiorfeature', semitruckInteriorFeatures.PUT)["delete"]('/semitruck/delete/interiorfeature', semitruckInteriorFeatures.DELETE) // Semi truck
.get('/semitrucks/admin/list', semitruck.GET_SEMI_TRUCK_LIST).get('/semitrucks/list', semitruck.GET_SEMI_TRUCK_LIST).get('/semitrucks/count', semitruck.GET_SEMI_TRUCK_COUNT).get('/semitruck/:id', semitruck.GET_SEMI_TRUCK_ID).post('/semitruck/add', FileUpload.array("photos"), semitruck.POST_SEMI_TRUCK).put('/semitruck/update', FileUpload.array("photos"), semitruck.PUT_SEMI_TRUCK)["delete"]('/semitruck/delete', semitruck.DELETE_SEMI_TRUCK) // Semi trailer makrs 
.get('/semitrailer/marks', semitrailerBrand.GET_MARKS).post('/semitrailer/add/mark', semitrailerBrand.POST_MARK).put('/semitrailer/update/mark', semitrailerBrand.PUT_MARK)["delete"]('/semitrailer/delete/mark', semitrailerBrand.DELETE_MARK) // Semi trailer model
.get('/semitrailer/model', semitrailerBrand.GET_MODEL).post('/semitrailer/add/model', semitrailerBrand.POST_MODEL).put('/semitrailer/update/model', semitrailerBrand.PUT_MODEL)["delete"]('/semitrailer/delete/model', semitrailerBrand.DELETE_MODEL) // Semi trailer features
.get('/semitrailer/features', semitrailerFeatures.GET).post('/semitrailer/add/feature', semitrailerFeatures.POST).put('/semitrailer/update/feature', semitrailerFeatures.PUT)["delete"]('/semitrailer/delete/feature', semitrailerFeatures.DELETE) // Semi trailer
.get('/semitrailers/admin/list', semitrailers.GET_ADMIN).get('/semitrailers/list', semitrailers.GET_TRAILER_LIST).get('/semitrailers/count', semitrailers.GET_TRAILER_COUNT).get('/semitrailer/:id', semitrailers.GET_TRAILER_BY_ID).post('/semitrailer/add', FileUpload.array("photos"), semitrailers.POST_TRAILER).put('/semitrailer/update', FileUpload.array("photos"), semitrailers.PUT_TRAILER)["delete"]('/semitrailer/delete', semitrailers.DELETE_TRAILER) // Coache makrs 
.get('/coache/marks', coacheBrand.GET_MARKS).post('/coache/add/mark', coacheBrand.POST_MARK).put('/coache/update/mark', coacheBrand.PUT_MARK)["delete"]('/coache/delete/mark', coacheBrand.DELETE_MARK) // Coache model
.get('/coache/model', coacheBrand.GET_MODEL).post('/coache/add/model', coacheBrand.POST_MODEL).put('/coache/update/model', coacheBrand.PUT_MODEL)["delete"]('/coache/delete/model', coacheBrand.DELETE_MODEL) // Coache features
.get('/coache/features', coacheFeatures.GET).post('/coache/add/feature', coacheFeatures.POST).put('/coache/update/feature', coacheFeatures.PUT)["delete"]('/coache/delete/feature', coacheFeatures.DELETE) // Coache interior features
.get('/coache/interiorfeatures', coacheInteriorFeatures.GET).post('/coache/add/interiorfeature', coacheInteriorFeatures.POST).put('/coache/update/interiorfeature', coacheInteriorFeatures.PUT)["delete"]('/coache/delete/interiorfeature', coacheInteriorFeatures.DELETE) // Coache
.get('/coaches/admin/list', coaches.GET_ADMIN).get('/coaches/list', coaches.GET_COACHES_LIST).get('/coaches/count', coaches.GET_COACHES_COUNT).get('/coaches/:id', coaches.GET_COACHE_ID).post('/coaches/add', FileUpload.array("photos"), coaches.POST_COACHE).put('/coaches/update', FileUpload.array("photos"), coaches.PUT_COACHE)["delete"]('/coaches/delete', coaches.DELETE_COACHE) // Agricultural makrs 
.get('/agricultural/marks', agriculturalBrand.GET_MARKS).post('/agricultural/add/mark', agriculturalBrand.POST_MARK).put('/agricultural/update/mark', agriculturalBrand.PUT_MARK)["delete"]('/agricultural/delete/mark', agriculturalBrand.DELETE_MARK) // Agricultural model
.get('/agricultural/model', agriculturalBrand.GET_MODEL).post('/agricultural/add/model', agriculturalBrand.POST_MODEL).put('/agricultural/update/model', agriculturalBrand.PUT_MODEL)["delete"]('/agricultural/delete/model', agriculturalBrand.DELETE_MODEL) // Agricultural features
.get('/agricultural/features', agriculturalFeatures.GET).post('/agricultural/add/feature', agriculturalFeatures.POST).put('/agricultural/update/feature', agriculturalFeatures.PUT)["delete"]('/agricultural/delete/feature', agriculturalFeatures.DELETE) // Agricultural interior features
.get('/agricultural/interiorfeatures', agriculturalInteriorFeatures.GET).post('/agricultural/add/interiorfeature', agriculturalInteriorFeatures.POST).put('/agricultural/update/interiorfeature', agriculturalInteriorFeatures.PUT)["delete"]('/agricultural/delete/interiorfeature', agriculturalInteriorFeatures.DELETE) // Agricultural
.get('/agriculturals/admin/list', agriculturals.GET_ADMIN).get('/agriculturals/list', agriculturals.GET_VEHICLE_LIST).get('/agriculturals/count', agriculturals.GET_VEHICLE_COUNT).get('/agriculturals/:id', agriculturals.GET_VEHICLE_ID).post('/agriculturals/add', FileUpload.array("photos"), agriculturals.POST_VEHICLE).put('/agriculturals/update', FileUpload.array("photos"), agriculturals.PUT_VEHICLE)["delete"]('/agriculturals/delete', agriculturals.DELETE_VEHICLE) // Construction makrs 
.get('/construction/marks', constructionBrand.GET_MARKS).post('/construction/add/mark', constructionBrand.POST_MARK).put('/construction/update/mark', constructionBrand.PUT_MARK)["delete"]('/construction/delete/mark', constructionBrand.DELETE_MARK) // Construction model
.get('/construction/model', constructionBrand.GET_MODEL).post('/construction/add/model', constructionBrand.POST_MODEL).put('/construction/update/model', constructionBrand.PUT_MODEL)["delete"]('/construction/delete/model', constructionBrand.DELETE_MODEL) // Construction features
.get('/construction/features', constructionFeatures.GET).post('/construction/add/feature', constructionFeatures.POST).put('/construction/update/feature', constructionFeatures.PUT)["delete"]('/construction/delete/feature', constructionFeatures.DELETE) // Construction safety
.get('/construction/interiorfeatures', constructionSafety.GET).post('/construction/add/interiorfeature', constructionSafety.POST).put('/construction/update/interiorfeature', constructionSafety.PUT)["delete"]('/construction/delete/interiorfeature', constructionSafety.DELETE) // Construction
.get('/constructions/admin/list', constructions.GET_ADMIN).get('/constructions/list', constructions.GET_CONSTRUCTION_LIST).get('/constructions/count', constructions.GET_CONSTRUCTION_COUNT).get('/constructions/:id', constructions.GET_CONSTRUCTION_ID).post('/constructions/add', FileUpload.array("photos"), constructions.POST_CONSTRUCTION).put('/constructions/update', FileUpload.array("photos"), constructions.PUT_CONSTRUCTION)["delete"]('/constructions/delete', constructions.DELETE_CONSTRUCTION) // Forklift makrs 
.get('/forklift/marks', forkliftBrand.GET_MARKS).post('/forklift/add/mark', forkliftBrand.POST_MARK).put('/forklift/update/mark', forkliftBrand.PUT_MARK)["delete"]('/forklift/delete/mark', forkliftBrand.DELETE_MARK) // Forklift model
.get('/forklift/model', forkliftBrand.GET_MODEL).post('/forklift/add/model', forkliftBrand.POST_MODEL).put('/forklift/update/model', forkliftBrand.PUT_MODEL)["delete"]('/forklift/delete/model', forkliftBrand.DELETE_MODEL) // Forklift features
.get('/forklift/features', forkliftFeatures.GET).post('/forklift/add/feature', forkliftFeatures.POST).put('/forklift/update/feature', forkliftFeatures.PUT)["delete"]('/forklift/delete/feature', forkliftFeatures.DELETE) // Forklift
.get('/forklifts/admin/list', forklifts.GET_ADMIN).get('/forklifts/list', forklifts.GET_FORKLIFT_LIST).get('/forklifts/count', forklifts.GET_FORKLIFT_COUNT).get('/forklifts/:id', forklifts.GET_FORKLIFT_ID).post('/forklifts/add', FileUpload.array("photos"), forklifts.POST_FORKLIFT).put('/forklifts/update', FileUpload.array("photos"), forklifts.PUT_FORKLIFT)["delete"]('/forklifts/delete', forklifts.DELETE_FORKLIFT);
module.exports = router;