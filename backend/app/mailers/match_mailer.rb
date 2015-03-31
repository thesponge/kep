class MatchMailer < ApplicationMailer
  
  def match_email(user)
    @user = user
    @url  = 'http://localhost:4200/apps/match/dashboard/'
    mail(to: @user.email, subject: 'Sample Email')
  end
  
end
