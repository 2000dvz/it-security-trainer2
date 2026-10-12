# IT-Security-Beauftragte:r v1.4.2

Eigenständiger lokaler Browser-Trainer zur Prüfungsvorbereitung für IT-Sicherheitsbeauftragte.

## Start

1. ZIP entpacken.
2. `index.html` per Doppelklick in Safari, Chrome, Edge oder Firefox öffnen.
3. Es ist kein Server, keine Installation und keine Internetverbindung nötig.

## Inhalt

- 114 überarbeitete Fragen aus `Überarbeitete Quizfragen.docx`
- gezielte Korrekturen aus `Fehlerabgleich.docx` für die betroffenen Katalogfragen
- keine alten Inhalte aus einem `data`-Verzeichnis
- keine alten KI-Beauftragten-Fragen
- Fragenbank mit Anzeige der richtigen Antworten zur Kontrolle
- Mehrfachauswahl bei jeder Frage mit exakter Bewertung
- pro Frage genau 4 Antwortmöglichkeiten
- pro Frage mindestens 1 und maximal 3 korrekte Antworten
- keine Teilpunkte

## Funktionen

- Dashboard mit Lernstand, Prüfungsverlauf und Fehlerfokus
- Übungsmodus mit Lösung und Erklärung erst nach dem Beantworten
- Prüfungssimulation ohne Lösungshinweise während der Prüfung
- einstellbare Fragenanzahl
- einstellbare gesamte Prüfungszeit
- optionale Zeit pro Frage
- einstellbare Bestehensgrenze
- zufällige Fragenreihenfolge
- optionale zufällige Antwortreihenfolge
- automatische Abgabe bei Zeitablauf
- Ergebnis mit Prozentwert, bestanden/nicht bestanden, Zeitverbrauch und Detailauswertung
- Anzeige gewählter und korrekter Antworten je Frage
- gezielte Wiederholung falsch beantworteter Fragen
- Fragenbank mit allen Fragen, Antwortmöglichkeiten und sichtbaren korrekten Antworten
- eigene Fragen manuell einzeln hinzufügen
- Fragenimport per Datei für JSON, TXT, MD, MD5/MD.5 und einfache textbasierte PDF-Dateien
- Lernanalyse mit lokal gespeicherten Ergebnissen
- Export des Lernstands als JSON
- Hell-/Dunkelmodus

- Themenfilter vor Übung und Prüfung
- Prüfungsprofile für Kurztest, Wochenprüfung und Vollsimulation
- Fragenqualitätsprüfung mit Hinweisen auf Auffälligkeiten
- Fragenbank zeigt korrekte Antworten sichtbar an
- persönliches Notizfeld pro Frage
- Importbericht mit übernommenen und abgelehnten Fragen
- Review-Modus für falsch beantwortete Prüfungsfragen
- Tastaturbedienung: A/B/C/D toggeln, Enter auswerten oder weiter
- versionierter Fragenbestand mit sichtbarer App-Version

## Tests

`tests.html` per Doppelklick öffnen. Die Seite prüft die zentrale Bewertungslogik, insbesondere:

- exakte Bewertung der Mehrfachauswahl
- keine Teilpunkte
- falsche Zusatzantworten
- Validierung der Fragen- und Antwortlogik
- Bestehenslogik

## Speicherung

Version 1.4.2 verwendet einen neuen lokalen Speicher-Schlüssel, damit alte Fragenstände nicht mit dem überarbeiteten Fragenpool vermischt werden.


Der Trainer speichert Ergebnisse ausschließlich lokal im Browser über `localStorage`. Werden Browserdaten gelöscht oder ein privates Fenster genutzt, kann der Lernstand verloren gehen. Über **Einstellungen → Ergebnisse exportieren** kann ein JSON-Export erzeugt werden.

## Eigene Fragen importieren

In der **Fragenbank** können eigene Fragen manuell angelegt oder per Datei importiert werden.

### JSON

Akzeptiert wird entweder eine Liste oder ein Objekt mit `questions`:

```json
[
  {
    "question": "Welche Aussage ist korrekt?",
    "topic": "Beispiel",
    "explanation": "Kurze Erklärung.",
    "options": [
      { "text": "Antwort A", "correct": false },
      { "text": "Antwort B", "correct": true },
      { "text": "Antwort C", "correct": false },
      { "text": "Antwort D", "correct": false }
    ]
  }
]
```

### TXT, MD, MD5/MD.5 und PDF

Textbasierte Dateien sollten pro Frage einen Block enthalten. Pro Frage sind genau 4 Antwortmöglichkeiten erforderlich, davon müssen 1 bis 3 korrekt sein.

```text
Frage: Was ist das Ziel von IT-Sicherheit?
A) Mehr Umsatz
B) Schutz von Informationen
C) Weniger Dokumentation
D) Schnellere Hardware
Korrekt: B
Erklärung: IT-Sicherheit schützt Informationen vor Missbrauch, Verlust und Manipulation.
```

Bei PDF-Dateien wird lokal eine einfache Text-Extraktion versucht. Gescannte PDFs oder komplex kodierte PDFs enthalten oft keinen direkt lesbaren Text; in diesem Fall bitte den Inhalt als TXT, MD oder JSON exportieren.

## Hinweis

Die Musterlösungen und Erklärungen basieren auf `Überarbeitete Quizfragen.docx`; betroffene Katalogfragen wurden zusätzlich mit `Fehlerabgleich.docx` abgeglichen. Der alte eingebettete Fragenpool wurde entfernt. Die App ersetzt keine offiziellen Prüfungsunterlagen.
