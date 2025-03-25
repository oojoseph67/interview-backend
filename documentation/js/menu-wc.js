'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nest-app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AiModule.html" data-type="entity-link" >AiModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AiModule-1ea7af6a33bda2c958163983b5b1e12d6d1fe492daf6b4aa8e6678d9b9b1deddbd29ad8541b014dff9eaac851ed17119b7a4eb7a91e3751dd980f3b594500087"' : 'data-bs-target="#xs-controllers-links-module-AiModule-1ea7af6a33bda2c958163983b5b1e12d6d1fe492daf6b4aa8e6678d9b9b1deddbd29ad8541b014dff9eaac851ed17119b7a4eb7a91e3751dd980f3b594500087"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AiModule-1ea7af6a33bda2c958163983b5b1e12d6d1fe492daf6b4aa8e6678d9b9b1deddbd29ad8541b014dff9eaac851ed17119b7a4eb7a91e3751dd980f3b594500087"' :
                                            'id="xs-controllers-links-module-AiModule-1ea7af6a33bda2c958163983b5b1e12d6d1fe492daf6b4aa8e6678d9b9b1deddbd29ad8541b014dff9eaac851ed17119b7a4eb7a91e3751dd980f3b594500087"' }>
                                            <li class="link">
                                                <a href="controllers/AiController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AiController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AiModule-1ea7af6a33bda2c958163983b5b1e12d6d1fe492daf6b4aa8e6678d9b9b1deddbd29ad8541b014dff9eaac851ed17119b7a4eb7a91e3751dd980f3b594500087"' : 'data-bs-target="#xs-injectables-links-module-AiModule-1ea7af6a33bda2c958163983b5b1e12d6d1fe492daf6b4aa8e6678d9b9b1deddbd29ad8541b014dff9eaac851ed17119b7a4eb7a91e3751dd980f3b594500087"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AiModule-1ea7af6a33bda2c958163983b5b1e12d6d1fe492daf6b4aa8e6678d9b9b1deddbd29ad8541b014dff9eaac851ed17119b7a4eb7a91e3751dd980f3b594500087"' :
                                        'id="xs-injectables-links-module-AiModule-1ea7af6a33bda2c958163983b5b1e12d6d1fe492daf6b4aa8e6678d9b9b1deddbd29ad8541b014dff9eaac851ed17119b7a4eb7a91e3751dd980f3b594500087"' }>
                                        <li class="link">
                                            <a href="injectables/AiService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AiService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GenerateQuestions.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GenerateQuestions</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-24c15d8e055683eb7a39fb04f92db0e3d4d3e8847430c8efa98f2d8330cc58c7878686dfaabd8db9662ca54711886356cfb7d38b0ab70f9e0bae6914fdd6d398"' : 'data-bs-target="#xs-controllers-links-module-AppModule-24c15d8e055683eb7a39fb04f92db0e3d4d3e8847430c8efa98f2d8330cc58c7878686dfaabd8db9662ca54711886356cfb7d38b0ab70f9e0bae6914fdd6d398"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-24c15d8e055683eb7a39fb04f92db0e3d4d3e8847430c8efa98f2d8330cc58c7878686dfaabd8db9662ca54711886356cfb7d38b0ab70f9e0bae6914fdd6d398"' :
                                            'id="xs-controllers-links-module-AppModule-24c15d8e055683eb7a39fb04f92db0e3d4d3e8847430c8efa98f2d8330cc58c7878686dfaabd8db9662ca54711886356cfb7d38b0ab70f9e0bae6914fdd6d398"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-24c15d8e055683eb7a39fb04f92db0e3d4d3e8847430c8efa98f2d8330cc58c7878686dfaabd8db9662ca54711886356cfb7d38b0ab70f9e0bae6914fdd6d398"' : 'data-bs-target="#xs-injectables-links-module-AppModule-24c15d8e055683eb7a39fb04f92db0e3d4d3e8847430c8efa98f2d8330cc58c7878686dfaabd8db9662ca54711886356cfb7d38b0ab70f9e0bae6914fdd6d398"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-24c15d8e055683eb7a39fb04f92db0e3d4d3e8847430c8efa98f2d8330cc58c7878686dfaabd8db9662ca54711886356cfb7d38b0ab70f9e0bae6914fdd6d398"' :
                                        'id="xs-injectables-links-module-AppModule-24c15d8e055683eb7a39fb04f92db0e3d4d3e8847430c8efa98f2d8330cc58c7878686dfaabd8db9662ca54711886356cfb7d38b0ab70f9e0bae6914fdd6d398"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GoogleAuthenticationModule.html" data-type="entity-link" >GoogleAuthenticationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-GoogleAuthenticationModule-940068de6c23edd785f15e050a8e610339f0b41f15f918c1f0704b40e89e6c9dd62a6335ef5db2d68e72a9c32831c5a5b9bbcd274ae65699abc828d61935685d"' : 'data-bs-target="#xs-controllers-links-module-GoogleAuthenticationModule-940068de6c23edd785f15e050a8e610339f0b41f15f918c1f0704b40e89e6c9dd62a6335ef5db2d68e72a9c32831c5a5b9bbcd274ae65699abc828d61935685d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-GoogleAuthenticationModule-940068de6c23edd785f15e050a8e610339f0b41f15f918c1f0704b40e89e6c9dd62a6335ef5db2d68e72a9c32831c5a5b9bbcd274ae65699abc828d61935685d"' :
                                            'id="xs-controllers-links-module-GoogleAuthenticationModule-940068de6c23edd785f15e050a8e610339f0b41f15f918c1f0704b40e89e6c9dd62a6335ef5db2d68e72a9c32831c5a5b9bbcd274ae65699abc828d61935685d"' }>
                                            <li class="link">
                                                <a href="controllers/GoogleAuthenticationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GoogleAuthenticationController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-GoogleAuthenticationModule-940068de6c23edd785f15e050a8e610339f0b41f15f918c1f0704b40e89e6c9dd62a6335ef5db2d68e72a9c32831c5a5b9bbcd274ae65699abc828d61935685d"' : 'data-bs-target="#xs-injectables-links-module-GoogleAuthenticationModule-940068de6c23edd785f15e050a8e610339f0b41f15f918c1f0704b40e89e6c9dd62a6335ef5db2d68e72a9c32831c5a5b9bbcd274ae65699abc828d61935685d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GoogleAuthenticationModule-940068de6c23edd785f15e050a8e610339f0b41f15f918c1f0704b40e89e6c9dd62a6335ef5db2d68e72a9c32831c5a5b9bbcd274ae65699abc828d61935685d"' :
                                        'id="xs-injectables-links-module-GoogleAuthenticationModule-940068de6c23edd785f15e050a8e610339f0b41f15f918c1f0704b40e89e6c9dd62a6335ef5db2d68e72a9c32831c5a5b9bbcd274ae65699abc828d61935685d"' }>
                                        <li class="link">
                                            <a href="injectables/GenerateTokenProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GenerateTokenProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GoogleAuthenticationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GoogleAuthenticationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/JwtAuthModule.html" data-type="entity-link" >JwtAuthModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AiResponse.html" data-type="entity-link" >AiResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/AiSurvey.html" data-type="entity-link" >AiSurvey</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAiResponseDto.html" data-type="entity-link" >CreateAiResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAiSurveyDto.html" data-type="entity-link" >CreateAiSurveyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GoogleTokenDto.html" data-type="entity-link" >GoogleTokenDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateAiResponseDto.html" data-type="entity-link" >UpdateAiResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateAiSurveyDto.html" data-type="entity-link" >UpdateAiSurveyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AccessTokenGuard.html" data-type="entity-link" >AccessTokenGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/AuthenticationGuard.html" data-type="entity-link" >AuthenticationGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});