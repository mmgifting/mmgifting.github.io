    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('mainContent');
    const contentFrame = document.getElementById('contentFrame');

    function toggleSidebar() {
      sidebar.classList.toggle('hidden');
      mainContent.classList.toggle('full');
    }

    function loadPage(pageUrl) {
      contentFrame.src = pageUrl;
    }

    function resizeIframe(iframe) {
      try {
        const doc = iframe.contentDocument || iframe.contentWindow.document;
        iframe.style.height = doc.body.scrollHeight + 'px';
      } catch (e) {
        console.warn('Could not resize iframe:', e);
      }
    }

    contentFrame.addEventListener('load', function () {
      resizeIframe(this);
      setTimeout(() => resizeIframe(this), 500);
    });