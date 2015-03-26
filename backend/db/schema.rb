# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150326010925) do

  create_table "accounts", force: :cascade do |t|
    t.integer "user_id"
    t.text    "bio"
    t.string  "avatar"
    t.string  "url"
  end

  create_table "accounts_languages", id: false, force: :cascade do |t|
    t.integer "account_id"
    t.integer "language_id"
  end

  add_index "accounts_languages", ["account_id"], name: "index_accounts_languages_on_account_id"
  add_index "accounts_languages", ["language_id"], name: "index_accounts_languages_on_language_id"

  create_table "accounts_skills", id: false, force: :cascade do |t|
    t.integer "account_id"
    t.integer "skill_id"
  end

  add_index "accounts_skills", ["account_id"], name: "index_accounts_skills_on_account_id"
  add_index "accounts_skills", ["skill_id"], name: "index_accounts_skills_on_skill_id"

  create_table "job_compensations", force: :cascade do |t|
    t.string "compensation", null: false
  end

  create_table "job_compensations_jobs", id: false, force: :cascade do |t|
    t.integer "job_id"
    t.integer "job_compensation_id"
  end

  add_index "job_compensations_jobs", ["job_compensation_id"], name: "index_job_compensations_jobs_on_job_compensation_id"
  add_index "job_compensations_jobs", ["job_id"], name: "index_job_compensations_jobs_on_job_id"

  create_table "job_priorities", force: :cascade do |t|
    t.text "priority", null: false
  end

  create_table "job_priorities_jobs", id: false, force: :cascade do |t|
    t.integer "job_id"
    t.integer "job_priority_id"
  end

  add_index "job_priorities_jobs", ["job_id"], name: "index_job_priorities_jobs_on_job_id"
  add_index "job_priorities_jobs", ["job_priority_id"], name: "index_job_priorities_jobs_on_job_priority_id"

  create_table "job_types", force: :cascade do |t|
    t.string   "category",   null: false
    t.string   "option",     null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "job_types", ["category", "option"], name: "index_job_types_on_category_and_option", unique: true

  create_table "job_types_jobs", id: false, force: :cascade do |t|
    t.integer "job_id"
    t.integer "job_type_id"
  end

  add_index "job_types_jobs", ["job_id"], name: "index_job_types_jobs_on_job_id"
  add_index "job_types_jobs", ["job_type_id"], name: "index_job_types_jobs_on_job_type_id"

  create_table "jobs", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "title",          null: false
    t.text     "description",    null: false
    t.boolean  "travel"
    t.boolean  "driver_license"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "jobs", ["user_id"], name: "index_jobs_on_user_id"

  create_table "languages", force: :cascade do |t|
    t.string "iso"
    t.string "common"
  end

  create_table "request_compensations", force: :cascade do |t|
    t.string "compensation", null: false
  end

  create_table "request_compensations_requests", id: false, force: :cascade do |t|
    t.integer "request_id"
    t.integer "request_compensation_id"
  end

  add_index "request_compensations_requests", ["request_compensation_id"], name: "req_compensation_id"
  add_index "request_compensations_requests", ["request_id"], name: "index_request_compensations_requests_on_request_id"

  create_table "request_priorities", force: :cascade do |t|
    t.string "priority", null: false
  end

  create_table "request_priorities_requests", id: false, force: :cascade do |t|
    t.integer "request_id"
    t.integer "request_priority_id"
  end

  add_index "request_priorities_requests", ["request_id"], name: "index_request_priorities_requests_on_request_id"

  create_table "request_types", force: :cascade do |t|
    t.string   "category",   null: false
    t.string   "option",     null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "request_types", ["category", "option"], name: "index_request_types_on_category_and_option", unique: true

  create_table "request_types_requests", id: false, force: :cascade do |t|
    t.integer "request_id"
    t.integer "request_type_id"
  end

  add_index "request_types_requests", ["request_id"], name: "index_request_types_requests_on_request_id"
  add_index "request_types_requests", ["request_type_id"], name: "index_request_types_requests_on_request_type_id"

  create_table "requests", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "title",          null: false
    t.text     "description",    null: false
    t.boolean  "travel"
    t.boolean  "driver_license"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "requests", ["user_id"], name: "index_requests_on_user_id"

  create_table "skills", force: :cascade do |t|
    t.string "name",  null: false
    t.string "proof"
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "authentication_token"
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string   "unconfirmed_email"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
  add_index "users", ["email"], name: "index_users_on_email", unique: true
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true

end
