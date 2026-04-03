// ===== Translations =====
const translations = {
    'en': {
        'nav.about': 'About',
        'nav.projects': 'Projects',
        'nav.achievements': 'Achievements',
        'nav.contact': 'Contact',
        'hero.available': 'Available for Fall 2027',
        'hero.hi': "Hi, I'm",
        'hero.tagline': 'High School Developer | AI & Quantitative Finance Enthusiast',
        'hero.description': 'A-Level student passionate about programming and building useful applications. Currently learning computer science fundamentals and preparing for university applications.',
        'hero.viewProjects': 'View Projects',
        'hero.contact': 'Contact Me',
        'stats.projects': 'Projects',
        'stats.acsl': 'ACSL Perfect Score',
        'stats.ielts': 'IELTS 7.0',
        'about.title': 'About Me',
        'about.academics.title': 'Academics',
        'about.academics.desc': 'A-Level student with all A grades, studying Mathematics, Further Maths, Physics, Chemistry, and Computer Science.',
        'about.competition.title': 'Competitions',
        'about.competition.desc': 'ACSL (American Computer Science League) participant with perfect scores in Contest 1 & 2 (2025-26).',
        'about.internship.title': 'Internship',
        'about.internship.desc': 'Quantitative research internship, learning quantitative finance basics and developing factor analysis and backtesting programs.',
        'about.goals.title': 'Goals',
        'about.goals.desc': 'Targeting top universities for Computer Science and AI programs in Hong Kong, UK, and beyond.',
        'projects.title': 'Featured Projects',
        'projects.subtitle': 'A selection of my work in quantitative finance, web development, and competitive programming',
        'projects.tags.quant': 'Quantitative Finance',
        'projects.tags.webapp': 'Web Application',
        'projects.tags.algorithms': 'Algorithms',
        'projects.tags.creative': 'Creative',
        'projects.tags.modding': 'Modding',
        'projects.tags.frontend': 'Frontend',
        'projects.tags.community': 'Community',
        'projects.tags.featured': 'Featured',
        'projects.tags.pwa': 'PWA',
        'projects.tags.competition': 'Competition',
        'projects.qfactors.desc': 'Python programs developed during quantitative finance internship. Implements Turn20 and Vol20 factor analysis with market-cap neutralization, IC/RankIC metrics, and portfolio backtesting.',
        'projects.qfactors.matrix': 'Portfolio Matrix',
        'projects.qfactors.analysis': 'Factor Analysis',
        'projects.hiit.desc': 'A PWA timer built to help my father use his phone for workout timing more easily. Features circular progress animation, Web Audio API sounds, customizable presets, and offline capability.',
        'projects.hiit.installable': 'Installable',
        'projects.hiit.synthesized': 'Synthesized SFX',
        'projects.acsl.desc': 'Collection of solutions for American Computer Science League (Senior Division) problems from 2015-2026. Achieved perfect scores in Contest 1 & 2 of 2025-26 season.',
        'projects.acsl.solutions': 'Solutions',
        'projects.acsl.score': 'Perfect Score',
        'projects.woodenfish.desc': 'A wooden fish simulator built for my mother who is interested in Buddhism. Created because existing apps were not visually appealing enough or required payment. Features lotus bloom visualization, auto-click mode, and traditional Chinese aesthetics.',
        'projects.uom.desc': 'A YSM (Yes Steve Model) character model based on the "Ultimate Order Manager" boss from FantasyEnding Minecraft mod. Includes installation guide and documentation.',
        'achievements.title': 'Achievements',
        'achievements.acsl.title': 'ACSL Perfect Scores',
        'achievements.acsl.desc': 'Achieved perfect scores in Contest 1 & 2 of ACSL Senior Division',
        'achievements.ielts.title': 'IELTS 7.0',
        'achievements.ielts.desc': 'Overall 7.0 (Listening 8.5, Reading 7.0, Writing 6.5, Speaking 6.0)',
        'achievements.quant.title': 'Quantitative Research',
        'achievements.quant.desc': 'Completed factor analysis and backtesting programs during internship',
        'achievements.school.title': 'School Excellence',
        'achievements.school.desc': 'All A grades in A-Level subjects: Maths, Further Maths, Physics, Chemistry, CS',
        'contact.title': 'Get In Touch',
        'contact.subtitle': "I'm currently preparing for university applications starting Fall 2027. Feel free to reach out!",
        'contact.email': 'Bilibili',
        'common.view': 'View',
        'common.demo': 'Live Demo',
        'common.browse': 'Browse'
    },
    'zh': {
        'nav.about': '关于我',
        'nav.projects': '项目',
        'nav.achievements': '成就',
        'nav.contact': '联系',
        'hero.available': '2027 年秋季入学',
        'hero.hi': '你好，我是',
        'hero.tagline': '高中生开发者 | AI 与量化金融爱好者',
        'hero.description': 'A-Level 学生，热爱编程和构建实用应用。目前正在学习计算机科学基础知识，准备大学申请。',
        'hero.viewProjects': '查看项目',
        'hero.contact': '联系我',
        'stats.projects': '项目',
        'stats.acsl': 'ACSL 满分',
        'stats.ielts': '雅思 7.0',
        'about.title': '关于我',
        'about.academics.title': '学术背景',
        'about.academics.desc': 'A-Level 学生，所有科目均为 A 成绩，学习数学、进阶数学、物理、化学和计算机科学。',
        'about.competition.title': '竞赛',
        'about.competition.desc': '美国计算机科学联赛 (ACSL) 参赛者，2025-26 赛季第 1&2 轮满分。',
        'about.internship.title': '实习',
        'about.internship.desc': '量化研究实习，学习量化金融基础知识并参与编写因子分析和回测程序。',
        'about.goals.title': '目标',
        'about.goals.desc': '目标申请顶尖大学计算机科学和 AI 专业，前往香港、英国等地深造。',
        'projects.title': '精选项目',
        'projects.subtitle': '量化金融、Web 开发和算法竞赛作品精选',
        'projects.tags.quant': '量化金融',
        'projects.tags.webapp': 'Web 应用',
        'projects.tags.algorithms': '算法',
        'projects.tags.creative': '创意',
        'projects.tags.modding': '游戏模组',
        'projects.tags.frontend': '前端',
        'projects.tags.community': '社区',
        'projects.tags.featured': '重点推荐',
        'projects.tags.pwa': 'PWA',
        'projects.tags.competition': '竞赛',
        'projects.qfactors.desc': '量化金融实习期间编写的 Python 程序。实现了 Turn20 和 Vol20 因子分析，包含市值中性化、IC/RankIC 指标和投资组合回测。',
        'projects.qfactors.matrix': '组合矩阵',
        'projects.qfactors.analysis': '因子分析',
        'projects.hiit.desc': '为帮助父亲更方便地使用手机计时器锻炼而开发的 PWA 应用。具有环形进度动画、Web Audio API 音效、可定制预设和离线功能。',
        'projects.hiit.installable': '可安装',
        'projects.hiit.synthesized': '合成音效',
        'projects.acsl.desc': '2015-2026 年美国计算机科学联赛 (Senior 组) 真题解答集。2025-26 赛季第 1&2 轮获得满分。',
        'projects.acsl.solutions': '解答',
        'projects.acsl.score': '满分',
        'projects.woodenfish.desc': '为对佛学感兴趣的母亲开发的木鱼模拟器。因为网上的木鱼软件不够美观或需要收费。具有莲花绽放视觉效果、自动点击模式和传统中式美学。',
        'projects.uom.desc': '基于《梦幻终焉》模组的 Boss"终焉秩序维系者"制作的 YSM(是，史蒂夫模型) 角色模型。包含安装指南和文档。',
        'achievements.title': '成就',
        'achievements.acsl.title': 'ACSL 满分',
        'achievements.acsl.desc': 'ACSL Senior 组第 1、2 轮满分',
        'achievements.ielts.title': '雅思 7.0',
        'achievements.ielts.desc': '总分 7.0 (听力 8.5, 阅读 7.0, 写作 6.5, 口语 6.0)',
        'achievements.quant.title': '量化研究',
        'achievements.quant.desc': '实习期间完成因子分析和回测程序编写',
        'achievements.school.title': '学业优异',
        'achievements.school.desc': 'A-Level 所有科目 A 成绩：数学、进阶数学、物理、化学、计算机',
        'contact.title': '联系我',
        'contact.subtitle': '目前正在准备 2027 年秋季大学申请。欢迎联系！',
        'contact.email': 'Bilibili',
        'common.view': '查看',
        'common.demo': '在线演示',
        'common.browse': '浏览'
    }
};

// ===== State =====
let currentLang = 'en';

// ===== Functions =====
function updateLanguage(lang) {
    currentLang = lang;

    // Update all translated elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update lang switch button text
    const langText = document.querySelector('.lang-text');
    if (langText) {
        langText.textContent = lang === 'en' ? '中文' : 'English';
    }

    // Update html lang attribute
    document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';

    // Save preference
    localStorage.setItem('portfolio-lang', lang);
}

function toggleLanguage() {
    const newLang = currentLang === 'en' ? 'zh' : 'en';
    updateLanguage(newLang);
}

// ===== Event Listeners =====
document.addEventListener('DOMContentLoaded', () => {
    // Load saved language preference or default to 'en'
    const savedLang = localStorage.getItem('portfolio-lang') || 'en';
    updateLanguage(savedLang);

    // Language switch button
    const langSwitch = document.getElementById('langSwitch');
    if (langSwitch) {
        langSwitch.addEventListener('click', toggleLanguage);
    }

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll animation to navbar
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.style.background = 'rgba(10, 10, 15, 0.95)';
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(10, 10, 15, 0.8)';
            navbar.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    document.querySelectorAll('.about-card, .project-card, .timeline-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
