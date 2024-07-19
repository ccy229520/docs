import{_ as s,c as a,o as i,a3 as e}from"./chunks/framework.1qV4jpzU.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"README.md","filePath":"README.md","lastUpdated":1718437969000}'),t={name:"README.md"},n=e(`<h2 id="vitepress" tabindex="-1">vitepress <a class="header-anchor" href="#vitepress" aria-label="Permalink to &quot;vitepress&quot;">​</a></h2><p>前身vuePress</p><p>vuepress vitepress rspress 静态站点生成器 Static Site Generator (SSG)</p><p>作用于项目(博客，营销页面，档案，文档)</p><h2 id="怎么用" tabindex="-1">怎么用? <a class="header-anchor" href="#怎么用" aria-label="Permalink to &quot;怎么用?&quot;">​</a></h2><p>安装</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span></span></code></pre></div><h2 id="vitepress-特有的formatter" tabindex="-1">vitepress 特有的formatter <a class="header-anchor" href="#vitepress-特有的formatter" aria-label="Permalink to &quot;vitepress 特有的formatter&quot;">​</a></h2><h2 id="规则必须是三个-必须写在头部" tabindex="-1">规则必须是三个- 必须写在头部 <a class="header-anchor" href="#规则必须是三个-必须写在头部" aria-label="Permalink to &quot;规则必须是三个- 必须写在头部&quot;">​</a></h2><h2 id="prev-text-上一页-runtime-api-link-markdown-examples" tabindex="-1">prev: text: &#39;上一页：Runtime API&#39; link: /markdown-examples <a class="header-anchor" href="#prev-text-上一页-runtime-api-link-markdown-examples" aria-label="Permalink to &quot;prev: 
  text: &#39;上一页：Runtime API&#39;
  link: /markdown-examples&quot;">​</a></h2><h2 id="下一页" tabindex="-1">下一页 <a class="header-anchor" href="#下一页" aria-label="Permalink to &quot;下一页&quot;">​</a></h2><h2 id="next-text-下一页-runtime-api-link-markdown-examples" tabindex="-1">next: text: &#39;下一页：Runtime API&#39; link: /markdown-examples <a class="header-anchor" href="#next-text-下一页-runtime-api-link-markdown-examples" aria-label="Permalink to &quot;next: 
  text: &#39;下一页：Runtime API&#39;
  link: /markdown-examples&quot;">​</a></h2><p>config配置项 docFooter: &#39;文档页脚&#39;</p><h2 id="seo-搜索引擎优化" tabindex="-1">SEO(搜索引擎优化) <a class="header-anchor" href="#seo-搜索引擎优化" aria-label="Permalink to &quot;SEO(搜索引擎优化)&quot;">​</a></h2><p>回答TDK (title description keywords) 爬虫机器人会抓取网站的这三个值 h1标签只能出现一个 main标签只能有一个 img alt必须 title必须有值 a标签href 里面写的东西很多 提升SEO 其他的交给金钱</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">head:</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  -</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> meta</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name: title</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      content: Runtime API Examples</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  -</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> meta</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name: description</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      content: Examples of using the runtime APIs provided by VitePress</span></span></code></pre></div><h2 id="最后修改时间" tabindex="-1">最后修改时间 <a class="header-anchor" href="#最后修改时间" aria-label="Permalink to &quot;最后修改时间&quot;">​</a></h2><p>这个必须配合git才有效 git提交这个文件的时间 它就会被列为最后修改时间</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lastUpdated</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;最后更改时间&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    formatOptions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        dateStyle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;full&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        timeStyle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;short&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span></code></pre></div><h2 id="部署静态网站" tabindex="-1">部署静态网站 <a class="header-anchor" href="#部署静态网站" aria-label="Permalink to &quot;部署静态网站&quot;">​</a></h2><ol><li>打开仓库的setting</li><li>点击pages</li><li>选择Branch</li><li>选择分支 选择docs 点击save 保存</li></ol><p>如何访问 <a href="https://message163.github.io/docs/" target="_blank" rel="noreferrer">https://message163.github.io/docs/</a> [github的名称.github.io/项目名称]</p>`,22),l=[n];function h(p,r,k,d,o,E){return i(),a("div",null,l)}const g=s(t,[["render",h]]);export{m as __pageData,g as default};
