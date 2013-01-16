class UserController < ApplicationController
  def create
    @user = User.new
    @user.email = params[:email]
    @user.save
    
    redirect_to "/signup"
  end
end
