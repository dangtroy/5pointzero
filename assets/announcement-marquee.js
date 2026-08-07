class AnnouncementMarquee extends HTMLElement {
  connectedCallback() {
    this.track = this.querySelector('[data-marquee-track]');
    if (!this.track) return;

    this.seed = this.track.querySelector('.announcement-marquee__set');
    if (!this.seed) return;

    this.seedHTML = this.seed.outerHTML;
    this.speed = parseFloat(this.dataset.speed) || 60;
    this.reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    this.build();

    this._onResize = this.debounce(() => this.build(), 200);
    window.addEventListener('resize', this._onResize);
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this._onResize);
  }

  debounce(fn, wait) {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn.apply(this, args), wait);
    };
  }

  markAsDuplicate(node) {
    node.setAttribute('aria-hidden', 'true');
    node.querySelectorAll('a').forEach((link) => link.setAttribute('tabindex', '-1'));
  }

  build() {
    this.track.innerHTML = this.seedHTML;
    let set = this.track.querySelector('.announcement-marquee__set');

    if (this.reduceMotion) {
      this.track.style.removeProperty('--marquee-duration');
      this.classList.add('announcement-marquee--static');
      return;
    }

    const containerWidth = this.getBoundingClientRect().width;
    let setWidth = set.getBoundingClientRect().width;
    let guard = 0;

    while (setWidth < containerWidth && guard < 20) {
      const clone = set.cloneNode(true);
      Array.from(clone.children).forEach((child) => {
        this.markAsDuplicate(child);
        set.appendChild(child);
      });
      setWidth = set.getBoundingClientRect().width;
      guard++;
    }

    const loopSet = set.cloneNode(true);
    this.markAsDuplicate(loopSet);
    this.track.appendChild(loopSet);

    const duration = setWidth / this.speed;
    this.track.style.setProperty('--marquee-set-width', `${setWidth}px`);
    this.track.style.setProperty('--marquee-duration', `${duration}s`);
  }
}

customElements.define('announcement-marquee', AnnouncementMarquee);
