// ====================================================================
// Main JavaScript - Language switching and dynamic content
// ====================================================================

// =====================================================
// Language Management
// =====================================================

let currentLanguage = localStorage.getItem('language') || 'en';

const translations = {
    en: {
        home: "Home",
        aboutUs: "About Us",
        events: "Events",
        newStudents: "New Students",
        ourTeam: "Our Team",
        contact: "Contact Us",
        joinUs: "Join Us",

        // Home page
        homeTitle: "UWEC Chinese Student & Scholar Association",
        homeDescription: "Welcome to the UWEC Chinese Student & Scholar Association! We are a community dedicated to fostering cultural exchange, supporting international students, and celebrating Chinese heritage on campus.",

        // About Us
        aboutTitle: "About CSSA",
        aboutMission: "Our Mission",
        aboutMissionText: "The UWEC CSSA aims to provide a welcoming community for Chinese students and scholars at the University of Wisconsin–Eau Claire. We organize cultural events, facilitate academic and social networking, and help students adapt to campus life.",
        aboutGoals: "Our Goals",
        aboutGoalsText: "Support the well-being and success of Chinese students",
        aboutGoalsText2: "Promote cultural exchange and understanding",
        aboutGoalsText3: "Organize meaningful social and cultural events",
        aboutGoalsText4: "Provide resources and guidance for new students",

        // Events
        eventsTitle: "CSSA Events",
        noEvents: "No events scheduled at the moment.",
        eventDetails: "Event Details",
        date: "Date",
        time: "Time",
        location: "Location",

        // New Students
        newStudentsTitle: "New Students Guide",
        gettingStarted: "Getting Started at UWEC",
        campusResources: "Campus Resources",
        essentialTips: "Essential Tips for International Students",

        // Team
        ourTeamTitle: "Meet Our Team",
        president: "President",
        vicePresident: "Vice President",
        treasurer: "Treasurer",
        secretary: "Secretary",
        socialChair: "Social Chair",
        eventCoordinator: "Event Coordinator",

        // Contact
        contactTitle: "Contact & Join Us",
        getInTouch: "Get In Touch",
        email: "Email",
        phone: "Phone",
        followUs: "Follow Us",
        joinForm: "Join CSSA",
        firstName: "First Name",
        lastName: "Last Name",
        emailAddress: "Email Address",
        phone_label: "Phone Number",
        major: "Major",
        year: "Year",
        submit: "Submit",
        message: "Message",

        // Footer
        footerText: "© 2024 UWEC Chinese Student & Scholar Association. All rights reserved.",
        languageLabel: "中文"
    },
    zh: {
        home: "首页",
        aboutUs: "关于我们",
        events: "活动",
        newStudents: "新生指南",
        ourTeam: "我们的团队",
        contact: "联系我们",
        joinUs: "加入我们",

        // Home page
        homeTitle: "UW-Eau Claire 中国学生学者协会",
        homeDescription: "欢迎来到 UW-Eau Claire 中国学生学者协会！ 我们是一个致力于促进文化交流、支持国际学生和庆祝校园中文化遗产的社区。",

        // About Us
        aboutTitle: "关于我们",
        aboutMission: "我们的使命",
        aboutMissionText: "UW-Eau Claire CSSA 旨在为威斯康星州尔克莱尔大学的中国学生和学者提供一个温暖的社区。我们组织文化活动、促进学术和社会交流、并帮助学生适应校园生活。",
        aboutGoals: "我们的目标",
        aboutGoalsText: "支持中国学生的福祉和成功",
        aboutGoalsText2: "促进文化交流和理解",
        aboutGoalsText3: "组织有意义的社交和文化活动",
        aboutGoalsText4: "为新生提供资源和指导",

        // Events
        eventsTitle: "CSSA 活动",
        noEvents: "目前没有安排活动。",
        eventDetails: "活动详情",
        date: "日期",
        time: "时间",
        location: "地点",

        // New Students
        newStudentsTitle: "新生指南",
        gettingStarted: "在 UWEC 开始学习",
        campusResources: "校园资源",
        essentialTips: "国际学生的重要建议",

        // Team
        ourTeamTitle: "认识我们的团队",
        president: "主席",
        vicePresident: "副主席",
        treasurer: "财务主管",
        secretary: "秘书",
        socialChair: "社交主席",
        eventCoordinator: "活动协调员",

        // Contact
        contactTitle: "联系我们及加入我们",
        getInTouch: "与我们联系",
        email: "电子邮件",
        phone: "电话",
        followUs: "关注我们",
        joinForm: "加入 CSSA",
        firstName: "名字",
        lastName: "姓氏",
        emailAddress: "电子邮件地址",
        phone_label: "电话号码",
        major: "专业",
        year: "年级",
        submit: "提交",
        message: "消息",

        // Footer
        footerText: "© 2024 UW-Eau Claire 中国学生学者协会。版权所有。",
        languageLabel: "English"
    }
};

// =====================================================
// Initialize Page
// =====================================================

function initializeLanguage() {
    setLanguage(currentLanguage);
}

// =====================================================
// Language Switching
// =====================================================

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);

    // Update all text elements
    updatePageText();

    // Update language button text
    const langBtn = document.getElementById('languageBtn');
    if (langBtn) {
        langBtn.textContent = translations[lang].languageLabel;
    }

    // Update document language attribute
    document.documentElement.lang = lang;

    // Re-render page-specific content
    const currentPage = document.body.getAttribute('data-page');
    if (currentPage === 'events') {
        renderEvents();
    }
}

function toggleLanguage() {
    const newLang = currentLanguage === 'en' ? 'zh' : 'en';
    setLanguage(newLang);
}

function updatePageText() {
    const t = translations[currentLanguage];

    // Update all data-translate attributes
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (t[key]) {
            element.textContent = t[key];
        }
    });
}

// =====================================================
// Events Rendering
// =====================================================

function renderEvents() {
    const container = document.getElementById('eventsContainer');
    if (!container) return;

    const t = translations[currentLanguage];

    if (eventsData.length === 0) {
        container.innerHTML = `<p>${t.noEvents}</p>`;
        return;
    }

    container.innerHTML = eventsData.map(event => `
        <div class="card">
            <div style="font-size: 2rem; text-align: center; margin-bottom: 1rem;">
                ${event.image}
            </div>
            <h3 class="card-title">${currentLanguage === 'en' ? event.title_en : event.title_zh}</h3>
            <p class="card-date">${event.date}</p>
            <p>
                <strong>${t.time}:</strong> ${event.time}<br>
                <strong>${t.location}:</strong> ${currentLanguage === 'en' ? event.location_en : event.location_zh}
            </p>
            <p class="card-description">
                ${currentLanguage === 'en' ? event.description_en : event.description_zh}
            </p>
        </div>
    `).join('');
}

// =====================================================
// Team Rendering
// =====================================================

const teamMembers = [
    {
        name_en: "Zhang Wei",
        name_zh: "张伟",
        role_en: "President",
        role_zh: "主席"
    },
    {
        name_en: "Li Ming",
        name_zh: "李明",
        role_en: "Vice President",
        role_zh: "副主席"
    },
    {
        name_en: "Wang Fang",
        name_zh: "王芳",
        role_en: "Treasurer",
        role_zh: "财务主管"
    },
    {
        name_en: "Liu Yan",
        name_zh: "刘燕",
        role_en: "Secretary",
        role_zh: "秘书"
    },
    {
        name_en: "Chen Jing",
        name_zh: "陈晶",
        role_en: "Social Chair",
        role_zh: "社交主席"
    },
    {
        name_en: "Huang Xin",
        name_zh: "黄鑫",
        role_en: "Event Coordinator",
        role_zh: "活动协调员"
    }
];

function renderTeam() {
    const container = document.getElementById('teamContainer');
    if (!container) return;

    container.innerHTML = teamMembers.map((member, index) => `
        <div class="team-member">
            <div class="member-avatar">
                ${String.fromCharCode(65 + (index % 26))}
            </div>
            <h3 class="member-name">
                ${currentLanguage === 'en' ? member.name_en : member.name_zh}
            </h3>
            <p class="member-role">
                ${currentLanguage === 'en' ? member.role_en : member.role_zh}
            </p>
        </div>
    `).join('');
}

// =====================================================
// Form Handling
// =====================================================

function initializeFormHandler() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = {
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                email: document.getElementById('emailAddress').value,
                phone: document.getElementById('phone').value,
                major: document.getElementById('major').value,
                year: document.getElementById('year').value,
                message: document.getElementById('message').value,
                timestamp: new Date().toISOString(),
                language: currentLanguage
            };

            // Save to localStorage (in a real app, this would send to a server)
            let submissions = JSON.parse(localStorage.getItem('formSubmissions')) || [];
            submissions.push(formData);
            localStorage.setItem('formSubmissions', JSON.stringify(submissions));

            // Show confirmation
            alert(currentLanguage === 'en'
                ? 'Thank you for your submission! We will contact you soon.'
                : '感谢您的提交！我们将很快与您联系。');

            // Reset form
            contactForm.reset();
        });
    }
}

// =====================================================
// Mobile Menu Toggle
// =====================================================

function initializeMobileMenu() {
    const menuBtn = document.getElementById('menuBtn');
    const nav = document.querySelector('nav ul');

    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
        });
    }
}

// =====================================================
// Initialize on Page Load
// =====================================================

document.addEventListener('DOMContentLoaded', function() {
    initializeLanguage();
    initializeFormHandler();
    initializeMobileMenu();

    // Page-specific initialization
    const currentPage = document.body.getAttribute('data-page');
    if (currentPage === 'events') {
        renderEvents();
    } else if (currentPage === 'team') {
        renderTeam();
    }
});