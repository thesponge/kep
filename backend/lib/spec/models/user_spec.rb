require "rails_helper"

describe User do
  before { @user = FactoryGirl.build(:user) }
  subject { @user }
  
  it { should validate_presence_of(:email) }
#  it {should respond_to(:email) }
#  it {should respond_to(:password) }
#  it {should respond_to(:password_confirmation) }
  
#  it { should be_valid}

end