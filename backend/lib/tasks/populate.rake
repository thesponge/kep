require 'ffaker'

namespace :db do
  task populate: :environment do
    Job.destroy_all
     
    10.times do 
     Job.create(
        title: FFaker::HipsterIpsum.words(10).join(' '),
        description: FFaker::HipsterIpsum.words(100).join(' '),
        travel: FFaker::Boolean.maybe
      )
      
      
      JobType.create(
        category: FFaker::HipsterIpsum.word, 
        option: FFaker::HipsterIpsum.word 
      )
    end
    
    
    10.times do
      Request.create(
        title: FFaker::HipsterIpsum.words(10).join(' '),
        description: FFaker::HipsterIpsum.words(100).join(' '),
        travel: FFaker::Boolean.maybe
      )
    
      RequestType.create(
        category: FFaker::HipsterIpsum.word,  
        option: FFaker::HipsterIpsum.word  
      )
    end
  end
end
