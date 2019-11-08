class UsersController < ApplicationController
    def index
        @users = User.all

        render json: @users
    end

    def show
        @user = User.find_by(id: params[:id])

        render json: @user
    end

    def google_login
        url= "https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=#{params["code"]}"
        response = HTTParty.get(url)
        data = response.parsed_response
        @user = User.find_or_initialize_by(email: data["email"])
        @user.first_name = data["name"]
        @user.password = SecureRandom.hex(8)

        if @user.save
            render json: @user
        else
            render :json => {:errors => @user.errors.full_messages}, :status => 422
        end
    end
end