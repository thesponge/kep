namespace :db do
  task populate: :environment do
    Job.destroy_all
    
    
    10.times do 
     Job.create(
        title: Faker::HipsterIpsum.words(10).join(' '),
        description: Faker::HipsterIpsum.words(100)
.join(' ')
      ) 
      
      JobType.create(
        category: Faker::HipsterIpsum.words(1)  
      )
    end
    
  end
end
