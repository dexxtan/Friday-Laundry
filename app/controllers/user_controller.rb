class UserController < ApplicationController
  skip_before_filter :require_login, :only => [:create, :fbcreate]
  def create
    @user = User.new
    @user.email = params[:email]
    @user.save
    
    session[:current_user_id] = @user.id
    
    redirect_to "/signup"
  end
  
  def fbcreate
    @user = User.new
    @user.name = params[:name]
    @user.save
    
    session[:current_user_id] = @user.id
    
    render :json => @user
  end
end
