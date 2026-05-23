/* 
   Global Scripts - Yarui's Sketchbook 
*/

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initHomeAnimations();
    initPortfolio();
});

// 1. Navigation Logic
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.section');

    function switchSection(sectionId) {
        // Update Sidebar
        navItems.forEach(item => {
            if (item.getAttribute('data-section') === sectionId) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        // Update Content
        sections.forEach(section => {
            if (section.id === sectionId) {
                section.classList.add('active');
                
                // Trigger animations based on section
                if (sectionId === 'about') {
                    const panel = section.querySelector('.slide-out-panel');
                    if (panel) panel.style.transform = 'translateX(0)';
                }
                if (sectionId === 'experiences') {
                    if (typeof initExperiences === 'function') {
                        initExperiences();
                    }
                }
            } else {
                section.classList.remove('active');
                // Reset animations if needed
                if (section.id === 'about') {
                    const panel = section.querySelector('.slide-out-panel');
                    if (panel) panel.style.transform = 'translateX(-100%)';
                }
            }
        });

        // Update URL hash
        window.location.hash = sectionId;
    }

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = item.getAttribute('data-section');
            switchSection(sectionId);
        });
    });

    // Handle initial hash or default to home
    const initialHash = window.location.hash.substring(1) || 'home';
    switchSection(initialHash);
}

// 2. Home Page (Internal Interface) Animations
function initHomeAnimations() {
    const trees = document.querySelectorAll('.tree-item');
    const heroTitles = document.querySelectorAll('.hero-title');

    // 2.1 Staggered Text Animation (Extended by 2 seconds)
    heroTitles.forEach(title => {
        const text = title.textContent;
        title.textContent = '';
        
        [...text].forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            // Extended random delay: 0 to 3.5 seconds (prev was 1.5)
            const delay = Math.random() * 3.5;
            span.style.animationDelay = `${delay}s`;
            title.appendChild(span);
        });

        setTimeout(() => {
            title.classList.add('animate');
        }, 100);
    });

    // 2.2 Tree Interactions & Falling Leaves
    trees.forEach(tree => {
        const hitbox = tree.querySelector('.tree-hitbox');
        const mask = tree.querySelector('.leaf-mask');
        
        // Generate falling leaves for masks
        if (mask) {
            let animName = 'fall-down';
            if (mask.classList.contains('left-mask')) animName = 'drift-left';
            if (mask.classList.contains('right-mask')) animName = 'drift-right';
            
            setInterval(() => {
                const leaf = document.createElement('div');
                leaf.className = 'falling-leaf';
                leaf.style.left = Math.random() * 100 + '%';
                leaf.style.top = Math.random() * 100 + '%';
                leaf.style.animation = `${animName} ${2 + Math.random() * 3}s linear forwards`;
                mask.appendChild(leaf);
                setTimeout(() => leaf.remove(), 5000);
            }, 300);
        }

        hitbox.addEventListener('click', () => {
            tree.classList.add('vibrate-anim');
            setTimeout(() => {
                tree.classList.remove('vibrate-anim');
                const targetSection = tree.id.replace('tree-', '');
                const navItem = document.querySelector(`.nav-item[data-section="${targetSection}"]`);
                if (navItem) navItem.click();
            }, 400);
        });
    });
}

// 4. Portfolio Hub & Sub-pages Logic
function initPortfolio() {
    const hub = document.getElementById('portfolio-hub');
    const lightNightPage = document.getElementById('portfolio-light-night');
    const detailView = document.getElementById('portfolio-detail-view');
    const lightNightNode = document.getElementById('node-light-night');

    if (!hub || !lightNightPage || !detailView || !lightNightNode) return;

    // Hub to Light & Night
    lightNightNode.addEventListener('click', () => {
        hub.style.display = 'none';
        lightNightPage.classList.add('active');
    });

    // Back Buttons
    document.querySelectorAll('.back-to-hub').forEach(btn => {
        btn.addEventListener('click', () => {
            lightNightPage.classList.remove('active');
            hub.style.display = 'flex';
        });
    });

    document.querySelectorAll('.back-to-unveil').forEach(btn => {
        btn.addEventListener('click', () => {
            detailView.classList.remove('active');
            lightNightPage.classList.add('active');
        });
    });

    // Unveil Cards to Detail View
    const cards = document.querySelectorAll('.unveil-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const char = card.dataset.char;
            lightNightPage.classList.remove('active');
            detailView.classList.add('active');
            loadArticles(char);
        });
    });

    // Mock Article Data
    const mockArticles = {
        evan: {
            postscript: [{ title: "陆沉后记 01", content: "# 陆沉后记 01\n\n这是陆沉后记的详细内容..." }],
            daily: [{ title: "日常：午后咖啡", content: "# 日常：午后咖啡\n\n阳光洒进书房..." }],
            dimension: [{ title: "次元篇：梦境", content: "# 次元篇：梦境\n\n关于跨越次元的思考..." }]
        },
        sariel: {
            postscript: [{ title: "齐司礼后记 01", content: "# 齐司礼后记 01\n\n这是齐司礼后记的详细内容..." }],
            daily: [{ title: "日常：山间清风", content: "# 日常：山间清风\n\n关于山间生活的点滴..." }],
            dimension: []
        },
        slices: {
            postscript: [{ title: "切片系列 01", content: "# 切片系列 01\n\n这是切片系列的详细内容..." }],
            daily: [],
            dimension: []
        }
    };

    function loadArticles(char) {
        const listEl = document.getElementById('article-list');
        const contentEl = document.getElementById('article-content');
        const tabs = document.querySelectorAll('.tab-btn');
        let currentTab = 'postscript';

        function renderList() {
            listEl.innerHTML = '';
            const articles = mockArticles[char][currentTab] || [];
            if (articles.length === 0) {
                listEl.innerHTML = '<li>暂无内容</li>';
                return;
            }
            articles.forEach(art => {
                const li = document.createElement('li');
                li.textContent = art.title;
                li.addEventListener('click', () => {
                    contentEl.innerHTML = marked.parse(art.content);
                });
                listEl.appendChild(li);
            });
        }

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                currentTab = tab.dataset.tab;
                renderList();
            });
        });

        renderList();
    }
}
