import{_ as s,o as a,c as l,a0 as e}from"./chunks/framework.CwR-YdiG.js";const c=JSON.parse('{"title":"Rails 创建路由","description":"","frontmatter":{},"headers":[],"relativePath":"markdown-examples.md","filePath":"markdown-examples.md"}'),n={name:"markdown-examples.md"};function t(r,i,p,d,h,k){return a(),l("div",null,i[0]||(i[0]=[e(`<h1 id="rails-创建路由" tabindex="-1">Rails 创建路由 <a class="header-anchor" href="#rails-创建路由" aria-label="Permalink to &quot;Rails 创建路由&quot;">​</a></h1><ul><li>创建路由</li></ul><div class="language-ruby vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ruby</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Rails</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.application.routes.draw </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">do</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  namespace </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:api</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> do</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    namespace </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:v1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> do</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      resources </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:validation_codes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">only:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    end</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  end</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span></span></code></pre></div><ul><li>:api就是字符串api，只是功能更少</li><li>创建验证码的model <ul><li><code>⁠bin/rails g model user email:string name:string</code></li><li><code>⁠bin/rails g model ValidationCode email:string kind:string used_at:datetime</code></li><li>执行<code>⁠bin/rails db:migrate</code></li></ul></li><li>创建验证码的controller <ul><li>bin/rails g controller validation_codes create</li></ul></li><li>创建items的controller（带层级） <ul><li>bin/rails g controller Api::V1::Items</li></ul></li><li>创建items的model <ul><li>bin/rails g model item user_id:integer amount:integer notes:text tags_id:integer happen_at datetime</li></ul></li><li>使用kaminari实现分页 <ul><li>在gemfile里面新增</li></ul></li></ul><p>gem &#39;kaminari&#39;</p><ul><li>运行 bundle进行安装</li><li>bin/rails g kaminari:config</li><li>bin/rails routes</li></ul>`,6)]))}const g=s(n,[["render",t]]);export{c as __pageData,g as default};
