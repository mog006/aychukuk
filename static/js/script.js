document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    const scrollThreshold = 150;

    window.addEventListener('scroll', function () {
        if (window.scrollY > scrollThreshold) {
            navbar.classList.add('shrink');
        } else {
            navbar.classList.remove('shrink');
        }
    });
});

var modalContent = {
    "Ceza Hukuku": {
        title: "CEZA HUKUKU",
        content: "Ceza hukuku alanında, ağır ceza davalarından basit suçlara kadar geniş bir yelpazede müvekkillerimizi temsil ediyoruz. Adli süreçlerin her aşamasında, kanıt toplama, savunma stratejisi geliştirme ve mahkeme temsili konularında uzman desteği sağlıyoruz."
    },
    "İcra ve İflas Hukuku": {
        title: "İCRA VE İFLAS HUKUKU",
        content: "İcra takibi başlatma, borç yapılandırma, iflas erteleme ve konkordato süreçlerinde uzman danışmanlık sunuyoruz. Alacaklı ve borçlu tarafların haklarını korumak için etkin stratejiler geliştiriyoruz."
    },
    "Aile Hukuku": {
        title: "AİLE HUKUKU",
        content: "Boşanma, velayet, nafaka ve mal paylaşımı gibi hassas konularda uzman desteği sağlıyoruz. Arabuluculuk hizmetlerimizle taraflar arasında uzlaşma sağlamayı hedefliyoruz."
    },
    "Kira Hukuku": {
        title: "KİRA HUKUKU",
        content: " Kira sözleşmeleri, tahliye davaları, kira tespiti ve uyuşmazlık çözümü konularında kapsamlı hukuki destek sunuyoruz. Hem kiracıların hem de mal sahiplerinin haklarını korumak için çalışıyoruz."
    },
    "Şirketler Hukuku": {
        title: "ŞİRKETLER HUKUKU",
        content: "Şirket kuruluşu, birleşme ve devralmalar, hissedar anlaşmaları ve kurumsal yönetim konularında uzman hukuki danışmanlık sağlıyoruz. İş dünyasının karmaşık hukuki ihtiyaçlarına çözüm üretiyoruz."
    },
    "Miras Hukuku": {
        title: "MİRAS HUKUKU",
        content: "Vasiyetname hazırlama, miras paylaşımı, veraset ilamı çıkarma ve miras davalarında temsil gibi konularda kapsamlı hizmet sunuyoruz. Aile içi anlaşmazlıkları minimize etmek için uzlaştırıcı bir yaklaşım benimsiyoruz."
    },
    "Gayrimenkul Hukuku": {
        title: "GAYRİMENKUL HUKUKU",
        content: " Tapu işlemleri, imar uyuşmazlıkları, kamulaştırma davaları ve gayrimenkul projelerinde hukuki danışmanlık hizmetleri sunuyoruz. Gayrimenkul sektöründeki tüm aktörler için güvenilir bir hukuki partner olarak çalışıyoruz."
    },
    "Vergi Hukuku": {
        title: "VERGİ HUKUKU",
        content: "Vergi planlaması, vergi uyuşmazlıklarının çözümü, vergi cezalarına itiraz ve vergi davalarında temsil konularında uzman hizmet sunuyoruz. Karmaşık vergi mevzuatını müvekkillerimiz lehine yorumlayarak optimal çözümler üretiyoruz."
    },
    "İdare Hukuku": {
        title: "İDARE HUKUKU",
        content: " İdari işlemlere itiraz, iptal davaları, tam yargı davaları ve kamu ihale uyuşmazlıklarında müvekkillerimizi temsil ediyoruz. Kamu hukukunun karmaşık yapısında yol gösterici bir rol üstleniyoruz."
    },
    "Sözleşmeler Hukuku": {
        title: "SÖZLEŞMELER HUKUKU",
        content: "Sözleşme hazırlama, müzakere, revizyon ve uyuşmazlık çözümü konularında kapsamlı hizmet sunuyoruz. Ticari ve bireysel her türlü sözleşmede müvekkillerimizin çıkarlarını koruyoruz."
    },
    "İş Hukuku": {
        title: "İŞ HUKUKU",
        content: " İş sözleşmeleri, işe iade davaları, tazminat hesaplamaları ve toplu iş hukuku konularında hem işçi hem de işveren tarafına hizmet veriyoruz. İş ilişkilerinde adaleti ve verimliliği gözeten çözümler üretiyoruz."
    },
    "Tüketici Hukuku": {
        title: "TÜKETİCİ HUKUKU",
        content: " Ayıplı mal ve hizmetler, haksız şartlar, tüketici kredileri ve mesafeli sözleşmeler gibi konularda tüketicilere hukuki destek sağlıyoruz. Tüketici haklarının korunması için etkili stratejiler geliştiriyoruz."
    },
    "Sigorta ve Tahkim Hukuku": {
        title: "SİGORTA VE TAHKİM HUKUKU",
        content: " Sigorta poliçelerinin yorumlanması, hasar tazminat talepleri ve sigorta tahkim süreçlerinde müvekkillerimizi temsil ediyoruz. Sigorta hukukunun inceliklerini kullanarak adil çözümler elde etmeye çalışıyoruz."
    },
    "Yabancı ve Vatandaşlık Hukuku": {
        title: "YABANCI VE VATANDAŞLIK HUKUKU",
        content: "Türkiye'de oturma ve çalışma izinleri, yabancıların mülk edinmesi ve Türk vatandaşlığına geçiş süreçlerinde kapsamlı danışmanlık hizmeti sunuyoruz. Uluslararası müvekkillerimize Türkiye'deki yasal süreçlerde rehberlik ediyoruz."
    },
    "Spor Hukuku": {
        title: "SPOR HUKUKU",
        content: "Sporcu sözleşmeleri, transfer anlaşmazlıkları, doping davaları ve spor federasyonlarıyla ilgili hukuki süreçlerde uzman destek sağlıyoruz. Spor hukukunun özgün yapısına hakim bir yaklaşımla hizmet veriyoruz."
    },
    "Bilişim Hukuku": {
        title: "BİLİŞİM HUKUKU",
        content: "Kişisel verilerin korunması, e-ticaret hukuku, fikri mülkiyet hakları ve siber suçlarla mücadele konularında uzman hukuki destek sunuyoruz. Teknolojinin hızla değişen doğasına uyum sağlayan hukuki çözümler üretiyoruz."
    },

};

var calismaAlaniModal = document.getElementById('calismaAlaniModal');
calismaAlaniModal.addEventListener('show.bs.modal', function (event) {
    var button = event.relatedTarget;
    var area = button.getAttribute('data-area');

    var modalData = modalContent[area] || {title: "ÇALIŞMA ALANI", content: "İlgili hukuki alan hakkında bilgi..."};

    var modalTitle = calismaAlaniModal.querySelector('.modal-title');
    var modalBody = calismaAlaniModal.querySelector('.modal-body');
    modalTitle.textContent = modalData.title;
    modalBody.textContent = modalData.content;
});

document.querySelector('.navbar-toggler').addEventListener('click', function () {
    const navbar = document.getElementById('mainNavbar');
    if (navbar.classList.contains('change-navbar-bg')) {
        navbar.classList.remove('change-navbar-bg');
    } else {
        navbar.classList.add('change-navbar-bg');
    }
});

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch('/', {
        method: 'POST',
        body: formData
    }).then(response => {
        if (response.ok) {
            var successModal = new bootstrap.Modal(document.getElementById('successModal'));
            successModal.show();
        }
    });
});


const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 5,
    autoplay: true,
    pauseOnMouseEnter:true,
    scrollbar: {
        el: ".swiper-scrollbar",
        snapOnRelease: false,
    },
    freeMode: true,
    loop: true,
    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    },
});




const seoData = {
    'hakkimizda': {
        title: 'AYC Hukuk - Hakkımızda | Ankara\'nın Güvenilir Hukuk Danışmanı',
        description: 'AYC Hukuk, Ankara\'da kişiye özel hukuki çözümler sunmaktadır.',
        keywords:'AYC Hukuk, Ankara avukat, hukuk danışmanlığı, Ahmet Yusuf CAN, Avukat Ahmet Yusuf Can, Av. Ahmet Yusuf Can, ceza hukuku, aile hukuku, iş hukuku',
    },
    'cv': {
        title: 'AYC Hukuk - Av. Ahmet Yusuf CAN\'ın CV\'si | Hukuk Kariyeri',
        description: 'Av. Ahmet Yusuf CAN\'ın kariyeri, başarıları ve uzmanlık alanları',
        keywords: 'Ahmet Yusuf CAN, hukuk kariyeri, uzman avukat, AYC Hukuk, Avukat Ahmet Yusuf Can, Av. Ahmet Yusuf Can, ceza hukuku uzmanı, hukuk eğitimi'
    },
    'ekibimiz': {
        title: 'AYC Hukuk - Ekibimiz | Uzman Avukat Kadromuz',
        description: 'Deneyimli avukat kadromuz ile hukuki süreçlerde yanınızdayız.',
        keywords: 'hukuk ekibi, uzman avukatlar, AYC Hukuk, Ahmet Yusuf Can, Avukat Ahmet Yusuf Can, Av. Ahmet Yusuf Can'
    },
    'calisma-alanlari': {
        title: 'AYC Hukuk - Çalışma Alanları | Kapsamlı Hukuki Hizmetler',
        description: 'Ceza hukuku, aile hukuku, iş hukuku ve daha fazlası. AYC Hukuk\'un geniş çalışma alanları hakkında bilgi edinin.',
        keywords: 'ceza hukuku, aile hukuku, iş hukuku, ticaret hukuku, gayrimenkul hukuku, kira hukuku, kira anlaşmazlığı, kiracı dava, ev sahibi dava, spor hukuku, bilişim hukuku'
    },
    'iletisim': {
        title: 'AYC Hukuk - İletişim | Bize Ulaşın',
        description: 'İletişim formu ile bizimle irtibata geçin.',
        keywords: 'AYC Hukuk iletişim, Ankara hukuk bürosu, avukat iletişim, hukuki danışmanlık, Çukurambar avukat,Ahmet Yusuf Can iletişim'
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const section = window.location.hash.slice(1) || 'hakkimizda';
    updateSEO(section);
});

window.addEventListener('hashchange', () => {
    const section = window.location.hash.slice(1);
    updateSEO(section);
});

function updateSEO(section) {
    const sectionData = seoData[section];
    if (sectionData) {
        console.log(`SEO güncelleniyor: ${section}`); // Test logu

        const pageTitle = document.getElementById('pageTitle');
        const pageDescription = document.getElementById('pageDescription');
        const pageKeywords = document.getElementById('pageKeywords');

        // Öğelerin varlığını kontrol edin
        if (pageTitle && pageDescription && pageKeywords) {
            pageTitle.textContent = sectionData.title;
            pageDescription.setAttribute('content', sectionData.description);
            pageKeywords.setAttribute('content', sectionData.keywords);
        } else {
            console.error('Meta etiketleri bulunamadı!');
        }
    } else {
        console.warn(`Bölüm bulunamadı: ${section}`);
    }
}
