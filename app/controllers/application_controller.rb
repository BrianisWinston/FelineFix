class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  # protect_from_forgery with: :null_session

  helper_method :current_user, :logged_in?

  def login(user)
    user.reset_session_token
    session[:session_token] = user.reset_session_token
    @current_user = user
  end

  def logout
    current_user.reset_session_token
    session[:session_token] = nil
  end

  def logged_in?
    !!current_user
  end

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def require_login
    redirect_to api_session_url unless logged_in?
  end
end
