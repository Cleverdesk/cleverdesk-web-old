require 'rjack-slf4j'
log = RJack::SLF4J[ "net.cleverdesk.frontend" ]

[
'Cleverdesk frontend  Copyright (C) 2016  Cleverdesk Team',
'This program comes with ABSOLUTELY NO WARRANTY.',
'This is free software, and you are welcome to redistribute it',
'under certain conditions.'
].each do |line|
  log.info(line)
end

use Rack::Static, :urls => [""], :root => './public', :index => 'index.html'

run lambda { |env| }
