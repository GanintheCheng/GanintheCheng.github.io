document.addEventListener('DOMContentLoaded', () => {
  const honors = document.createElement('section');
  honors.id = 'honors';
  honors.className = 'section honors';
  honors.innerHTML = `<div class="shell sg"><div class="st"><div class="index">03 / HONORS</div><h2>个人荣誉</h2></div><div class="honor-grid"><article class="honor-card"><h3>奖学金与称号</h3><ul><li>2022-2023 学年 · 二等奖学金</li><li>2023-2024 学年 · 一等奖学金</li><li>优秀学生干部 · 三好学生</li><li>优秀毕业生</li></ul></article><article class="honor-card"><h3>竞赛与学生工作</h3><ul><li>蓝桥杯全国软件和信息技术大赛（算法组）· 国家级三等奖</li><li>睿抗机器人开发者大赛（算法组）· 国家级三等奖</li><li>服务外包创新创业大赛 · 省级三等奖</li><li>挑战杯擂台挂帅赛道 · 入围国赛</li><li>软件工程班主任助理 · 学院 Java 科创室主任</li></ul></article></div></div>`;
  document.querySelector('#projects').before(honors);
  document.querySelector('#projects .index').textContent = '04 / PROJECTS';
  document.querySelector('#contact .over').textContent = '05 / CONTACT';
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
  }), { threshold: .12 });
  document.querySelectorAll('.section').forEach(section => observer.observe(section));
});
