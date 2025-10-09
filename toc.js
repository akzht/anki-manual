// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item affix "><a href="intro.html">介紹 Introduction</a></li><li class="chapter-item "><a href="getting-started.html"><strong aria-hidden="true">1.</strong> 新手入門 Getting Started</a></li><li class="chapter-item "><a href="getting-help.html"><strong aria-hidden="true">2.</strong> 取得協助 Getting Help</a></li><li class="chapter-item "><a href="studying.html"><strong aria-hidden="true">3.</strong> 學習 Studying</a></li><li class="chapter-item "><a href="editing.html"><strong aria-hidden="true">4.</strong> 新增/編輯 Adding/Editing</a></li><li class="chapter-item "><a href="templates/intro.html"><strong aria-hidden="true">5.</strong> 卡片模板 Card Templates</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="templates/fields.html"><strong aria-hidden="true">5.1.</strong> 欄位取代 Field Replacements</a></li><li class="chapter-item "><a href="templates/generation.html"><strong aria-hidden="true">5.2.</strong> 產生卡片 Card Generation</a></li><li class="chapter-item "><a href="templates/styling.html"><strong aria-hidden="true">5.3.</strong> 樣式與 HTML Styling &amp; HTML</a></li></ol></li><li class="chapter-item "><a href="addons.html"><strong aria-hidden="true">6.</strong> 附加元件 Add-ons</a></li><li class="chapter-item affix "><a href="faqs.html">常見問答集 FAQs</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
