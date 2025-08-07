document.addEventListener('DOMContentLoaded', () => {

    // --- LANGUAGE TRANSLATION ---
    const translations = {
        en: {
            navAbout: "About",
            navDeities: "Deities",
            navScriptures: "Scriptures",
            navFestivals: "Festivals",
            navTemples: "Temples",
            navBlog: "Blog",
            heroTitle: "Welcome to the Eternal Path",
            heroSubtitle: "Sanatan Dharma",
            heroDescription: "Discover the Roots of Hindu Culture, Beliefs, and Traditions",
            heroBtn1: "Explore Scriptures",
            heroBtn2: "Darshan",
            aboutTitle: "What is Sanatan Dharma?",
            aboutText: `Sanatan Dharma, often translated as the "Eternal Religion," is the indigenous name for Hinduism. It signifies a timeless, universal set of principles and truths. It is not founded by a single person but is a result of the collective wisdom of ancient sages and seers. Key concepts include Dharma (righteous conduct), Karma (the law of cause and effect), Samsara (the cycle of birth, death, and reincarnation), and Moksha (liberation from the cycle).`,
            aboutLink: "Explore Philosophy →",
            deitiesTitle: "Major Gods & Goddesses",
            shivaTitle: "Lord Shiva 🕉️",
            shivaDesc: "The Destroyer and Transformer within the Trimurti, the supreme being who creates, protects and transforms the universe.",
            vishnuTitle: "Lord Vishnu 🪷",
            vishnuDesc: "The Preserver and Protector of creation. He descends to Earth in various avatars to restore cosmic order.",
            durgaTitle: "Goddess Durga 🔱",
            durgaDesc: "The warrior goddess, whose mythology centers around combating evils and demonic forces that threaten peace.",
            ganeshaTitle: "Lord Ganesha 🐘",
            ganeshaDesc: "The remover of obstacles, revered as the lord of beginnings and the lord of intellect and wisdom.",
            hanumanTitle: "Hanuman ji 🐒",
            hanumanDesc: "A divine vanara companion of Lord Rama, Hanuman is a symbol of strength, devotion, and perseverance.",
            krishnaTitle: "Lord Krishna 🦚",
            krishnaDesc: "The eighth avatar of Vishnu, known for his wisdom, compassion, and divine play (Lila).",
            scripturesTitle: "Sacred Scriptures",
            scriptureTab1: "Vedas",
            scriptureTab2: "Upanishads",
            scriptureTab3: "Ramayana",
            scriptureTab4: "Mahabharata",
            scriptureTab5: "Bhagavad Gita",
            vedasTitle: "The Vedas",
            vedasDesc: "The most ancient Hindu scriptures, a large body of religious texts originating in ancient India. Composed in Vedic Sanskrit, the texts constitute the oldest layer of Sanskrit literature and the oldest scriptures of Hinduism.",
            upanishadsTitle: "The Upanishads",
            upanishadsDesc: "A collection of texts of religious and philosophical nature, written in India probably between c. 800 BCE and c. 500 BCE, during a time when Indian society started to question the traditional Vedic religious order.",
            ramayanaTitle: "The Ramayana",
            ramayanaDesc: "An ancient Indian epic poem which narrates the struggle of the divine prince Rama to rescue his wife Sita from the demon king Ravana. It explores human values and the concept of dharma.",
            mahabharataTitle: "The Mahabharata",
            mahabharataDesc: "One of the two major Sanskrit epics of ancient India. It is an epic narrative of the Kurukshetra War and the fates of the Kaurava and the Pandava princes.",
            gitaTitle: "The Bhagavad Gita",
            gitaDesc: "A 700-verse Hindu scripture that is part of the epic Mahabharata, it presents a synthesis of Hindu ideas about dharma, theistic bhakti, and the yogic paths to moksha.",
            vedasListTitle: "The Four Vedas:",
            veda1: "Rigveda",
            veda2: "Yajurveda",
            veda3: "Samaveda",
            veda4: "Atharvaveda",
            upanishadsListTitle: "Principal Upanishads:",
            upanishad1: "Isha",
            upanishad2: "Kena",
            upanishad3: "Katha",
            upanishad4: "Prashna",
            upanishad5: "Mundaka",
            upanishad6: "Mandukya",
            ramayanaListTitle: "The Seven Kandas (Books):",
            kanda1: "Bala Kanda",
            kanda2: "Ayodhya Kanda",
            kanda3: "Aranya Kanda",
            kanda4: "Kishkindha Kanda",
            kanda5: "Sundara Kanda",
            kanda6: "Yuddha Kanda",
            kanda7: "Uttara Kanda",
            mahabharataListTitle: "The Eighteen Parvas (Books):",
            parva1: "Adi Parva",
            parva2: "Sabha Parva",
            parva3: "Vana Parva",
            parva4: "Virata Parva",
            parva5: "Udyoga Parva",
            parva6: "...and more",
            gitaListTitle: "Key Concepts:",
            gitaConcept1: "Karma Yoga",
            gitaConcept2: "Jnana Yoga",
            gitaConcept3: "Bhakti Yoga",
            gitaConcept4: "Dharma",
            gitaConcept5: "Moksha",
            readMore: "Read More →",
            festivalsTitle: "Festivals & Rituals",
            diwaliTitle: "Diwali",
            diwaliDesc: "The festival of lights, symbolizing the victory of light over darkness, good over evil, and knowledge over ignorance.",
            holiTitle: "Holi",
            holiDesc: "The festival of colors, celebrating the arrival of spring and the triumph of good over evil. A day of joyful celebration.",
            navratriTitle: "Navratri",
            navratriDesc: "A nine-night festival dedicated to the worship of the goddess Durga, celebrating her victory over the demon Mahishasura.",
            janmashtamiTitle: "Janmashtami",
            janmashtamiDesc: "Celebrates the birth of Lord Krishna, an avatar of Vishnu. It involves fasting, singing, and dramatic enactments.",
            mantrasTitle: "Daily Prayers & Mantras",
            gayatriTitle: "Gayatri Mantra",
            mahamrityunjayaTitle: "Mahamrityunjaya Mantra",
            playAudio: "Play Audio 🔊",
            blogTitle: "Articles & Insights",
            blog1Title: "Benefits of Meditation",
            blog1Desc: "Explore how daily meditation can bring peace, clarity, and spiritual growth into your life.",
            blog2Title: "The Spiritual Meaning of Rudraksha",
            blog2Desc: "Understand the significance of Rudraksha beads and their connection to Lord Shiva.",
            blog3Title: "Why Fasting is Done on Ekadashi",
            blog3Desc: "Learn about the scientific and spiritual reasons behind the sacred practice of fasting on Ekadashi.",
            readArticle: "Read Article →",
            footerContact: "Contact Us",
            footerFollow: "Follow Us",
            footerDisclaimer: "Disclaimer",
            footerDisclaimerText: "This website is for educational and spiritual purposes only.",
            footerDevotion: "Made with devotion 💛",
            footerRights: "© 2025 Av_eSAFE . All Rights Reserved.",
            temple1Name: "Kashi Vishwanath",
            temple2Name: "Kedarnath",
            temple3Name: "Tirupati Balaji",
            templeBtn: "Know More",
            darshanTitle: "Puja Darshan",
            darshanSubtitle: "Experience the divine rituals and connect with the sacred ceremonies.",
            aartiBtn: "Perform Aarti",
            aartiPageTitle: "Live Aarti",
            aartiInstruction: "Click and drag the items to perform the aarti.",
            footerAuthor: "By: Abhinav Utkarsh Mishra",
            shivaPageTitle: "Lord Shiva",
            shivaPageSubtitle: "The Destroyer, The Transformer, The Adiyogi",
            shivaAboutTitle: "About Lord Shiva",
            shivaAboutText: "Shiva is one of the principal deities of Hinduism. He is the Supreme Being within Shaivism, one of the major traditions within contemporary Hinduism. Shiva is known as 'The Destroyer' within the Trimurti, the Hindu trinity that includes Brahma and Vishnu. In the Shaivite tradition, Shiva is the Supreme Lord who creates, protects and transforms the universe. He is often depicted as an ascetic yogi, but also as a householder with wife Parvati and his two children, Ganesha and Kartikeya.",
            shivaHistoryTitle: "History & Significance",
            shivaHistoryText: "The worship of Shiva is a pan-Hindu tradition, practiced widely across all of India, Nepal and Sri Lanka. His iconic attributes are the serpent around his neck, the adorning crescent moon, the holy river Ganga flowing from his matted hair, the third eye on his forehead, the trishula as his weapon, and the damaru drum. He is the primal Atman (Self) of the universe.",
            vishnuPageTitle: "Lord Vishnu",
            vishnuPageSubtitle: "The Preserver, The Protector, The Supreme Being",
            vishnuAboutTitle: "About Lord Vishnu",
            vishnuAboutText: "Vishnu is one of the principal deities of Hinduism, and the Supreme Being in its Vaishnavism tradition. He is known as 'The Preserver' within the Trimurti, the Hindu trinity that includes Brahma and Shiva. In Vaishnavism, Vishnu is the Supreme Being who creates, protects and transforms the universe. He is said to descend in the form of an avatar (incarnation) to restore cosmic order and protect Dharma.",
            vishnuHistoryTitle: "History & Significance",
            vishnuHistoryText: "Vishnu is usually depicted as having a dark or pale blue complexion and having four arms. He holds a padma (lotus flower) in his lower left hand, the Kaumodaki gada (mace) in his lower right hand, the Panchajanya shankha (conch) in his upper left hand and the Sudarshana Chakra (discus) in his upper right hand. His ten avatars, known as the Dashavatara, are central to his mythology.",
            durgaPageTitle: "Goddess Durga",
            durgaPageSubtitle: "The Mother of the Universe, The Invincible One",
            durgaAboutTitle: "About Goddess Durga",
            durgaAboutText: "Durga, also identified as Adi Parashakti, is a principal and popular form of the Hindu Goddess. She is the warrior goddess, whose mythology centers around combating evils and demonic forces that threaten peace, prosperity, and dharma of the good. She is the fierce form of the protective mother goddess, willing to unleash her anger against wrong, violence for liberation and destruction to empower creation.",
            durgaHistoryTitle: "History & Significance",
            durgaHistoryText: "Durga is depicted in the Hindu pantheon as a goddess riding a lion or tiger, with many arms each carrying a weapon, often defeating the mythical buffalo demon Mahishasura. She is a central deity in Shaktism tradition of Hinduism, where she is equated with the concept of ultimate reality called Brahman. The most important texts of Shaktism, the Devi Mahatmya, celebrates Durga as the Goddess, declaring her as the supreme being and the creator of the universe.",
            ganeshaPageTitle: "Lord Ganesha",
            ganeshaPageSubtitle: "The Remover of Obstacles, The Lord of Beginnings",
            ganeshaAboutTitle: "About Lord Ganesha",
            ganeshaAboutText: "Ganesha, also known as Ganapati and Vinayaka, is one of the best-known and most worshipped deities in the Hindu pantheon. His image is found throughout India, Sri Lanka, Thailand, and Nepal. Hindu denominations worship him regardless of affiliations. Devotion to Ganesha is widely diffused and extends to Jains and Buddhists. Although he is known by many attributes, Ganesha's elephant head makes him easy to identify.",
            ganeshaHistoryTitle: "History & Significance",
            ganeshaHistoryText: "Ganesha is widely revered as the remover of obstacles, the patron of arts and sciences, and the deva of intellect and wisdom. As the god of beginnings, he is honoured at the start of rites and ceremonies. Ganesha is also invoked as patron of letters and learning during writing sessions. Several texts relate mythological anecdotes associated with his birth and exploits and explain his distinct iconography.",
            hanumanPageTitle: "Hanuman Ji",
            hanumanPageSubtitle: "The Symbol of Strength, Devotion, and Perseverance",
            hanumanAboutTitle: "About Hanuman Ji",
            hanumanAboutText: "Hanuman is a Hindu god and a divine vanara companion of the god Rama. Hanuman is one of the central characters of the Hindu epic Ramayana. He is an ardent devotee of Rama and one of the chiranjivis. Hanuman is also the son of the wind-god Vayu, who in several stories played a direct role in Hanuman's birth.",
            hanumanHistoryTitle: "History & Significance",
            hanumanHistoryText: "Hanuman is worshipped as a deity with the ability to attain victory against evil and provide protection. His tales are a source of inspiration and a guide to a life of devotion, service, and humility. Many temples are dedicated to him, and his image is a common sight in most temples dedicated to Rama. The Hanuman Chalisa, a devotional hymn, is one of the most popular prayers in Hinduism.",
            krishnaPageTitle: "Lord Krishna",
            krishnaPageSubtitle: "The Divine Statesman, The Supreme Personality of Godhead",
            krishnaAboutTitle: "About Lord Krishna",
            krishnaAboutText: "Krishna is a major deity in Hinduism. He is worshipped as the eighth avatar of the god Vishnu and also as the supreme God in his own right. He is the god of protection, compassion, tenderness, and love and is one of the most popular and widely revered among Indian divinities. Krishna's birthday is celebrated every year by Hindus on Krishna Janmashtami.",
            krishnaHistoryTitle: "History & Significance",
            krishnaHistoryText: "The anecdotes and narratives of Krishna's life are generally titled as Krishna Leela. He is a central character in the Mahabharata, the Bhagavata Purana, and the Bhagavad Gita, and is mentioned in many Hindu philosophical, theological, and mythological texts. They portray him in various perspectives: a god-child, a prankster, a model lover, a divine hero, and as the universal supreme being."
        },
        hi: {
            navAbout: "परिचय",
            navDeities: "देवी-देवता",
            navScriptures: "ग्रंथ",
            navFestivals: "त्योहार",
            navTemples: "मंदिर",
            navBlog: "लेख",
            heroTitle: "सनातन पथ में आपका स्वागत है",
            heroSubtitle: "सनातन धर्म",
            heroDescription: "हिंदू संस्कृति, विश्वास और परंपराओं की जड़ों की खोज करें",
            heroBtn1: "ग्रंथों का अन्वेषण करें",
            heroBtn2: "दर्शन",
            aboutTitle: "सनातन धर्म क्या है?",
            aboutText: `सनातन धर्म, जिसे अक्सर "शाश्वत धर्म" के रूप में अनुवादित किया जाता है, हिंदू धर्म का स्वदेशी नाम है। यह कालातीत, सार्वभौमिक सिद्धांतों और सत्यों का प्रतीक है। इसकी स्थापना किसी एक व्यक्ति द्वारा नहीं की गई है, बल्कि यह प्राचीन ऋषियों और द्रष्टाओं के सामूहिक ज्ञान का परिणाम है। मुख्य अवधारणाओं में धर्म, कर्म, संसार (जन्म, मृत्यु और पुनर्जन्म का चक्र), और मोक्ष (चक्र से मुक्ति) शामिल हैं।`,
            aboutLink: "दर्शन का अन्वेषण करें →",
            deitiesTitle: "प्रमुख देवी-देवता",
            shivaTitle: "भगवान शिव 🕉️",
            shivaDesc: "त्रिमूर्ति के भीतर संहारक और परिवर्तक, जो ब्रह्मांड का निर्माण, संरक्षण और परिवर्तन करते हैं।",
            vishnuTitle: "भगवान विष्णु 🪷",
            vishnuDesc: "सृष्टि के संरक्षक और पालक। वह ब्रह्मांडीय व्यवस्था को बहाल करने के लिए विभिन्न अवतारों में पृथ्वी पर अवतरित होते हैं।",
            durgaTitle: "देवी दुर्गा 🔱",
            durgaDesc: "योद्धा देवी, जिनकी पौराणिक कथाएं शांति के लिए खतरा पैदा करने वाली बुराइयों और राक्षसी ताकतों से निपटने पर केंद्रित हैं।",
            ganeshaTitle: "भगवान गणेश 🐘",
            ganeshaDesc: "बाधाओं को दूर करने वाले, शुरुआत के देवता और बुद्धि और ज्ञान के स्वामी के रूप में पूजे जाते हैं।",
            hanumanTitle: "हनुमान जी 🐒",
            hanumanDesc: "भगवान राम के एक दिव्य वानर साथी, हनुमान शक्ति, भक्ति और दृढ़ता के प्रतीक हैं।",
            krishnaTitle: "भगवान कृष्ण 🦚",
            krishnaDesc: "विष्णु के आठवें अवतार, जो अपनी बुद्धि, करुणा और दिव्य लीला के लिए जाने जाते हैं।",
            scripturesTitle: "पवित्र ग्रंथ",
            scriptureTab1: "वेद",
            scriptureTab2: "उपनिषद",
            scriptureTab3: "रामायण",
            scriptureTab4: "महाभारत",
            scriptureTab5: "भगवद् गीता",
            vedasTitle: "वेद",
            vedasDesc: "सबसे प्राचीन हिंदू ग्रंथ, जो प्राचीन भारत में उत्पन्न हुए धार्मिक ग्रंथों का एक बड़ा निकाय है। वैदिक संस्कृत में रचित, ये ग्रंथ संस्कृत साहित्य की सबसे पुरानी परत और हिंदू धर्म के सबसे पुराने ग्रंथ हैं।",
            upanishadsTitle: "उपनिषद",
            upanishadsDesc: "धार्मिक और दार्शनिक प्रकृति के ग्रंथों का एक संग्रह, जो भारत में शायद 800 ईसा पूर्व और 500 ईसा पूर्व के बीच लिखा गया था, उस समय जब भारतीय समाज ने पारंपरिक वैदिक धार्मिक व्यवस्था पर सवाल उठाना शुरू कर दिया था।",
            ramayanaTitle: "रामायण",
            ramayanaDesc: "एक प्राचीन भारतीय महाकाव्य जो अपनी पत्नी सीता को राक्षस राजा रावण से बचाने के लिए दिव्य राजकुमार राम के संघर्ष का वर्णन करता है। यह मानवीय मूल्यों और धर्म की अवधारणा की पड़ताल करता है।",
            mahabharataTitle: "महाभारत",
            mahabharataDesc: "प्राचीन भारत के दो प्रमुख संस्कृत महाकाव्यों में से एक। यह कुरुक्षेत्र युद्ध और कौरव और पांडव राजकुमारों के भाग्य का एक महाकाव्य है।",
            gitaTitle: "भगवद् गीता",
            gitaDesc: "एक 700-श्लोकों का हिंदू ग्रंथ जो महाभारत का हिस्सा है, यह धर्म, आस्तिक भक्ति और मोक्ष के योगिक मार्गों के बारे में हिंदू विचारों का संश्लेषण प्रस्तुत करता है।",
            vedasListTitle: "चार वेद:",
            veda1: "ऋग्वेद",
            veda2: "यजुर्वेद",
            veda3: "सामवेद",
            veda4: "अथर्ववेद",
            upanishadsListTitle: "प्रमुख उपनिषद:",
            upanishad1: "ईश",
            upanishad2: "केन",
            upanishad3: "कठ",
            upanishad4: "प्रश्न",
            upanishad5: "मुण्डक",
            upanishad6: "माण्डूक्य",
            ramayanaListTitle: "सात काण्ड (पुस्तकें):",
            kanda1: "बाल काण्ड",
            kanda2: "अयोध्या काण्ड",
            kanda3: "अरण्य काण्ड",
            kanda4: "किष्किन्धा काण्ड",
            kanda5: "सुंदर काण्ड",
            kanda6: "युद्ध काण्ड",
            kanda7: "उत्तर काण्ड",
            mahabharataListTitle: "अठारह पर्व (पुस्तकें):",
            parva1: "आदि पर्व",
            parva2: "सभा पर्व",
            parva3: "वन पर्व",
            parva4: "विराट पर्व",
            parva5: "उद्योग पर्व",
            parva6: "...और भी",
            gitaListTitle: "मुख्य अवधारणाएं:",
            gitaConcept1: "कर्म योग",
            gitaConcept2: "ज्ञान योग",
            gitaConcept3: "भक्ति योग",
            gitaConcept4: "धर्म",
            gitaConcept5: "मोक्ष",
            readMore: "और पढ़ें →",
            festivalsTitle: "त्योहार और अनुष्ठान",
            diwaliTitle: "दिवाली",
            diwaliDesc: "रोशनी का त्योहार, जो अंधकार पर प्रकाश, बुराई पर अच्छाई और अज्ञान पर ज्ञान की विजय का प्रतीक है।",
            holiTitle: "होली",
            holiDesc: "रंगों का त्योहार, जो वसंत के आगमन और बुराई पर अच्छाई की जीत का जश्न मनाता है। आनंदमय उत्सव का दिन।",
            navratriTitle: "नवरात्रि",
            navratriDesc: "देवी दुर्गा की पूजा के लिए समर्पित नौ रातों का त्योहार, जो राक्षस महिषासुर पर उनकी जीत का जश्न मनाता है।",
            janmashtamiTitle: "जन्माष्टमी",
            janmashtamiDesc: "विष्णु के अवतार भगवान कृष्ण के जन्म का जश्न। इसमें उपवास, गायन और नाट्य अभिनय शामिल हैं।",
            mantrasTitle: "दैनिक प्रार्थना और मंत्र",
            gayatriTitle: "गायत्री मंत्र",
            mahamrityunjayaTitle: "महामृत्युंजय मंत्र",
            playAudio: "ऑडियो चलाएं 🔊",
            blogTitle: "लेख और अंतर्दृष्टि",
            blog1Title: "ध्यान के लाभ",
            blog1Desc: "जानें कि कैसे दैनिक ध्यान आपके जीवन में शांति, स्पष्टता और आध्यात्मिक विकास ला सकता है।",
            blog2Title: "रुद्राक्ष का आध्यात्मिक अर्थ",
            blog2Desc: "रुद्राक्ष के मोतियों के महत्व और भगवान शिव से उनके संबंध को समझें।",
            blog3Title: "एकादशी का व्रत क्यों किया जाता है",
            blog3Desc: "एकादशी पर उपवास की पवित्र प्रथा के पीछे वैज्ञानिक और आध्यात्मिक कारणों के बारे में जानें।",
            readArticle: "लेख पढ़ें →",
            footerContact: "संपर्क करें",
            footerFollow: "हमें फॉलो करें",
            footerDisclaimer: "अस्वीकरण",
            footerDisclaimerText: "यह वेबसाइट केवल शैक्षिक और आध्यात्मिक उद्देश्यों के लिए है।",
            footerDevotion: "भक्ति से बनाया गया 💛",
            footerRights: "© 2025 Av_eSAFE . सर्वाधिकार सुरक्षित।",
            temple1Name: "काशी विश्वनाथ",
            temple2Name: "केदारनाथ",
            temple3Name: "तिरुपति बालाजी",
            templeBtn: "और जानें",
            darshanTitle: "पूजा दर्शन",
            darshanSubtitle: "दिव्य अनुष्ठानों का अनुभव करें और पवित्र समारोहों से जुड़ें।",
            aartiBtn: "आरती करें",
            aartiPageTitle: "लाइव आरती",
            aartiInstruction: "आरती करने के लिए वस्तुओं पर क्लिक करें और खींचें।",
            footerAuthor: "द्वारा: अभिनव उत्कर्ष मिश्रा",
            shivaPageTitle: "भगवान शिव",
            shivaPageSubtitle: "संहारक, परिवर्तक, आदियोगी",
            shivaAboutTitle: "भगवान शिव के बारे में",
            shivaAboutText: "शिव हिंदू धर्म के प्रमुख देवताओं में से एक हैं। वह शैव धर्म के भीतर सर्वोच्च प्राणी हैं, जो समकालीन हिंदू धर्म की प्रमुख परंपराओं में से एक है। शिव को त्रिमूर्ति के भीतर 'संहारक' के रूप में जाना जाता है, हिंदू त्रिमूर्ति जिसमें ब्रह्मा और विष्णु शामिल हैं। शैव परंपरा में, शिव सर्वोच्च भगवान हैं जो ब्रह्मांड का निर्माण, संरक्षण और परिवर्तन करते हैं। उन्हें अक्सर एक तपस्वी योगी के रूप में चित्रित किया जाता है, लेकिन पत्नी पार्वती और उनके दो बच्चों, गणेश और कार्तिकेय के साथ एक गृहस्थ के रूप में भी।",
            shivaHistoryTitle: "इतिहास और महत्व",
            shivaHistoryText: "शिव की पूजा एक अखिल-हिंदू परंपरा है, जो पूरे भारत, नेपाल और श्रीलंका में व्यापक रूप से प्रचलित है। उनकी प्रतिष्ठित विशेषताएं उनके गले में सर्प, सुशोभित अर्धचंद्र, उनकी उलझी हुई जटाओं से बहने वाली पवित्र नदी गंगा, उनके माथे पर तीसरी आंख, उनके हथियार के रूप में त्रिशूल और डमरू हैं। वह ब्रह्मांड के आदिम आत्मा (स्वयं) हैं।",
            vishnuPageTitle: "भगवान विष्णु",
            vishnuPageSubtitle: "संरक्षक, पालक, परमात्मा",
            vishnuAboutTitle: "भगवान विष्णु के बारे में",
            vishnuAboutText: "विष्णु हिंदू धर्म के प्रमुख देवताओं में से एक हैं, और वैष्णववाद परंपरा में सर्वोच्च प्राणी हैं। उन्हें त्रिमूर्ति के भीतर 'संरक्षक' के रूप में जाना जाता है, जिसमें ब्रह्मा और शिव शामिल हैं। वैष्णववाद में, विष्णु सर्वोच्च प्राणी हैं जो ब्रह्मांड का निर्माण, संरक्षण और परिवर्तन करते हैं। कहा जाता है कि वे ब्रह्मांडीय व्यवस्था को बहाल करने और धर्म की रक्षा के लिए एक अवतार के रूप में अवतरित होते हैं।",
            vishnuHistoryTitle: "इतिहास और महत्व",
            vishnuHistoryText: "विष्णु को आमतौर पर गहरे या हल्के नीले रंग के और चार भुजाओं वाले के रूप में दर्शाया जाता है। वे अपने निचले बाएं हाथ में पद्म (कमल का फूल), निचले दाएं हाथ में कौमोदकी गदा, ऊपरी बाएं हाथ में पांचजन्य शंख और ऊपरी दाएं हाथ में सुदर्शन चक्र धारण करते हैं। उनके दस अवतार, जिन्हें दशावतार के नाम से जाना जाता है, उनकी पौराणिक कथाओं के केंद्र में हैं।",
            durgaPageTitle: "देवी दुर्गा",
            durgaPageSubtitle: "ब्रह्मांड की माता, अजेय",
            durgaAboutTitle: "देवी दुर्गा के बारे में",
            durgaAboutText: "दुर्गा, जिन्हें आदि पराशक्ति के रूप में भी जाना जाता है, हिंदू देवी का एक प्रमुख और लोकप्रिय रूप है। वह योद्धा देवी हैं, जिनकी पौराणिक कथाएं शांति, समृद्धि और धर्म के लिए खतरा पैदा करने वाली बुराइयों और राक्षसी ताकतों से निपटने पर केंद्रित हैं। वह सुरक्षात्मक मातृ देवी का उग्र रूप हैं, जो गलत के खिलाफ अपना क्रोध प्रकट करने, मुक्ति के लिए हिंसा और सृष्टि को सशक्त बनाने के लिए विनाश करने को तैयार रहती हैं।",
            durgaHistoryTitle: "इतिहास और महत्व",
            durgaHistoryText: "दुर्गा को हिंदू देवताओं में एक शेर या बाघ की सवारी करने वाली देवी के रूप में दर्शाया गया है, जिनकी कई भुजाएँ हैं और प्रत्येक में एक हथियार है, जो अक्सर पौराणिक भैंस राक्षस महिषासुर को पराजित करती हैं। वह हिंदू धर्म की शक्तिवाद परंपरा में एक केंद्रीय देवता हैं, जहाँ उन्हें ब्राह्मण नामक अंतिम वास्तविकता की अवधारणा के बराबर माना जाता है। शक्तिवाद का सबसे महत्वपूर्ण ग्रंथ, देवी महात्म्य, दुर्गा को देवी के रूप में मनाता है, उन्हें सर्वोच्च प्राणी और ब्रह्मांड का निर्माता घोषित करता है।",
            ganeshaPageTitle: "भगवान गणेश",
            ganeshaPageSubtitle: "विघ्नहर्ता, आदिपूज्य",
            ganeshaAboutTitle: "भगवान गणेश के बारे में",
            ganeshaAboutText: "गणेश, जिन्हें गणपति और विनायक के नाम से भी जाना जाता है, हिंदू देवताओं में सबसे प्रसिद्ध और सबसे अधिक पूजे जाने वाले देवताओं में से एक हैं। उनकी छवि पूरे भारत, श्रीलंका, थाईलैंड और नेपाल में पाई जाती है। हिंदू संप्रदाय संबद्धता की परवाह किए बिना उनकी पूजा करते हैं। गणेश के प्रति भक्ति व्यापक रूप से फैली हुई है और जैन और बौद्धों तक फैली हुई है। यद्यपि उन्हें कई विशेषताओं से जाना जाता है, गणेश का हाथी का सिर उन्हें पहचानना आसान बनाता है।",
            ganeshaHistoryTitle: "इतिहास और महत्व",
            ganeshaHistoryText: "गणेश को व्यापक रूप से बाधाओं को दूर करने वाले, कला और विज्ञान के संरक्षक, और बुद्धि और ज्ञान के देव के रूप में सम्मानित किया जाता है। शुरुआत के देवता के रूप में, उन्हें संस्कारों और समारोहों की शुरुआत में सम्मानित किया जाता है। गणेश को लेखन सत्रों के दौरान अक्षरों और सीखने के संरक्षक के रूप में भी invo किया जाता है। कई ग्रंथ उनके जन्म और कारनामों से जुड़े पौराणिक उपाख्यानों से संबंधित हैं और उनकी विशिष्ट प्रतिमा की व्याख्या करते हैं।",
            hanumanPageTitle: "हनुमान जी",
            hanumanPageSubtitle: "शक्ति, भक्ति और दृढ़ता का प्रतीक",
            hanumanAboutTitle: "हनुमान जी के बारे में",
            hanumanAboutText: "हनुमान एक हिंदू देवता और भगवान राम के एक दिव्य वानर साथी हैं। हनुमान हिंदू महाकाव्य रामायण के केंद्रीय पात्रों में से एक हैं। वह राम के एक उत्साही भक्त और चिरंजीवियों में से एक हैं। हनुमान पवन-देवता वायु के पुत्र भी हैं, जिन्होंने कई कहानियों में हनुमान के जन्म में प्रत्यक्ष भूमिका निभाई।",
            hanumanHistoryTitle: "इतिहास और महत्व",
            hanumanHistoryText: "हनुमान को बुराई पर विजय प्राप्त करने और सुरक्षा प्रदान करने की क्षमता वाले देवता के रूप में पूजा जाता है। उनकी कहानियाँ प्रेरणा का स्रोत हैं और भक्ति, सेवा और विनम्रता के जीवन के लिए एक मार्गदर्शक हैं। उन्हें समर्पित कई मंदिर हैं, और उनकी छवि राम को समर्पित अधिकांश मंदिरों में एक आम दृश्य है। हनुमान चालीसा, एक भक्ति भजन, हिंदू धर्म में सबसे लोकप्रिय प्रार्थनाओं में से एक है।",
            krishnaPageTitle: "भगवान कृष्ण",
            krishnaPageSubtitle: "दिव्य राजनीतिज्ञ, भगवान का सर्वोच्च व्यक्तित्व",
            krishnaAboutTitle: "भगवान कृष्ण के बारे में",
            krishnaAboutText: "कृष्ण हिंदू धर्म में एक प्रमुख देवता हैं। उन्हें भगवान विष्णु के आठवें अवतार के रूप में और अपने आप में सर्वोच्च भगवान के रूप में भी पूजा जाता है। वह संरक्षण, करुणा, कोमलता और प्रेम के देवता हैं और भारतीय देवताओं में सबसे लोकप्रिय और व्यापक रूप से सम्मानित हैं। कृष्ण का जन्मदिन हर साल हिंदुओं द्वारा कृष्ण जन्माष्टमी पर मनाया जाता है।",
            krishnaHistoryTitle: "इतिहास और महत्व",
            krishnaHistoryText: "कृष्ण के जीवन के उपाख्यानों और कथाओं को आम तौर पर कृष्ण लीला के रूप में शीर्षक दिया गया है। वह महाभारत, भागवत पुराण और भगवद गीता में एक केंद्रीय पात्र हैं, और कई हिंदू दार्शनिक, धार्मिक और पौराणिक ग्रंथों में उनका उल्लेख है। वे उन्हें विभिन्न दृष्टिकोणों में चित्रित करते हैं: एक ईश्वर-बालक, एक मसखरा, एक आदर्श प्रेमी, एक दिव्य नायक, और सार्वभौमिक सर्वोच्च प्राणी के रूप में।"
        }
    };

    // --- DEITY CARD GENERATION (for index.html) ---
    const deityData = [
        {
            href: 'shiva.html',
            aosDelay: '100',
            imgAlt: 'Lord Shiva',
            titleKey: 'shivaTitle',
            descKey: 'shivaDesc'
        },
        {
            href: 'vishnu.html',
            aosDelay: '200',
            imgAlt: 'Lord Vishnu',
            titleKey: 'vishnuTitle',
            descKey: 'vishnuDesc'
        },
        {
            href: 'durga.html',
            aosDelay: '300',
            imgAlt: 'Goddess Durga',
            titleKey: 'durgaTitle',
            descKey: 'durgaDesc'
        },
        {
            href: 'ganesha.html',
            aosDelay: '400',
            imgAlt: 'Lord Ganesha',
            titleKey: 'ganeshaTitle',
            descKey: 'ganeshaDesc'
        },
        {
            href: 'hanuman.html',
            aosDelay: '500',
            imgAlt: 'Hanuman ji',
            titleKey: 'hanumanTitle',
            descKey: 'hanumanDesc'
        },
        {
            href: 'krishna.html',
            aosDelay: '600',
            imgAlt: 'Lord Krishna',
            titleKey: 'krishnaTitle',
            descKey: 'krishnaDesc'
        }
    ];

    const deityGrid = document.querySelector('#deities .deity-grid');

    if (deityGrid) {
        deityGrid.innerHTML = ''; // Clear any hardcoded cards

        deityData.forEach(deity => {
            const link = document.createElement('a');
            link.href = deity.href;
            link.className = 'deity-link';
            link.setAttribute('data-aos', 'fade-up');
            link.setAttribute('data-aos-delay', deity.aosDelay);

            link.innerHTML = `
                <div class="deity-card">
                    <img src="https://placehold.co/600x400/2c1608/FFF8E1?text=${deity.imgAlt.replace(/ /g, '+')}" alt="${deity.imgAlt}">
                    <h3 data-lang-key="${deity.titleKey}"></h3>
                    <p data-lang-key="${deity.descKey}"></p>
                </div>
            `;
            
            deityGrid.appendChild(link);
        });
    }

    // Initialize Animate on Scroll
    AOS.init({
        duration: 1000, // values from 0 to 3000, with step 50ms
        once: true, // whether animation should happen only once - while scrolling down
    });

    // --- STICKY HEADER ---
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- MOBILE NAVIGATION ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const links = document.querySelectorAll('.nav-links li a');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when a link is clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // --- SCRIPTURE TABS ---
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    if (tabButtons.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons and content
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));

                // Add active class to the clicked button and corresponding content
                button.classList.add('active');
                document.getElementById(button.dataset.tab).classList.add('active');
            });
        });
    }

    // --- MANTRA TYPING ANIMATION ---
    function typeWriter(element, text, speed) {
        let i = 0;
        element.innerHTML = ""; // Clear existing text
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    const gayatriMantraText = "ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात् ॥";
    const mahamrityunjayaMantraText = "ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् । उर्वारुकमिव बन्धनान् मृत्योर्मुक्षीय मामृतात् ॥";

    // Use Intersection Observer to trigger typing animation when section is visible
    const mantraSection = document.getElementById('mantras');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const gayatriEl = document.getElementById('gayatri-mantra');
                const mahamrityunjayaEl = document.getElementById('mahamrityunjaya-mantra');
                
                if (gayatriEl) typeWriter(gayatriEl, gayatriMantraText, 100);
                if (mahamrityunjayaEl) typeWriter(mahamrityunjayaEl, mahamrityunjayaMantraText, 100);

                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the section is visible

    if (mantraSection) {
        observer.observe(mantraSection);
    }

    // --- LANGUAGE TOGGLE LOGIC ---
    const langToggleButton = document.getElementById('lang-toggle');

    const setLanguage = (lang) => {
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            // Check if translation exists for the key
            if (translations[lang] && translations[lang][key]) {
                // For the 'aboutText', we need to handle the inner HTML structure
                if (key === 'aboutText') {
                     element.innerHTML = translations[lang][key].replace(/Dharma/g, '<span class="highlight">Dharma</span>')
                                                              .replace(/Karma/g, '<span class="highlight">Karma</span>')
                                                              .replace(/Samsara/g, '<span class="highlight">Samsara</span>')
                                                              .replace(/Moksha/g, '<span class="highlight">Moksha</span>');
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
        document.documentElement.lang = lang;
        localStorage.setItem('language', lang);
        langToggleButton.textContent = lang === 'en' ? 'हिन्दी' : 'English';
    };

    langToggleButton.addEventListener('click', () => {
        const currentLang = localStorage.getItem('language') || 'en';
        const newLang = currentLang === 'en' ? 'hi' : 'en';
        setLanguage(newLang);
    });

    // Set initial language on page load
    const initialLang = localStorage.getItem('language') || 'en';
    setLanguage(initialLang);

    // --- HERO SECTION PARALLAX ---
    const heroSection = document.getElementById('hero');
    if (heroSection) {
        heroSection.addEventListener('mousemove', (e) => {
            const parallaxLayers = document.querySelectorAll('.mountain-layer');
            // Calculate the base movement based on the mouse position from the center of the screen
            const x = (window.innerWidth / 2 - e.pageX) / 20;

            parallaxLayers.forEach(layer => {
                const speed = layer.getAttribute('data-speed');
                const x_movement = (x * speed) / 10;
                layer.style.transform = `translateX(${x_movement}px)`;
            });
        });
    }

    // --- AARTI PAGE DRAGGABLE LOGIC ---
    const aartiContainer = document.getElementById('aarti-container');
    if (aartiContainer) {
        const pujaItems = document.querySelectorAll('.puja-item');

        pujaItems.forEach(item => {
            let isDragging = false;
            let offsetX, offsetY;

            // Function for both mouse and touch events
            const startDrag = (e) => {
                isDragging = true;
                item.classList.add('dragging'); // Add class to scale up
                const clientX = e.clientX || e.touches[0].clientX;
                const clientY = e.clientY || e.touches[0].clientY;
                offsetX = clientX - item.getBoundingClientRect().left;
                offsetY = clientY - item.getBoundingClientRect().top;
            };

            const drag = (e) => {
                if (!isDragging) return;
                e.preventDefault(); // Prevent scrolling on touch devices
                const clientX = e.clientX || e.touches[0].clientX;
                const clientY = e.clientY || e.touches[0].clientY;
                const containerRect = aartiContainer.getBoundingClientRect();
                let newX = clientX - containerRect.left - offsetX;
                let newY = clientY - containerRect.top - offsetY;
                item.style.left = `${newX}px`;
                item.style.top = `${newY}px`;
            };

            const stopDrag = () => {
                if (!isDragging) return;
                isDragging = false;
                item.classList.remove('dragging'); // Remove class to scale down
                // Remove inline styles so the item animates back to its CSS position
                item.style.left = '';
                item.style.top = '';
            };

            item.addEventListener('mousedown', startDrag);
            document.addEventListener('mousemove', drag);
            document.addEventListener('mouseup', stopDrag);

            item.addEventListener('touchstart', startDrag, { passive: false });
            document.addEventListener('touchmove', drag, { passive: false });
            document.addEventListener('touchend', stopDrag);
        });
    }
});