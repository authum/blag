guard 'jekyll-plus', extensions: %w[slim yml scss js md html xml txt rb], serve: true do
  watch /.*/
  ignore /^build/
end

guard 'livereload' do
  watch /^src/
end

guard 'livereload' do
  watch(%r{app/views/.+\.(erb|haml|slim)$})
  watch(%r{app/helpers/.+\.rb})
  watch(%r{public/.+\.(css|js|html)})
  watch(%r{config/locales/.+\.yml})
  # Rails Assets Pipeline
  watch(%r{(app|vendor)(/assets/\w+/(.+\.(css|js|html))).*}) { |m| "/assets/#{m[3]}" }
end
