require 'ffaker'

namespace :db do
  task populate: :environment do
    Job.destroy_all
     
    10.times do 
     Job.create(
        title: FFaker::HipsterIpsum.words(10).join(' '),
        description: FFaker::HipsterIpsum.words(100)
.join(' ')
      ) 
      
      JobType.create(
        category: FFaker::HipsterIpsum.words(1)  
      )
    end
    
  end
end
