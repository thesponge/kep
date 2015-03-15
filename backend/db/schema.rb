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

ActiveRecord::Schema.define(version: 20150314103806) do

  create_table "job_compensations", force: true do |t|
    t.string "compensation", null: false
  end

  create_table "job_priorities", force: true do |t|
    t.text "priority", null: false
  end

  create_table "job_types", force: true do |t|
    t.string   "type",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "jobs", force: true do |t|
    t.string   "title",          limit: nil, null: false
    t.text     "description",                null: false
    t.boolean  "travel"
    t.boolean  "driver_license"
    t.boolean  "tech"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "jobs", ["user_id"], name: "index_jobs_on_user_id"

  create_table "jobs_job_compensations", force: true do |t|
    t.integer "job_id"
    t.integer "job_compensation"
  end

  add_index "jobs_job_compensations", ["job_id"], name: "index_jobs_job_compensations_on_job_id"

  create_table "jobs_job_priorities", force: true do |t|
    t.integer "job_id"
    t.integer "job_priority"
  end

  add_index "jobs_job_priorities", ["job_id"], name: "index_jobs_job_priorities_on_job_id"

  create_table "jobs_job_types", force: true do |t|
    t.integer "job_id"
    t.integer "job_type"
  end

  add_index "jobs_job_types", ["job_id"], name: "index_jobs_job_types_on_job_id"

  create_table "request_compensations", force: true do |t|
    t.string "compensation", null: false
  end

  create_table "request_priorities", force: true do |t|
    t.string "priority", null: false
  end

  create_table "request_types", force: true do |t|
    t.string   "type",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "requests", force: true do |t|
    t.string   "title",       limit: nil, null: false
    t.text     "description",             null: false
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "requests", ["user_id"], name: "index_requests_on_user_id"

  create_table "requests_request_compensations", force: true do |t|
    t.integer "requests_id"
    t.integer "request_compensations"
  end

  add_index "requests_request_compensations", ["requests_id"], name: "index_requests_request_compensations_on_requests_id"

  create_table "requests_request_priorities", force: true do |t|
    t.integer "request_id"
    t.integer "request_priority"
  end

  add_index "requests_request_priorities", ["request_id"], name: "index_requests_request_priorities_on_request_id"

  create_table "requests_request_types", force: true do |t|
    t.integer "request_id"
    t.integer "request_type"
  end

  add_index "requests_request_types", ["request_id"], name: "index_requests_request_types_on_request_id"

  create_table "users", force: true do |t|
    t.string   "email",                  limit: nil, default: "", null: false
    t.string   "encrypted_password",     limit: nil, default: "", null: false
    t.string   "reset_password_token",   limit: nil
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",                      default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip",     limit: nil
    t.string   "last_sign_in_ip",        limit: nil
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "authentication_token",   limit: nil
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true

end
