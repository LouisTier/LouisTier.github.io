$(document).ready(function () {
  // add toggle functionality to abstract, award, bibtex and video buttons
  // (an open video block is closed and paused when another block opens)
  function closeVideo(entry) {
    entry
      .find(".video.hidden.open")
      .removeClass("open")
      .find("video")
      .each(function () {
        this.pause();
      });
  }
  $("a.abstract").click(function () {
    $(this).parent().parent().find(".abstract.hidden").toggleClass("open");
    $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
    closeVideo($(this).parent().parent());
  });
  $("a.award").click(function () {
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
    closeVideo($(this).parent().parent());
  });
  $("a.bibtex").click(function () {
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden").toggleClass("open");
    closeVideo($(this).parent().parent());
  });
  $("a.video").click(function () {
    var entry = $(this).parent().parent();
    entry.find(".abstract.hidden.open").toggleClass("open");
    entry.find(".award.hidden.open").toggleClass("open");
    entry.find(".bibtex.hidden.open").toggleClass("open");
    if (entry.find(".video.hidden.open").length) {
      closeVideo(entry);
    } else {
      entry.find(".video.hidden").addClass("open");
    }
  });

  // research page: each topic title folds its text open in place, like an accordion
  $(".lb-fold-title button").each(function () {
    var button = this;
    var body = document.getElementById(button.getAttribute("aria-controls"));
    if (!body) return;
    function setOpen(open) {
      button.setAttribute("aria-expanded", open ? "true" : "false");
      if (open) {
        body.removeAttribute("hidden");
      } else {
        body.setAttribute("hidden", "until-found");
      }
    }
    $(button).click(function () {
      setOpen(button.getAttribute("aria-expanded") !== "true");
    });
    // find in page (Ctrl+F) opens the hidden text by itself: keep the title in step
    body.addEventListener("beforematch", function () {
      setOpen(true);
    });
  });
  // a link to a topic (table of contents, or an #anchor in the address) opens it
  function openTopic(hash) {
    var title = hash && hash.length > 1 ? document.getElementById(hash.slice(1)) : null;
    var button = title ? $(title).filter(".lb-fold-title").find("button")[0] : null;
    if (button && button.getAttribute("aria-expanded") !== "true") button.click();
  }
  openTopic(window.location.hash);
  $(window).on("hashchange", function () {
    openTopic(window.location.hash);
  });
  $(document).on("click", 'a[href^="#"]', function () {
    openTopic(this.getAttribute("href"));
  });
  // CV: "Expand all" opens every folded entry, then "Collapse all" closes them; the next
  // action follows the button's own label, whatever rows were toggled one by one meanwhile
  $(".lb-expand-all").click(function () {
    var expand = this.getAttribute("data-expanded") !== "true";
    $("article .lb-fold-title button").each(function () {
      if ((this.getAttribute("aria-expanded") === "true") !== expand) this.click();
    });
    this.setAttribute("data-expanded", expand ? "true" : "false");
    this.textContent = expand ? "Collapse all" : "Expand all";
  });
  // talks: the venue and date line under a title opens its item too (the title stays the button)
  $(".lb-fold-meta").click(function (event) {
    if ($(event.target).closest("a").length) return; // a link in the line just follows its link
    $(this).prev(".lb-fold-title").find("button").click();
  });

  // project pages: a YouTube video shows its poster and loads the player only when played
  $(".lb-video[data-youtube] button").click(function () {
    var box = this.parentElement;
    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube-nocookie.com/embed/" + box.getAttribute("data-youtube") + "?autoplay=1&rel=0";
    // the button says "Play the X video"; the player is titled after its content, "X video"
    iframe.title = (this.getAttribute("aria-label") || "").replace(/^Play (the )?/i, "") || "YouTube video";
    iframe.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
    iframe.allowFullscreen = true;
    box.replaceChildren(iframe);
    iframe.focus();
  });

  $("a").removeClass("waves-effect waves-light");

  // bootstrap-toc
  if ($("#toc-sidebar").length) {
    // remove related publications years from the TOC
    $(".publications h2").each(function () {
      $(this).attr("data-toc-skip", "");
    });
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    $("body").scrollspy({
      target: navSelector,
    });
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href = "../css/jupyter.css";
  cssLink.rel = "stylesheet";
  cssLink.type = "text/css";

  let jupyterTheme = determineComputedTheme();

  $(".jupyter-notebook-iframe-container iframe").each(function () {
    $(this).contents().find("head").append(cssLink);

    if (jupyterTheme == "dark") {
      $(this).bind("load", function () {
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark",
        });
      });
    }
  });

  // trigger popovers
  $('[data-toggle="popover"]').popover({
    trigger: "hover",
  });
});
