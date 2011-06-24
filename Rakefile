task :default => :dev

desc 'Run Jekyll in development mode'
task :dev do
  puts '* Running Jekyll with auto-generation and server'
  puts `jekyll --auto --server`
end

desc 'rsync the contents of ./_site to the server'
task :sync do
  puts '* Publishing files to live server'
  puts `rsync -avz "_site/" ccchen920@chencharles.com:~/chencharles.com/`
end