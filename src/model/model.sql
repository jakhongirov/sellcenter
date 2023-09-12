CREATE TABLE admins (
   admin_id bigserial PRiMARY KEY,
   admin_email text,
   admin_password text,
   admin_create_at timestamptz DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE users (
   user_id bigserial PRiMARY KEY,
   user_email text not null,
   user_password text not null,
   user_first_name text,
   user_last_name text,
   user_gender text,
   user_address_street text,
   user_address_nr text,
   user_address_zip text,
   user_address_city text,
   user_address_country text,
   user_country_code text,
   user_number_prefix int,
   user_phone_number int,
   user_balance int DEFAULT 0,
   user_company boolean DEFAULT false,
   user_image_url text,
   user_image_name text,
   user_create_at timestamptz DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE user_companies (
   company_id bigserial PRiMARY KEY,
   company_name text not null,
   company_mail text not null,
   company_address_street text,
   company_address_nr text,
   company_address_zip text,
   company_address_city text,
   company_address_country text,
   company_address_radius int,
   company_country_code text,
   company_number_prefix int,
   company_phone_number int,
   user_id int not null REFERENCES users(user_id) ON DELETE CASCADE,
   company_create_at timestamptz DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE car_makes(
   car_make_id bigserial PRiMARY KEY,
   car_make_name text not null
);

CREATE TABLE car_models(
   car_model_id bigserial PRiMARY KEY,
   car_model_name text not null,
   car_make_id int not null REFERENCES car_makes(car_make_id) ON DELETE CASCADE
);

CREATE TABLE cars (
   car_id bigserial PRiMARY KEY,
   car_make text not null,
   car_model text not null,
   car_description text not null,
   car_images_url text [],
   car_images_name text [],
   car_vide_link text,
   car_variant text not null,
   car_body text not null,
   car_number_seats int not null,
   car_number_door int not null,
   car_silding_door text not null,
   car_condition text not null,
   car_type text not null,
   car_payment_type text not null,
   car_price int not null,
   car_firt_date text not null,
   car_firt_date_year int not null,
   car_mileage int not null,
   car_hu_valid_until text not null,
   car_previous_owners int not null,
   car_full_service_history text not null,
   car_roadworthy boolean not null,
   car_country text not null,
   car_city_zipcode text not null,
   car_radius int not null,
   car_fuel_type text not null,
   car_power int not null,
   car_cubic_capacity int not null,
   car_transmission text not null,
   car_fuel_consumption int not null,
   car_emissions_sticker text not null,
   car_emission_class text not null,
   car_exterior_colour text not null,
   car_trailer_coupling text not null,
   car_parking_sensors text not null,
   car_cruise_control text not null,
   car_interior_colour text not null,
   car_interior_material text not null,
   car_airbags text not null,
   car_air_conditioning text not null,
   extras int [],
   others int [],
   car_vendor text not null,
   car_dealer_rating int not null,
   car_discount_offers boolean DEFAULT false,
   car_non_smoker boolean DEFAULT false,
   car_taxi boolean DEFAULT false,
   car_vat boolean DEFAULT false,
   car_warranty boolean DEFAULT false,
   car_environmental_bonus boolean DEFAULT false,
   car_damaged text not null,
   car_commercial text not null,
   car_programme text not null,
   user_id int not null REFERENCES users(user_id) ON DELETE CASCADE,
   user_phone text,
   user_email text,
   car_active boolean DEFAULT true,
   car_ad_create_at timestamptz DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE car_others (
   id bigserial PRiMARY KEY,
   title_en text not null,
   title_fr text not null,
   title_gr text not null,
   title_sw text not null,
   title_sp text not null,
   title_ru text not null,
   title_pl text not null,
   other_create_at timestamptz DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE car_extras (
   id bigserial PRiMARY KEY,
   title_en text not null,
   title_fr text not null,
   title_gr text not null,
   title_sw text not null,
   title_sp text not null,
   title_ru text not null,
   title_pl text not null,
   extra_create_at timestamptz DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE motorcycle_makes(
   motorcycle_make_id bigserial PRiMARY KEY,
   motorcycle_make_name text not null
);

CREATE TABLE motorcycle_models(
   motorcycle_model_id bigserial PRiMARY KEY,
   motorcycle_model_name text not null,
   motorcycle_make_id int not null REFERENCES motorcycle_makes(motorcycle_make_id) ON DELETE CASCADE
);

CREATE TABLE motorcycles (
   motorcycle_id bigserial PRiMARY KEY,
   motorcycle_make text not null,
   motorcycle_model text not null,
   motorcycle_description text not null,
   motorcycle_condition text not null,
   motorcycle_images_url text [],
   motorcycle_images_name text [],
   motorcycle_vide_link text,
   motorcycle_type int [],
   motorcycle_price int not null,
   motorcycle_firt_date text not null,
   motorcycle_firt_date_year int not null,
   motorcycle_mileage int not null,
   motorcycle_power int not null,
   motorcycle_country text not null,
   motorcycle_city_zipcode text not null,
   motorcycle_radius int not null,
   motorcycle_fuel_type text not null,
   motorcycle_driving_mode text not null,
   motorcycle_transmission text not null,
   motorcycle_cubic_capacity int not null,
   motorcycle_exterior_colour text not null,
   others int [],
   motorcycle_vat text not null,
   motorcycle_vendor text not null,
   motorcycle_discount_offers boolean DEFAULT false,
   motorcycle_history text not null,
   motorcycle_damaged text not null,
   motorcycle_number_owners int not null,
   motorcycle_approved_used_programme text not null,
   motorcycle_dealer_rating int not null,
   motorcycle_active boolean DEFAULT true,
   user_id int not null REFERENCES users(user_id) ON DELETE CASCADE,
   user_phone text,
   user_email text,
   motorcycle_ad_create_at timestamptz DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE motorcycle_others (
   id bigserial PRiMARY KEY,
   title_en text not null,
   title_fr text not null,
   title_gr text not null,
   title_sw text not null,
   title_sp text not null,
   title_ru text not null,
   title_pl text not null,
   other_create_at timestamptz DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE motorcycle_type (
   id bigserial PRiMARY KEY,
   title_en text not null,
   title_fr text not null,
   title_gr text not null,
   title_sw text not null,
   title_sp text not null,
   title_ru text not null,
   title_pl text not null,
   extra_create_at timestamptz DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE motor_home_makes(
   motor_home_make_id bigserial PRiMARY KEY,
   motor_home_make_name text not null
);

CREATE TABLE motor_home_models(
   motor_home_model_id bigserial PRiMARY KEY,
   motor_home_model_name text not null,
   motor_home_make_id int not null REFERENCES motor_home_makes(motor_home_make_id) ON DELETE CASCADE
);

CREATE TABLE motor_homes (
   motor_home_id bigserial PRiMARY KEY,
   motor_home_make text not null,
   motor_home_model text not null,
   motor_home_describtion text not null,
   motor_home_images_url text [],
   motor_home_images_name text [],
   motor_home_video_link text,
   motor_home_condition text not null,
   motor_home_type int [],
   motor_home_price int not null,
   motor_home_firt_date text not null,
   motor_home_firt_date_year int not null,
   motor_home_construction_year int not null,
   motor_home_kilometre int not null,
   motor_home_power int not null,
   motor_home_country text not null,
   motor_home_city_zipcode text not null,
   motor_home_city_radius int not null,
   motor_home_fuel_type text not null,
   motor_home_transmission text not null,
   motor_home_emission_class text not null,
   motor_home_emissions_sticker text not null,
   motor_home_features int [],
   motor_home_length int not null,
   motor_home_gvw int not null,
   motor_home_number_of_bunks int not null,
   motor_home_axles int not null,
   motor_home_trailer_coupling text not null,
   motor_home_cruise_control text not null,
   motor_home_radio text not null,
   motor_home_parking_sensors text not null,
   motor_home_air_conditioning text not null,
   motor_home_interior_features int [],
   motor_home_exterior_colour text not null,
   motor_home_vat text not null,
   motor_home_damaged text not null,
   motor_home_numbrt_of_owner int not null,
   motor_home_damage_by_hail boolean DEFAULT false,
   motor_home_full_service_history boolean DEFAULT false,
   motor_home_new_hu boolean DEFAULT false,
   motor_home_renting_possible boolean DEFAULT false,
   motor_home_warranty boolean DEFAULT false,
   motor_home_discount_offers boolean DEFAULT false,
   motor_home_vendor text not null,
   motor_home_dealer_rating int not null,
   user_id int not null REFERENCES users(user_id) ON DELETE CASCADE,
   user_phone text,
   user_email text,
   motor_home_active boolean DEFAULT true,
   motor_home_ad_create_at timestamptz DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE motor_home_type (
   id bigserial PRiMARY KEY,
   title_en text not null,
   title_fr text not null,
   title_gr text not null,
   title_sw text not null,
   title_sp text not null,
   title_ru text not null,
   title_pl text not null,
   extra_create_at timestamptz DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE motor_home_features (
   id bigserial PRiMARY KEY,
   title_en text not null,
   title_fr text not null,
   title_gr text not null,
   title_sw text not null,
   title_sp text not null,
   title_ru text not null,
   title_pl text not null,
   extra_create_at timestamptz DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE motor_home_interior_features (
   id bigserial PRiMARY KEY,
   title_en text not null,
   title_fr text not null,
   title_gr text not null,
   title_sw text not null,
   title_sp text not null,
   title_ru text not null,
   title_pl text not null,
   extra_create_at timestamptz DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE truck_makes(
   truck_make_id bigserial PRiMARY KEY,
   truck_make_name text not null
);

CREATE TABLE truck_models(
   truck_model_id bigserial PRiMARY KEY,
   truck_model_name text not null,
   truck_make_id int not null REFERENCES truck_makes(truck_make_id) ON DELETE CASCADE
);

CREATE TABLE trucks (
   truck_id bigserial PRiMARY KEY,
   truck_make text not null,
   truck_model text not null,
   truck_describtion text not null,
   truck_images_url text [],
   truck_images_name text [],
   truck_video_link text,
   truck_condition text not null,
   truck_category text not null,
   truck_firt_date text not null,
   truck_firt_date_year int not null,
   truck_kilometre int not null,
   truck_price int not null,
   truck_price_type text not null,
   truck_vat text not null,
   truck_power int not null,
   truck_country text not null,
   truck_city_zipcode text not null,
   truck_radius int not null,
   truck_fuel_type text not null,
   truck_transmission text not null,
   truck_emission_class text not null,
   truck_emissions_sticker text not null,
   truck_features int [],
   truck_air_conditioning text not null,
   truck_axles int not null,
   truck_wheel_formula text not null,
   truck_gvw int not null,
   truck_hydraulic_installation text not null,
   truck_trailer_coupling_fix boolean DEFAULT false,
   truck_cruise_control text not null,
   truck_driving_cab text not null,
   truck_interior_features int [],
   truck_exterior_colour text not null,
   truck_damaged text not null,
   truck_full_service_history boolean DEFAULT false,
   truck_municipal boolean DEFAULT false,
   truck_new_hu boolean DEFAULT false,
   truck_renting_possible boolean DEFAULT false,
   truck_discount_offers boolean DEFAULT false,
   truck_vendor text not null,
   truck_dealer_rating int not null,
   user_id int not null REFERENCES users(user_id) ON DELETE CASCADE,
   user_phone text,
   user_email text,
   truck_active boolean DEFAULT true,
   truck_ad_create_at timestamptz DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE truck_features (
   id bigserial PRiMARY KEY,
   title_en text not null,
   title_fr text not null,
   title_gr text not null,
   title_sw text not null,
   title_sp text not null,
   title_ru text not null,
   title_pl text not null,
   extra_create_at timestamptz DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE truck_interior_features (
   id bigserial PRiMARY KEY,
   title_en text not null,
   title_fr text not null,
   title_gr text not null,
   title_sw text not null,
   title_sp text not null,
   title_ru text not null,
   title_pl text not null,
   extra_create_at timestamptz DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE trailer_makes(
   trailer_make_id bigserial PRiMARY KEY,
   trailer_make_name text not null
);

CREATE TABLE trailer_models(
   trailer_model_id bigserial PRiMARY KEY,
   trailer_model_name text not null,
   trailer_make_id int not null REFERENCES trailer_makes(trailer_make_id) ON DELETE CASCADE
);

CREATE TABLE trailers (
   trailer_id bigserial PRiMARY KEY,
   trailer_make text not null,
   trailer_model text not null,
   trailer_describtion text not null,
   trailer_images_url text [],
   trailer_images_name text [],
   trailer_video_link text,
   trailer_condition text not null,
   trailer_category text not null,
   trailer_firt_date text not null,
   trailer_firt_date_year int not null,
   trailer_price int not null,
   trailer_price_type text not null,
   trailer_vat text not null,
   trailer_country text not null,
   trailer_city_zipcode text not null,
   trailer_radius int not null,
   trailer_features int [],
   trailer_axles int not null,
   trailer_gvw int not null,
   trailer_load_capacity int not null,
   trailer_security text [],
   trailer_new_hu boolean DEFAULT false,
   trailer_renting_possible boolean DEFAULT false,
   trailer_discount_offers boolean DEFAULT false,
   trailer_vendor text not null,
   trailer_dealer_rating int not null,
   user_id int not null REFERENCES users(user_id) ON DELETE CASCADE,
   user_phone text,
   user_email text,
   trailer_active boolean DEFAULT true,
   trailer_ad_create_at timestamptz DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE trailer_features (
   id bigserial PRiMARY KEY,
   title_en text not null,
   title_fr text not null,
   title_gr text not null,
   title_sw text not null,
   title_sp text not null,
   title_ru text not null,
   title_pl text not null,
   extra_create_at timestamptz DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE van_makes(
   van_make_id bigserial PRiMARY KEY,
   van_make_name text not null
);

CREATE TABLE van_models(
   van_model_id bigserial PRiMARY KEY,
   van_model_name text not null,
   van_make_id int not null REFERENCES van_makes(van_make_id) ON DELETE CASCADE
);

CREATE TABLE vans (
   van_id bigserial PRiMARY KEY,
   van_make text not null,
   van_model text not null,
   van_describtion text not null,
   van_images_url text [],
   van_images_name text [],
   van_video_link text,
   van_condition text not null,
   van_category text not null,
   van_firt_date text not null,
   van_firt_date_year int not null,
   van_kilometre int not null,
   van_price int not null,
   van_price_type text not null,
   van_vat text not null,
   van_power int not null,
   van_country text not null,
   van_city_zipcode text not null,
   van_radius int not null,
   van_fuel_type text not null,
   van_transmission text not null,
   van_emission_class text not null,
   van_emissions_sticker text not null,
   van_features int [],
   van_air_conditioning text not null,
   van_gvw int not null,
   van_parking_sensors text not null,
   van_sliding_door text not null,
   van_driving_cab text not null,
   van_number_of_seats int not null,
   van_cruise_control text not null,
   van_trailer_coupling_fix boolean DEFAULT false,
   van_interior_features int [],
   van_exterior_colour text not null,
   van_damaged text not null,
   van_approved_used_programme text not null,
   van_full_service_history boolean DEFAULT false,
   van_municipal boolean DEFAULT false,
   van_new_hu boolean DEFAULT false,
   van_renting_possible boolean DEFAULT false,
   van_discount_offers boolean DEFAULT false,
   van_vendor text not null,
   van_dealer_rating int not null,
   user_id int not null REFERENCES users(user_id) ON DELETE CASCADE,
   user_phone text,
   user_email text,
   van_active boolean DEFAULT true,
   van_ad_create_at timestamptz DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE van_features (
   id bigserial PRiMARY KEY,
   title_en text not null,
   title_fr text not null,
   title_gr text not null,
   title_sw text not null,
   title_sp text not null,
   title_ru text not null,
   title_pl text not null,
   extra_create_at timestamptz DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE van_interior_features (
   id bigserial PRiMARY KEY,
   title_en text not null,
   title_fr text not null,
   title_gr text not null,
   title_sw text not null,
   title_sp text not null,
   title_ru text not null,
   title_pl text not null,
   extra_create_at timestamptz DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE semi_trailer_truck_makes(
   semi_trailer_truck_make_id bigserial PRiMARY KEY,
   semi_trailer_truck_make_name text not null
);

CREATE TABLE semi_trailer_truck_models(
   semi_trailer_truck_model_id bigserial PRiMARY KEY,
   semi_trailer_truck_model_name text not null,
   semi_trailer_truck_make_id int not null REFERENCES semi_trailer_truck_makes(semi_trailer_truck_make_id) ON DELETE CASCADE
);

CREATE TABLE semi_trailer_trucks (
   truck_id bigserial PRiMARY KEY,
   truck_make text not null,
   truck_model text not null,
   truck_describtion text not null,
   truck_images_url text [],
   truck_images_name text [],
   truck_video_link text,
   truck_condition text not null,
   truck_category text not null,
   truck_firt_date text not null,
   truck_firt_date_year int not null,
   truck_kilometre int not null,
   truck_price int not null,
   truck_price_type text not null,
   truck_vat text not null,
   truck_power int not null,
   truck_country text not null,
   truck_city_zipcode text not null,
   truck_radius int not null,
   truck_fuel_type text not null,
   truck_transmission text not null,
   truck_emission_class text not null,
   truck_emissions_sticker text not null,
   truck_features int [],
   truck_air_conditioning text not null,
   truck_axles int not null,
   truck_wheel_formula text not null,
   truck_gvw int not null,
   truck_cruise_control text not null,
   truck_hydraulic_installation text not null,
   truck_driving_cab text not null,
   truck_interior_features int [],
   truck_exterior_colour text not null,
   truck_damaged text not null,
   truck_full_service_history boolean DEFAULT false,
   truck_new_hu boolean DEFAULT false,
   truck_renting_possible boolean DEFAULT false,
   truck_discount_offers boolean DEFAULT false,
   truck_vendor text not null,
   truck_dealer_rating int not null,
   user_id int not null REFERENCES users(user_id) ON DELETE CASCADE,
   user_phone text,
   user_email text,
   truck_active boolean DEFAULT true,
   truck_ad_create_at timestamptz DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE semi_trailer_truck_features (
   id bigserial PRiMARY KEY,
   title_en text not null,
   title_fr text not null,
   title_gr text not null,
   title_sw text not null,
   title_sp text not null,
   title_ru text not null,
   title_pl text not null,
   extra_create_at timestamptz DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE semi_trailer_truck_interior_features (
   id bigserial PRiMARY KEY,
   title_en text not null,
   title_fr text not null,
   title_gr text not null,
   title_sw text not null,
   title_sp text not null,
   title_ru text not null,
   title_pl text not null,
   extra_create_at timestamptz DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE semi_trailer_makes(
   semi_trailer_make_id bigserial PRiMARY KEY,
   semi_trailer_make_name text not null
);

CREATE TABLE semi_trailer_models(
   semi_trailer_model_id bigserial PRiMARY KEY,
   semi_trailer_model_name text not null,
   semi_trailer_make_id int not null REFERENCES semi_trailer_makes(semi_trailer_make_id) ON DELETE CASCADE
);

CREATE TABLE semi_trailers (
   trailer_id bigserial PRiMARY KEY,
   trailer_make text not null,
   trailer_model text not null,
   trailer_describtion text not null,
   trailer_images_url text [],
   trailer_images_name text [],
   trailer_video_link text,
   trailer_condition text not null,
   trailer_category text not null,
   trailer_firt_date text not null,
   trailer_firt_date_year int not null,
   trailer_price int not null,
   trailer_price_type text not null,
   trailer_vat text not null,
   trailer_country text not null,
   trailer_city_zipcode text not null,
   trailer_radius int not null,
   trailer_features int [],
   trailer_axles int not null,
   trailer_gvw int not null,
   trailer_load_capacity int not null,
   trailer_security text [],
   trailer_new_hu boolean DEFAULT false,
   trailer_renting_possible boolean DEFAULT false,
   trailer_discount_offers boolean DEFAULT false,
   trailer_vendor text not null,
   trailer_dealer_rating int not null,
   user_id int not null REFERENCES users(user_id) ON DELETE CASCADE,
   user_phone text,
   user_email text,
   trailer_active boolean DEFAULT true,
   trailer_ad_create_at timestamptz DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE semi_trailer_features (
   id bigserial PRiMARY KEY,
   title_en text not null,
   title_fr text not null,
   title_gr text not null,
   title_sw text not null,
   title_sp text not null,
   title_ru text not null,
   title_pl text not null,
   extra_create_at timestamptz DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE coache_makes(
   coache_make_id bigserial PRiMARY KEY,
   coache_make_name text not null
);

CREATE TABLE coache_models(
   coache_model_id bigserial PRiMARY KEY,
   coache_model_name text not null,
   coache_make_id int not null REFERENCES coache_makes(coache_make_id) ON DELETE CASCADE
);

CREATE TABLE coaches (
   coache_id bigserial PRiMARY KEY,
   coache_make text not null,
   coache_model text not null,
   coache_describtion text not null,
   coache_images_url text [],
   coache_images_name text [],
   coache_video_link text,
   coache_condition text not null,
   coache_category text not null,
   coache_firt_date text not null,
   coache_firt_date_year int not null,
   coache_kilometre int not null,
   coache_price int not null,
   coache_price_type text not null,
   coache_vat text not null,
   coache_power int not null,
   coache_country text not null,
   coache_city_zipcode text not null,
   coache_radius int not null,
   coache_fuel_type text not null,
   coache_transmission text not null,
   coache_emission_class text not null,
   coache_emissions_sticker text not null,
   coache_features int [],
   coache_air_conditioning text not null,
   coache_number_of_seats int not null,
   coache_cruise_control text not null,
   coache_trailer_coupling_fix boolean DEFAULT false,
   coache_interior_features int [],
   coache_exterior_colour text not null,
   coache_damaged text not null,
   coache_full_service_history boolean DEFAULT false,
   coache_new_hu boolean DEFAULT false,
   coache_renting_possible boolean DEFAULT false,
   coache_discount_offers boolean DEFAULT false,
   coache_vendor text not null,
   coache_dealer_rating int not null,
   user_id int not null REFERENCES users(user_id) ON DELETE CASCADE,
   user_phone text,
   user_email text,
   coache_active boolean DEFAULT true,
   coache_ad_create_at timestamptz DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE coache_features (
   id bigserial PRiMARY KEY,
   title_en text not null,
   title_fr text not null,
   title_gr text not null,
   title_sw text not null,
   title_sp text not null,
   title_ru text not null,
   title_pl text not null,
   extra_create_at timestamptz DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE coache_interior_features (
   id bigserial PRiMARY KEY,
   title_en text not null,
   title_fr text not null,
   title_gr text not null,
   title_sw text not null,
   title_sp text not null,
   title_ru text not null,
   title_pl text not null,
   extra_create_at timestamptz DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE agricultural_vehicle_makes(
   agricultural_vehicle_make_id bigserial PRiMARY KEY,
   agricultural_vehicle_make_name text not null
);

CREATE TABLE agricultural_vehicle_models(
   agricultural_vehicle_model_id bigserial PRiMARY KEY,
   agricultural_vehicle_model_name text not null,
   agricultural_vehicle_make_id int not null REFERENCES agricultural_vehicle_makes(agricultural_vehicle_make_id) ON DELETE CASCADE
);

CREATE TABLE agricultural_vehicles(
   vehicle_id bigserial PRiMARY KEY,
   vehicle_make text not null,
   vehicle_model text not null,
   vehicle_describtion text not null,
   vehicle_images_url text [],
   vehicle_images_name text [],
   vehicle_video_link text,
   vehicle_condition text not null,
   vehicle_category text not null,
   vehicle_price int not null,
   vehicle_price_type text not null,
   vehicle_vat text not null,
   vehicle_power int not null,
   vehicle_firt_date text not null,
   vehicle_construction_year int not null,
   vehicle_operating_hours int not null,
   vehicle_country text not null,
   vehicle_city_zipcode text not null,
   vehicle_radius int not null,
   vehicle_features int [],
   vehicle_air_conditioning text not null,
   vehicle_interior_features int [],
   vehicle_emissions_sticker text not null,
   vehicle_security text [],
   vehicle_municipal boolean DEFAULT false,
   vehicle_new_hu boolean DEFAULT false,
   vehicle_renting_possible boolean DEFAULT false,
   vehicle_discount_offers boolean DEFAULT false,
   vehicle_vendor text not null,
   vehicle_dealer_rating int not null,
   user_id int not null REFERENCES users(user_id) ON DELETE CASCADE,
   user_phone text,
   user_email text,
   vehicle_active boolean DEFAULT true,
   vehicle_ad_create_at timestamptz DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE agricultural_vehicle_features (
   id bigserial PRiMARY KEY,
   title_en text not null,
   title_fr text not null,
   title_gr text not null,
   title_sw text not null,
   title_sp text not null,
   title_ru text not null,
   title_pl text not null,
   extra_create_at timestamptz DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE agricultural_vehicle_interior_features (
   id bigserial PRiMARY KEY,
   title_en text not null,
   title_fr text not null,
   title_gr text not null,
   title_sw text not null,
   title_sp text not null,
   title_ru text not null,
   title_pl text not null,
   extra_create_at timestamptz DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE construction_makes(
   construction_make_id bigserial PRiMARY KEY,
   construction_make_name text not null
);

CREATE TABLE construction_models(
   construction_model_id bigserial PRiMARY KEY,
   construction_model_name text not null,
   construction_make_id int not null REFERENCES construction_makes(construction_make_id) ON DELETE CASCADE
);

CREATE TABLE construction_machines (
   machine_id bigserial PRiMARY KEY,
   machine_make text not null,
   machine_model text not null,
   machine_describtion text not null,
   machine_images_url text [],
   machine_images_name text [],
   machine_video_link text,
   machine_condition text not null,
   machine_category text not null,
   machine_price int not null,
   machine_price_type text not null,
   machine_vat text not null,
   machine_firt_date text not null,
   machine_construction_year int not null,
   machine_operating_hours int not null,
   machine_country text not null,
   machine_city_zipcode text not null,
   machine_radius int not null,
   machine_features int [],
   machine_emissions_sticker text not null,
   machine_safety int [],
   machine_renting_possible boolean DEFAULT false,
   machine_road_licence boolean DEFAULT false,
   machine_discount_offers boolean DEFAULT false,
   machine_vendor text not null,
   machine_dealer_rating int not null,
   user_id int not null REFERENCES users(user_id) ON DELETE CASCADE,
   user_phone text,
   user_email text,
   machine_active boolean DEFAULT true,
   machine_ad_create_at timestamptz DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE construction_features (
   id bigserial PRiMARY KEY,
   title_en text not null,
   title_fr text not null,
   title_gr text not null,
   title_sw text not null,
   title_sp text not null,
   title_ru text not null,
   title_pl text not null,
   extra_create_at timestamptz DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE construction_safety (
   id bigserial PRiMARY KEY,
   title_en text not null,
   title_fr text not null,
   title_gr text not null,
   title_sw text not null,
   title_sp text not null,
   title_ru text not null,
   title_pl text not null,
   extra_create_at timestamptz DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE forklift_makes(
   forklift_make_id bigserial PRiMARY KEY,
   forklift_make_name text not null
);

CREATE TABLE forklift_models(
   forklift_model_id bigserial PRiMARY KEY,
   forklift_model_name text not null,
   forklift_make_id int not null REFERENCES forklift_makes(forklift_make_id) ON DELETE CASCADE
);

CREATE TABLE forklift_trucks (
   forklift_id bigserial PRiMARY KEY,
   forklift_make text not null,
   forklift_model text not null,
   forklift_describtion text not null,
   forklift_images_url text [],
   forklift_images_name text [],
   forklift_video_link text,
   forklift_condition text not null,
   forklift_category text not null,
   forklift_price int not null,
   forklift_price_type text not null,
   forklift_vat text not null,
   forklift_firt_date text not null,
   forklift_construction_year int not null,
   forklift_operating_hours int not null,
   forklift_country text not null,
   forklift_city_zipcode text not null,
   forklift_radius int not null,
   forklift_fuel_type text not null,
   forklift_transmission text not null,
   forklift_features int [],
   forklift_lifting_capacity int not null,
   forklift_lifting_height int not null,
   forklift_height int not null,
   forklift_security text [],
   forklift_renting_possible boolean DEFAULT false,
   forklift_discount_offers boolean DEFAULT false,
   forklift_vendor text not null,
   forklift_dealer_rating int not null,
   user_id int not null REFERENCES users(user_id) ON DELETE CASCADE,
   user_phone text,
   user_email text,
   forklift_active boolean DEFAULT true,
   forklift_ad_create_at timestamptz DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE forklift_features (
   id bigserial PRiMARY KEY,
   title_en text not null,
   title_fr text not null,
   title_gr text not null,
   title_sw text not null,
   title_sp text not null,
   title_ru text not null,
   title_pl text not null,
   extra_create_at timestamptz DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE ads_cards (
   card_id bigserial PRiMARY KEY,
   card_title text not null,
   card_text text not null,
   card_image_url text,
   card_image_name text,
   card_link text not null,
   card_active boolean DEFAULT true,
   card_create_at timestamptz DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE sliders (
   slider_id bigserial PRiMARY KEY,
   slider_title text,
   slider_image_url text,
   slider_image_name text,
   slider_link text,
   slider_active boolean DEFAULT true,
   slider_create_at timestamptz DEFAULT CURRENT_TIMESTAMP
);