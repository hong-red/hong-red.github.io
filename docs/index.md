<div class="profile-section">
  <img src="images/anime/IMG_20260608_220147.jpg" alt="Avatar" class="avatar">
  <h1>范潇麟的博客</h1>
  <p class="title">Web 开发 · 小程序 · AI 应用 </p>
  <p class="description">这是范潇麟的个人博客，是北京印刷学院2024-2028年的学生。</p>
  <div class="skills">
    <span class="skill-tag">全栈开发</span>
    <span class="skill-tag">微信小程序</span>
    <span class="skill-tag">AI 应用</span>
    <span class="skill-tag">数学建模</span>
  </div>
</div>

---

## 项目作品

<div class="project-cards">

<div class="project-card">
  <h3>Web 应用</h3>
  <div class="card-links">
    <a href="WEB/project_blog/">文明回响</a>
    <a href="WEB/labor-rights-helper/">劳动维权助手</a>
    <a href="WEB/memory-ai-companion/">小世界记忆</a>
  </div>
</div>

<div class="project-card">
  <h3>微信小程序</h3>
  <div class="card-links">
    <a href="MINAPP/blog-article/">智享养老</a>
    <a href="MINAPP/zhouyi-miniapp/">周易小程序</a>
  </div>
</div>

<div class="project-card">
  <h3>AI 智能体</h3>
  <div class="card-links">
    <a href="AIAGENT/huggingface-deploy-guide/">HF 部署指南</a>
    <a href="AIAGENT/sql-optimization-agent/">SQL 优化 Agent</a>
  </div>
</div>

<div class="project-card">
  <h3>数学建模</h3>
  <div class="card-links">
    <a href="mathbuild/a/">资源准备</a>
    <a href="mathbuild/b/">真题阶段</a>
    <a href="mathbuild/LATEX/LaTeX/">LaTeX</a>
    <a href="mathbuild/example/">论文示例</a>
  </div>
</div>

</div>

## 技术笔记

<div class="tech-tags">
  <a href="TECH/python/python/">Python</a>
  <a href="TECH/LINUX/create/">Linux</a>
  <a href="TECH/LINUX/vim/">Vim</a>
  <a href="TECH/BLOG/create/">博客搭建</a>
  <a href="TECH/BLOG/domain-setup/">域名绑定</a>
  <a href="YOLO/">YOLO</a>
</div>

---

<div class="footer-contact">
  <p class="label">联系我</p>
  <div class="links">
    <a href="javascript:void(0)" onclick="showEmail()" class="email-btn">邮箱</a>
    <a href="https://space.bilibili.com/354007086" target="_blank">Bilibili</a>
    <a href="https://github.com/hong-red" target="_blank">GitHub</a>
  </div>
</div>

<div id="email-modal" class="email-modal">
  <div class="email-modal-content">
    <span class="close-modal" onclick="hideEmail()">&times;</span>
    <h3>邮箱地址</h3>
    <p class="email-address">1850425474@qq.com</p>
    <button class="copy-btn" onclick="copyEmail()">复制邮箱</button>
  </div>
</div>

<script>
function showEmail() {
  document.getElementById('email-modal').style.display = 'flex';
}

function hideEmail() {
  document.getElementById('email-modal').style.display = 'none';
}

function copyEmail() {
  navigator.clipboard.writeText('1850425474@qq.com').then(function() {
    alert('邮箱已复制到剪贴板');
  });
}

window.onclick = function(event) {
  const modal = document.getElementById('email-modal');
  if (event.target == modal) {
    hideEmail();
  }
}
</script>

<script>
document.addEventListener('DOMContentLoaded', function() {
  var inner = document.querySelector('.md-content__inner');
  if (inner) {
    inner.classList.add('home-page');
  }
});
</script>