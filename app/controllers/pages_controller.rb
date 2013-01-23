class PagesController < ApplicationController
  skip_before_filter :require_login, :only => [:home, :signup]
  def home
  end

  def signup
  end
end
