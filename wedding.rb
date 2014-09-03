require 'sinatra'
require 'data_mapper'

DataMapper::setup(:default, "sqlite3://#{Dir.pwd}/wedding.db")
#This is where we would add the business logic, in the model for each "table"
	class Guestbook
	    include DataMapper::Resource
	    property :id, Serial
		property :username, Text, :required => true
        property :entry, Text, :required => true
		property :created_at, DateTime
		property :updated_at, DateTime
	end
DataMapper.auto_upgrade!

get '/' do
    erb :home
end

get '/festivities' do
   erb :festivities 
end


get '/guestbook' do
    @entries = Guestbook.all
    erb :guestbook
end

post '/guestbook' do
    entry = Guestbook.new
    entry.username = params[:username]
    entry.entry = params[:entry]
    entry.save
    redirect '/guestbook'    
end

get '/our-story' do
    erb :ourstory 
end
