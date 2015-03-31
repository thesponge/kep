class MatchMailer < ApplicationMailer
  
  def match_email(user,what,id)
    @user = user
    @url  = 'http://localhost:4200/apps/match/dashboard/' + what + "/" + id.to_s 
    mail(to: @user.email, subject: 'Sample Email')
  end
  
end
