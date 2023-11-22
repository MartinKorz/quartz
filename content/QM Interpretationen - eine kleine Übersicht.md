Die pdf des Dokuments ist unter [[QM_Interp.pdf]] hinterlegt. Der Text richtet sich an Studierende, die Quantenmechanik-Vorlesungen hören uns ein Interesse an den Interpretationen der Quantenmechanik haben.

#### Unfertige Aspekte
- Nicht alle Interpretationen haben aktuell eigenständige Zeichnungen.
- Der Feinschliff fehlt noch an einigen Stellen
- Empfehlenswerte Quellen für ein tieferes Verständniss fehlen bisher.

# QM Interpretationen - eine kleine Übersicht
## Interpretationen der Quantenmechanik am Beispiel Schrödingers Katze

![[image-20231122184545.png|500]]

Da in den Vorlesungen zur Quantenmechanik nicht detailliert auf die vielen —und auch
heute noch diskutierten— Interpretationen der Theorie eingegangen werden kann, soll dieses
Dokument Interessierten einen ersten Einblick in die meistdiskutierten Interpretationen
geben, und Quellen für eine tiefere Beschäftigung aufzeigen.

**Disclaimer:**
- Die mathematischen Ausdrücke in diesem Text sind als Veranschaulichung zu verstehen,
nicht als vollständige, rigorose Beschreibung.
- Relativistisches, Spin, und Identische Teilchen werden ausgeklammert. Die betra-
chteten Aspekte bleiben auch in den ausgebauteren quantenmechanischen Theorien
relevant.
- Beim Erstellen dieses Dokuments sind keine Katzen zu Schaden gekommen.

## 1 Wozu Interpretationen? - Schrödingers Katze

In der klassischen Mechanik gibt es einen (besonders im Vergleich zur QM) eindeutigen
Zusammenhang zwischen Objekten in der Theorie und Dingen des Alltags. Dadurch kann
die Theorie recht zwanglos als Beschreibung unserer Welt aufgefasst werden.
Das ist in der Quantenmechanik in manchen Punkten nicht mehr der Fall. Der wohl
meistdiskutierte Aspekt ist das ‚Messproblem‘, welches mit Schrödinger’s Katze allgemein
bekannt geworden ist:
Schrödingers Katze. Um den Widerspruch zwischen der Quantenmechanik wie von der
Schrödinger-Gleichung beschrieben und unserer Alltagserfahrung klarzumachen, beschreibt
Erwin Schrödinger 1935 ein Gedankenexperiment, in welchem die quantenmechanische
Unbestimmtheit des Ortes atomarer Teilchen sich ausweitet und die Verfassung einer ganzen Katze unbestimmt wird.
In einer Kiste befindet sich ein radioaktives Atom, ein Zählrohr mit Auslöser für Schlafmit-
tel, sowie eine noch muntere Katze.

![[image-20231122184728.png|500]]

Das radioaktive Material wird mit einer Wahrscheinlichkeit von 50 % in der nächsten Stunde
zerfallen. Dabei misst das Zählrohr den Zerfall und setzt das Schlafmittel frei, welches die
Katze einschlafen lässt [^1].
Es passiert (idealisiert) folgendes: Zu Beginn haben nur atomar kleine Teilchen in der
Beschreibung der Quantenmechanik unbestimmte Orte. Mit der Zeit aber sammelt sich
in der Zustandsbeschreibung ein Anteil an, in welchem das Atom zerfallen ist. In diesem
Anteil schlägt das Zählrohr aus, lässt das Schlafgas frei und die Katze schläft. In dem
Anteil ohne zerfallenes Atom läuft die Katze munter (und ungeduldig werdend) in ihrer
Box umher.
Tatsächlich wird aber keine Experimentatorin[^2] beim Öffnen der Kiste ’einen Anteil mit
tief schlafender und einen Anteil mit wacher’ Katze vorfinden. Stattdessen wird in der
Hälfte der Fälle die Katze eindeutig schlafen und in der anderen eindeutig wütend sein.

[^1]: In Schrödingers Gedankenexperiment wurde tödliche Blausäure verwendet. Im Sinne der Ethikkommission wird für das Gedankenexperiment hier Schlafmittel benutzt.
[^2]: Der Traum, der Alices Karriere zur führenden Experimentatorin für Gedankenexperimente auslöste, zeigt klar, wie außergewöhnlich das Erleben solcher Überlagerungen wäre. [Alice’s Adventures in Wonderland; Lewis Carroll; 1865]

Würden die Schrödinger-Gleichung und ihre Lösung, die Wellenfunktion (Ψ), unsere
Welt tatsächlich in letzter Konsequenz richtig und vollständig beschreiben, so hätten
Experimente keinen im gewohnten (klassischen) Sinne eindeutigen Ausgang: Die Katze
ist in einer Überlagerung aus tief schlafend und lebhaft (In Schrödingers Variante des
Experiments tot und lebendig).



> [!QUOTE] „Die gegenwärtige Situation der Quantenmechanik“, Erwin Schrödinger (1935)
> Eine Katze wird in eine Stahlkammer gesperrt, zusammen mit folgender Höllenmaschine
(die man gegen den direkten Zugriff der Katze sichern muß): in einem Geigerschen Zählrohr befindet sich eine winzige Menge radioaktiver Substanz, so wenig, daß im Lauf einer Stunde vielleicht eines von den Atomen zerfällt, ebenso wahrscheinlich aber auch keines; geschieht es, so spricht das Zählrohr an und betätigt über ein Relais ein Hämmerchen, das ein Kölbchen mit Blausäure zertrümmert. Hat man dieses ganze System eine Stunde lang sich selbst überlassen,
so wird man sich sagen, daß die Katze noch lebt, wenn inzwischen kein Atom zerfallen ist. Der erste Atomzerfall würde sie vergiftet haben. Die ψ-Funktion des ganzen Systems würde das so zum Ausdruck bringen, daß in ihr die lebende und die tote Katze [. . . ] zu gleichen Teilen gemischt oder verschmiert sind. Das Typische an diesen Fällen ist, daß eine ursprünglich auf den Atombereich beschränkte Unbestimmtheit sich in grobsinnliche Unbestimmtheit umsetzt, die sich dann durch direkte Beobachtung entscheiden läßt. Das hindert uns, in so naiver Weise ein „verwaschenes Modell“ als Abbild der Wirklichkeit gelten zu lassen.

Um diesen Widerspruch mit unseren Alltagserfahrungen aufzulösen, gibt es verschiedene
Interpretationen (genauer: Anpassungen) der Quantenmechanik, die heute vertreten werden.
Im Folgenden wird zuerst die Minimal-Interpretation der Quantenmechanik vorgestellt, auf
welche sich alle Interpretationen einigen können. Mit deren Hilfe wird dann das Katzen-
Experiment genauer betrachtet, um schließlich die meist-vertretenen Interpretationen zu
veranschaulichen.

## 2 Der gemeinsame Nenner: Die Minimalinterpretation

Die Minimal-Interpretation ist sozusagen der gemeinsame Ausgangspunkt der Quantenmechanik. Von ihr aus kann man auf weiter gehende Interpretationen hinarbeiten. 
Zustände sind Vektoren $|\psi_t\rangle$ im Hilbert-Raum $\mathcal{H}$. Man erhält den neuen Raum der möglichen Zustände $\mathcal{H}$, indem man jeden[^3] klassischen Zustand zu einem Basisvektor "befördert", z.B. ist die Wellenfunktion von $N$ Teilchen als Vektor im Hilbert-Raum als eine komplexe Verteilung über alle Teilchenkonfigurationen 

$$
\psi:\qquad \mathbb{R}^{3N}\rightarrow \mathbb{C}, \quad
\{\vec{r}\}\mapsto \psi(\{\vec{r}\})
$$
beschreibbar: $|\psi_t\rangle =\int d^{3N} r\ \psi(\{\vec{r}\},t)\ | \{\vec{r}\} \rangle$,

![[image-20231122185214.png|200]] Beispiel-Wellenfunktion für ein Teilchen
in 2D, wobei die komplexe Phase als
Farbe und die Amplitude als Intensität
dargestellt ist.

[^3]: Hierzu kommen innere Freiheitsgrade wie der Spin. Auch verlieren Geschwindigkeit und Ort ihren Status als voneinander unabhängige Größen - der gesamte Zustand lässt sich gleichwertig als Verteilung über die Orte oder über ihre Impulse festlegen $\psi(\{\vec{r}\})\leftrightarrow \tilde{\psi}(\{\vec{p}\})$. Da die Verbindung eine Fourier-Transformation ist, ergibt sich die Heisenbergsche Unschärferelation dafür, wie scharf die zueinander gehörenden Wellenfunktionen $\psi$ und $\tilde{\psi}$ um einen festen Ort und Impuls fokussiert sein können: $\Delta x\Delta p \ge \hbar/2$.

wobei die Vektoren $| \{\vec{r}\} \rangle$ eine kontinuierliche Basis bilden. Die Zeitentwicklung von Zuständen ist durch die Schrödinger-Gleichung gegeben. Da Messungen nur durch Wechselwirkung möglich sind, ist es naheliegend, dass bei der Beschreibung elementarer Teilchen Messungen einen signifikanten Einfluss auf den Zustand haben welcher explizit beschrieben werden muss. Messungen sind mit Operatoren $\hat{O}$ darstellbar, und um Experimente vorherzusagen bildet man Erwartungswerte $\langle \hat{O} \rangle_t = \langle \psi_t | \hat{O} |\psi_t\rangle$. Nach einer Messung ersetzt man die alte Zustandsbeschreibung, durch eine, die dem gemessenen Zustand entspricht. Der gemeinsame Anteil (genauer das Betragsquadrat des Skalarprodukts) der ursprünglichen Zustandsbeschreibung ($|\psi_t\rangle$) mit dem 'gemessenen' Zustand ($|\Phi\rangle$), gibt die Wahrscheinlichkeit dieses experimentellen Ergebnisses an $p(\Phi|\psi_t)=|\langle\Phi |\psi_t\rangle|^2$ (Born'sche Regel).

Mit dieser Interpretation lassen sich erfolgreich Experimentelle Ergebnisse vorhersagen, sie macht aber erst einmal keine Aussage darüber, was ein Zustand im Hilbert-Raum nun genau mit der Realität zu tun hat. Auch ist es erklärungsbedürftig, dass die Schrödinger-Gleichung, welche doch wie im klassischen die Newton'sche Bewegungsgleichung alle Zeitentwicklung beschreiben sollte, durch Messungen ausgehebelt wird[^t].

[^t]: Tatsächlich kann man bis auf den 'Kollapsprozess' (s. Diskussion in den folgenden Seiten) und die Born'sche Regel die anderen Regeln für Messungen aus der Schrödinger-Gleichung herleiten. Schrödingers-Katze ist also gut geeignet, um mögliche Probleme herauszuarbeiten.
## 3 Schrödingers Katze im Licht der verschiedenen Interpretationen

#### Kurzgefasst
(Für eine bessere Übereinstimmung mit den üblichen Formulierungen wird hier die tödliche
Originalvariante des Gedankenexperiments beschrieben)

**In der Kopenhagener Interpretation** wird angenommen, dass die Schrödinger-Gleichung
keine voll gültige Beschreibung der Welt-Entwicklung mit der Zeit ist, sondern dass zusätzlich
bei Messungen der Zustand des Systems mit einer gewissen Wahrscheinlichkeit (nach der
Bornschen Regel), aus einer Überlagerung in eines der Messergebnisse kollabiert. Ob die
Katze lebt oder nicht, entscheidet sich bei der Messung.

**In Dynamischer-Kollaps-Theorien** wird das Kollaps-Konzept als statistischer Prozess
mit der Schrödinger-Gleichung vereint, um eine mathematisch klar definierte Entwicklung
des Zustands mit der Zeit zu erhalten. Dadurch würden Überlagerungen von Zuständen
großer Systeme (wie einer Katze oder von Menschen) gar nicht erst Zustande kommen,
während auf (sub-)atomarer Ebene Überlagerungen die Regel sind.

**Die Viele-Welten-Interpretation** gibt der Schrödinger-Gleichung und der Wellenfunktion
volle Gültigkeit. Wenn Schrödinger seine Box öffnet, wird im Nachhinein die Wellenfunktion
eine Überlagerung aus ’Erwin freut sich über seine noch lebende Katze’ und ’Erwin ist
über den Verlust seiner Katze betrübt’ das Ergebnis sein. Tatsächlich ist eine Konsequenz
der SG, dass derartige Teile der Überlagerung sich in Zukunft gegenseitig nicht (genauer:
vernachlässigbar) beeinflussen und damit (wenn die Wellenfunktion die Realität ist) beide
Versionen von Schrödinger in diesem Sinne parallel vor sich hin leben werden. Dieses
Aufspalten in Parallelwelten ist zentraler Teil der Viele-Welten-Interpretation. Da unsere
Wahrnehmung/Messergebnis nach Aufspaltung immer nur einem Zweig der tatsächlich
passierten Aufspaltung entspricht, können wir nur einen Zweig des ‚wahren Ausgangs‘ des
Experiments sehen. Die Bornsche Regel gibt an, mit welcher Wahrscheinlichkeit man damit
rechnen muss, in einem entsprechenden Zweig aufzuwachen.

**In der Bohmschen Mechanik** behält die Schrödinger-Gleichung volle Gültigkeit. Die
Wellenfunktion hat aber eine andere Bedeutung als die vollständige Beschreibung des Welt-
Zustandes. In der Bohmschen Mechanik gibt es zusätzlich zur Wellenfunktion tatsächliche
Teilchenorte, wie man es in der klassischen Mechanik gewohnt ist. Es gibt also die ’klassische’
Welt aus Punktteilchen an klar definierten Orten, ihr Verhalten aber wird von der nicht-
klassischen Wellenfunktion festgelegt. In dieser Theorie ist also die Katze eindeutig tot
oder lebendig, da dies nur von den realen Orten abhängt. Da die exakten Teilchenorte im
Alltag aber niemals bestimmbar sind, bleibt man in der Anwendung bei der Beschreibung
durch die Wellenfunktion - auch hier ergibt sich für das Vorhersagen von Experimenten die
Bornsche Regel.

**Im qBismus** wird der mathematische Formalismus der Quantenmechanik weitgehend
umformuliert: Der Formalismus hat nicht den Anspruch, ein Modell der Wirklichkeit zu
sein, sondern ist eine Methode, konsistente und optimale Erwartungen an Experimente
zu erhalten. Hierbei wird Wert darauf gelegt, dass Wissen über ein System immer nur
aus subjektiven Erfahrungen stammt und der bei Berechnungen genutzte ‚Zustand des
Systems‘ in erster Linie den eigenen Wissensstand widerspiegelt. Was in der Kopenhagener
Interpretation eine Messung ist, die die Zeit-Entwicklung nach Schrödinger-Gleichung un-
terbricht und einen ‚Kollaps‘ erzeugt, ist hier ein Informationsgewinn der Experimentatorin,
der in natürlicher Weise auch die Erwartungen an das zukünftige Verhalten des Systems
verändert.

**Weitere Interpretationen:** Es gibt noch viele weitere Interpretationen, die sich in weiten
Teilen oder auch nur Betonungen von den oben Erwähnten unterscheiden. Zusätzlich gibt
es auch innerhalb der genannten Interpretationen unterschiedliche Positionen. Dieser Text
soll nur einen kleinen Einblick in die verschiedenen Versuche geben, die Quantenmechanik
schlüssig zu interpretieren.

### 3.1 Kopenhagener Interpretation
Zu Beginn des Experimentes ist alles recht klar: Auf atomarer Ebene haben beispielsweise
Elektronen im Ort unscharfe Orbitale, aber im großen Ganzen sind Orte klar fest gelegt
und der Zustand eindeutig interpretierbar. Die Wellenfunktion, die sozusagen auf dem
Raum aller möglichen klassischen Welten definiert ist, hat nur Beiträge zu einer Welt: Ein
radioaktives Atom, mit Messinstrument, Schlafgas und Katze in einer Box - während Erwin
Schrödinger über das Experiment wacht.

![[SKatze_1.png|500]]


Ein wenig Zeit ist vergangen. Erwin Schrödinger wartet geduldig, während sich in der
Wellenfunktion ein Anteil herausbildet, in welchem das Atom zerfallen ist. Es gibt jetzt
also zwei Anteile der Wellenfunktion: Einer mit intaktem Atom, einer mit zerfallenem. Alle
anderen Eigenschaften sind in beiden Anteilen gleich. Da wir bereits damit rechnen, dass
elementare Teilchen in ihrer Beschreibung nicht intuitiv verständlich sein brauchen (im
Alltag haben wir es nur mit großen Objekten zu tun), ist dies relativ unproblematisch.

![[SKatze_2.png|500]]


Nun reagiert der Messapparat auf das zerfallene Atom — aber nur in dem Teil der
Wellenfunktion, in dem das Atom auch zerfallen ist — und setzt das Gas frei. Wenn der
Messapparat keinen ‚Kollaps‘ auslöst, hat die Wellenfunktion jetzt zwei auch makroskopisch
unterschiedliche Anteile: Einen mit zerfallenem Atom und freigesetztem Schlafgas und einen mit intaktem Atom und nichts-ahnender Katze. Dies widerspricht schon deutlich unserer
Alltagserfahrung — dies könnte entweder daran liegen, dass es im Alltag keine perfekt
isolierenden Boxen gibt und die ständige Wechselwirkung mit der Außenwelt schon vor der
Entstehung solcher Überlagerungen in der Wellenfunktion zu Messungen (und damit zum
Kollaps, dem ’Zusammenbrechen’ der Wellenfunktion auf nur einen Anteil) führt. Denkbar
ist aber auch, dass bereits (relativ große) Objekte wie der Messapparat ausreichen, um
solch eine Messung durchzuführen. Wenn aber die Schrödinger-Gleichung weiterhin ihre
Gültigkeit behält, gelangen wir zum nächsten Schritt:

![[SKatze_3.png|500]]


In dem Anteil der Wellenfunktion, in dem das Schlafgas freigesetzt ist, schläft die Katze ein,
während sie im anderen Anteil gelangweilt etwas ungeduldig wird. Rein nach Schrödinger-
Gleichung würde also die Katze zwei völlig unterschiedliche Erfahrungen machen und zwar
beide irgendwie gleichzeitig - jeweils im passenden Anteil der Wellenfunktion. Wenn hier
von selbst weiterhin kein Kollaps passiert, muss Erwin Schrödinger also mit einer sehr
seltsamen Vorstellung rechnen um die Geschehnisse in der Box richtig zu beschreiben.

![[SKatze_4.png|500]]



Im Prinzip würde, rein nach Schrödinger-Gleichung, dieses Verhalten der Wellenfunktion
auch weiter gehen, wenn Schrödinger nach einer Stunde die Box öffnet. Die Wellenfunktion
hätte dann einen Anteil mit Schrödinger und seiner schlafenden Katze im Arm und
einen Anteil mit zerkratztem Schrödinger und entflohener Katze. Bei allem Erfolg der
Quantenmechanik ist das eindeutig nicht eine Beschreibung der Welt, wie wir sie beim
öffnen von Boxen erleben. Bei einem der Schritte muss also einer der beiden Anteile der
Wellenfunktion verschwinden - welcher das ist, entscheidet der Zufall: Aus den Amplituden
der Wellenfunktion kann man die zugehörigen Wahrscheinlichkeiten bestimmen (Bornsche
Regel).
Ob dieser Kollaps-Prozess real passiert (und wenn ja: Wann und wie genau?), oder
nur Ergebnis unserer nicht perfekten Theorie ist, dass bleibt erst einmal offen. Denkbar
wäre, dass relativ große Objekte wie der Messapparat bereits ausreichen, um einen Kollaps auszulösen (vgl. Dynamische-Kollaps-Theorien) oder aber auch, dass der Kollaps als Teil der persönlichen Beschreibung zu sehen ist (vgl. QBismus). Spätestens beim Ablesen unserer
Messergebnisse müssen wir einen vollzogenen Kollaps annehmen.


### 3.2 Dynamischer-Kollaps-Theorien
In Dynamischer-Kollaps Theorien wird angenommen, dass es eine natürliche Rate für
einen Kollaps der Wellenfunktion gibt, die beispielsweise von der Teilchen-Zahl abhängt.
Für einzelne Teilchen ist diese Rate so klein, dass die Schrödinger-Gleichung (welche
keinen Kollaps enthält) weitestgehend gilt, für Systeme mit großen Teilchenzahlen wird die
Wellenfunktion aber mit hoher Rate auf einen nicht-Überlagerungszustand zurück geworfen.
Den Kollaps-Prozess kann man in diesen Theorien mathematisch definieren und damit auch
prinzipiell im Experiment überprüfen.
Zu Beginn ist der Zustand nur auf atomarer Ebene verschmiert - der Kollaps-Prozess ist
vernachlässigbar und Schrödinger startet das Experiment:

![[SKatze_1.png|500]]

Einige Minuten später ist die Wellenfunktion in einer Überlagerung mit den Anteilen zer-
fallenes Atom mit Katze in Box und intaktes Atom mit Katze in Box. An der Überlagerung
sind nur einzelne Elementarteilchen beteiligt, ein spontaner Kollaps bleibt also selten.

![[SKatze_2.png|500]]

Jetzt kommt der aus vielen Teilchen bestehende Messapparat ins Spiel — kaum sind
die Anteile mit auf den Zerfall angesprungenen Messapparat und unveränderter Box
in der Wellenfunktion am entstehen, tritt bereits ein spontaner Kollaps auf. Mit einer
gewissen Wahrscheinlichkeit beschreibt jetzt die Wellenfunktion eindeutig einen ausgelösten Messapparat mit austretendem Schlafgas oder eindeutig eine unveränderte Box mit intaktem Atom.

![[SKatze_3.png|500]]

Für den Fall, dass das Schlafgas freigesetzt wurde, schläft die Katze ein. Für den Fall,
dass das Atom nicht zerfallen ist, wird die ganze langsam unruhig.

![[SKatze_4.png|500]]

Wenn Schrödinger schließlich die Box öffnet, weiß er klar womit er rechnen muss. Mit
einer Chance von 50:50 schläft seine Katze oder sie wird ihn genervt anspringen, je nachdem ob das Atom zerfallen ist.

### 3.3 Viele-Welten-Interpretation
In der Viele-Welten-Interpretation hält man das Postulieren eines Kollapses für unnötig.
Da innerhalb der Anteile in der Wellenfunktion alle Geschehnisse (inklusive Erinnerungen)
klassisch und eindeutig aussehen, muss die tatsächlich vorhandene Überlagerung kein
Widerspruch mit unseren Alltagserfahrungen sein:
Zu Beginn ist der Zustand wieder eindeutig und es gibt nur auf atomarer Ebene Über-
lagerungen.

![[SKatze_1.png|500]]

Durch das instabile Atom trennt sich die Wellenfunktion auf zwei Bereiche auf. Einen
mit intaktem Atom, einen mit zerfallenem.

![[SKatze_2.png|500]]

In dem Bereich mit zerfallenem Atom schlägt der Messapparat aus und setzt Schlafgas
frei - noch ist die Katze in beiden Bereichen unbehelligt.

![[SKatze_3.png|500]]

Im Anteil der Wellenfunktion mit freigesetztem Schlafgas schläft die Katze ein, während
sie im anderen Anteil gelangweilt ist und langsam ungeduldig wird.

![[SKatze_4.png|500]]

Wenn Schrödinger schließlich die Box öffnet, verändert sich auch sein Zustand in den
verschiedenen Anteilen der Wellenfunktionen unterschiedlich. In dem Anteil mit zerfallenem
Atom sieht Schrödinger eine eindeutig schlafende Katze und nimmt sie auf den Arm. Im
Anteil mit intaktem Atom springt die Katze Schrödinger eindeutig an und rennt aus dem
Labor. Aus Sicht der Wellenfunktion sind beides gleichberechtigt vorhandene Anteile - man
kann also sagen, sie beschreibt mehrere Welten. Man kann zeigen, dass einmal so deutlich
getrennte Anteile der Wellenfunktion sich in Zukunft vernachlässigbar beeinflussen — keiner der beiden Erwin Schrödinger ahnt (außer durch dieses Gedankenexperiment) etwas vom anderen und denkt deshalb, sein Experiment wäre eindeutig ausgegangen.


### 3.4 DeBroglie-Bohm-Theorie
In der Bohmschen Mechanik (auch DeBroglie-Bohm-Theorie) hat die Schrödinger-Gleichung zwar volle Gültigkeit (es gibt keinen Kollaps), aber die Wellenfunktion gibt nur die Dynamik
vor, nicht (für sich alleine) den Zustand, in dem sich das System befindet. Wie in der
klassischen Mechanik gibt es exakt in ihrem Ort festgelegte Teilchen - nur wird ihre
Bewegung hier von der Wellenfunktion festgelegt. Es kommen in der Wellenfunktion Anteile
vor, die zu Überlagerungen gehören. Sie können auch Einfluss auf die Bewegung der Teilchen
haben, aber die Teilchenpositionen sind jederzeit exakt festgelegt.
Zu Beginn ist die Wellenfunktion nur auf atomarer Ebene unscharf und beschreibt
Schrödingers Aufbau mit Katze und Kiste. Dabei liegt die tatsächliche Position der Teilchen
innerhalb des Bereichs, den die Wellenfunktion markiert.

![[SKatze_1_bohm.png|500]] ![[SKatze_1.png|500]]

Das instabile Atom führt dazu, dass die Wellenfunktion sich auf zwei Bereiche aufs-
paltet. Einer entspricht einem zerfallenen Atom, einer einem intakten. Die tatsächlichen
Teilchenpositionen folgen dabei, je nach dem was genau der Anfangszustand war, einem der beiden Anteile der Wellenfunktion. Es gibt jetzt also eine (geringfügige) Aufspaltung der
Wellenfunktion, aber eine eindeutige Position der Teilchen (hier: Das Atom zerfällt nicht):

![[SKatze_1_bohm.png|500]]
![[SKatze_2.png|500]]

Beide Anteile der Wellenfunktion entwickeln sich weiter, wobei die Teilchen dem Anteil
mit intaktem Atom folgen. Die Wellenfunktion enthält also einen unveränderten Anteil,
der einem intakten Atom entspräche und einen Anteil, der einem ausgelöstem Detektor
und freigesetztem Gas entspräche.

![[SKatze_1_bohm.png|500]] ![[SKatze_3.png|500]]


Beide Anteile der Wellenfunktion entwickeln sich weiter und entsprächen jetzt einerseits
einer gelangweilten Katze und andererseits einer schlafenden Katze. Die Teilchen, aus
denen unser System besteht, bilden, von dem anderen Anteil unbeeinflusst, eindeutig eine
gelangweilte Katze.

![[SKatze_1_bohm.png|500]] ![[SKatze_4.png|500]]

Wenn Erwin Schrödinger am Ende des Experiments die Box öffnet, wird er eine wütende
Katze vorfinden. Wie genau das passiert, ist durch den Anteil der Wellenfunktion, der einer
gereizten Katze entspricht, gegeben. Der zweite Anteil der Wellenfunktion entwickelt sich
ohne weitere Bedeutung vor sich hin. Obwohl die Teilchen in der Bohm’schen Mechanik
exakte Positionen haben, ist ihr Verhalten stets durch die Wellenfunktion am zugehörigen
Ort festgelegt. Deswegen ist es unmöglich, die Positionen experimentell exakt zu bestimmen.
Experimentelle Vorhersagen kann man auch hier durch die Bornsche Regel machen.

### 3.5 qBismus
Im qBismus wird der Anspruch der Quantenmechanik als physikalische Theorie anders
aufgefasst. Die Theorie hat nicht in erster Linie den Anspruch, ein Abbild der Wirklichkeit
zu sein, sondern ist die optimale und konsistente Methode, aus dem persönlichen bish-
erigen Erfahrungen bestmögliche Erwartungen an die Zukunft zu richten. Wenn also die
Wellenfunktion unser bestmögliches Wissen über ein System wiedergibt, ist es auch nicht
erstaunlich, wenn sie nach einer Messung (unser Wissen verändert sich) plötzlich eine andere ist. Was in anderen Interpretationen ein real stattfindender Kollaps ist, ist im qBismus
nur eine Reaktion unserer Beschreibung auf neues Wissen. Die Schrödinger-Gleichung legt dann fest, was für Erwartungen wir an Experimente zu richten haben — solange wir nicht eingreifen und neues Wissen bekommen.
Zu Beginn ist der Zustand bis auf elementare Unschärfen wie Elektronorbitale eindeutig
bekannt, was sich auch in der Beschreibung durch die Wellenfunktion widerspiegelt.

![[image-20231122190652.png|500]]


Mit der Zeit spaltet sich die Beschreibung des instabilen Atoms in die Anteile zerfallen
und intakt auf.

![[image-20231122190701.png|500]]


Die zwei Anteile der Wellenfunktion (die bestmögliche Beschreibung, die Schrödinger
nutzen kann, um Vorhersagen über das Experiment zu machen) entwickeln sich: Während
im einen Anteil die Katze ungeduldig wird, schlägt im anderen Anteil der Detektor aus
und setzt das Schlafgas frei.


![[image-20231122190722.png|500]]

Die Anteile enthalten jetzt einmal die wütende und einmal die schlafende Katze.


![[image-20231122190736.png|500]]


Vor dem Öffnen der Box nutzt Schrödinger sein Wissen über die Quantenmechanik und
folgert, dass er mit Wahrscheinlichkeit 50:50 mit einer wütenden oder einer schlafenden Katze rechnen muss. Da im qBismus persönliche Erfahrungen und Erwartungen die Grundlage bilden, ist ein Kollaps der Beschreibung auf das Messergebnis ein offensichtlich sinnvolles Vorgehen. Die Aussage über die Realität liegt im qBismus darin, dass unsere Welt (wie auch immer sie in Wahrheit ist) so gestaltet sein muss, dass bestmögliche Erwartungen an Experimente durch die Quantenmechanik richtig beschrieben werden.