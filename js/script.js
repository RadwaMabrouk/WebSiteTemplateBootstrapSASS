
var currentLang = localStorage.getItem('lang') || 'EN';
localStorage.setItem('lang',currentLang);
var languageMap = null;
$(document).ready(function () {
    translate(currentLang);
    adjustDirectionProps(currentLang);
    if($('.owl-carousel').length >0){
        $('.owl-carousel').owlCarousel(owlCarouselOptions);
    }
    
    //loadMap();
});

var owlCarouselOptions = {
    loop: true,
    margin: 10,
    nav: true,
    rtl: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
}

var arabicTranslations = {
    // home
    "Home": " الصفحه الرئيسيه ",
    "Home>": "  الصفحه الرئيسيه> ",
    "about-us": "من نحن",
    "pages": "صفحه",
    "projects": "مشروعات",
    "Blog": "بلوج",
    "Contact-us": "اتصل بنا",
    "We-care": "نحن نهتم بعملك",
    "Lorem-ipsum-dolor": "يمكن تخصيص جميع أجزاء القالب الخاص بك. من الرأس إلى التذييل ، يمكنك الوصول إلى مئات الإعدادات المتقدمة لإنشاء قالب موقع مخصص بالكامل.",
    "About-US-btn": "معلومات عنا",
    "Nibh-Ridiculus": "سهل الاستخدام",
    "Donec-ullamcorper": "شكرًا جزيلاً على كل ما تقدمه  إلى وزارات مثل وزارتي - لتتمكن من الحصول على موقع ويب رائع لنشر الإنجيل. يا له من فرحة لتكون معك",
    "Donec-ullamcorper1": "أريد أن أتوقف دقيقة واحدة لأعرب عن امتناني لك ولموظفيك على الطريقة الكفؤة بشكل لا يصدق لأداء عملك من أجل الرب.",
    "Donec-ullamcorper2": "أنت لا تعرف كم أقدر مساعدتك اليوم. ذهبت حقا يتجاوز. أعلم أنك تجاوزت يوم عملك المعتاد في هذا الأمر وأريد حقًا أن أشكرك",
    "Donec-ullamcorper3": "أنت لا تعرف كم أقدر مساعدتك اليوم. ذهبت حقا يتجاوز. أعلم أنك تجاوزت يوم عملك المعتاد في هذا الأمر وأريد حقًا أن أشكرك",
    "Donec-ullamcorper4": "شكرًا جزيلاً على كل ما تقدمه  إلى وزارات مثل وزارتي - لتتمكن من الحصول على موقع ويب رائع لنشر الإنجيل. يا له من فرحة لتكون معك",
    "Donec-ullamcorper5": "أريد أن أتوقف دقيقة واحدة لأعرب عن امتناني لك ولموظفيك على الطريقة الكفؤة بشكل لا يصدق لأداء عملك من أجل الرب.",
    "Grammatica-del": "المنتج",
    "Europan-lingues": "خيارات ",
    "Ipsum-quia": "مرنة",
    "Aliquam-quaerat": "دمج",
    "Dolorem-eum": "دمج مشاريع",
    "Recent-projects": "مشاريع حديثه",
    "456": "٤٥٦",
    "34": "٣٤",
    "46": "٤٦",
    "156": "١٥٦",
    "HAPPY-CLIENTS": " عملاء سعداء ",
    "Coming-Soon": "قريبا",
    "Creative": "خلاق",
    "Landing-Page": "الصفحة المقصودة",
    "FROM-BLOG": "من المدونة",
    "READ-MORE": "قراءة المزيد",
    "23-oct-2015": "أكتوبر",
    "Some-quick": "بعض النص السريع المثال لبناء على عنوان البطاقة وتشكيل الجزء الأكبر من محتوى البطاقة.",
    "READ-MORE2": "قراءة المزيد",
    "25-oct-2015": "أكتوبر",
    "Some-quick-example": "بعض النص السريع المثال لبناء على عنوان البطاقة وتشكيل الجزء الأكبر من محتوى البطاقة.",
    "GO-AHEAD": "انطلق واكتشف كيف يمكننا مساعدتك!",
    "GET-IN-TOUCH": "ابقى على تواصل",
    "About-Us-footer": "معلومات عنا",
    "Let-us-work": "دعنا نعمل معك لتخطيط وبناء وإطلاق موقع الوزارة أو الكنيسة. لا مزيد من المواقع محلية الصنع ، افعلها بنفسكقم بنشر موقع الويب الخاص بك بسهولة للهواتف المحمولة واجعل من السهل على مستخدمي الهواتف المحمولة العثور عليك.",
    "Related-Links": "روابط ذات علاقة",
    "Official-Site": "موقع رسمي",
    "CreativeMarketprofile": "الملف الشخصي السوق الإبداعية",
    "ConnectaCustomDomain": "ربط مجال مخصص",
    "ElectronicWPTheme": "الفسفور الابيض موضوع الالكترونية",
    "MobileOptimizedPages": "صفحات المحمول الأمثل",
    "Official-Site2": "موقع رسمي",
    "CreativeMarketprofile2": "الملف الشخصي السوق الإبداعية",
    "ConnectaCustomDomain2": "ربط مجال مخصص",
    "ElectronicWPTheme2": "الفسفور الابيض موضوع الالكترونية",
    "MobileOptimizedPages2": "صفحات المحمول الأمثل",
    "News-Media": "وسائل الإعلام",
    "Get-in-touch": "ابقى على تواصل",
    "p-text": "اجعل علامتك التجارية بارزة وسهلة التذكر من خلال نطاقك الفريد.",
    "location": "شارع سيدي المتوالي",
    "telephone": "01120725545",
    "msg": "info@yourcompany.com",
    // news page 
    "Home-Blog": "الصفحه الرئيسيه > بلوج",
    "Card-title1": "اجعل علامتك التجارية بارزة وسهلة التذكر من خلال نطاقك الفريد",
    "paraghraph-card": "دعنا نعمل معك لتخطيط وبناء وإطلاق موقع الوزارة أو الكنيسة. لا مزيد من المواقع محلية الصنع ، افعلها بنفسكقم بنشر موقع الويب الخاص بك بسهولة للهواتف المحمولة واجعل من السهل على مستخدمي الهواتف المحمولة العثور عليك.",
    "Card-title2": "اجعل علامتك التجارية بارزة وسهلة التذكر من خلال نطاقك الفريد",
    "Card-title3": "اجعل علامتك التجارية بارزة وسهلة التذكر من خلال نطاقك الفريد",
    "media-body1": "اجعل علامتك التجارية بارزة وسهلة التذكر من خلال نطاقك الفريد",
    "media-bodyh3-1": "الفسفور الابيض موضوع الالكترونية",
    "media-body2": "اجعل علامتك التجارية بارزة وسهلة التذكر من خلال نطاقك الفريد",
    "media-bodyh3-2": "الفسفور الابيض موضوع الالكترونية",
    "media-body3": "اجعل علامتك التجارية بارزة وسهلة التذكر من خلال نطاقك الفريد",
    "media-body4": "اجعل علامتك التجارية بارزة وسهلة التذكر من خلال نطاقك الفريد",
    "media-bodyh3-4": "الفسفور الابيض موضوع الالكترونية",
    "Searching-input":  "موقع رسمي",
    "Recent-Posts":  "اخر الاخبار",
    "LATEST-PROJECTS": "اخر المشروعات ",
    "Blog-Categorie": "اخر الاخبار",
    "DATE":  "موقع رسمي",
    "March-24-2015": "24 مارس 2015",
    "APRIL-24-2015": "24 ابريل 2015",
    "May-24-2015": "24 مايو 2015",
    "fnamePlaceholder": "الإسم الأول",
    "lnamePlaceholder": "الإسم الأخير",
    "emailPlaceholder": "البريد الالكتروني",
    "websitePlaceholder": "الموقع",
    "messagePlaceholder": " رسالتك",
    "submitButton":"ارسال",
    "agreeTermsConditions" : "اوافق على الشروط",

}

var englishTranslations = {
    // home
    "Home": "Home",
    "Home>":"Home >",
    "about-us": "about us",
    "pages": "pages",
    "projects": "projects",
    "Blog": "Blog",
    "Contact-us": "Contact us",
    "We-care": "We care about your business",
    "Lorem-ipsum-dolor": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum consectetur egestas. Nulla nisi nisi, rutrum vitae nunc non, bibendum euismod nulla",
    "About-US-btn": "About US",
    "Nibh-Ridiculus": "Nibh Ridiculus",
    "Donec-ullamcorper": "Donec ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus etmagnis dis parturie nt montes, nascetur.",
    "Donec-ullamcorper1": "Donec ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus etmagnis dis parturie nt montes, nascetur.",
    "Donec-ullamcorper2": "Donec ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus etmagnis dis parturie nt montes, nascetur.",
    "Donec-ullamcorper3": "Donec ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus etmagnis dis parturie nt montes, nascetur.",
    "Donec-ullamcorper4": "Donec ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus etmagnis dis parturie nt montes, nascetur.",
    "Donec-ullamcorper5": "Donec ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus etmagnis dis parturie nt montes, nascetur.",
    "Grammatica-del": "Grammatica del",
    "Europan-lingues": "Europan lingues",
    "Ipsum-quia": "Ipsum quia",
    "Aliquam-quaerat": "Aliquam quaerat",
    "Dolorem-eum": "Dolorem eum",
    "Recent-projects": "Recent projects",
    "456": "456",
    "34": "34",
    "46": "46",
    "156": "156",
    "HAPPY-CLIENTS": " HAPPY CLIENTS ",
    "Coming-Soon": "Coming Soon",
    "Creative": "Creative",
    "Landing-Page": "Landing Page",
    "FROM-BLOG": "FROM BLOG",
    "READ-MORE": "READ MORE",
    "23-oct-2015": "23 oct 2015",
    "Some-quick": "Some quick example text to build on the card title and make up the bulk of the card's content.",
    "READ-MORE2": "READ MORE",
    "25-oct-2015": "25 oct 2015",
    "Some-quick-example": "Some quick example text to build on the card title and make up the bulk of the card's content.",
    "GO-AHEAD": "GO AHEAD AND FIND OUT HOW WE CAN HELP YOU!",
    "GET-IN-TOUCH": "GET IN TOUCH",
    "About-Us-footer": "About Us",
    "Let-us-work": "Let us work with you to plan, build, and launch your ministry or church website. No more home-made, do-it-yourself websites Conveniently publish your website for mobile phones and make it easy for mobile users to find you.",
    "Related-Links": "Related Links",
    "Official-Site": "Official Site",
    "CreativeMarketprofile": "Creative Market profile",
    "ConnectaCustomDomain": "Connect a Custom Domain",
    "ElectronicWPTheme": "Electronic WP Theme",
    "MobileOptimizedPages": "Mobile Optimized Pages",
    "Official-Site2": "Official Site",
    "CreativeMarketprofile2": "Creative Market profile",
    "ConnectaCustomDomain2": "Connect a Custom Domain",
    "ElectronicWPTheme2": "Electronic WP Theme",
    "MobileOptimizedPages2": "Mobile Optimized Pages",
    "News-Media": "News & Media",
    "Get-in-touch": "Get in touch",
    "p-text": "Make your brand stand out and easy to remember with your own unique domain.",
    "location": "84 Street, City, State 24813",
    "telephone": "01120725545",
    "msg": "info@yourcompany.com",
    // news page 
    "Home-Blog": "Home > Blog",
    "Card-title1": "Steps Toward Developing A Content Strategy",
    "paraghraph-card": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab debitis ea est illum ipsa itaque liberop tiovolup Conseq uuntur deserunt expedita, fugiat hic illum porro quidem quis recusandae vero? Aliquiassumenda cum delectus eaque eligendi, enim eum excepturi fugit illum impedit in iste laudantium modi natus, nisi nobis gfy  g obcaecati praesentium quis reiciendis rerum sapiente […]",
    "Card-title2": "Looking for Developers? Try This Geeky Community",
    "Card-title3": "How to Spend Less Than an Hour a Day on Email Marketing",
    "media-body1": "There is no good blog without tim great readability is very importent",
    "media-bodyh3-1": "Viral polaroid ugh",
    "media-body2": "6 Reasons to Attend Elevate New York 2015 events one way the development",
    "media-bodyh3-2": "labitur qui",
    "media-body3": "User Experience As A Ranking Signal Is Currently Only For Mobile Results,",
    "media-body4": "When you start with what’s at stake for the right to their attention",
    "media-bodyh3-4": "labitur qui",
    "Searching-input": "Searching",
    "Recent-Posts": "Recent Posts",
    "LATEST-PROJECTS": "LATEST PROJECTS",
    "Blog-Categorie": "Blog Categorie",
    "DATE": "DATE",
    "March-24-2015": "March 24, 2015",
    "APRIL-24-2015": "APRIL 24, 2015",
    "May-24-2015": "May 24, 2015",
    "fnamePlaceholder": "First Name",
    "lnamePlaceholder": "Last Name",
    "emailPlaceholder": "Email Address",
    "websitePlaceholder": "Website",
    "messagePlaceholder": "Your Message",
    "submitButton":"Submit Form",
    "agreeTermsConditions" : "Agree to terms and conditions",
}

function translate(currentLang) {
    loadLanguage(currentLang);
    let translatableElements = Array();
    let queryResult = $("[tKey]");
    for (let i = 0; i < queryResult.length; i++) {
        translatableElements.push(queryResult[i]);
    }
    translatableElements.forEach(element => {
        if(element.localName=='input'){
            let key = element.attributes.tKey.value;
            element.placeholder = languageMap[key];
        } else{
            let key = element.attributes.tKey.value;
            element.innerText = languageMap[key];
        }
    });
}

function loadLanguage(currentLang) {
    if (currentLang == 'AR') {
        languageMap = arabicTranslations;
    } else if (currentLang == 'EN') {
        languageMap = englishTranslations;
    }
}

function toggleLanguage(event) {
    let target = event.target;
    if (currentLang == "EN") {
        adjustDirectionProps('AR');
        target.innerText = "English";
        currentLang = "AR";
        translate(currentLang);
        console.log("Translating to ", currentLang);
    } else {
        adjustDirectionProps('EN');
        target.innerText = "العربية";
        currentLang = "EN";
        translate(currentLang);
        console.log("Translating to ", currentLang);
    }
    localStorage.setItem('lang',currentLang);
    if($('.owl-carousel').length >0){
        $('.owl-carousel').owlCarousel(owlCarouselOptions);
    }
}

function adjustDirectionProps(targetLanguage){
    if(targetLanguage==='AR'){
        $("html").attr("dir", "rtl");
        $(".text-left").addClass("text-right").removeClass("text-left");
        $(".ml-auto").addClass("mr-auto").removeClass("ml-auto");
        $(".float-right").addClass("float-left").removeClass("float-right");
        $('.owl-stage').addClass('transformDirection');
        $('.arrowItem').addClass('beforIconRtl').removeClass('beforIconLtr');
        owlCarouselOptions.rtl = true;
    }
    else if (targetLanguage==='EN'){
        $("html").attr("dir", "ltr");
        $(".text-right").addClass("text-left").removeClass("text-right");
        $(".mr-auto").addClass("ml-auto").removeClass("mr-auto");
        $('.arrowItem').addClass('beforIconLtr').removeClass('beforIconRtl');
        owlCarouselOptions.rtl = false;
        $('.owl-stage').removeClass('transformDirection');
    }
}

function initMap() {
    // The location of Uluru
    var latitude;
    var longitude;
    navigator.geolocation.getCurrentPosition(function(position){
      console.log("lat " + latitude , " long", longitude);
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    var uluru = {lat: latitude, lng: longitude};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('google_canvas'), {zoom: 4, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
    });
 }