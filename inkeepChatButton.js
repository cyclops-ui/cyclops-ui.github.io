
    const inkeepChatButtonScript = document.createElement("script");
    inkeepChatButtonScript.type = "module";
    inkeepChatButtonScript.src = 'https://unpkg.com/@inkeep/uikit-js@0.3.18/dist/embed.js';
    inkeepChatButtonScript.integrity = 'sha384-L0dDhbtoDYVxDwHFUFUqgnSQioDzKMH4ylSDFya0pBHpbrSvvP/qybqTs2UEqpxa';
    inkeepChatButtonScript.crossOrigin = "anonymous";
    document.body.appendChild(inkeepChatButtonScript);
    inkeepChatButtonScript.addEventListener("load", function () {
      const inkeepConfigChatButton = {"baseSettings":{"apiKey":"15b950a73cca71e1fe1677f215ddc80b02cc047bf5367cdc","integrationId":"cm416x7gl00in10em2evcwklj","organizationId":"org_JOGHxQ7SCFPeGdtI","primaryBrandColor":"#FF8803"},"aiChatSettings":{"chatSubjectName":"Cyclops","botAvatarSrcUrl":"https://cyclops-ui.github.io/img/logo.png","getHelpCallToActions":[{"name":"Discord","url":"https://discord.com/invite/8ErnK3qDb3","icon":{"builtIn":"FaDiscord"}},{"name":"GitHub","url":"https://github.com/cyclops-ui/cyclops","icon":{"builtIn":"FaGithub"}}],"quickQuestions":["How to install using kubectl?","What usage metrics are tracked?","How does Cyclops implement helm chart dependencies?"]}};
      (function listenerFunction({ inkeepConfig, componentType }) {
  if (!inkeepConfig) {
    throw new Error(
      "Configuration Error: inkeepConfig is missing in the Docusaurus configuration file."
    );
  }

  let inkeepWidget = null;
  const isChatButtonType = componentType === "ChatButton";

  const renderWidgets = () => {
    const inkeepWidgetContainer = isChatButtonType ? undefined : document.getElementById("inkeepSearchBar");

    if (isChatButtonType) {
      const backToTopButtonOffset =
        inkeepConfig.chatButtonType === "RECTANGLE_SHORTCUT"
          ? "6.8rem"
          : "5.4rem";
      const backToTopButton = document.querySelector(
        ".theme-back-to-top-button"
      );
      if (backToTopButton) {
        backToTopButton.style.bottom = backToTopButtonOffset;
      }
    }

    const shouldRender = !inkeepWidget && (isChatButtonType || inkeepWidgetContainer);

    const config = {
      componentType,
      targetElement: inkeepWidgetContainer,
      colorModeSync: {
        observedElement: document.documentElement,
        isDarkModeCallback: (observedElement) =>
          observedElement.dataset.theme === "dark",
        colorModeAttribute: "data-theme",
      },
      properties: {
        ...inkeepConfig,
        baseSettings: {
          ...inkeepConfig.baseSettings,
          theme: {
            ...(inkeepConfig.baseSettings?.theme || {}),
            components: {
              SearchBarTrigger: {
                defaultProps: {
                  size: "shrink",
                },
              },
              ...(inkeepConfig.baseSettings?.theme?.components || {}),
            },
          },
        },
        modalSettings: inkeepConfig.modalSettings,
        searchSettings: inkeepConfig.searchSettings,
        aiChatSettings: inkeepConfig.aiChatSettings,
      },
    };

    if (shouldRender) {
      inkeepWidget = Inkeep().embed(config);
    }
  };

  renderWidgets();

  // not totally sure this is necessary anymore but leaving for now just in case
  const observer = new MutationObserver(() => {
    renderWidgets();
  });

  observer.observe(document.documentElement, { attributes: true });
})({
        inkeepConfig: inkeepConfigChatButton,
        componentType: 'ChatButton',
      })
    })
  