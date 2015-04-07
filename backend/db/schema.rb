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

ActiveRecord::Schema.define(version: 20150407232052) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "accounts", force: :cascade do |t|
    t.integer "user_id"
    t.text    "bio"
    t.string  "avatar"
    t.string  "url"
    t.boolean "available"
    t.string  "display_name"
  end

  create_table "accounts_affiliations", id: false, force: :cascade do |t|
    t.integer "account_id"
    t.integer "affiliation_id"
  end

  add_index "accounts_affiliations", ["account_id"], name: "index_accounts_affiliations_on_account_id", using: :btree
  add_index "accounts_affiliations", ["affiliation_id"], name: "index_accounts_affiliations_on_affiliation_id", using: :btree

  create_table "affiliations", force: :cascade do |t|
    t.string "affiliation", null: false
    t.string "link"
  end

  create_table "assignment_priorities", force: :cascade do |t|
    t.text "priority", null: false
  end

  create_table "assignment_priorities_assignments", id: false, force: :cascade do |t|
    t.integer "assignment_id"
    t.integer "assignment_priority_id"
  end

  add_index "assignment_priorities_assignments", ["assignment_id"], name: "index_assignment_priorities_assignments_on_assignment_id", using: :btree
  add_index "assignment_priorities_assignments", ["assignment_priority_id"], name: "idx_assignment_priorities_assignments_on_assignment_priority_id", using: :btree

  create_table "assignment_rewards", force: :cascade do |t|
    t.string "reward", null: false
    t.string "icon"
  end

  create_table "assignment_rewards_assignments", id: false, force: :cascade do |t|
    t.integer "assignment_id"
    t.integer "assignment_reward_id"
  end

  add_index "assignment_rewards_assignments", ["assignment_id"], name: "index_assignment_rewards_assignments_on_assignment_id", using: :btree
  add_index "assignment_rewards_assignments", ["assignment_reward_id"], name: "index_assignment_rewards_assignments_on_assignment_reward_id", using: :btree

  create_table "assignments", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "title",          null: false
    t.text     "description",    null: false
    t.boolean  "travel"
    t.boolean  "driver_license"
    t.datetime "start_date"
    t.datetime "end_date"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "assignments", ["user_id"], name: "index_assignments_on_user_id", using: :btree

  create_table "intention_maps", force: :cascade do |t|
    t.integer  "intention_map_id"
    t.string   "intention_map_type"
    t.integer  "intention_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "intention_maps", ["intention_id"], name: "index_intention_maps_on_intention_id", using: :btree

  create_table "intentions", force: :cascade do |t|
    t.string "intention", null: false
  end

  create_table "language_maps", force: :cascade do |t|
    t.integer  "language_map_id"
    t.string   "language_map_type"
    t.integer  "language_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "language_maps", ["language_id"], name: "index_language_maps_on_language_id", using: :btree

  create_table "languages", force: :cascade do |t|
    t.string "iso"
    t.string "common"
  end

  create_table "location_maps", force: :cascade do |t|
    t.integer  "location_map_id"
    t.string   "location_map_type"
    t.integer  "location_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "location_maps", ["location_id"], name: "index_location_maps_on_location_id", using: :btree

  create_table "locations", force: :cascade do |t|
    t.string "country",   null: false
    t.string "state"
    t.string "city"
    t.float  "latitude"
    t.float  "longitude"
  end

  create_table "matches", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "r_id",                null: false
    t.integer  "j_id",                null: false
    t.integer  "resource_owner",      null: false
    t.integer  "assignment_owner",    null: false
    t.boolean  "accepted_assignment"
    t.boolean  "accepted_resource"
    t.boolean  "completed"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
  end

  add_index "matches", ["j_id", "r_id"], name: "index_matches_on_j_id_and_r_id", unique: true, using: :btree
  add_index "matches", ["user_id"], name: "index_matches_on_user_id", using: :btree

  create_table "resource_priorities", force: :cascade do |t|
    t.string "priority", null: false
  end

  create_table "resource_priorities_resources", id: false, force: :cascade do |t|
    t.integer "resource_id"
    t.integer "resource_priority_id"
  end

  add_index "resource_priorities_resources", ["resource_id"], name: "index_resource_priorities_resources_on_resource_id", using: :btree

  create_table "resources", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "title",          null: false
    t.text     "description",    null: false
    t.boolean  "travel"
    t.boolean  "driver_license"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "resources", ["user_id"], name: "index_resources_on_user_id", using: :btree

  create_table "skill_maps", force: :cascade do |t|
    t.integer  "skill_map_id"
    t.string   "skill_map_type"
    t.integer  "skill_id"
    t.string   "proof"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "skill_maps", ["skill_id"], name: "index_skill_maps_on_skill_id", using: :btree

  create_table "skills", force: :cascade do |t|
    t.string "category", null: false
    t.string "name",     null: false
    t.string "icon"
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

  add_index "users", ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true, using: :btree
  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

end
