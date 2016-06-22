#!/usr/bin/env ruby
exec 'uglifyjs public/src/js/main.js public/src/js/routes.js public/src/js/controller/*.js public/src/js/directives/*.js public/src/js/services/* --stats -o public/cleverdesk-frontend.min.js'
