require 'bundler'

Bundler.require

require './lib/server'

run Sinatra::Application
