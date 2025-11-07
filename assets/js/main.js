    // Charger header et footer
    async function loadHTML(id, url) {
      const resp = await fetch(url);
      const text = await resp.text();
      document.getElementById(id).innerHTML = text;
    }

    loadHTML('header-placeholder', 'header.html');
    loadHTML('footer-placeholder', 'footer.html');