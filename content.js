var styles = `
#mainContent {
    height: ${window.innerHeight - 42 - 30}px !important;
    display: flex;
}
#walk {
    flex-grow: 1;
}
#collection {
    position: relative;
}
#QuestionSheet {
    position: absolute;
    height: ${window.innerHeight - 42 - 30}px !important;
}
aside#container {
    height: 100%;
}
section.partial-right-inner {
    height: 100%;
    overflow: scroll;
}
.side-labs {
    max-width: 30rem !important;
    overflow: scroll;
    height: 100%;
    margin-top: 42px !important;
}
`
var element = document.createElement('style');
element.type = 'text/css'; 
element.appendChild(document.createTextNode(styles));
document.getElementsByTagName("head")[0].appendChild(element);

var labs = `
<section ng-show="$state.is('question.lab')" class="partial-right-inner lab-container ng-scope" ui-view="lab"><!-- ngInclude: 'lab' --><div data-ng-include="'lab'" class="ng-scope">
    <a ng-href="/de/laboratorySpreadsheet/get/ff0kl2" target="_blank" class="ng-scope" href="/de/laboratorySpreadsheet/get/ff0kl2">
        <article class="lab-sheet" compile="laboratorySpreadsheetContent"><style class="ng-scope">
    .lab-sheet {
    font-family: "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Tahoma, sans-serif;
    font-style: normal;
    font-variant: normal;
    text-align: center;
    font-size: 1.2em;
}
.lab-sheet table {
    width: 100%;
    border-collapse: collapse;
}

.lab-sheet td {
    border: 1px solid #000;
    text-align: left;
    vertical-align: top;
    padding: 0.2em 0 0;
    font-size: 0.73em;
}

.lab-sheet ul {
    margin: 0;
    padding: 0 0 0 1em;
}

.lab-sheet li {
    list-style-type: none;
}

.lab-sheet .ls-tab-head {
    font-size: 0.88em;
    font-weight: bold;
}

.lab-sheet .ls-tab-subhead {
    font-weight: bold;
    font-style: italic;
}

.lab-sheet h1 {
    text-align: center;
    font-size: 1.1em;
    font-weight: bold;
}

.lab-sheet .ls-note {
    font-size: 0.85em;
}

.lab-sheet .ls-bold {
    font-weight: bold;
}

.lab-sheet .ls-footer {
    padding-top: 1.5em;
    font-size: 0.9em;
}

.lab-sheet .ls-tab-indented td {
    padding-left: 1.4em;
}

.lab-sheet .ls-tab-indented-light td {
    padding-left: 0.7em;
}

.lab-sheet .ls-tab-center td {
    vertical-align: middle;
    text-align: center;
}

.lab-sheet .ls-center-left {
    text-align: left;
    display: inline-block;
}

.lab-sheet .ls-tab-structure-only td {
    border: 0;
    font-size: 1em;
    padding: 0;
    white-space: nowrap;
}

.lab-sheet table.ls-tab-structure-only {
    margin: 0;
}

.lab-sheet thead td,
.lab-sheet thead th {
    border: none;
    background-color: inherit;
    font-weight: inherit;
}

/*---- TABLES ----*/

/* tab4 (4 rows with the same width) */
.lab-sheet table.ls-tab4 td {
    width: 25%;
}

.lab-sheet table.ls-tab4 td[colspan="2"] {
    width: 50%;
}

.lab-sheet table.ls-tab4 td[colspan="3"] {
    width: 75%;
}

.lab-sheet table.ls-tab4 td[colspan="4"] {
    width: 100%;
}

/*---- END TABLES ----*/

@media all {
    .lab-sheet .page-break {
        display: none;
    }
}

@media print {
    .lab-sheet .page-break {
        display: block;
        page-break-before: always;
    }
}</style>
<div class="lab-sheet ng-scope">
    <h1>
            Zweiter Abschnitt der Ärztlichen Prüfung Frühjahr 2011 <br>Laborparameter-Tabellen mit Referenzbereichen* für Erwachsene
        </h1>
        <table class="ls-tab4 ls-tab-indented">
            <tbody><tr>
                <td colspan="2" class="ls-tab-head">Parameter</td>
                <td colspan="2" class="ls-tab-head">Referenzbereich</td>
            </tr>
            <tr>
                <td colspan="4" class="ls-tab-subhead">Säure-Basen-Status (arteriell)</td>
            </tr>
            <tr>
                <td colspan="2">Base Excess (BE)</td>
                <td colspan="2">-2 bis +3 mmol/L</td>
            </tr>
            <tr>
                <td colspan="2">pH</td>
                <td colspan="2">7,35-7,45</td>
            </tr>
            <tr>
                <td colspan="2">pCO<sub>2</sub></td>
                <td colspan="2">4,3-6,0 kPa (32-45 mmHg)</td>
            </tr>
            <tr>
                <td colspan="2">pO<sub>2</sub></td>
                <td colspan="2">8,7-13,3 kPa (65-100 mmHg)</td>
            </tr>
            <tr>
                <td colspan="2">Standardbikarbonat</td>
                <td colspan="2">22-26 mmol/L</td>
            </tr>
            <tr>
                <td colspan="4" class="ls-tab-subhead">Hämatologie</td>
            </tr>
            <tr>
                <td colspan="2">Blutkörperchensenkungsgeschwindigkeit<br>(BSG, BKS, BSR) nach Westergren</td>
                <td colspan="2">♀: nach 1 h: &lt;20 mm <br>♂: nach 1 h: &lt;15 mm</td>
            </tr>
            <tr>
                <td colspan="2">Leukozyten<br><ul>
                    <li>Myelozyten/Metamyelozyten</li>
                    <li>Stabkernige</li>
                    <li>Segmentkernige</li>
                    <li>Eosinophile</li>
                    <li>Basophile</li>
                    <li>Lymphozyten</li>
                    <li>Monozyten</li>
                </ul>
                </td>
                <td colspan="2">4 000-10 000/μL<br>
                    0-1 %<br>
                    150-400/μL (3-5 %)<br>
                    3 000-5 800/μL (50-70 %)<br>
                    50-250/μL (1-4 %)<br>
                    15-50/μL (0-1 %)<br>
                    1 500-3 000/μL (25-45 %)<br>
                    285-500/μL (3-7 %)<br>
                </td>
            </tr>
            <tr>
                <td colspan="2">Thrombozyten</td>
                <td colspan="2">150-400/nL</td>
            </tr>
            <tr>
                <td colspan="2">Erythrozyten<br><ul>
                    <li>&nbsp;</li>
                    <li>Retikulozyten</li>
                    <li>MCV</li>
                    <li>MCH</li>
                    <li>MCHC</li>
                </ul>
                </td>
                <td colspan="2">♀: 3,5-5,0/pL<br>
                    ♂: 4,3-5,9/pL<br>
                    0,5-2,0 %<br>
                    81-100 fL<br>
                    27-34 pg (1,67-2,11 fmol)<br>
                    320-360 g/L (19,85-22,34 mmol/L)
                </td>
            </tr>
            <tr>
                <td colspan="2">Hämoglobin (Hb) <br>
                    <br>
                    HbA1c <br>
                    Hämatokrit (Hkt)<br>&nbsp;</td>
                <td colspan="2">♀: 120-150 g/L (7,45-9,31 mmol/L)<br>
                    ♂: 136-172 g/L (8,44-10,68 mmol/L)<br>
                    4-6 % (20-42 mmol/mol)<br>
                    ♀: 0,33-0,43 <br>
                    ♂: 0,39-0,49
                </td>
            </tr>
            <tr>
                <td colspan="4" class="ls-tab-subhead">Gerinnung (im Plasma)</td>
            </tr>
            <tr>
                <td colspan="2">Thromboplastinzeit (TPZ; Quick)</td>
                <td colspan="2">70-130 %</td>
            </tr>
            <tr>
                <td colspan="2">Partielle Thromboplastinzeit (PTT)</td>
                <td colspan="2">28-40 s</td>
            </tr>
            <tr>
                <td colspan="2">Plasma-Thrombinzeit (PTZ)</td>
                <td colspan="2">17-24 s</td>
            </tr>
            <tr>
                <td colspan="2">Fibrinogen</td>
                <td colspan="2">1,8-3,5 g/L (4,4-10,3 μmol/L)</td>
            </tr>
            <tr>
                <td colspan="2">Antithrombin III</td>
                <td colspan="2">0,14-0,39 g/L</td>
            </tr>
            <tr>
                <td colspan="2">D-Dimere</td>
                <td colspan="2">&lt;0,5 mg/L</td>
            </tr>
            <tr>
                <td colspan="4" class="ls-tab-subhead">Klinische Chemie (S=Serum; P=Plasma; VB=Vollblut)</td>
            </tr>
            <tr>
                <td colspan="2">Alanin-Aminotransferase (S)<br>(ALT, GPT)</td>
                <td colspan="2">♀: ≤35 U/L<br>
                    ♂: ≤45 U/L</td>
            </tr>
            <tr>
                <td colspan="2">Albumin (S)</td>
                <td colspan="2">35-50 g/L</td>
            </tr>
            <tr>
                <td colspan="2">α-Amylase (S)</td>
                <td colspan="2">≤1,67 μkat/L (≤100 U/L)</td>
            </tr>
            <tr>
                <td colspan="2">Antistreptolysintiter (S)</td>
                <td colspan="2">≤200 IU/mL</td>
            </tr>
            <tr>
                <td colspan="2">Aspartat-Aminotransferase (S)<br>(AST, GOT)</td>
                <td colspan="2">♀: ≤30 U/L<br>
                    ♂: ≤35 U/L</td>
            </tr>
            <tr>
                <td colspan="2">Bilirubin, gesamt (S) <br>
                    <span style="padding-left:4.5em">direkt (S)</span></td>
                <td colspan="2">&lt;1,1 mg/dL (&lt;19 μmol/L)<br>
                    &lt;0,6 mg/dL (&lt;10 μmol/L)</td>
            </tr>
            <tr>
                <td colspan="2">CEA (S)</td>
                <td colspan="2">≤5 μg/L</td>
            </tr>
            <tr>
                <td colspan="2">Chlorid (S)</td>
                <td colspan="2">98-106 mmol/L</td>
            </tr>
            <tr>
                <td colspan="2">Cholesterin, gesamt (S)<br> <ul>
                    <li>HDL-Cholesterin (S)</li>
                    <li>LDL-Cholesterin (S)</li>
                </ul></td><td colspan="2">≤200 mg/dL (≤5,2 mmol/L)<br>
                    &gt;35 mg/dL (0,9 mmol/L)<br>
                    &lt;155 mg/dL (&lt;4,0 mmol/L)</td>
            </tr>
            <tr>
                <td colspan="2">C-reaktives Protein (CRP) (S)</td>
                <td colspan="2">&lt;5 mg/L</td>
            </tr>
            <tr>
                <td colspan="2">Cholinesterase (ChE) (S)</td>
                <td colspan="2">♀: 71-188 μkat/L (4,3-11,3 kU/L)<br>
                    ♂:88-215 μkat/L (5,3-12,9kU/L)</td>
            </tr>
            <tr>
                <td colspan="2">Eisen (S)</td>
                <td colspan="2">45-160 μg/dL (7-29 μmol/L)</td>
            </tr>
        </tbody></table>
        <p class="ls-footer">
            <span class="ls-note">* ausschließlich zum Gebrauch in den bundeseinheitlichen schriftlichen Prüfungen nach der Approbationsordnung für Ärzte</span><br>
            <span class="ls-bold">© Institut für medizinische und pharmazeutische Prüfungsfragen, Mainz</span><br>
            <span>Alle Rechte bleiben vorbehalten. Jegliche Nutzung und Verbreitung, auch<br>
				auszugsweise, ist nur mit ausdrücklicher Genehmigung zulässig.</span><br>
        </p>
        <div class="page-break"></div>

        <h1>- 2 -</h1>
        <table class="ls-tab4 ls-tab-indented">

            <tbody><tr>
                <td colspan="2" class="ls-tab-head">Parameter</td>
                <td colspan="2" class="ls-tab-head">Referenzbereich</td>
            </tr>
            <tr>
                <td colspan="2">Ferritin (S) <span style="padding-left:1.5em">18-45 Jahre </span><br>
                    &nbsp;<br>
                    <span style="padding-left:6.7em">ab 46 Jahre<br>
						&nbsp;</span></td>
                <td colspan="2">♀: 6-81 μg/L<br>
                    ♂: 30-233 μg/L<br>
                    ♀: 14-186 μg/L<br>
                    ♂: 32-284 μg/L</td>
            </tr>
            <tr>
                <td colspan="2">Glukose (nüchtern) (VB)</td>
                <td colspan="2">55-100 mg/dL (3,1-5,6 mmol/L)</td>
            </tr>
            <tr>
                <td colspan="2">Glutamat-Dehydrogenase (GLDH) (S)</td>
                <td colspan="2">≤6 U/L</td>
            </tr>
            <tr>
                <td colspan="2">γ-Glutamyl-Transferase (γ-GT) (S)</td>
                <td colspan="2">♀: ≤38 U/L<br>
                    ♂: ≤55 U/L</td>
            </tr>
            <tr>
                <td colspan="2">Harnsäure (S)</td>
                <td colspan="2">♀: 2,3-6,1 mg/dL (137-363 μmol/L)<br>
                    ♂: 3,6-8,2 mg/dL (214-488 μmol/L)</td>
            </tr>
            <tr>
                <td colspan="2">Harnstoff (S)</td>
                <td colspan="2">≤65 Jahre: 20-50 mg/dL (3-8,3 mmol/L) <br>
                    &gt;65 Jahre: &lt;72 mg/dL (&lt;12 mmol/L)</td>
            </tr>
            <tr>
                <td colspan="2">Harnstoff-N (S)</td>
                <td colspan="2">≤65 Jahre: 9-23 mg/dL (3,2-8,2 mmol/L)<br>
                    &gt;65 Jahre: &lt;33 mg/dL (&lt;11,8 mmol/L)</td>
            </tr>
            <tr>
                <td colspan="2">Hydroxybutyrat-Dehydrogenase (HBDH) (S)</td>
                <td colspan="2">1,2-3,0 μkat/L (72-182 U/L)</td>
            </tr>
            <tr>
                <td colspan="2">Kalium (S)</td>
                <td colspan="2">3,6-5,2 mmol/L</td>
            </tr>
            <tr>
                <td colspan="2">Kalzitonin, basal (hCT) (S)</td>
                <td colspan="2">♀: &lt;2-10 ng/L <br>
                    ♂: &lt;2-48 ng/L</td>
            </tr>
            <tr>
                <td colspan="2">Kalzium, gesamt (S)<br>
                    Kalzium, ionisiert (S)</td>
                <td colspan="2">8,8-10,6 mg/dL (2,20-2,65 mmol/L)<br>
                    4,6-5,4 mg/dL (1,15-1,35 mmol/L)</td>
            </tr>
            <tr>
                <td colspan="2">Komplementsystem (S) <ul>
                    <li>C<sub>3</sub></li>
                    <li>C<sub>4</sub></li>
                </ul>
                </td>
                <td colspan="2">&nbsp;<br>0,75-1,35 g/L <br>0,09-0,36 g/L</td>
            </tr>
            <tr>
                <td colspan="2">Kreatinin (S)</td>
                <td colspan="2">♀: ≤0,9 mg/dL (≤80 μmol/L)<br>
                    ♂: ≤1,1 mg/dL (≤100 μmol/L)</td>
            </tr>
            <tr>
                <td colspan="2">Kreatinkinase (S)<ul>
                    <li>CK</li>
                    <li>&nbsp;</li>
                    <li>CK-MB</li>
                    <li>&nbsp;</li>
                </ul>
                </td>
                <td colspan="2">&nbsp;<br>
                    ♀: ≤2,42 μkat/L (≤145 U/L)<br>
                    ♂: ≤2,83 μkat/L (≤170 U/L)<br>
                    ♀: &lt;0,36 μkat/L (&lt;22 U/L)<br>
                    ♂: &lt;0,41 μkat/L (&lt;25 U/L)
                </td>
            </tr>
            <tr>
                <td colspan="2">Laktat (P)</td>
                <td colspan="2">5-15 mg/dL (0,6-1,7 mmol/L)</td>
            </tr>
            <tr>
                <td colspan="2">Laktat-Dehydrogenase (LDH) (S)</td>
                <td colspan="2">2-4 μkat/L (120-240 U/L)</td>
            </tr>
            <tr>
                <td colspan="2">Lipase (S)</td>
                <td colspan="2">≤1,0 μkat/L (≤60 U/L)</td>
            </tr>
            <tr>
                <td colspan="2">Magnesium (S)</td>
                <td colspan="2">♀: 1,9-2,5 mg/dL (0,77-1,03 mmol/L) <br>
                    ♂: 1,8-2,6 mg/dL (0,73-1,06 mmol/L)</td>
            </tr>
            <tr>
                <td colspan="2">Natrium (S)</td>
                <td colspan="2">135-145 mmol/L</td>
            </tr>
            <tr>
                <td colspan="2">PSA (S)</td>
                <td colspan="2">≤3-4 ng/mL</td>
            </tr>
            <tr>
                <td colspan="2">Phosphat (S)</td>
                <td colspan="2">2,6-4,5 mg/dL (0,84-1,45 mmol/L)</td>
            </tr>
            <tr>
                <td colspan="2">Phosphatase, alkalische (AP) (S)</td>
                <td colspan="2">♀: 0,58-1,75 μkat/L (35-105 U/L) <br>
                    ♂: 0,66-2,16 μkat/L (40-130 U/L)</td>
            </tr>
            <tr>
                <td colspan="2">Protein, gesamt (S) <br>
                    Serumprotein-Elektrophorese: <ul>
                        <li>Albumin</li>
                        <li>α<sub>1</sub>-Globulin</li>
                        <li>α<sub>2</sub>-Globulin</li>
                        <li>β-Globulin</li>
                        <li>γ-Globulin</li>
                    </ul>
                </td>
                <td colspan="2">65-85 g/L<br>
                    &nbsp;<br>
                    59-72 %<br>
                    1,3-4,5 %<br>
                    4,5-10,0 %<br>
                    6,5-13,0 %<br>
                    10,5-18,0 %
                </td>
            </tr>
            <tr>
                <td colspan="2">Thyreoidea-stimulierendes Hormon (TSH) basal (S)</td>
                <td colspan="2">0,4-4,0 mU/L</td>
            </tr>
            <tr>
                <td colspan="2">Thyroxin, gesamt (T<sub>4</sub>) (S)<br>
                    Thyroxin, freies (fT<sub>4</sub>) (S)
                </td>
                <td colspan="2">55-110 μg/L (77-142 nmol/L)<br>
                    8-18 ng/L (10-23 pmol/L)</td>
            </tr>
            <tr>
                <td colspan="2">Transferrin (S)</td>
                <td colspan="2">200-360 mg/dL</td>
            </tr>
            <tr>
                <td colspan="2">Triglyzeride (S)</td>
                <td colspan="2">≤200 mg/dL (≤2,3 mmol/L)</td>
            </tr>
            <tr>
                <td colspan="2">Triiodthyronin, gesamt (T<sub>3</sub>) (S)<br>
                    Triiodthyronin, freies (fT<sub>3</sub>) (S)</td>
                <td colspan="2">0,90-1,80 μg/L (1,4-2,8 nmol/L)<br>
                    3,5-8,0 pg/mL (5,4-12,3 pmol/L)</td>
            </tr>
            <tr>
                <td colspan="2">Troponin I (S)<br>
                    Troponin T (S)</td>
                <td colspan="2">&lt;0,1-2,0 μg/L<br>
                    &lt;0,1 μg/L</td>
            </tr>
            <tr>
                <td colspan="2">Vitamin B<sub>1</sub> (S)</td>
                <td colspan="2">0,2-0,7 μg/dL (5,2-20,0 nmol/L)</td>
            </tr>
            <tr>
                <td colspan="2">Vitamin B<sub>12</sub> (S)</td>
                <td colspan="2">20-100 ng/dL (148-738 pmol/L)</td>
            </tr>
            <tr>
                <td colspan="2">Zäruloplasmin (S)</td>
                <td colspan="2">♀: 25-60 mg/dL<br>
                    ♂: 22-40 mg/dL</td>
            </tr>
        </tbody></table>

        <div class="page-break"></div>
        <h1>- 3 -</h1>

        <table class="ls-tab4 ls-tab-indented-light">
            <tbody><tr>
                <td class="ls-tab-head">Urin-Parameter</td>
                <td colspan="3" class="ls-tab-head">Normalbefund/Referenzbereich</td>
            </tr>
            <tr>
                <td>spezifisches Gewicht</td>
                <td colspan="3">1 015-1 030 g/L</td>
            </tr>
            <tr>
                <td>pH-Wert</td>
                <td colspan="3">4,8-7,6</td>
            </tr>
            <tr>
                <td>Bilirubin</td>
                <td colspan="3">Urinteststreifen: negativ</td>
            </tr>
            <tr>
                <td>Eiweiß</td>
                <td colspan="3">Urinteststreifen: negativ; quantitativ: &lt;150 mg/24 h</td>
            </tr>
            <tr>
                <td>Glukose</td>
                <td colspan="3">Urinteststreifen: negativ; quantitativ (im Spontanurin): &lt;165 mg/L (&lt;0,92 mmol/L)</td>
            </tr>
            <tr>
                <td>Ketonkörper</td>
                <td colspan="3">Urinteststreifen: negativ</td>
            </tr>
            <tr>
                <td>Nitrit</td>
                <td colspan="3">Urinteststreifen: negativ</td>
            </tr>
            <tr>
                <td>Urobilinogen</td>
                <td colspan="3">Urinteststreifen: negativ; quantitativ: 0,5-4 mg/24 h</td>
            </tr>
            <tr>
                <td class="ls-tab-subhead">Urinsediment</td>
                <td colspan="3">&nbsp;</td>
            </tr>
            <tr>
                <td>Erythrozyten</td>
                <td colspan="3">0-1/Gesichtsfeld (bei 400-facher Vergrößerung)</td>
            </tr>
            <tr>
                <td>Leukozyten</td>
                <td colspan="3">bis 4/Gesichtsfeld (bei 400-facher Vergrößerung)</td>
            </tr>
        </tbody></table>

        <h1>Laborparameter-Tabellen mit Referenzbereichen* für Kinder</h1>
        <table class="ls-tab4 ls-tab-indented-light">
            <tbody><tr>
                <td class="ls-tab-head">Parameter</td>
                <td colspan="3" class="ls-tab-head">Referenzbereich</td>
            </tr>
            <tr>
                <td class="ls-tab-head"></td>
                <td class="ls-tab-head">Neugeborene</td>
                <td class="ls-tab-head">Säuglinge</td>
                <td class="ls-tab-head">Kinder nach 1. Lj.</td>
            </tr>
            <tr>
                <td colspan="4" class="ls-tab-subhead">Säure-Basen-Status (arteriell)</td>
            </tr>
            <tr>
                <td>Base Excess (BE)</td>
                <td>≥-10 mmol/L</td>
                <td colspan="2">-3,5 bis +2,5 mmol/L</td>
            </tr>
            <tr>
                <td>pH</td>
                <td>≥7,20</td>
                <td colspan="2">7,35-7,45</td>
            </tr>
            <tr>
                <td>pCO<sub>2</sub></td>
                <td>38-53 mmHg</td>
                <td colspan="2">32-47 mmHg (4,3-6,3 kPa)</td>
            </tr>
            <tr>
                <td>pO<sub>2</sub></td>
                <td>≥50 mmHg</td>
                <td colspan="2">80-108 mmHg (10,7-14,4 kPa)</td>
            </tr>
            <tr>
                <td>Standardbikarbonat</td>
                <td>18-26 mmol/L</td>
                <td colspan="2">20-27 mmol/L</td>
            </tr>
            <tr>
                <td colspan="4" class="ls-tab-subhead">Hämatologie</td>
            </tr>
            <tr>
                <td>Blutkörperchensenkungsgeschw.<br>
                    (BSG, BKS, BSR) nach Westergren</td>
                <td colspan="3">&nbsp;<br>nach 1 h: &lt;10 mm</td>
            </tr>
            <tr>
                <td>Leukozyten
                    <ul>
                        <li>Stabkernige</li>
                        <li>Segmentkernige</li>
                        <li>Eosinophile</li>
                        <li>Basophile</li>
                        <li>Lymphozyten</li>
                        <li>Monozyten</li>
                    </ul>
                </td>
                <td colspan="2">9 000-15 000/μL<br>
                    bis 1 500/μL (0-10 %)<br>
                    2 250-9 750/μL (22-65 %)<br>
                    90-1 050/μL (1-7 %)<br>
                    bis 300/μL (0-2 %)<br>
                    1 800-10 500/μL (20-70 %)<br>
                    630-3 000/μL (7-20 %)
                </td>
                <td>8 000-12 000/μL<br>
                    bis 1 200/μL (0-10 %)<br>
                    2 000-7 800/μL (25-65 %)<br>
                    80-600/μL (1-5 %)<br>
                    bis 120/μL (0-1 %)<br>
                    2 000-6 000/μL (25-50 %)<br>
                    80-720/μL (1-6 %)<br>
                </td>
            </tr>
            <tr>
                <td>Thrombozyten</td>
                <td>100-250/nL</td>
                <td colspan="2">200-350/nL</td>
            </tr>
        </tbody></table>
        <table class="ls-tab-center ls-tab-indented-light">
            <tbody><tr>
                <td style="vertical-align: top">Alter</td>
                <td style="vertical-align: top">Erythrozyten <br>&nbsp;<br>/pl</td>
                <td style="vertical-align: top">Retikulo-<br>zyten<br>in % der Ery.</td>
                <td style="vertical-align: top">Hämoglobin<br>(Hb)<br>g/L</td>
                <td style="vertical-align: top">MCV<br>&nbsp;<br>fL</td>
                <td style="vertical-align: top">MCH<br>&nbsp;<br>pg</td>
                <td style="vertical-align: top">MCHC<br>&nbsp;<br>g/L</td>
                <td style="vertical-align: top">Hämatokrit<br>(Hkt)</td>
            </tr>
            <tr>
                <td style="text-align: left">1 Tag</td>
                <td>4,5-6,5</td>
                <td>1,5-6,5</td>
                <td>140-240</td>
                <td>98-122</td>
                <td>33-41</td>
                <td>310-350</td>
                <td>0,44-0,65</td>
            </tr>
            <tr>
                <td style="text-align: left">5 Tage</td>
                <td>4,4-6,1</td>
                <td>1,0-5,0</td>
                <td>130-230</td>
                <td>94-135</td>
                <td>29-41</td>
                <td>310-350</td>
                <td>0,50-0,70</td>
            </tr>
            <tr>
                <td style="text-align: left">1 Monat</td>
                <td>3,9-5,3</td>
                <td>0,5-2,0</td>
                <td>110-170</td>
                <td>82-126</td>
                <td>26-38</td>
                <td>260-340</td>
                <td>0,31-0,59</td>
            </tr>
            <tr>
                <td style="text-align: left">3 Monate</td>
                <td>3,2-4,3</td>
                <td>1,0-3,5</td>
                <td>100-130</td>
                <td>77-113</td>
                <td>23-36</td>
                <td>260-340</td>
                <td>0,31-0,43</td>
            </tr>
            <tr>
                <td style="text-align: left">6 Monate</td>
                <td>3,8-5,0</td>
                <td>0,5-2,0</td>
                <td>105-145</td>
                <td>73-109</td>
                <td>21-33</td>
                <td>260-340</td>
                <td>0,32-0,44</td>
            </tr>
            <tr>
                <td style="text-align: left">1 Jahr</td>
                <td>4,2-5,5</td>
                <td>0,5-2,0</td>
                <td>110-150</td>
                <td>74-102</td>
                <td>23-31</td>
                <td>280-320</td>
                <td>0,35-0,43</td>
            </tr>
            <tr>
                <td style="text-align: left">2-6 Jahre</td>
                <td>4,3-5,5</td>
                <td>0,5-2,0</td>
                <td>120-150</td>
                <td>72-88</td>
                <td>23-31</td>
                <td>320-360</td>
                <td>0,31-0,43</td>
            </tr>
            <tr>
                <td style="text-align: left">7-12 Jahre</td>
                <td>4,5-5,5</td>
                <td>0,5-2,0</td>
                <td>130-155</td>
                <td>69-93</td>
                <td>22-34</td>
                <td>320-360</td>
                <td>0,33-0,43</td>
            </tr>
            <tr>
                <td style="text-align: left">13-17 Jahre ♂</td>
                <td>4,8-5,7</td>
                <td>0,5-2,0</td>
                <td>130-180</td>
                <td>69-93</td>
                <td>22-34</td>
                <td>320-360</td>
                <td>0,39-0,47</td>
            </tr>
            <tr>
                <td style="text-align: left">13-17 Jahre ♀</td>
                <td>4,3-5,5</td>
                <td>0,5-2,0</td>
                <td>110-160</td>
                <td>69-93</td>
                <td>22-34</td>
                <td>320-360</td>
                <td>0,36-0,44</td>
            </tr>
        </tbody></table>
        <table class="ls-tab4 ls-tab-indented-light">
            <tbody><tr>
                <td colspan="4" class="ls-tab-subhead">Gerinnung (im Plasma)</td>
            </tr>
            <tr>
                <td>Thromboplastinzeit (TPZ; Quick)</td>
                <td>&gt;40 %</td>
                <td colspan="2">70-130 %</td>
            </tr>
            <tr>
                <td>partielle Thromboplastin-<br>zeit (PTT)</td>
                <td>45-70 s</td>
                <td colspan="2">28-40 s</td>
            </tr>
            <tr>
                <td>Plasma-Thrombinzeit (PTZ)</td>
                <td colspan="3">17-24 s</td>
            </tr>
            <tr>
                <td>Fibrinogen</td>
                <td>&lt;6 Monate: 4,5-9 μmol/L<br>
                    &gt;6 Monate: 6-12 μmol/L</td>
                <td colspan="2">1,5-3 g/L<br>
                    2-4 g/L</td>
            </tr>
            <tr>
                <td>Antithrombin III</td>
                <td>40-70%</td>
                <td colspan="2">80-120 %</td>
            </tr>
            <tr>
                <td>D-Dimere</td>
                <td colspan="3">0,02-0,4 mg/L</td>
            </tr>
            <tr>
                <td colspan="4" class="ls-tab-subhead">Klinische Chemie (S=Serum; P=Plasma; VB=Vollblut)</td>
            </tr>
            <tr>
                <td>Alanin-Aminotransferase (S)<br>
                    (ALT, GPT)<br>
                    &nbsp;<br>
                    &nbsp;<br>
                    &nbsp;</td>
                <td>1 Tag: &lt;27 U/L<br>
                    2-4 Tage: &lt;42 U/L<br>
                    &nbsp;<br>
                    &nbsp;<br>
                    &nbsp;</td>
                <td>5 Tage-5 Monate: &lt;48 U/L<br>
                    6-12 Monate: &lt;47 U/L<br>
                    &nbsp;<br>
                    &nbsp;<br>
                    &nbsp;</td>
                <td>1-2 Jahre: &lt;29 U/L<br>
                    3-5 Jahre: &lt;26 U/L<br>
                    6-11 Jahre: &lt;34 U/L<br>
                    12-16 Jahre: ♀ &lt;21 U/L<br>
                    <span style="padding-left:5.9em">♂ &lt;24 U/L</span></td>
            </tr>
            <tr>
                <td>Albumin (S)</td>
                <td colspan="2">30,0-52,0 g/L</td>
                <td>35,2-50,4 g/L</td>
            </tr>
            <tr>
                <td>α-Amylase (S)</td>
                <td colspan="3">28-100 U/L</td>
            </tr>
            <tr>
                <td>Antistreptolysintiter (S)</td>
                <td colspan="3">≤200 IU/mL</td>
            </tr>
            <tr>
                <td>Aspartat-Aminotransferase (S)<br>
                    (AST,GOT)<br>
                    &nbsp;<br>
                    &nbsp;<br>
                    &nbsp;</td>
                <td>1 Tag: &lt;110 U/L<br>
                    2-4 Tage: &lt;100 U/L<br>
                    &nbsp;<br>
                    &nbsp;<br>
                    &nbsp;</td>
                <td>5 Tage-5 Monate: &lt;79 U/L<br>
                    6-12 Monate: &lt;83 U/L<br>
                    &nbsp;<br>
                    &nbsp;<br>
                    &nbsp;</td>
                <td>1-2 Jahre: &lt;50 U/L<br>
                    3-5 Jahre: &lt;37 U/L<br>
                    6-11 Jahre: &lt;48 U/L<br>
                    12-16 Jahre: ♀ &lt;25 U/L<br>
                    <span style="padding-left:5.9em">♂ &lt;29 U/L</span></td>
            </tr>
        </tbody></table>
        <p class="ls-footer">
            <span class="ls-note">* ausschließlich zum Gebrauch in den bundeseinheitlichen schriftlichen Prüfungen nach der Approbationsordnung für Ärzte</span>
        </p>
        <div class="page-break"></div>
        <h1>- 4 -</h1>
        <table class="ls-tab4 ls-tab-indented-light">
            <tbody><tr>
                <td class="ls-tab-head">Parameter</td>
                <td colspan="3" class="ls-tab-head">Referenzbereich</td>
            </tr>
            <tr>
                <td class="ls-tab-head">&nbsp;</td>
                <td class="ls-tab-head">Neugeborene</td>
                <td class="ls-tab-head">Säuglinge</td>
                <td class="ls-tab-head">Kinder nach 1. Lj.</td>
            </tr>
            <tr>
                <td>Bilirubin, gesamt (S)<br>
                    &nbsp;<br>
                    &nbsp;<br>
                    &nbsp;<br>
                    &nbsp;<br>
                    &nbsp;<br>
                    &nbsp;<br>
                    &nbsp;<br>
                    Bilirubin, direkt (S)</td>
                <td>Nabelschnur: &lt;2 mg/dL<br>(&lt;34 μmol/L)<br>
                    &lt;24 h: 2-6 mg/dL<br>(34-100 μmol/L)<br>
                    1-2 Tage: 6-7 mg/dL<br>(100-120 μmol/L)<br>
                    3-5 Tage: 4-12 mg/dL <br>(70-120 μmol/L)<br>
                    &lt;1 mg/dL (&lt;17 μmol/L)</td>
                <td colspan="2">ab 1 Monat:  &lt;1 mg/dL (&lt;17 μmol/L)<br>
                    &nbsp;<br>
                    &nbsp;<br>
                    &nbsp;<br>
                    &nbsp;<br>
                    &nbsp;<br>
                    &nbsp;<br>
                    &nbsp;<br>
                    ab 1 Monat: 0-0,4 mg/dL (0-7 μmol/L)
                </td>
            </tr>
            <tr>
                <td>Cholesterin (S)<br>
                    &nbsp;</td>
                <td>&lt;2Monate: 72-166 mg/dL<br>
                    &nbsp;</td>
                <td>60-193 mg/dL<br>
                    &nbsp;</td>
                <td>1-4 Jahre: 116-219 mg/dL<br>
                    4-16 Jahre: 123-226 mg/dL</td>
            </tr>
            <tr>
                <td>C-reaktives Protein (CRP) (S)</td>
                <td colspan="3">&lt;5 mg/L</td>
            </tr>
            <tr>
                <td>Eisen (S)</td>
                <td>63-201 μg/dL</td>
                <td>28-155 μg/dL</td>
                <td>45-160 μg/dL</td>
            </tr>
            <tr>
                <td>γ-Glutamyl-Transferase (S)<br>
                    (γ-GT)<br>
                    &nbsp;<br>
                    &nbsp;<br>
                    &nbsp;</td>
                <td>1 Tag: &lt;148 U/L<br>
                    2-4 Tage: &lt;181 U/L<br>
                    &nbsp;<br>
                    &nbsp;<br>
                    &nbsp;</td>
                <td>5 Tage-5 Monate: &lt;200 U/L<br>
                    6-12 Monate: &lt;33 U/L<br>
                    &nbsp;<br>
                    &nbsp;<br>
                    &nbsp;</td>
                <td>1-2 Jahre: &lt;17 U/L<br>
                    3-5 Jahre: &lt;22 U/L<br>
                    6-11 Jahre: &lt;17 U/L<br>
                    12-16 Jahre: ♀ &lt;33 U/L<br>
                    <span style="padding-left:5.9em">♂ &lt;45 U/L</span></td>
            </tr>
            <tr>
                <td>Glukose (nüchtern) (VB)</td>
                <td>1,7-3,3 mmol/L<br>
                    (30-60 mg/dL)</td>
                <td>2,8-5,0 mmol/L<br>
                    (50-90 mg/dL)</td>
                <td>3,3-5,8 mmol/L<br>
                    (60-105 mg/dL)</td>
            </tr>
            <tr>
                <td>Harnsäure (S)</td>
                <td>&lt;5,7 mg/dL</td>
                <td>&lt;2,5 mg/dL</td>
                <td>&lt;6,5 mg/dL</td>
            </tr>
            <tr>
                <td>Harnstoff (S)</td>
                <td>8-28 mg/dL <br>(2,9-10 mmol/L)</td>
                <td>5-15 mg/dL <br>(1,8-5,4 mmol/L)</td>
                <td>8-20 mg/dL <br>(2,9-7,1 mmol/L)</td>
            </tr>
            <tr>
                <td>Hydroxybutyrat-Dehydrogenase<br>
                    HBDH (S)</td>
                <td>100-515 U/L)<br>&nbsp;</td>
                <td>90-310 U/L<br>&nbsp;</td>
                <td>72-182 U/L<br>&nbsp;</td>
            </tr>
            <tr>
                <td>Kalium (S)</td>
                <td>3,6-6,0 mmol/L</td>
                <td>3,7-5,7 mmol/L</td>
                <td>3,2-5,4 mmol/L</td>
            </tr>
            <tr>
                <td>Kalzium, gesamt (S)<br>
                    Kalzium, ionisiert (S)</td>
                <td>6,8-12,0 mg/dl<br>(1,7-3 mmol/L)<br>
                    4,3-5,1 mg/dl<br>(1,07-1,27mmol/L)</td>
                <td colspan="2">8,4-11 mg/dL (2,1-2,74 mmol/L)<br>
                    &nbsp;<br>
                    4,48-4,92 mg/dL (1,12-1,23 mmol/L)<br>
                    &nbsp;
                </td>
            </tr>
            <tr>
                <td>Komplementsystem (S)<br>
                    <ul><li>C<sub>3</sub></li>
                        <li>C<sub>4</sub></li>
                    </ul></td>
                <td colspan="3">&nbsp;<br>0,6-1,8 g/L<br>
                    0,07-0,4 g/L</td>
            </tr>
            <tr>
                <td>Kreatinin (S)</td>
                <td>&lt;1,1 mg/dl</td>
                <td>&lt;0,9 mg/dL</td>
                <td>&lt;1,0 mg/dL</td>
            </tr>
            <tr>
                <td>Kreatinkinase (CK) (S)<br>
                    &nbsp;<br>
                    &nbsp;<br>
                    &nbsp;<br>
                    &nbsp;<br>
                    &nbsp;</td>
                <td>1 Tag: &lt;714 U/L<br>
                    2-4 Tage: &lt;652 U/L<br>
                    &nbsp;<br>
                    &nbsp;<br>
                    &nbsp;<br>
                    &nbsp;</td>
                <td>5 Tage-5 Monate: &lt;295 U/L<br>
                    6-12 Monate: &lt;202 U/L<br>
                    &nbsp;<br>
                    &nbsp;<br>
                    &nbsp;<br>
                    &nbsp;</td>
                <td>1-2 Jahre: &lt;228 U/L<br>
                    3-5 Jahre: &lt;150 U/L<br>
                    6-11 Jahre: ♀ &lt;155 U/L<br>
                    <span style="padding-left:5.4em">♂ &lt;248 U/L</span><br>
                    12-16 Jahre: ♀ &lt;124 U/L<br>
                    <span style="padding-left:5.9em">♂ &lt;269 U/L</span></td>
            </tr>
            <tr>
                <td>Laktat-Dehydrogenase (S) <br>
                    (LDH)<br>
                    &nbsp;<br>
                    &nbsp;<br>
                    &nbsp;<br>
                    &nbsp;</td>
                <td>1 Tag: &lt;730 U/L<br>
                    2-4 Tage: &lt;953 U/L<br>
                    &nbsp;<br>
                    &nbsp;<br>
                    &nbsp;<br>
                    &nbsp;</td>
                <td>5 Tage-5 Monate: &lt;537 U/L<br>
                    6-12 Monate: &lt;605 U/L<br>
                    &nbsp;<br>
                    &nbsp;<br>
                    &nbsp;<br>
                    &nbsp;</td>
                <td>1-2 Jahre: &lt;468 U/L<br>
                    3-5 Jahre: &lt;339 U/L<br>
                    6-11 Jahre: ♀ &lt;319 U/L<br>
                    <span style="padding-left:5.4em">♂ &lt;420 U/L</span><br>
                    12-16 Jahre: ♀ &lt;240 U/L<br>
                    <span style="padding-left:5.9em">♂ &lt;376 U/L</span>
                </td>
            </tr>
            <tr>
                <td>Lipase (S)</td>
                <td colspan="3">13-60 U/L</td>
            </tr>
            <tr>
                <td>Magnesium (S)</td>
                <td>1,6-2,2 mg/dL <br>(0,8-1,1 mmol/L)</td>
                <td>1,7-2,4 mg/dL<br>(0,85-1,2 mmol/L)</td>
                <td>1,4-2,2 mg/dL<br>(0,7-1,1 mmol/L)</td>
            </tr>
            <tr>
                <td>Natrium (S)</td>
                <td colspan="3">135-145 mmol/L</td>
            </tr>
            <tr>
                <td>Phosphat (S)</td>
                <td>5,0-9,6 mg/dL<br>(1,6-3,1 mmol/L)</td>
                <td colspan="2">4,5-6,7 mg/dL<br>(1,5-2,2 mmol/L</td>
            </tr>
            <tr>
                <td>Phosphatase, alkalische (AP) (S)<br>
                    &nbsp;<br>
                    &nbsp;<br>
                    &nbsp;<br>
                    &nbsp;
                </td>
                <td>1 Tag: &lt;230 U/L<br>
                    2-4 Tage: &lt;212 U/L<br>
                    &nbsp;<br>
                    &nbsp;<br>
                    &nbsp;
                </td>
                <td>5 Tage-5 Monate: &lt;412 U/L<br>
                    6-12 Monate: &lt;423 U/L<br>
                    &nbsp;<br>
                    &nbsp;<br>
                    &nbsp;
                </td>
                <td>1-2 Jahre: &lt;258 U/L<br>
                    3-5 Jahre: &lt;247 U/L<br>
                    6-12 Jahre: &lt;276 U/L<br>
                    13-16 Jahre: ♀ &lt;172 U/L<br>
                    <span style="padding-left:5.9em">♂ &lt;358 U/L</span>
                </td>
            </tr>
            <tr>
                <td>Protein, gesamt (S) <br>
                    Serumprotein-Elektrophorese: <ul>
                        <li>Albumin</li>
                        <li>α<sub>1</sub>-Globulin</li>
                        <li>α<sub>2</sub>-Globulin</li>
                        <li>β-Globulin</li>
                        <li>γ-Globulin</li>
                    </ul>
                </td>
                <td>46-68 g/L<br>
                    &nbsp;<br>
                    60-65 %<br>
                    2-5 %<br>
                    7-10 %<br>
                    2-16 %<br>
                    13-22 %
                </td>
                <td>48-76 g/L<br>
                    &nbsp;<br>
                    63-68 %<br>
                    2-5 %<br>
                    9-11 %<br>
                    7-14 %<br>
                    5-19 %
                </td>
                <td>60-83 g/L<br>
                    &nbsp;<br>
                    60-63 %<br>
                    2-5 %<br>
                    8-10 %<br>
                    8-14 %<br>
                    10-23 %
                </td>
            </tr>
            <tr>
                <td>Thyreoidea-stimulierendes Hormon<br>
                    (TSH) basal (S)
                </td>
                <td>&nbsp;<br>1,0-38,9 mU/L</td>
                <td>&nbsp;<br>2-20 Wochen: 1,7-9,1 mU/L</td>
                <td>&nbsp;<br>0,4-4,0 mU/L</td>
            </tr>
            <tr>
                <td>Thyroxin, gesamt (T<sub>4</sub>) (S)<br>
                    &nbsp;<br>
                    Thyroxin, freies (fT<sub>4</sub>) (S)
                </td>
                <td>107-258 μg/L <br>(138-332 nmol/L)<br>
                    15-30 ng/L (19-38 pmol/L)
                </td>
                <td colspan="2">55-110 μg/L (77-142 nmol/L)<br>
                    &nbsp;<br>
                    8-18 ng/L (10-23 pmol/L)
                </td>
            </tr>
            <tr>
                <td>Triglyzeride (S) </td>
                <td>&lt;100 mg/dL (&lt;1,12 mmol/L)</td>
                <td colspan="2">&lt;163 mg/dL (&lt;1,86 mmol/L)</td>
            </tr>
            <tr>
                <td>Triiodthyronin, gesamt (T<sub>3</sub>) (S)</td>
                <td colspan="3">0,90-1,80 μg/L (1,4-2,8 nmol/L)</td>
            </tr>
            <tr>
                <td>Triiodthyronin, freies (fT<sub>3</sub>) (S)</td>
                <td colspan="3">3,5-8,0 pg/mL (5,4-12,3 pmol/L)</td>
            </tr>
        </tbody></table></div>
</article>
    </a>
</div></section>
`
var labsNode = document.createElement('div');
labsNode.innerHTML = labs;
labsNode.style.display = 'none'
labsNode.classList.add('side-labs')
document.getElementById("mainContent").appendChild(labsNode);

function toggleLabs() {
    labsNode.style.display === 'block' ? labsNode.style.display = 'none' : labsNode.style.display = 'block'
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if( request.message === "clicked_browser_action" ) {
        toggleLabs()
      }
    }
  );