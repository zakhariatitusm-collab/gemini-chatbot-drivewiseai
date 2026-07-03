const form = document.getElementById('chat-form');
const input = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');
const suggestionButtons = document.querySelectorAll('.suggestion-button');
const langToggle = document.getElementById('lang-toggle');
const aiConsultButton = document.getElementById('calc-consult-ai');
const advancedToggle = document.getElementById('advance-detail-toggle');
const advancedClear = document.getElementById('advance-clear');
const advancedPanel = document.getElementById('advanced-details-panel');
const conditionSelect = document.getElementById('vehicle-condition');
const yearRow = document.getElementById('vehicle-year-row');
const vehicleYearSelect = document.getElementById('vehicle-year');
const existingLoanSelect = document.getElementById('existing-loan');
const currentLoanRow = document.getElementById('current-loan-row');
const currentLoanAmount = document.getElementById('current-loan-amount');
const chatFontSlider = document.getElementById('chat-font-slider');
const chatFontSizeLabel = document.getElementById('chat-font-size-label');

const translations = {
  en: {
    home: 'Home',
    features: 'Features',
    chat: 'AI Chat',
    about: 'About',
    heroEyebrow: 'AI Automotive Assistant',
    heroTitle: 'Drive Smarter.<br />Own Better.',
    heroSubtitle: 'Your intelligent automotive assistant that helps you buy, sell, compare, finance, maintain, and modify vehicles using AI.',
    heroStart: 'Start Consultation',
    heroLearn: 'Learn More',
    heroTag: 'Premium AI Assistant',
    heroPanelTitle: 'DriveWise AI',
    heroPanelText: 'Get faster vehicle recommendations, financing guidance, and maintenance advice in one place.',
    statAccuracy: 'Accuracy',
    statResponse: 'Response time',
    statSupport: 'Support',
    coreFeatures: 'Core Features',
    coreTitle: 'Everything you need for smarter vehicle ownership.',
    feature1title: 'Buy Vehicle',
    feature1desc: 'Get tailored recommendations for cars and motorcycles.',
    feature2title: 'Sell Vehicle',
    feature2desc: 'Estimate pricing and optimize your sale strategy.',
    feature3title: 'Finance Calculator',
    feature3desc: 'Simulate installments, DP, tenor, and affordability.',
    feature4title: 'Compare Vehicle',
    feature4desc: 'Evaluate options side by side with intelligent analysis.',
    feature5title: 'Maintenance & Modification',
    feature5desc: 'Receive practical advice for upkeep and upgrades.',
    feature6title: 'AI Automotive Chat',
    feature6desc: 'Talk to an expert assistant for any vehicle question.',
    partsEyebrow: 'Autoparts',
    partsTitle: 'Automotive parts and systems',
    part1title: 'Engine',
    part1desc: 'Understand key components that power your ride.',
    part2title: 'Tires',
    part2desc: 'Choose the right tires for grip and comfort.',
    part3title: 'Brakes',
    part3desc: 'Keep stopping power reliable and safe.',
    part4title: 'Battery',
    part4desc: 'Monitor energy and electrical health.',
    chatHeader: 'AI Chat',
    userPlaceholder: 'Ask DriveWise AI anything...',
    chatTitle: 'Talk to DriveWise AI',
    chatDescription: 'Ask about buying, selling, financing, maintenance, or vehicle recommendations. The assistant is ready.',
    sendButton: 'Send',
    formHelp: 'Press Enter to send, Shift + Enter for a new line.',
    floatButton: 'Chat with DriveWise',
    widgetTitle: 'DriveWise Mini Chat',
    widgetFull: 'Full',
    widgetMinimize: 'Minimize',
    suggest1: 'Recommend a motorcycle under Rp35 million',
    suggest2: 'Compare Honda PCX and Yamaha NMAX',
    suggest3: 'Calculate installment for a Rp250 million car',
    suggest4: 'Estimate my vehicle selling price',
    suggest5: 'Recommend the best engine oil',
    overlayTitle: 'DriveWise Chat',
    overlaySubtitle: 'Continue your current conversation in full screen.',
    goToDrivewise: 'Go to DriveWise AI',
    aboutTitle: 'Built for premium automotive decisions.',
    aboutText: 'DriveWise AI helps you make intelligent choices across buying, selling, financing, maintenance, modifications, and spare part recommendations—all in a modern conversational experience.',
    calcTitle: 'Vehicle Credit Simulation',
    calcSubtitle: 'Estimate your installment for your dream car or bike.',
    calcPriceLabel: 'Vehicle Price (Rp)',
    calcPricePlaceholder: 'Example: 250000000',
    calcDpLabel: 'Down Payment / DP (%)',
    calcDpPlaceholder: '20',
    calcRateLabel: 'Annual Interest Rate',
    calcRatePlaceholder: '6',
    calcTenorLabel: 'Tenor',
    year1: '1 Year',
    year2: '2 Years',
    year3: '3 Years',
    year4: '4 Years',
    year5: '5 Years',
    calcResultTitle: 'Installment Estimate',
    calcResultSubtitle: 'Quick estimate based on your inputs.',
    perMonth: '/mo',
    totalDpLabel: 'Total DP',
    principalLabel: 'Principal',
    interestLabel: 'Estimated Total Interest',
    calcButton: 'Consult Details via AI',
    consultMissingPrice: 'Please enter the vehicle price and set up the credit parameters before consulting.',
    advanceDetails: 'Advanced Details',
    hideDetails: 'Hide Details',
    optionalNote: 'Optional: fill in only if available.',
    vehicleTypeLabel: 'Vehicle Type',
    vehicleNameLabel: 'Vehicle Name',
    vehicleNamePlaceholder: 'Example: Toyota Avanza / NMAX',
    vehicleBrandLabel: 'Vehicle Brand',
    vehicleBrandPlaceholder: 'Example: Honda',
    conditionLabel: 'Condition',
    conditionNew: 'New',
    conditionUsed: 'Used',
    vehicleYearLabel: 'Vehicle Year',
    incomeLabel: 'Total Income',
    incomePlaceholder: 'Example: 10000000',
    existingLoanLabel: 'Existing Installment?',
    loanNo: 'No',
    loanYes: 'Yes',
    currentLoanLabel: 'Current Installment Amount',
    currentLoanPlaceholder: 'Example: 1500000',
    carLabel: 'Car',
    bikeLabel: 'Motorcycle',
    selectVehicleType: 'Select vehicle type',
    selectCondition: 'Select condition',
    clearButton: 'Clear',
    summaryTitle: 'Summary',
    summaryVehicleType: 'Vehicle type',
    summaryVehicleName: 'Vehicle name',
    summaryVehicleBrand: 'Vehicle brand',
    summaryCondition: 'Condition',
    summaryConditionNew: 'New',
    summaryConditionUsed: 'Used',
    summaryVehicleYear: 'Vehicle year',
    summaryTotalIncome: 'Total income',
    summaryExistingInstallment: 'Existing installment',
    summaryCurrentInstallmentAmount: 'Current installment amount',
    summaryYes: 'Yes',
    summaryNo: 'No',
  },
  id: {
    home: 'Beranda',
    features: 'Fitur',
    chat: 'AI Chat',
    about: 'Tentang',
    heroEyebrow: 'Asisten Otomotif AI',
    heroTitle: 'Berkendara Lebih Pintar.<br />Miliki Lebih Baik.',
    heroSubtitle: 'Asisten otomotif pintar yang membantu Anda membeli, menjual, membandingkan, membiayai, merawat, dan memodifikasi kendaraan dengan AI.',
    heroStart: 'Mulai Konsultasi',
    heroLearn: 'Pelajari Lebih Lanjut',
    heroTag: 'Asisten AI Premium',
    heroPanelTitle: 'DriveWise AI',
    heroPanelText: 'Dapatkan rekomendasi kendaraan, panduan pembiayaan, dan saran perawatan dengan cepat.',
    statAccuracy: 'Akurasi',
    statResponse: 'Waktu respons',
    statSupport: 'Dukungan',
    coreFeatures: 'Fitur Utama',
    coreTitle: 'Semua yang Anda butuhkan untuk kepemilikan kendaraan lebih cerdas.',
    feature1title: 'Beli Kendaraan',
    feature1desc: 'Dapatkan rekomendasi khusus untuk mobil dan motor.',
    feature2title: 'Jual Kendaraan',
    feature2desc: 'Perkirakan harga dan optimalkan strategi penjualan Anda.',
    feature3title: 'Kalkulator Pembiayaan',
    feature3desc: 'Simulasikan cicilan, DP, tenor, dan kemampuan bayar.',
    feature4title: 'Bandingkan Kendaraan',
    feature4desc: 'Evaluasi pilihan secara berdampingan dengan analisis cerdas.',
    feature5title: 'Perawatan & Modifikasi',
    feature5desc: 'Dapatkan saran praktis untuk pemeliharaan dan upgrade.',
    feature6title: 'Chat Otomotif AI',
    feature6desc: 'Berbicaralah dengan asisten ahli untuk pertanyaan kendaraan apa pun.',
    partsEyebrow: 'Suku Cadang',
    partsTitle: 'Bagian dan sistem otomotif',
    part1title: 'Mesin',
    part1desc: 'Pahami komponen penting yang menggerakkan kendaraan Anda.',
    part2title: 'Ban',
    part2desc: 'Pilih ban terbaik untuk cengkeraman dan kenyamanan.',
    part3title: 'Rem',
    part3desc: 'Pastikan daya berhenti tetap andal dan aman.',
    part4title: 'Aki',
    part4desc: 'Pantau energi dan kesehatan kelistrikan.',
    chatHeader: 'AI Chat',
    userPlaceholder: 'Tanyakan apa saja ke DriveWise AI...',
    chatTitle: 'Bicara dengan DriveWise AI',
    chatDescription: 'Tanyakan tentang membeli, menjual, pembiayaan, perawatan, atau rekomendasi kendaraan. Asisten siap membantu.',
    sendButton: 'Kirim',
    formHelp: 'Tekan Enter untuk kirim, Shift + Enter untuk baris baru.',
    floatButton: 'Chat dengan DriveWise',
    widgetTitle: 'DriveWise Mini Chat',
    widgetFull: 'Layar penuh',
    widgetMinimize: 'Minimalisir',
    suggest1: 'Rekomendasikan motor di bawah Rp35 juta',
    suggest2: 'Bandingkan Honda PCX dan Yamaha NMAX',
    suggest3: 'Hitung cicilan mobil Rp250 juta',
    suggest4: 'Perkirakan harga jual kendaraan saya',
    suggest5: 'Rekomendasikan oli mesin terbaik',
    overlayTitle: 'Chat DriveWise',
    overlaySubtitle: 'Lanjutkan percakapan yang sedang berjalan secara layar penuh.',
    goToDrivewise: 'Buka DriveWise AI',
    aboutTitle: 'Dibangun untuk keputusan otomotif premium.',
    aboutText: 'DriveWise AI membantu Anda membuat pilihan cerdas dalam membeli, menjual, membiayai, merawat, memodifikasi, dan merekomendasikan suku cadang dalam pengalaman percakapan modern.',
    calcTitle: 'Simulasi Kredit Kendaraan',
    calcSubtitle: 'Hitung estimasi angsuran mobil atau motor impian Anda.',
    calcPriceLabel: 'Harga Kendaraan (Rp)',
    calcPricePlaceholder: 'Contoh: 250000000',
    calcDpLabel: 'Uang Muka / DP (%)',
    calcDpPlaceholder: '20',
    calcRateLabel: 'Bunga per Tahun',
    calcRatePlaceholder: '6',
    calcTenorLabel: 'Tenor',
    year1: '1 Tahun',
    year2: '2 Tahun',
    year3: '3 Tahun',
    year4: '4 Tahun',
    year5: '5 Tahun',
    calcResultTitle: 'Estimasi Angsuran',
    calcResultSubtitle: 'Hitung cepat berdasarkan input Anda.',
    perMonth: '/bln',
    totalDpLabel: 'Total DP',
    principalLabel: 'Pokok Hutang',
    interestLabel: 'Estimasi Total Bunga',
    calcButton: 'Konsultasi Detail via AI',
    consultMissingPrice: 'Silakan masukkan harga kendaraan dan tentukan parameter perhitungan kredit sebelum berkonsultasi.',
    advanceDetails: 'Detail Lanjutan',
    hideDetails: 'Sembunyikan Detail',
    optionalNote: 'Opsional: isi hanya jika tersedia.',
    vehicleTypeLabel: 'Jenis Kendaraan',
    vehicleNameLabel: 'Nama Kendaraan',
    vehicleNamePlaceholder: 'Contoh: Toyota Avanza / NMAX',
    vehicleBrandLabel: 'Merek Kendaraan',
    vehicleBrandPlaceholder: 'Contoh: Honda',
    conditionLabel: 'Kondisi',
    conditionNew: 'Baru',
    conditionUsed: 'Bekas',
    vehicleYearLabel: 'Tahun Kendaraan',
    incomeLabel: 'Total Penghasilan',
    incomePlaceholder: 'Contoh: 10000000',
    existingLoanLabel: 'Ada Cicilan?',
    loanNo: 'Tidak',
    loanYes: 'Ya',
    currentLoanLabel: 'Nominal Cicilan Saat Ini',
    currentLoanPlaceholder: 'Contoh: 1500000',
    carLabel: 'Mobil',
    bikeLabel: 'Motor',
    selectVehicleType: 'Pilih jenis kendaraan',
    selectCondition: 'Pilih kondisi',
    clearButton: 'Hapuskan',
    summaryTitle: 'Ringkasan',
    summaryVehicleType: 'Jenis kendaraan',
    summaryVehicleName: 'Nama kendaraan',
    summaryVehicleBrand: 'Merek kendaraan',
    summaryCondition: 'Kondisi',
    summaryConditionNew: 'Baru',
    summaryConditionUsed: 'Bekas',
    summaryVehicleYear: 'Tahun kendaraan',
    summaryTotalIncome: 'Total penghasilan',
    summaryExistingInstallment: 'Ada cicilan',
    summaryCurrentInstallmentAmount: 'Nominal cicilan saat ini',
    summaryYes: 'Ya',
    summaryNo: 'Tidak',
  },
};

let currentLang = 'en';

const formatTime = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
let lastOutgoingMessage = '';
let conversationHistory = [];
let suggestionInteractionStarted = false;
const STORAGE_KEY = 'drivewise-chat-history';

const saveConversationHistory = () => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(conversationHistory));
  } catch (error) {
    console.warn('Unable to save chat history:', error);
  }
};

const updateSuggestionVisibility = () => {
  const visible = conversationHistory.length === 0 && !suggestionInteractionStarted;
  document.querySelectorAll('.suggestions').forEach((el) => {
    el.style.display = visible ? '' : 'none';
  });
};

const loadConversationHistory = () => {
  if (!chatBox) return;

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      updateSuggestionVisibility();
      return;
    }

    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed)) {
      updateSuggestionVisibility();
      return;
    }

    conversationHistory = parsed.filter((item) => item && typeof item.text === 'string' && ['user', 'assistant', 'model', 'bot'].includes(item.role));

    conversationHistory.forEach(({ role, text }) => {
      chatBox.appendChild(createMessage(role === 'user' ? 'user' : 'bot', text));
    });
  } catch (error) {
    console.warn('Unable to restore chat history:', error);
  }

  updateSuggestionVisibility();
};

const escapeHtml = (text) => text
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#39;');

const renderMessageContent = (text) => {
  const safeText = escapeHtml(text || '');
  return safeText.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
};

const createMessage = (role, content, status = 'normal') => {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', role);

  const avatar = document.createElement('div');
  avatar.classList.add('avatar', role);
  // set a concise initial / brand for the avatar and add accessible labels
  avatar.textContent = role === 'user' ? 'Me' : 'DW';
  avatar.setAttribute('aria-label', role === 'user' ? (currentLang === 'id' ? 'Anda' : 'You') : 'DriveWise AI');
  avatar.title = role === 'user' ? (currentLang === 'id' ? 'Pengguna' : 'User') : 'DriveWise AI';

  const contentWrap = document.createElement('div');
  contentWrap.classList.add('message-content');
  if (status === 'typing') {
    contentWrap.innerHTML = `<div class="typing-dots"><span></span><span></span><span></span></div>`;
  } else {
    contentWrap.innerHTML = renderMessageContent(content);
  }

  const meta = document.createElement('div');
  meta.classList.add('message-meta');
  meta.textContent = formatTime();

  const row = document.createElement('div');
  row.classList.add('message-row');
  row.appendChild(avatar);
  row.appendChild(contentWrap);

  // expose role on the element for easier styling/selection
  messageElement.dataset.role = role;

  messageElement.appendChild(row);
  messageElement.appendChild(meta);
  return messageElement;
};

const applyTranslations = () => {
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');
    if (!key) return;
    const value = translations[currentLang]?.[key];
    if (!value) return;

    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
      element.placeholder = value;
      return;
    }

    if (element.tagName === 'BUTTON' || element.tagName === 'A' || element.tagName === 'LABEL' || element.tagName === 'OPTION') {
      element.textContent = value;
      return;
    }

    if (element.tagName === 'P' || element.tagName === 'H1' || element.tagName === 'H2' || element.tagName === 'H3' || element.tagName === 'H4' || element.tagName === 'SPAN' || element.tagName === 'DIV') {
      element.innerHTML = value;
    }
  });

  document.querySelectorAll('.suggestion-button').forEach((button) => {
    const suggestionKey = button.getAttribute('data-suggest');
    const suggestionText = translations[currentLang]?.[suggestionKey];
    if (suggestionKey && suggestionText) {
      button.textContent = suggestionText;
    }
  });

  langToggle.textContent = currentLang === 'en' ? 'ID' : 'EN';
};

const toggleLanguage = () => {
  currentLang = currentLang === 'en' ? 'id' : 'en';
  updateLocale();
};

const suggestionTexts = {
  en: {
    suggest1: 'Recommend a motorcycle under Rp35 million',
    suggest2: 'Compare Honda PCX and Yamaha NMAX',
    suggest3: 'Calculate installment for a Rp250 million car',
    suggest4: 'Estimate my vehicle selling price',
    suggest5: 'Recommend the best engine oil',
  },
  id: {
    suggest1: 'Rekomendasikan motor di bawah Rp35 juta',
    suggest2: 'Bandingkan Honda PCX dan Yamaha NMAX',
    suggest3: 'Hitung cicilan mobil Rp250 juta',
    suggest4: 'Perkirakan harga jual kendaraan saya',
    suggest5: 'Rekomendasikan oli mesin terbaik',
  },
};

const formatRupiah = (number) => {
  if (number === '' || Number.isNaN(Number(number))) {
    return 'Rp 0';
  }
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(Number(number));
};

const formatPriceInput = (inputElement) => {
  const input = inputElement || document.activeElement;
  if (!input || !('value' in input)) return;
  const digits = input.value.toString().replace(/[^0-9]/g, '');
  const formatted = digits.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  input.value = formatted;
};

const parseNumericValue = (value) => {
  const parsed = parseFloat(value.toString().replace(/\./g, ''));
  return Number.isNaN(parsed) ? 0 : parsed;
};

const buildAdvancedCreditDetails = ({ type, name, brand, condition, year, income, loanExists, loanAmount }) => {
  const fragments = [];

  if (type) {
    const label = currentLang === 'id' ? (type === 'car' ? 'mobil' : 'motor') : (type === 'car' ? 'car' : 'motorcycle');
    fragments.push(currentLang === 'id' ? `Jenis kendaraan: ${label}` : `Vehicle type: ${label}`);
  }

  if (name) {
    fragments.push(currentLang === 'id' ? `Nama kendaraan: ${name}` : `Vehicle name: ${name}`);
  }

  if (brand) {
    fragments.push(currentLang === 'id' ? `Merek kendaraan: ${brand}` : `Vehicle brand: ${brand}`);
  }

  if (condition) {
    const conditionLabel = currentLang === 'id' ? (condition === 'new' ? 'Baru' : 'Bekas') : (condition === 'new' ? 'New' : 'Used');
    fragments.push(currentLang === 'id' ? `Kondisi: ${conditionLabel}` : `Condition: ${conditionLabel}`);
  }

  if (condition === 'used' && year) {
    fragments.push(currentLang === 'id' ? `Tahun kendaraan: ${year}` : `Vehicle year: ${year}`);
  }

  if (income) {
    fragments.push(currentLang === 'id' ? `Penghasilan bulanan: ${formatRupiah(income)}` : `Monthly income: ${formatRupiah(income)}`);
  }

  if (loanExists) {
    fragments.push(currentLang === 'id' ? `Sedang ada cicilan: Ya` : `Has existing installment: Yes`);
    if (loanAmount) {
      fragments.push(currentLang === 'id' ? `Nominal cicilan saat ini: ${formatRupiah(loanAmount)}` : `Current installment amount: ${formatRupiah(loanAmount)}`);
    }
  } else {
    fragments.push(currentLang === 'id' ? `Sedang ada cicilan: Tidak` : `Has existing installment: No`);
  }

  return fragments.length ? (currentLang === 'id' ? `Detail tambahan: ${fragments.join(', ')}.` : `Additional details: ${fragments.join(', ')}.`) : '';
};

const createCreditConsultationPrompt = (price, dpPercent, ratePercent, years) => {
  const formattedPrice = formatRupiah(price);
  const type = document.getElementById('vehicle-type')?.value || '';
  const name = document.getElementById('vehicle-name')?.value.trim();
  const brand = document.getElementById('vehicle-brand')?.value.trim();
  const condition = document.getElementById('vehicle-condition')?.value || '';
  const year = document.getElementById('vehicle-year')?.value || '';
  const income = parseNumericValue(document.getElementById('monthly-income')?.value || '0');
  const loanExists = document.getElementById('existing-loan')?.value === 'yes';
  const loanAmount = parseNumericValue(document.getElementById('current-loan-amount')?.value || '0');
  const advancedDetails = buildAdvancedCreditDetails({ type, name, brand, condition, year, income, loanExists, loanAmount });

  if (currentLang === 'id') {
    const base = `Saya ingin konsultasi pembiayaan kendaraan dengan harga ${formattedPrice}, DP ${dpPercent}%, bunga ${ratePercent}% per tahun, dan tenor ${years} tahun.`;
    return `${base} ${advancedDetails} Tolong berikan rekomendasi angsuran, strategi DP, dan saran pembiayaan yang sesuai.`.trim();
  }

  const base = `I want a vehicle financing consultation for a vehicle priced at ${formattedPrice}, with a down payment of ${dpPercent}%, an annual interest rate of ${ratePercent}%, and a tenor of ${years} years.`;
  return `${base} ${advancedDetails} Please provide installment recommendations, DP strategy, and financing advice.`.trim();
};

const performChatRequest = async (message, thinkingMessage) => {
  const existingRetry = thinkingMessage.querySelector('.retry-btn');
  if (existingRetry) existingRetry.remove();

  const content = thinkingMessage.querySelector('.message-content');
  if (content) content.innerHTML = `<div class="typing-dots"><span></span><span></span><span></span></div>`;

  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        conversation: conversationHistory.map(({ role, text }) => ({
          role: role === 'assistant' ? 'model' : role,
          text,
        })),
      }),
    });

    if (!response.ok) {
      throw new Error(`Server returned ${response.status}`);
    }

    const data = await response.json();
    const resultText = data && typeof data.result === 'string' ? data.result.trim() : '';

    conversationHistory.push({ role: 'assistant', text: resultText || 'Sorry, no response received.' });
    saveConversationHistory();

    const retry = thinkingMessage.querySelector('.retry-btn');
    if (retry) retry.remove();

    updateMessageText(thinkingMessage, resultText || 'Sorry, no response received.');
  } catch (error) {
    console.error('Chat request failed:', error);
    updateMessageText(thinkingMessage, 'Failed to get response from server.');
    input.value = message;
    input.focus();

    const meta = thinkingMessage.querySelector('.message-meta') || thinkingMessage;
    let retryBtn = thinkingMessage.querySelector('.retry-btn');
    if (!retryBtn) {
      retryBtn = document.createElement('button');
      retryBtn.classList.add('retry-btn');
      retryBtn.textContent = 'Retry';
      retryBtn.addEventListener('click', () => {
        retryBtn.disabled = true;
        performChatRequest(message, thinkingMessage);
      });
      meta.appendChild(retryBtn);
    }
  }
};

const sendChatMessage = async (message) => {
  if (!message || !message.trim()) return;

  const normalizedMessage = message.trim();
  hideSuggestions();
  lastOutgoingMessage = normalizedMessage;

  conversationHistory.push({ role: 'user', text: normalizedMessage });
  saveConversationHistory();

  chatBox.appendChild(createMessage('user', normalizedMessage));
  const thinkingMessage = createMessage('bot', '', 'typing');
  chatBox.appendChild(thinkingMessage);
  scrollMessageToTop(thinkingMessage);
  input.value = '';

  await performChatRequest(normalizedMessage, thinkingMessage);
};

const handleConsultationClick = () => {
  const price = parseNumericValue(document.getElementById('calc-price').value);
  const dpPercent = parseFloat(document.getElementById('calc-dp').value);
  const ratePercent = parseFloat(document.getElementById('calc-rate').value);
  const years = parseInt(document.getElementById('calc-tenor').value, 10);

  if (!price || Number.isNaN(dpPercent) || Number.isNaN(ratePercent) || Number.isNaN(years)) {
    const msg = translations[currentLang]?.consultMissingPrice || 'Please enter price and parameters.';
    alert(msg);
    return;
  }

  const consultationPrompt = createCreditConsultationPrompt(price, dpPercent, ratePercent, years);
  try {
    localStorage.setItem('drivewise-chat-pending', consultationPrompt);
  } catch (e) {
    console.warn('Unable to persist pending prompt', e);
  }

  window.location.href = 'chat.html';
};

function getAdvancedSummaryItems() {
  const items = [];
  const type = document.getElementById('vehicle-type')?.value;
  const name = document.getElementById('vehicle-name')?.value.trim();
  const brand = document.getElementById('vehicle-brand')?.value.trim();
  const condition = document.getElementById('vehicle-condition')?.value;
  const year = document.getElementById('vehicle-year')?.value;
  const income = parseNumericValue(document.getElementById('monthly-income')?.value || '0');
  const loanExists = document.getElementById('existing-loan')?.value === 'yes';
  const loanAmount = parseNumericValue(document.getElementById('current-loan-amount')?.value || '0');

  const labels = translations[currentLang] || translations.en;
  if (type) {
    const label = currentLang === 'id' ? (type === 'car' ? 'Mobil' : 'Motor') : (type === 'car' ? 'Car' : 'Motorcycle');
    items.push(`${labels.summaryVehicleType}: ${label}`);
  }
  if (name) {
    items.push(`${labels.summaryVehicleName}: ${name}`);
  }
  if (brand) {
    items.push(`${labels.summaryVehicleBrand}: ${brand}`);
  }
  if (condition) {
    const label = condition === 'new' ? labels.summaryConditionNew : labels.summaryConditionUsed;
    items.push(`${labels.summaryCondition}: ${label}`);
  }
  if (condition === 'used' && year) {
    items.push(`${labels.summaryVehicleYear}: ${year}`);
  }
  if (income) {
    items.push(`${labels.summaryTotalIncome}: ${formatRupiah(income)}`);
  }
  if (loanExists) {
    items.push(`${labels.summaryExistingInstallment}: ${labels.summaryYes}`);
    if (loanAmount) {
      items.push(`${labels.summaryCurrentInstallmentAmount}: ${formatRupiah(loanAmount)}`);
    }
  }

  return items;
}

function updateSummaryPanel() {
  const panel = document.getElementById('result-summary-panel');
  const content = document.getElementById('result-summary-content');
  if (!panel || !content) return;

  const items = getAdvancedSummaryItems();
  content.innerHTML = '';

  if (!items.length) {
    panel.classList.add('hidden');
    return;
  }

  items.forEach((text) => {
    const entry = document.createElement('div');
    entry.className = 'summary-item';
    entry.textContent = text;
    content.appendChild(entry);
  });

  panel.classList.remove('hidden');
}

function hitungKredit() {
  const price = parseNumericValue(document.getElementById('calc-price').value);
  const dpPercent = parseFloat(document.getElementById('calc-dp').value);
  const ratePercent = parseFloat(document.getElementById('calc-rate').value);
  const years = parseInt(document.getElementById('calc-tenor').value, 10);

  if (isNaN(price) || isNaN(dpPercent) || isNaN(ratePercent) || isNaN(years) || price <= 0) {
    document.getElementById('result-monthly').innerText = 'Rp 0';
    document.getElementById('result-dp').innerText = 'Rp 0';
    document.getElementById('result-principal').innerText = 'Rp 0';
    document.getElementById('result-interest').innerText = 'Rp 0';
    updateSummaryPanel();
    return;
  }

  const dpAmount = price * (dpPercent / 100);
  const principal = price - dpAmount;
  const totalInterest = principal * (ratePercent / 100) * years;
  const monthlyInstallment = (principal + totalInterest) / (years * 12);

  document.getElementById('result-monthly').innerText = formatRupiah(monthlyInstallment);
  document.getElementById('result-dp').innerText = formatRupiah(dpAmount);
  document.getElementById('result-principal').innerText = formatRupiah(principal);
  document.getElementById('result-interest').innerText = formatRupiah(totalInterest);

  updateSummaryPanel();
}

const autoResize = (textarea) => {
  textarea.style.height = 'auto';
  textarea.style.height = `${Math.min(textarea.scrollHeight, 180)}px`;
};

const applySuggestionText = () => {
  suggestionButtons.forEach((button) => {
    const key = button.getAttribute('data-suggest');
    if (key && suggestionTexts[currentLang]?.[key]) {
      button.textContent = suggestionTexts[currentLang][key];
    }
  });
};

const updateChatFontSize = (size) => {
  if (!size) return;
  const fontSize = `${size}px`;
  const chatShell = document.getElementById('chat-shell');
  if (chatShell) {
    chatShell.style.setProperty('--chat-font-size', fontSize);
  }
  if (chatFontSizeLabel) {
    chatFontSizeLabel.textContent = `Chat size: ${fontSize}`;
  }
};

const hideSuggestions = () => {
  suggestionInteractionStarted = true;
  document.querySelectorAll('.suggestions').forEach((element) => {
    element.style.display = 'none';
  });
};

const chatOverlay = document.getElementById('chat-overlay');
const chatOverlayBody = document.getElementById('chat-overlay-body');
const chatShell = document.getElementById('chat-shell');
const chatShellPlaceholder = document.getElementById('chat-shell-placeholder');
const chatFloatButton = document.getElementById('chat-float-button');
const chatWidget = document.getElementById('chat-widget');
const chatWidgetBody = document.getElementById('chat-widget-body');
const chatWidgetFull = document.getElementById('chat-widget-full');
const chatWidgetMinimize = document.getElementById('chat-widget-minimize');
const chatOverlayClose = document.getElementById('chat-overlay-close');

let widgetState = 'closed';
let previousWidgetState = 'closed';

const updateLocale = () => {
  applyTranslations();
  applySuggestionText();
};

const appendChatShell = (container) => {
  if (!container || !chatShell) return;
  container.appendChild(chatShell);
};

const openWidget = () => {
  if (!chatWidget || !chatWidgetBody) return;
  chatWidget.classList.remove('hidden', 'collapsed');
  chatWidget.setAttribute('aria-hidden', 'false');
  appendChatShell(chatWidgetBody);
  widgetState = 'open';
};

const minimizeWidget = () => {
  if (!chatWidget) return;
  chatWidget.classList.remove('hidden');
  chatWidget.classList.add('collapsed');
  chatWidget.setAttribute('aria-hidden', 'false');
  widgetState = 'minimized';
};

const closeWidget = () => {
  if (!chatWidget || !chatShellPlaceholder) return;
  chatWidget.classList.add('hidden');
  chatWidget.classList.remove('collapsed');
  chatWidget.setAttribute('aria-hidden', 'true');
  appendChatShell(chatShellPlaceholder);
  widgetState = 'closed';
};

const toggleWidget = () => {
  if (widgetState === 'closed' || widgetState === 'minimized') {
    openWidget();
  } else {
    minimizeWidget();
  }
};

const openChatOverlay = () => {
  if (!chatOverlay || !chatOverlayBody || !chatShell || !chatWidget) return;
  previousWidgetState = widgetState;
  chatOverlay.classList.remove('hidden');
  chatOverlay.setAttribute('aria-hidden', 'false');
  chatWidget.classList.add('hidden');
  appendChatShell(chatOverlayBody);
  widgetState = 'fullscreen';
};

const closeChatOverlay = () => {
  if (!chatOverlay || !chatShell || !chatShellPlaceholder) return;
  chatOverlay.classList.add('hidden');
  chatOverlay.setAttribute('aria-hidden', 'true');

  if (previousWidgetState === 'open' || previousWidgetState === 'minimized') {
    if (chatWidget) {
      chatWidget.classList.remove('hidden');
    }
    appendChatShell(chatWidgetBody);
    widgetState = previousWidgetState;
    if (previousWidgetState === 'minimized' && chatWidget) {
      chatWidget.classList.add('collapsed');
    }
  } else {
    appendChatShell(chatShellPlaceholder);
    widgetState = 'closed';
  }
};

langToggle?.addEventListener('click', toggleLanguage);
chatFloatButton?.addEventListener('click', toggleWidget);
chatWidgetFull?.addEventListener('click', () => {
  window.location.href = 'chat.html';
});
chatWidgetMinimize?.addEventListener('click', minimizeWidget);
chatOverlayClose?.addEventListener('click', closeChatOverlay);
chatOverlay?.addEventListener('click', (event) => {
  if (event.target === chatOverlay) {
    closeChatOverlay();
  }
});

if (form) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const userMessage = input?.value.trim() || '';
    if (!userMessage) {
      return;
    }

    sendChatMessage(userMessage);
  });
}

aiConsultButton?.addEventListener('click', handleConsultationClick);

const populateVehicleYears = () => {
  if (!vehicleYearSelect) return;

  const currentYear = new Date().getFullYear();
  const startYear = currentYear;
  const endYear = 1960;

  vehicleYearSelect.innerHTML = '';
  for (let year = startYear; year >= endYear; year -= 1) {
    const option = document.createElement('option');
    option.value = `${year}`;
    option.textContent = `${year}`;
    vehicleYearSelect.appendChild(option);
  }
};

const updateVehicleYearVisibility = () => {
  if (!conditionSelect || !yearRow) return;
  if (conditionSelect.value === 'used') {
    yearRow.classList.remove('hidden');
  } else {
    yearRow.classList.add('hidden');
  }
};

const updateCurrentLoanVisibility = () => {
  if (!existingLoanSelect || !currentLoanRow || !currentLoanAmount) return;
  if (existingLoanSelect.value === 'yes') {
    currentLoanRow.classList.remove('hidden');
    currentLoanAmount.disabled = false;
  } else {
    currentLoanRow.classList.add('hidden');
    currentLoanAmount.value = '';
    currentLoanAmount.disabled = true;
  }
};

advancedToggle?.addEventListener('click', () => {
  if (!advancedPanel) return;
  advancedPanel.classList.toggle('hidden');
  advancedToggle.textContent = advancedPanel.classList.contains('hidden')
    ? translations[currentLang]?.advanceDetails || 'Advance Detail'
    : translations[currentLang]?.hideDetails || 'Hide Detail';
});

conditionSelect?.addEventListener('change', updateVehicleYearVisibility);
existingLoanSelect?.addEventListener('change', updateCurrentLoanVisibility);
advancedClear?.addEventListener('click', () => {
  document.getElementById('vehicle-type').value = '';
  document.getElementById('vehicle-name').value = '';
  document.getElementById('vehicle-brand').value = '';
  document.getElementById('vehicle-condition').value = '';
  updateVehicleYearVisibility();
  document.getElementById('vehicle-year').value = '';
  document.getElementById('monthly-income').value = '';
  document.getElementById('existing-loan').value = 'no';
  updateCurrentLoanVisibility();
  updateSummaryPanel();
});

if (input) {
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      form?.requestSubmit();
      return;
    }

    if (['Backspace', 'Delete'].includes(event.key) || event.key.length === 1) {
      suggestionInteractionStarted = true;
      updateSuggestionVisibility();
    }
  });

  input.addEventListener('input', () => {
    autoResize(input);
    updateSuggestionVisibility();
  });
}

const advancedInputs = [
  document.getElementById('vehicle-type'),
  document.getElementById('vehicle-name'),
  document.getElementById('vehicle-brand'),
  document.getElementById('vehicle-condition'),
  document.getElementById('vehicle-year'),
  document.getElementById('monthly-income'),
  document.getElementById('existing-loan'),
  document.getElementById('current-loan-amount'),
];

advancedInputs.forEach((element) => {
  if (!element) return;
  element.addEventListener('change', updateSummaryPanel);
  element.addEventListener('input', updateSummaryPanel);
});

chatFontSlider?.addEventListener('input', (event) => {
  updateChatFontSize(event.target.value);
});

window.addEventListener('load', () => {
  if (input) {
    autoResize(input);
  }
  populateVehicleYears();
  updateVehicleYearVisibility();
  updateCurrentLoanVisibility();
  hitungKredit();
  updateChatFontSize(chatFontSlider?.value || 11);
});

suggestionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    input.value = button.textContent;
    // hide suggestions after selecting
    document.querySelectorAll('.suggestions').forEach((el) => (el.style.display = 'none'));
    input.focus();
  });
});

updateLocale();
loadConversationHistory();

const toFullscreenBtn = document.getElementById('to-fullscreen');
toFullscreenBtn?.addEventListener('click', () => {
  window.location.href = 'chat.html';
});

const getVisibleChatTop = () => {
  if (!chatBox) return 0;
  return chatBox.scrollTop;
};

const scrollMessageToTop = (messageElement) => {
  if (!messageElement || !chatBox) return;
  const previousMessage = messageElement.previousElementSibling;
  const topMessage = previousMessage && previousMessage.classList.contains('message')
    ? previousMessage
    : messageElement;
  const offset = Math.max(0, topMessage.offsetTop - 16);
  chatBox.scrollTop = offset;
};

function updateMessageText(messageElement, text) {
  if (!messageElement) {
    const newMessage = createMessage('bot', text);
    chatBox.appendChild(newMessage);
    scrollMessageToTop(newMessage);
    return;
  }

  const content = messageElement.querySelector('.message-content');
  if (content) {
    content.innerHTML = renderMessageContent(text);
  }
  const meta = messageElement.querySelector('.message-meta');
  if (meta) {
    meta.textContent = formatTime();
  }
  scrollMessageToTop(messageElement);
}
