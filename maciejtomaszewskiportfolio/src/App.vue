<template>
  <div id="app">
    <div id="all">
        <div class="frontPage">
            <div class="frontPageGrid">
                <div class="contactBtn">
                    <a href="https://www.facebook.com/maciektoto" target="_blank">
                        <div class="linkBtn2">
                            Kontakt
                        </div>
                    </a>
                </div>
                <div class="cvBtn">
                    <a href="download/cvMaciejTomaszewski.pdf" download>
                        <div class="linkBtn1">
                            CV
                        </div>
                    </a>
                </div>
                <div class="projectsBtn">
                        <div class="linkBtn1">
                            Projekty
                        </div>
                </div>
                <a href="#aboutMe" class="downArrow">
                    <div class="downArrow">
                        &#8675;
                    </div>
                </a>
            </div>
        </div>
        <main class="content">
            <article class="contentAboutme">
                <section class="component kid" id="kid">
                    <a href="#all">
                        <header class="aboutMeBar" id="aboutMe">
                        O mnie
                        </header>
                    </a>
                    <span class="intro">Hej! Nazywam się Maciej i poszukuje pracy jako<br />
                    <b>Junior Front-End Developer</b>  .
                    </span>
                    <aside class="details">
                        <span class="img imgKid">  <img src="img/contentKid.png" alt="Zdjęcie dziecka">
                        </span>
                        <span class="text">
                            Jako dziecko miałem dużą styczność z komputerami. <br /><br />
                            Mając pare lat rozkręcałem je ,a gdy coś się psuło,<br />
                            razem z mamą szukaliśmy rozwiązania problemu.
                            <br />
                            <br />
                            To dzięki niej miałem do nich dostęp od <br />
                            najwcześniejszych lat.
                        </span>
                    </aside>
                    <a href="#teenager" class="arrow2">
                        <div class="arrow2">
                            &#8675;
                        </div>
                    </a>
                </section>
                <section class="component teenager" id="teenager">
                    <a class="interactive" href="#kid">
                        <span class="interactive">Powrót wyżej</span>
                    </a>
                    <aside class="details">
                        <span class="img imgTeenager">
                              <img src="img/contentTeenager.png" alt="Zdjęcie nastolatka" />
                        </span>
                        <span class="text teenagerText">
                            Będąc nastolatkiem, aby kontynuować rozwój, <br />
                            gimnazjum wybrałem z profilem <b>mat/inf</b>. <br /><br />
                            W 2019 roku ukończyłem
                            technikum informatyczne na<br /> którym poznałem:
                            konstrukcję komputera w pełni,<br />
                            budowę sieci internetowych, serwerów, baz danych<br />
                            <b>mySql</b> oraz ich administrację.<br />
                            Architekturę stron internetowych w tym języki:
                            <b>HTML</b>,<br /> <b>CSS</b>, <b>JavaScript</b> i <b>PHP</b>.
                            <br /><br />
                            W między czasie hobbistycznie używałem programów<br /> Adobe
                            takich jak:<br />
                            - Adobe Premiere Pro<br />
                            - <b>Adobe Photoshop</b><br />
                         </span>
                    </aside>
                         <a href="#adult" class="arrow2">
                            <div class="arrow2">
                                &#8675;
                            </div>
                        </a>
                </section>
                <section class="component adult" id="adult">
                    <a class="interactive last" href="#teenager">
                        <span class="interactive">Powrót wyżej</span>
                    </a>
                    <aside class="details detailsAdult">
                        <span class="img imgAdult">  <img class="imgAdultClass" src="img/contentAdult.png" alt="Zdjęcie dorosłego.">
                        </span>
                        <span class="text textAdult">
                            Po technikum kontynuuje rozwój w kierunku<br /> technologii,
                            webowych. W ostatnim czasie posiadłem<br /> umiejętności:<br />
                            - HTML5<br />
                            - CSS3<br />
                            - SASS preprocesor<br />
                            - Responsywny Layout<br />
                            - Vanilla JavaScript<br />
                            - Fetch Api<br />
                            - Git, GIthub<br />
                            - obsługa Adobe XD
                        </span>
                    </aside>
                    <a href="#future" class="arrow2">
                        <div class="arrow2">
                            &#8675;
                        </div>
                    </a>

                </section>

                <section class="component future" id="future">
                    <a class="interactive last sticky" href="#adult">
                        <span class="interactive ">Powrót wyżej</span>
                    </a>
                    <aside class="details detailsAdult">
                        <span class="img imgFuture">  <img class="imgFutureClass" src="img/lightBulb.png" alt="Zdjęcie żarówki.">
                        </span>
                        <span class="text textFuture">
                            <b>W najbliższej przyszłości uczę się: </b><br />
                            - HTML/CSS framework - BootStrap/Materialize<br />
                            - Toolingu <br />
                            - React-a<br />
                            <b>Kontynuuję pracę nad landing page-ami i<br /> formularzach na nich znajdujących się. </b><br /><br />
                            Posiadam zdolności interpersonalne, <br />
                            Rozwiązywanie problemów,<br />
                            Krytyczne myślenie,<br />
                            Pozytywne nastawienie <br />
                            Estetyka > przesada<br />
                            <br />
                            <b>Poszukuję środowiska w którym mógłbym się rozwijać,<br /> a tym samym być wartością dodatnią dla firmy<br /> oraz zespołu w, którym pracuję. </b>
                          </span>
                    </aside>
                    <a href="#footer" class="arrow2">
                        <div class="arrow2">
                            &#8675;
                        </div>
                    </a>

                </section>

                <footer id="footer">
                    <a href="download/cvMaciejTomaszewski.pdf" class="footerIcon" download>
                        <div class="linkBtn2">
                            CV
                        </div>
                    </a>
                    <a href="subpages/projects.html" class="footerIcon">
                        <div class="linkBtn2">
                            Projekty
                        </div>
                    </a>
                    <a href="https://www.facebook.com/maciektoto" class="footerIcon" target="_blank">
                        <div class="linkBtn2">
                            Kontakt
                        </div>
                    </a>
                </footer>

            </article>
        </main>
        <a href="#all" class="toTheTop">
                &#8673;
        </a>

    </div>
  </div>
</template>

<style lang="scss">
  /* USING MIXIN IN MEDIA QUERIES FOR PRACTICE */

  @import "3-modules/_modules-dir";
  @import '1-base/base-dir';
  @import '2-layouts/layout-dir';
</style>
