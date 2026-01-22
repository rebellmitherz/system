/**
 * REBELL MIT HERZ - Funnel Logic 2026
 * Zentrale Steuerung für Tracking & Quiz-Logik
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // ELEMENTE FINDEN
    const elements = {
        copyBtn: document.getElementById('copyBtnSmall'),
        protectionSentence: document.getElementById('protectionSentence'),
        quizBtn: document.getElementById('auswertenBtn'),
        pFill: document.getElementById('pFill'),
        quizForm: document.getElementById('quizForm'),
        loadingArea: document.getElementById('loading-area'),
        yearSpan: document.querySelector('.copyright')
    };

    // 1. CLIPBOARD LOGIK (INDEX.HTML)
    if (elements.copyBtn && elements.protectionSentence) {
        elements.copyBtn.addEventListener('click', async () => {
            const text = elements.protectionSentence.innerText;
            try {
                await navigator.clipboard.writeText(text);
                elements.copyBtn.innerText = 'KOPIERT! ✓';
                setTimeout(() => { elements.copyBtn.innerText = 'TEXT KOPIEREN'; }, 2000);
            } catch (err) { console.error('Copy failed', err); }
        });
    }

    // 2. QUIZ LOGIK MIT ALLEN 7-EURO LINKS + MASTERPAKET
    if (elements.quizBtn) {
        elements.quizBtn.addEventListener('click', () => {
            const selected = document.querySelector('input[name="product"]:checked');
            
            if (!selected) {
                alert('Bitte wähle eine Option aus.');
                return;
            }

            const choice = selected.value;

            // UI Transformation (Lade-Animation)
            if (elements.quizForm) elements.quizForm.style.display = 'none';
            if (elements.loadingArea) elements.loadingArea.style.display = 'block';
            if (elements.pFill) elements.pFill.style.width = "100%";

            /**
             * DEINE KO-FI LINKS ZUORDNUNG
             */
            const linkMap = {
                'akteneinsicht': 'https://ko-fi.com/s/deea689269', 
                'gutachten': 'https://ko-fi.com/s/c33c71ab3b',
                'protokoll': 'https://ko-fi.com/s/e6351f9887',
                'beschluss': 'https://ko-fi.com/s/0daa935e6c',
                'beschleunigung': 'https://ko-fi.com/s/ef7badc34c',
                'allgemein': 'https://ko-fi.com/s/7e0b24d2bb' // 27€ Master inkl. Boni
            };

            const targetUrl = linkMap[choice] || 'https://ko-fi.com/s/7e0b24d2bb';

            // Kurze Verzögerung für den "Experten-Effekt"
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 1800);
        });
    }

    // 3. DATUM AKTUALISIEREN
    if (elements.yearSpan) {
        elements.yearSpan.innerHTML = `© ${new Date().getFullYear()} Rebell mit Herz`;
    }
});