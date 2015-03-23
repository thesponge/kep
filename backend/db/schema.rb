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

ActiveRecord::Schema.define(version: 20150322204410) do

  create_table "job_compensations", force: :cascade do |t|
    t.string "compensation", limit: 255, null: false
  end

  create_table "job_compensations_jobs", force: :cascade do |t|
    t.integer "job_id"
    t.integer "job_compensation_id"
  end

  add_index "job_compensations_jobs", ["job_compensation_id"], name: "index_job_compensations_jobs_on_job_compensation_id"
  add_index "job_compensations_jobs", ["job_id"], name: "index_job_compensations_jobs_on_job_id"

  create_table "job_priorities", force: :cascade do |t|
    t.text "priority", null: false
  end

  create_table "job_priorities_jobs", force: :cascade do |t|
    t.integer "job_id"
    t.integer "job_priority_id"
  end

  add_index "job_priorities_jobs", ["job_id"], name: "index_job_priorities_jobs_on_job_id"
  add_index "job_priorities_jobs", ["job_priority_id"], name: "index_job_priorities_jobs_on_job_priority_id"

  create_table "job_types", force: :cascade do |t|
    t.string   "category",   limit: 255, null: false
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  create_table "job_types_jobs", force: :cascade do |t|
    t.integer "job_id"
    t.integer "job_type_id"
  end

  add_index "job_types_jobs", ["job_id"], name: "index_job_types_jobs_on_job_id"
  add_index "job_types_jobs", ["job_type_id"], name: "index_job_types_jobs_on_job_type_id"

  create_table "jobs", force: :cascade do |t|
    t.string   "title",          limit: 255, null: false
    t.text     "description",                null: false
    t.boolean  "travel"
    t.boolean  "driver_license"
    t.boolean  "tech"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "jobs", ["user_id"], name: "index_jobs_on_user_id"

  create_table "request_compensations", force: :cascade do |t|
    t.string "compensation", limit: 255, null: false
  end

  create_table "request_compensations_requests", force: :cascade do |t|
    t.integer "request_id"
    t.integer "request_compensation_id"
  end

  add_index "request_compensations_requests", ["request_compensation_id"], name: "req_compensation_id"
  add_index "request_compensations_requests", ["request_id"], name: "index_request_compensations_requests_on_request_id"

  create_table "request_priorities", force: :cascade do |t|
    t.string "priority", limit: 255, null: false
  end

  create_table "request_priorities_requests", force: :cascade do |t|
    t.integer "request_id"
    t.integer "request_priority_id"
  end

  add_index "request_priorities_requests", ["request_id"], name: "index_request_priorities_requests_on_request_id"

  create_table "request_types", force: :cascade do |t|
    t.string   "type",       limit: 255, null: false
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  create_table "request_types_requests", force: :cascade do |t|
    t.integer "request_id"
    t.integer "request_type_id"
  end

  add_index "request_types_requests", ["request_id"], name: "index_request_types_requests_on_request_id"
  add_index "request_types_requests", ["request_type_id"], name: "index_request_types_requests_on_request_type_id"

  create_table "requests", force: :cascade do |t|
    t.string   "title",       limit: 255, null: false
    t.text     "description",             null: false
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "requests", ["user_id"], name: "index_requests_on_user_id"

  create_table "users", force: :cascade do |t|
    t.string   "email",                  limit: 255, default: "", null: false
    t.string   "encrypted_password",     limit: 255, default: "", null: false
    t.string   "reset_password_token",   limit: 255
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",                      default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip",     limit: 255
    t.string   "last_sign_in_ip",        limit: 255
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "authentication_token",   limit: 255
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
  end

  add_index "users", ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
  add_index "users", ["email"], name: "index_users_on_email", unique: true
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true

end
