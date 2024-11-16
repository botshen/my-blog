# Rails 创建路由

- 创建路由

```ruby
Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :validation_codes, only: [:create]
    end
  end
end
```
- :api就是字符串api，只是功能更少
- 创建验证码的model
    - `⁠bin/rails g model user email:string name:string`
    - `⁠bin/rails g model ValidationCode email:string kind:string used_at:datetime`
    - 执行`⁠bin/rails db:migrate`
- 创建验证码的controller
    - bin/rails g controller validation\_codes create
- 创建items的controller（带层级）
    - bin/rails g controller Api::V1::Items
- 创建items的model
    - bin/rails g model item user\_id:integer amount:integer notes:text tags\_id:integer happen\_at datetime
- 使用kaminari实现分页
    - 在gemfile里面新增
      
gem 'kaminari'
 
  - 运行 bundle进行安装
  - bin/rails g kaminari:config 
- bin/rails routes