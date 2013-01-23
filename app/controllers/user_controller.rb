class UserController < ApplicationController
  def create
    @user = User.new
    @user.email = params[:email]
    @user.save
    
    redirect_to "/signup"
  end
  
  def fbcreate
    @user = User.new
    @user.name = params[:name]
    @user.save
    
    render :json => @user
  end
end
