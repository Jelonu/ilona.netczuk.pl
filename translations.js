// Translations for the portfolio website
const translations = {
    pl: {
        nav: {
            home: "Home",
            about: "O mnie",
            contact: "Kontakt"
        },
        hero: {
            greeting: "Cześć! Jestem Ilona —",
            title: "Product Designer.",
            welcome: "Witaj w moim portfolio.",
            description: "Pracuję w różnych dziedzinach takich jak UI-design, UX-design i Visual Identity. Zawsze w ścisłej współpracy z innymi designerami, programistami i klientami.",
            learnMore: "Dowiedz się więcej"
        },
        work: {
            title: "Wybrane projekty"
        },
        projects: {
            project1: {
                description: "Optymalizacja palety kolorów"
            },
            project2: {
                description: "Branding i projektowanie strony internetowej"
            },
            project3: {
                description: "Ulepszenie interfejsu użytkownika"
            },
            project4: {
                description: "Usprawnienia UX"
            },
            project5: {
                title: "Branding",
                description: "Opis projektu"
            },
            project6: {
                title: "Jakiś projekt",
                description: "Opis projektu"
            }
        },
        experience: {
            title: "Moje doświadczenie",
            present: "Obecnie",
            roles: {
                staffDesigner: "Staff Product Designer",
                principalDesigner: "Principal Product Designer",
                seniorUX: "Senior UX Designer",
                leadUI: "Lead UI Designer",
                productDesigner: "Product Designer"
            }
        },
        contact: {
            title: "Chcesz ze mną pracować?",
            connect: "Połącz się na",
            or: "lub skontaktuj się przez",
            email: "email"
        },
        footer: {
            rights: "©"
        },
        caseStudy: {
            overview: "Przegląd",
            challenge: "Wyzwanie",
            solution: "Rozwiązanie",
            results: "Wyniki",
            scope: "Zakres",
            team: "Zespół",
            tools: "Narzędzia",
            deliverables: "Deliverables",
            platform: "Platforma",
            industry: "Branża",
            duration: "Czas trwania",
            years: "lat",
            present: "Obecnie"
        }
    },
    en: {
        nav: {
            home: "Home",
            about: "About me",
            contact: "Contact"
        },
        hero: {
            greeting: "Hi! I'm Ilona —",
            title: "Product Designer.",
            welcome: "Welcome to my portfolio.",
            description: "I work in different disciplines such as UI-design, UX-design and Visual Identity. Always in close collaboration with other designers, developers and clients.",
            learnMore: "Learn more"
        },
        work: {
            title: "Selected work"
        },
        projects: {
            project1: {
                description: "Color Palette Optimization"
            },
            project2: {
                description: "Branding & Website Design"
            },
            project3: {
                description: "UI improvement"
            },
            project4: {
                description: "UX improvement"
            },
            project5: {
                title: "Branding",
                description: "Project description"
            },
            project6: {
                title: "Some project",
                description: "Project description"
            }
        },
        experience: {
            title: "My experience",
            present: "Present",
            roles: {
                staffDesigner: "Staff Product Designer",
                principalDesigner: "Principal Product Designer",
                seniorUX: "Senior UX Designer",
                leadUI: "Lead UI Designer",
                productDesigner: "Product Designer"
            }
        },
        contact: {
            title: "Want to work together?",
            connect: "Connect on",
            or: "or get in touch via",
            email: "email"
        },
        footer: {
            rights: "© by"
        },
        caseStudy: {
            overview: "Overview",
            challenge: "Challenge",
            solution: "Solution",
            results: "Results",
            scope: "Scope",
            team: "Team",
            tools: "Tools",
            deliverables: "Deliverables",
            platform: "Platform",
            industry: "Industry",
            duration: "Duration",
            years: "years",
            present: "Present"
        }
    }
};

// Language switcher functionality
class LanguageSwitcher {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'pl';
        this.init();
    }

    init() {
        // Set initial language
        this.setLanguage(this.currentLang, false);
        
        // Add event listeners to language buttons
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const lang = e.target.id.includes('pl') ? 'pl' : 'en';
                this.setLanguage(lang);
            });
        });
    }

    setLanguage(lang, save = true) {
        this.currentLang = lang;
        
        // Save to localStorage
        if (save) {
            localStorage.setItem('language', lang);
        }
        
        // Update all translatable elements
        this.updateContent();
        
        // Update button states
        this.updateButtonStates();
    }

    updateContent() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.getTranslation(key);
            
            if (translation) {
                element.textContent = translation;
            }
        });
    }

    getTranslation(key) {
        const keys = key.split('.');
        let translation = translations[this.currentLang];
        
        for (const k of keys) {
            if (translation && translation[k]) {
                translation = translation[k];
            } else {
                return null;
            }
        }
        
        return translation;
    }

    updateButtonStates() {
        const allButtons = document.querySelectorAll('.lang-btn');
        
        allButtons.forEach(button => {
            const isActive = (this.currentLang === 'pl' && button.id.includes('pl')) ||
                           (this.currentLang === 'en' && button.id.includes('en'));
            
            if (isActive) {
                button.classList.remove('text-gray-600', 'hover:bg-gray-100', 'bg-gray-100');
                button.classList.add('bg-gray-900', 'text-white');
            } else {
                button.classList.remove('bg-gray-900', 'text-white');
                button.classList.add('text-gray-600', 'hover:bg-gray-100');
            }
        });
    }

    getCurrentLanguage() {
        return this.currentLang;
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.languageSwitcher = new LanguageSwitcher();
});

