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

desc 'Run Jekyll to generate site'
task :build do
  puts '* Generating static site with Jekyll'
  puts `jekyll --no-auto`
end

desc 'Generate and sync entire site'
task :publish => [:build, :sync] do
end