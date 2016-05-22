use Rack::Static, :urls => [""], :root => '.', :index => 'index.html'

run lambda { |env| }
