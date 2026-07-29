const translations = {
  de: {
    navigation: {
      about: 'Über mich',
      skills: 'Kenntnisse',
      experience: 'Erfahrung',
      education: 'Bildung',
      projects: 'Projekte',
      contact: 'Kontakt',
      openMenu: 'Menü öffnen',
      closeMenu: 'Menü schließen',
      languageSelection: 'Sprache auswählen',
    },

    hero: {
      eyebrow: 'Web- & Anwendungsentwickler',
      greeting: 'Hallo, ich bin',
      name: 'Lars Winterling.',
      text:
        'Ich entwickle moderne Websites, mobile Anwendungen und individuelle Softwarelösungen mit einem Fokus auf klare Benutzeroberflächen und zuverlässige Technik.',
      projectsButton: 'Projekte ansehen',
      contactButton: 'Kontakt aufnehmen',
      imageAlt: 'Bewerbungsfoto von Lars Winterling',
    },

    about: {
      label: 'Über mich',
      title: 'Technik verstehen. Lösungen entwickeln.',
      text:
        'Als ausgebildeter Fachinformatiker für Anwendungsentwicklung verbinde ich moderne Webentwicklung mit praktischer Erfahrung in Linux, Proxmox, mobilen Anwendungen und lokalen KI-Modellen. Ich arbeite strukturiert, lerne schnell und entwickle Lösungen, die technisch zuverlässig und angenehm zu bedienen sind.',
    },

    skills: {
      label: 'Technologien und Kompetenzen',
      title: 'Mein technisches Werkzeugset',
      groups: [
        {
          title: 'Webentwicklung',
          items: [
            'HTML',
            'CSS',
            'JavaScript',
            'PHP',
            'React',
            'Angular',
            'TypeScript',
          ],
        },
        {
          title: 'Anwendungsentwicklung',
          items: [
            'Python',
            'Swift',
            'Flutter',
            'Dart',
            'Lokale KI-Modelle',
          ],
        },
        {
          title: 'Systeme und Infrastruktur',
          items: [
            'Linux',
            'Proxmox',
            'AWS',
            'Active Directory',
            'Microsoft Office',
          ],
        },
      ],
    },

    experience: {
      label: 'Praktische Erfahrung',
      title: 'Entwicklung mit realem Praxisbezug',
      date: 'Seit September 2025',
      position: 'Web- und Anwendungsentwickler',
      status: 'Aktuell',
      tasks: [
        'Entwicklung responsiver WordPress-Websites und Onlineshops',
        'Entwicklung individueller WordPress-Plugins',
        'Entwicklung von Python- und Swift-Anwendungen',
        'Integration lokal betriebener KI-Modelle',
        'Technischer Kundensupport und Fehleranalyse',
      ],
    },

    education: {
      label: 'Bildung',
      title: 'Mein bisheriger Ausbildungsweg',
      items: [
        {
          date: '09/2022 – 07/2025',
          title: 'Fachinformatiker für Anwendungsentwicklung',
          institution: 'Deutsche Telekom',
        },
        {
          date: 'Bis 2022',
          title: 'Allgemeine Hochschulreife',
          institution: 'Stadtgymnasium Köln-Porz',
        },
      ],
    },

    projects: {
      label: 'Projekte',
      title: 'Ausgewählte Praxisbereiche',
      items: [
        {
          title: 'Persönliche Bewerbungswebsite',
          description:
            'Responsive React-Website mit Vite, bereitgestellt auf einem eigenen Linux-System innerhalb einer Proxmox-Umgebung.',
          technologies: [
            'React',
            'Vite',
            'CSS',
            'Linux',
            'Proxmox',
          ],
        },
        {
          title: 'Homelab Control Center',
          description:
            'Modernes Angular-Dashboard zur Überwachung und Verwaltung einer Homelab-Infrastruktur. Der aktuelle Entwicklungsstand basiert noch auf Dummy-Daten.',
          technologies: [
            'Angular 22',
            'TypeScript',
            'SCSS',
            'Signals',
            'Proxmox',
            'Linux',
          ],
          button: 'Projekt ansehen',
          url: 'http://homelab-test.cleetus.de',
        },
        {
          title: 'Kalorien-Tracking-App',
          description:
            'Mobile Anwendung zur Erfassung von Mahlzeiten, Kalorien und individuellen Ernährungszielen.',
          technologies: [
            'Flutter',
            'Dart',
            'Mobile App',
          ],
        },
        {
          title: 'WordPress-Entwicklung',
          description:
            'Entwicklung responsiver Websites, Onlineshops und individueller WordPress-Plugins.',
          technologies: [
            'WordPress',
            'PHP',
            'JavaScript',
            'CSS',
          ],
        },
        {
          title: 'Lokale KI-Anwendungen',
          description:
            'Entwicklung von Python- und Swift-Anwendungen mit lokal betriebenen KI-Modellen.',
          technologies: [
            'Python',
            'Swift',
            'Lokale KI',
          ],
        },
      ],
    },

    contact: {
      label: 'Kontakt',
      title: 'Lassen Sie uns ins Gespräch kommen.',
      text:
        'Sie suchen einen motivierten Entwickler mit Interesse an modernen Technologien und praktischer Erfahrung? Ich freue mich über Ihre Nachricht.',
      emailLabel: 'E-Mail',
      locationLabel: 'Standort',
      location: 'Köln, Deutschland',
      button: 'E-Mail schreiben',
    },

    footer: {
      imprint: 'Impressum',
      privacy: 'Datenschutz',
      github: 'GitHub',
      navigationLabel: 'Rechtliche Informationen',
    },

    legal: {
      imprintPage: {
        back: 'Zurück zur Startseite',
        label: 'Rechtliches',
        title: 'Impressum',
        intro: 'Informationen über den Betreiber dieser Website.',

        providerTitle: 'Angaben gemäß § 5 DDG',
        country: 'Deutschland',

        contactTitle: 'Kontakt',
        emailLabel: 'E-Mail',

        responsibleTitle: 'Verantwortlich für den Inhalt',

        liabilityTitle: 'Haftung für Inhalte',
        liabilityText:
          'Als Diensteanbieter bin ich für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Eine Verpflichtung zur Überwachung übermittelter oder gespeicherter fremder Informationen besteht jedoch grundsätzlich nicht. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.',

        linksTitle: 'Haftung für externe Links',
        linksText:
          'Diese Website kann Links zu externen Websites Dritter enthalten, auf deren Inhalte ich keinen Einfluss habe. Für diese fremden Inhalte kann daher keine Gewähr übernommen werden. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.',

        copyrightTitle: 'Urheberrecht',
        copyrightText:
          'Die auf dieser Website erstellten Inhalte und Werke unterliegen dem deutschen Urheberrecht. Eine Vervielfältigung, Bearbeitung, Verbreitung oder sonstige Verwertung außerhalb der Grenzen des Urheberrechts bedarf der vorherigen schriftlichen Zustimmung des jeweiligen Rechteinhabers.',

        translationNoticeTitle: '',
        translationNoticeText: '',

        bottomNavigationLabel: 'Weitere rechtliche Informationen',
        privacyLink: 'Zur Datenschutzerklärung',
      },

      privacyPage: {
        back: 'Zurück zur Startseite',
        label: 'Datenschutz',
        title: 'Datenschutzerklärung',
        intro:
          'Informationen über die Verarbeitung personenbezogener Daten auf dieser Website.',

        controllerTitle: '1. Verantwortlicher',
        country: 'Deutschland',
        emailLabel: 'E-Mail',

        hostingTitle: '2. Hosting und Server-Logdateien',
        hostingTextOne:
          'Beim Aufruf dieser Website können technisch erforderliche Daten durch den Server oder den Hosting-Anbieter verarbeitet werden. Dazu können insbesondere die IP-Adresse, Datum und Uhrzeit des Zugriffs, die aufgerufene Seite, die übertragene Datenmenge, der Browsertyp, das Betriebssystem und die zuvor besuchte Website gehören.',
        hostingTextTwo:
          'Die Verarbeitung erfolgt zur sicheren, stabilen und zuverlässigen Bereitstellung dieser Website. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse liegt im sicheren und störungsfreien Betrieb der Website.',
        hostingProviderLabel: 'Hosting-Anbieter',

        emailContactTitle: '3. Kontaktaufnahme per E-Mail',
        emailContactTextOne:
          'Wenn Sie mich per E-Mail kontaktieren, werden die von Ihnen übermittelten Angaben verarbeitet, um Ihre Anfrage zu bearbeiten und gegebenenfalls darauf zu antworten.',
        emailContactTextTwo:
          'Je nach Inhalt der Anfrage erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO zur Durchführung vorvertraglicher Maßnahmen oder auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO aufgrund des berechtigten Interesses an der Bearbeitung von Anfragen.',

        cookiesTitle: '4. Cookies und Analysewerkzeuge',
        cookiesText:
          'Diese Website verwendet derzeit keine Analysewerkzeuge und setzt keine nicht technisch erforderlichen Cookies ein.',

        externalContentTitle:
          '5. Externe Inhalte, Dienste und Schriftarten',
        externalContentText:
          'Auf dieser Website werden derzeit keine extern geladenen Schriftarten, Videos, Karten oder sonstigen Inhalte von Drittanbietern eingebunden. Sollte sich dies ändern, wird diese Datenschutzerklärung entsprechend angepasst.',

        storageTitle: '6. Speicherdauer',
        storageText:
          'Personenbezogene Daten werden nur so lange gespeichert, wie dies für den jeweiligen Zweck erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen. Nach Wegfall des Verarbeitungszwecks werden die Daten gelöscht, sofern keine gesetzlichen Gründe für eine weitere Speicherung vorliegen.',

        rightsTitle: '7. Rechte betroffener Personen',
        rightsIntro:
          'Sie haben im Rahmen der gesetzlichen Voraussetzungen insbesondere folgende Rechte:',
        rights: [
          'Recht auf Auskunft über die verarbeiteten personenbezogenen Daten',
          'Recht auf Berichtigung unrichtiger oder unvollständiger Daten',
          'Recht auf Löschung personenbezogener Daten',
          'Recht auf Einschränkung der Verarbeitung',
          'Recht auf Datenübertragbarkeit',
          'Recht auf Widerspruch gegen bestimmte Verarbeitungen',
          'Recht auf Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft',
        ],

        objectionTitle: '8. Widerspruchsrecht',
        objectionText:
          'Soweit personenbezogene Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO verarbeitet werden, haben Sie das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit Widerspruch gegen die Verarbeitung einzulegen.',

        complaintTitle: '9. Beschwerderecht',
        complaintText:
          'Sie haben das Recht, sich bei einer zuständigen Datenschutzaufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren.',

        securityTitle: '10. Datensicherheit',
        securityText:
          'Es werden angemessene technische und organisatorische Maßnahmen eingesetzt, um die auf dieser Website verarbeiteten Daten gegen Verlust, Manipulation und unberechtigten Zugriff zu schützen.',

        changesTitle: '11. Änderungen dieser Datenschutzerklärung',
        changesText:
          'Diese Datenschutzerklärung kann angepasst werden, wenn sich die Website, die eingesetzten Dienste oder die gesetzlichen Anforderungen ändern.',

        versionTitle: '12. Stand',
        versionText: 'Stand: Juli 2026',

        translationNoticeTitle: '',
        translationNoticeText: '',

        bottomNavigationLabel: 'Weitere rechtliche Informationen',
        imprintLink: 'Zum Impressum',
      },
    },
  },

  en: {
    navigation: {
      about: 'About me',
      skills: 'Skills',
      experience: 'Experience',
      education: 'Education',
      projects: 'Projects',
      contact: 'Contact',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      languageSelection: 'Select language',
    },

    hero: {
      eyebrow: 'Web & Application Developer',
      greeting: "Hello, I'm",
      name: 'Lars Winterling.',
      text:
        'I develop modern websites, mobile applications and custom software solutions with a focus on clear user interfaces and reliable technology.',
      projectsButton: 'View projects',
      contactButton: 'Get in touch',
      imageAlt: 'Portrait of Lars Winterling',
    },

    about: {
      label: 'About me',
      title: 'Understanding technology. Building solutions.',
      text:
        'As a qualified application developer, I combine modern web development with practical experience in Linux, Proxmox, mobile applications and local AI models. I work in a structured manner, learn quickly and build solutions that are both reliable and easy to use.',
    },

    skills: {
      label: 'Technologies and skills',
      title: 'My technical toolkit',
      groups: [
        {
          title: 'Web development',
          items: [
            'HTML',
            'CSS',
            'JavaScript',
            'PHP',
            'React',
            'Angular',
            'TypeScript',
          ],
        },
        {
          title: 'Application development',
          items: [
            'Python',
            'Swift',
            'Flutter',
            'Dart',
            'Local AI models',
          ],
        },
        {
          title: 'Systems and infrastructure',
          items: [
            'Linux',
            'Proxmox',
            'AWS',
            'Active Directory',
            'Microsoft Office',
          ],
        },
      ],
    },

    experience: {
      label: 'Practical experience',
      title: 'Development with real-world experience',
      date: 'Since September 2025',
      position: 'Web and Application Developer',
      status: 'Current',
      tasks: [
        'Development of responsive WordPress websites and online shops',
        'Development of custom WordPress plugins',
        'Development of Python and Swift applications',
        'Integration of locally operated AI models',
        'Technical customer support and troubleshooting',
      ],
    },

    education: {
      label: 'Education',
      title: 'My educational background',
      items: [
        {
          date: '09/2022 – 07/2025',
          title: 'IT Specialist for Application Development',
          institution: 'Deutsche Telekom',
        },
        {
          date: 'Until 2022',
          title: 'German University Entrance Qualification',
          institution: 'Stadtgymnasium Köln-Porz',
        },
      ],
    },

    projects: {
      label: 'Projects',
      title: 'Selected areas of practical work',
      items: [
        {
          title: 'Personal Portfolio Website',
          description:
            'Responsive React website built with Vite and hosted on a dedicated Linux system within a Proxmox environment.',
          technologies: [
            'React',
            'Vite',
            'CSS',
            'Linux',
            'Proxmox',
          ],
        },
        {
          title: 'Homelab Control Center',
          description:
            'Modern Angular dashboard for monitoring and managing a homelab infrastructure. The current version is powered by dummy data.',
          technologies: [
            'Angular 22',
            'TypeScript',
            'SCSS',
            'Signals',
            'Proxmox',
            'Linux',
          ],
          button: 'View project',
          url: 'http://homelab-test.cleetus.de',
        },
        {
          title: 'Calorie Tracking App',
          description:
            'Mobile application for tracking meals, calories and personal nutrition goals.',
          technologies: [
            'Flutter',
            'Dart',
            'Mobile App',
          ],
        },
        {
          title: 'WordPress Development',
          description:
            'Development of responsive websites, online shops and custom WordPress plugins.',
          technologies: [
            'WordPress',
            'PHP',
            'JavaScript',
            'CSS',
          ],
        },
        {
          title: 'Local AI Applications',
          description:
            'Development of Python and Swift applications using locally operated AI models.',
          technologies: [
            'Python',
            'Swift',
            'Local AI',
          ],
        },
      ],
    },

    contact: {
      label: 'Contact',
      title: "Let's get in touch.",
      text:
        'Are you looking for a motivated developer with an interest in modern technologies and practical experience? I look forward to hearing from you.',
      emailLabel: 'Email',
      locationLabel: 'Location',
      location: 'Cologne, Germany',
      button: 'Send an email',
    },

    footer: {
      imprint: 'Legal notice',
      privacy: 'Privacy policy',
      github: 'GitHub',
      navigationLabel: 'Legal information',
    },

    legal: {
      imprintPage: {
        back: 'Back to homepage',
        label: 'Legal information',
        title: 'Legal Notice',
        intro: 'Information about the operator of this website.',

        providerTitle:
          'Information pursuant to Section 5 of the German Digital Services Act',
        country: 'Germany',

        contactTitle: 'Contact',
        emailLabel: 'Email',

        responsibleTitle: 'Responsible for the content',

        liabilityTitle: 'Liability for content',
        liabilityText:
          'As the provider of this website, I am responsible for my own content in accordance with the applicable laws. However, there is generally no obligation to monitor transmitted or stored third-party information. Obligations to remove or block the use of information under applicable law remain unaffected.',

        linksTitle: 'Liability for external links',
        linksText:
          'This website may contain links to external third-party websites over whose content I have no control. I therefore cannot accept responsibility for such external content. The respective provider or operator of the linked website is always responsible for its content.',

        copyrightTitle: 'Copyright',
        copyrightText:
          'The content and works created for this website are subject to German copyright law. Reproduction, editing, distribution or any other use beyond the limits of copyright law requires the prior written consent of the respective rights holder.',

        translationNoticeTitle: 'Information about this translation',
        translationNoticeText:
          'This English version is provided for convenience. In the event of differences or ambiguities, the German version is authoritative.',

        bottomNavigationLabel: 'Additional legal information',
        privacyLink: 'View privacy policy',
      },

      privacyPage: {
        back: 'Back to homepage',
        label: 'Privacy',
        title: 'Privacy Policy',
        intro:
          'Information about the processing of personal data on this website.',

        controllerTitle: '1. Data controller',
        country: 'Germany',
        emailLabel: 'Email',

        hostingTitle: '2. Hosting and server log files',
        hostingTextOne:
          'When you access this website, technically necessary data may be processed by the server or hosting provider. This data may include your IP address, the date and time of access, the page requested, the amount of data transferred, your browser type, your operating system and the previously visited website.',
        hostingTextTwo:
          'The processing is carried out to provide this website securely, reliably and without disruption. The legal basis is Article 6(1)(f) of the General Data Protection Regulation. The legitimate interest lies in the secure and reliable operation of the website.',
        hostingProviderLabel: 'Hosting provider',

        emailContactTitle: '3. Contact by email',
        emailContactTextOne:
          'When you contact me by email, the information you provide will be processed in order to handle your enquiry and, where appropriate, respond to it.',
        emailContactTextTwo:
          'Depending on the content of your enquiry, the processing is based on Article 6(1)(b) of the General Data Protection Regulation for pre-contractual measures or Article 6(1)(f) based on the legitimate interest in handling enquiries.',

        cookiesTitle: '4. Cookies and analytics tools',
        cookiesText:
          'This website currently does not use analytics tools and does not set cookies that are not technically necessary.',

        externalContentTitle:
          '5. External content, services and fonts',
        externalContentText:
          'This website currently does not include externally loaded fonts, videos, maps or other third-party content. This privacy policy will be updated accordingly if this changes.',

        storageTitle: '6. Storage period',
        storageText:
          'Personal data is stored only for as long as it is required for the respective purpose or as long as statutory retention obligations apply. Once the purpose of the processing no longer applies, the data will be deleted unless there are legal grounds for further storage.',

        rightsTitle: '7. Rights of data subjects',
        rightsIntro:
          'Subject to the applicable legal requirements, you have the following rights in particular:',
        rights: [
          'The right to obtain information about personal data being processed',
          'The right to correct inaccurate or incomplete data',
          'The right to request the deletion of personal data',
          'The right to restrict processing',
          'The right to data portability',
          'The right to object to certain forms of processing',
          'The right to withdraw consent with effect for the future',
        ],

        objectionTitle: '8. Right to object',
        objectionText:
          'Where personal data is processed on the basis of Article 6(1)(f) of the General Data Protection Regulation, you have the right to object to the processing at any time on grounds relating to your particular situation.',

        complaintTitle: '9. Right to lodge a complaint',
        complaintText:
          'You have the right to lodge a complaint with a competent data protection supervisory authority regarding the processing of your personal data.',

        securityTitle: '10. Data security',
        securityText:
          'Appropriate technical and organisational measures are used to protect data processed on this website against loss, manipulation and unauthorised access.',

        changesTitle: '11. Changes to this privacy policy',
        changesText:
          'This privacy policy may be updated if the website, the services used or the applicable legal requirements change.',

        versionTitle: '12. Last updated',
        versionText: 'Last updated: July 2026',

        translationNoticeTitle: 'Information about this translation',
        translationNoticeText:
          'This English version is provided for convenience. In the event of differences or ambiguities, the German version is authoritative.',

        bottomNavigationLabel: 'Additional legal information',
        imprintLink: 'View legal notice',
      },
    },
  },
}

export default translations